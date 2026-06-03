import { beforeEach, describe, expect, it } from "vitest";

import { consumePasswordRecoveryHash } from "@/lib/passwordRecovery";

describe("consumePasswordRecoveryHash", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("returns null for non-recovery hashes", () => {
    window.history.replaceState(null, "", "/#section");

    expect(consumePasswordRecoveryHash()).toBeNull();
    expect(window.location.hash).toBe("#section");
  });

  it("consumes recovery tokens and removes the hash from the URL", () => {
    window.history.replaceState(
      null,
      "",
      "/#access_token=access123&refresh_token=refresh456&type=recovery&token_type=bearer",
    );

    expect(consumePasswordRecoveryHash()).toEqual({
      kind: "session",
      accessToken: "access123",
      refreshToken: "refresh456",
    });
    expect(window.location.pathname).toBe("/reset-password");
    expect(window.location.hash).toBe("");
  });

  it("returns an error when recovery tokens are missing", () => {
    window.history.replaceState(null, "", "/#type=recovery&error_code=otp_expired");

    expect(consumePasswordRecoveryHash()).toEqual({
      kind: "error",
      message: "This password recovery link is invalid or has expired. Please request a new reset link.",
    });
    expect(window.location.pathname).toBe("/reset-password");
    expect(window.location.hash).toBe("");
  });
});
