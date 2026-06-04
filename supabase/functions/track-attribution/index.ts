import { createClient } from "npm:@supabase/supabase-js@2";

type AttributionPayload = {
  event_type?: string;
  attribution?: {
    source?: string | null;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    utm_content?: string | null;
    utm_term?: string | null;
    landing_page_url?: string | null;
    referrer?: string | null;
    first_seen_at?: string | null;
    last_seen_at?: string | null;
  } | null;
  current_page_url?: string | null;
  referrer?: string | null;
  user_agent?: string | null;
  timestamp?: string | null;
  metadata?: Record<string, unknown> | null;
};

const SUPPORTED_EVENT_TYPES = new Set(["app_store_click", "registration_screen_open"]);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });

const limitString = (value: unknown, maxLength = 2048) => {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
};

const normalizeMetadata = (payload: AttributionPayload) => ({
  ...(payload.metadata && typeof payload.metadata === "object" ? payload.metadata : {}),
  attribution_first_seen_at: limitString(payload.attribution?.first_seen_at, 64),
  attribution_last_seen_at: limitString(payload.attribution?.last_seen_at, 64),
  client_timestamp: limitString(payload.timestamp, 64),
});

const getRequestIp = (req: Request) => {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || null;

  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("fly-client-ip")
  );
};

const hashIp = async (ip: string | null) => {
  const salt = Deno.env.get("ATTRIBUTION_IP_SALT");
  if (!ip || !salt) return null;

  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: "Supabase service configuration is missing" }, 500);
  }

  let payload: AttributionPayload;

  try {
    payload = JSON.parse(await req.text()) as AttributionPayload;
  } catch {
    return jsonResponse({ error: "Invalid JSON payload" }, 400);
  }

  if (!payload.event_type || !SUPPORTED_EVENT_TYPES.has(payload.event_type)) {
    return jsonResponse({ error: "Unsupported event_type" }, 400);
  }

  const attribution = payload.attribution ?? null;
  const ipHash = await hashIp(getRequestIp(req));
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("attribution_events").insert({
    event_type: payload.event_type,
    source: limitString(attribution?.source, 256),
    utm_source: limitString(attribution?.utm_source, 256),
    utm_medium: limitString(attribution?.utm_medium, 256),
    utm_campaign: limitString(attribution?.utm_campaign, 256),
    utm_content: limitString(attribution?.utm_content, 256),
    utm_term: limitString(attribution?.utm_term, 256),
    landing_page_url: limitString(attribution?.landing_page_url),
    current_page_url: limitString(payload.current_page_url),
    referrer: limitString(payload.referrer || attribution?.referrer),
    user_agent: limitString(req.headers.get("user-agent") || payload.user_agent, 1024),
    ip_hash: ipHash,
    metadata: normalizeMetadata(payload),
  });

  if (error) {
    console.error("Failed to insert attribution event", error);
    return jsonResponse({ error: "Failed to insert attribution event" }, 500);
  }

  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
});
