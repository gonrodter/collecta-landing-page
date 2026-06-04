import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  captureAttributionFromUrl,
  getStoredAttribution,
  trackAppStoreClick,
} from "@/lib/attribution";

const setUrl = (url: string) => {
  window.history.pushState({}, "", url);
};

describe("attribution", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-04T10:00:00.000Z"));
    vi.stubEnv("VITE_ATTRIBUTION_ENDPOINT", "https://example.supabase.co/functions/v1/track-attribution");
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("captures supported URL params in localStorage", () => {
    setUrl("/?source=tiktok&utm_campaign=launch_video_1");

    const attribution = captureAttributionFromUrl();

    expect(attribution).toMatchObject({
      source: "tiktok",
      utm_campaign: "launch_video_1",
      first_seen_at: "2026-06-04T10:00:00.000Z",
      last_seen_at: "2026-06-04T10:00:00.000Z",
    });
    expect(getStoredAttribution()?.source).toBe("tiktok");
  });

  it("uses utm_source as the canonical source when source is absent", () => {
    setUrl("/?utm_source=instagram&utm_campaign=launch_video_1");

    const attribution = captureAttributionFromUrl();

    expect(attribution).toMatchObject({
      source: "instagram",
      utm_source: "instagram",
      utm_campaign: "launch_video_1",
    });
  });

  it("preserves first_seen_at while using the latest tagged source", () => {
    setUrl("/?source=tiktok");
    captureAttributionFromUrl();

    vi.setSystemTime(new Date("2026-06-04T11:00:00.000Z"));
    setUrl("/?source=product_hunt&utm_source=product_hunt");
    const attribution = captureAttributionFromUrl();

    expect(attribution).toMatchObject({
      source: "product_hunt",
      utm_source: "product_hunt",
      first_seen_at: "2026-06-04T10:00:00.000Z",
      last_seen_at: "2026-06-04T11:00:00.000Z",
    });
  });

  it("sends App Store click attribution with sendBeacon", () => {
    setUrl("/?source=instagram&utm_medium=social");
    captureAttributionFromUrl();

    const sendBeacon = vi.fn(() => true);
    Object.defineProperty(window.navigator, "sendBeacon", {
      configurable: true,
      value: sendBeacon,
    });

    trackAppStoreClick("https://apps.apple.com/us/app/collecta-save-create-posts/id6758043604");

    expect(sendBeacon).toHaveBeenCalledTimes(1);
    const [endpoint, blob] = sendBeacon.mock.calls[0];
    expect(endpoint).toBe("https://example.supabase.co/functions/v1/track-attribution");
    expect(blob).toBeInstanceOf(Blob);
  });
});
