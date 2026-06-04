const ATTRIBUTION_STORAGE_KEY = "collecta_attribution";

const ATTRIBUTION_PARAMS = [
  "source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];

export type StoredAttribution = Record<AttributionParam, string | null> & {
  landing_page_url: string;
  referrer: string;
  first_seen_at: string;
  last_seen_at: string;
};

type AppStoreClickEvent = {
  event_type: "app_store_click";
  attribution: StoredAttribution | null;
  current_page_url: string;
  referrer: string;
  user_agent: string;
  timestamp: string;
  metadata: {
    destination_url?: string;
  };
};

const safeWindow = () => (typeof window === "undefined" ? null : window);

const limitString = (value: string, maxLength = 2048) =>
  value.length > maxLength ? value.slice(0, maxLength) : value;

const getParamValue = (params: URLSearchParams, key: AttributionParam) => {
  const value = params.get(key)?.trim();
  return value ? limitString(value, 256) : null;
};

const isStoredAttribution = (value: unknown): value is StoredAttribution => {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<StoredAttribution>;
  return (
    typeof candidate.landing_page_url === "string" &&
    typeof candidate.referrer === "string" &&
    typeof candidate.first_seen_at === "string" &&
    typeof candidate.last_seen_at === "string"
  );
};

export const getStoredAttribution = (): StoredAttribution | null => {
  const win = safeWindow();
  if (!win) return null;

  try {
    const stored = win.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    return isStoredAttribution(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const captureAttributionFromUrl = () => {
  const win = safeWindow();
  if (!win) return null;

  const url = new URL(win.location.href);
  const attributionParams = ATTRIBUTION_PARAMS.reduce(
    (acc, key) => ({ ...acc, [key]: getParamValue(url.searchParams, key) }),
    {} as Record<AttributionParam, string | null>,
  );
  attributionParams.source = attributionParams.source ?? attributionParams.utm_source;

  const hasAttributionParam = ATTRIBUTION_PARAMS.some((key) => attributionParams[key]);
  if (!hasAttributionParam) return getStoredAttribution();

  const now = new Date().toISOString();
  const existing = getStoredAttribution();

  const attribution: StoredAttribution = {
    ...attributionParams,
    // Preserve first_seen_at so cohort age remains stable, but use latest
    // campaign/source values because the click is closest to conversion.
    first_seen_at: existing?.first_seen_at ?? now,
    last_seen_at: now,
    landing_page_url: limitString(win.location.href),
    referrer: limitString(win.document.referrer || ""),
  };

  try {
    win.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    return attribution;
  }

  return attribution;
};

const getAttributionEndpoint = () => {
  const explicitEndpoint = import.meta.env.VITE_ATTRIBUTION_ENDPOINT;
  if (explicitEndpoint) return explicitEndpoint;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  return supabaseUrl ? `${supabaseUrl}/functions/v1/track-attribution` : "";
};

export const trackAppStoreClick = (destinationUrl?: string) => {
  const win = safeWindow();
  if (!win) return;

  const endpoint = getAttributionEndpoint();
  if (!endpoint) return;

  const event: AppStoreClickEvent = {
    event_type: "app_store_click",
    attribution: getStoredAttribution(),
    current_page_url: limitString(win.location.href),
    referrer: limitString(win.document.referrer || ""),
    user_agent: limitString(win.navigator.userAgent || "", 1024),
    timestamp: new Date().toISOString(),
    metadata: {
      destination_url: destinationUrl,
    },
  };

  const body = JSON.stringify(event);

  if (win.navigator.sendBeacon) {
    const sent = win.navigator.sendBeacon(
      endpoint,
      new Blob([body], { type: "text/plain;charset=UTF-8" }),
    );
    if (sent) return;
  }

  void fetch(endpoint, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    keepalive: true,
  }).catch(() => {
    // Attribution should never block App Store navigation.
  });
};
