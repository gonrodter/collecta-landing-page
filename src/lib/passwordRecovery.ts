const RESET_PASSWORD_PATH = "/reset-password";

export type ConsumedPasswordRecovery =
  | {
      kind: "session";
      accessToken: string;
      refreshToken: string;
    }
  | {
      kind: "error";
      message: string;
    };

const getHashParams = (hash: string) => {
  const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;

  try {
    return new URLSearchParams(normalizedHash);
  } catch {
    return null;
  }
};

const replaceUrlWithoutHash = () => {
  if (typeof window === "undefined") return;

  window.history.replaceState(window.history.state, "", RESET_PASSWORD_PATH);
};

export const consumePasswordRecoveryHash = (): ConsumedPasswordRecovery | null => {
  if (typeof window === "undefined" || !window.location.hash) {
    return null;
  }

  const params = getHashParams(window.location.hash);

  if (params?.get("type") !== "recovery") {
    return null;
  }

  const accessToken = params.get("access_token")?.trim();
  const refreshToken = params.get("refresh_token")?.trim();
  const errorCode = params.get("error_code") || params.get("error");

  replaceUrlWithoutHash();

  if (errorCode) {
    return {
      kind: "error",
      message: "This password recovery link is invalid or has expired. Please request a new reset link.",
    };
  }

  if (!accessToken || !refreshToken) {
    return {
      kind: "error",
      message: "This password recovery link is missing required session information. Please request a new reset link.",
    };
  }

  return {
    kind: "session",
    accessToken,
    refreshToken,
  };
};

export const initialPasswordRecovery = consumePasswordRecoveryHash();
