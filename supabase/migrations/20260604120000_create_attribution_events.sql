create extension if not exists pgcrypto;

create table if not exists public.attribution_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  landing_page_url text,
  current_page_url text,
  referrer text,
  user_agent text,
  ip_hash text,
  created_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);

comment on table public.attribution_events is
  'First-party marketing attribution events. IP addresses are hashed server-side with a private salt before storage.';
comment on column public.attribution_events.ip_hash is
  'SHA-256 hash of the request IP with ATTRIBUTION_IP_SALT. Raw IP should not be stored.';

alter table public.attribution_events enable row level security;

revoke all on public.attribution_events from anon, authenticated;
grant insert, select on public.attribution_events to service_role;

create index if not exists attribution_events_created_at_idx
  on public.attribution_events (created_at desc);

create index if not exists attribution_events_event_type_created_at_idx
  on public.attribution_events (event_type, created_at desc);

create index if not exists attribution_events_source_created_at_idx
  on public.attribution_events (source, created_at desc);

create index if not exists attribution_events_ip_hash_created_at_idx
  on public.attribution_events (ip_hash, created_at desc)
  where ip_hash is not null;
