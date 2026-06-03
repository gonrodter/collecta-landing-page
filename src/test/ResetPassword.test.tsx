import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { I18nProvider } from "@/lib/i18n";
import ResetPassword from "@/pages/ResetPassword";

const { setSession, updateUser } = vi.hoisted(() => ({
  setSession: vi.fn(),
  updateUser: vi.fn(),
}));
let container: HTMLDivElement;
let root: Root;

vi.mock("@/lib/supabaseClient", () => ({
  supabase: {
    auth: {
      setSession,
      updateUser,
    },
  },
}));

const waitUntil = async (assertion: () => void) => {
  const timeout = Date.now() + 1000;
  let lastError: unknown;

  while (Date.now() < timeout) {
    try {
      assertion();
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => window.setTimeout(resolve, 20));
    }
  }

  throw lastError;
};

const getInput = (id: string) => container.querySelector<HTMLInputElement>(`#${id}`);

const changeInput = async (input: HTMLInputElement, value: string) => {
  await act(async () => {
    const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;

    valueSetter?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
};

const clickButton = async (label: string) => {
  const button = Array.from(container.querySelectorAll("button")).find((element) => element.textContent?.includes(label));

  if (!button) {
    throw new Error(`Button not found: ${label}`);
  }

  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
};

const renderResetPassword = async () => {
  await act(async () => {
    root.render(
      <I18nProvider>
        <MemoryRouter>
          <ResetPassword
            recovery={{
              kind: "session",
              accessToken: "access-token",
              refreshToken: "refresh-token",
            }}
          />
        </MemoryRouter>
      </I18nProvider>,
    );
  });
};

describe("ResetPassword", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    setSession.mockReset();
    updateUser.mockReset();
    setSession.mockResolvedValue({ error: null });
    updateUser.mockResolvedValue({ error: null });
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("sets the recovery session and updates the password", async () => {
    await renderResetPassword();

    await waitUntil(() => {
      expect(getInput("new-password")).toBeInTheDocument();
    });
    expect(setSession).toHaveBeenCalledWith({
      access_token: "access-token",
      refresh_token: "refresh-token",
    });

    await changeInput(getInput("new-password")!, "secret1");
    await changeInput(getInput("confirm-password")!, "secret1");
    await clickButton("Update password");

    await waitUntil(() => {
      expect(updateUser).toHaveBeenCalledWith({ password: "secret1" });
      expect(container.textContent).toContain("Password updated");
    });
  });

  it("shows validation errors before submitting", async () => {
    await renderResetPassword();

    await waitUntil(() => {
      expect(getInput("new-password")).toBeInTheDocument();
    });

    await changeInput(getInput("new-password")!, "secret1");
    await changeInput(getInput("confirm-password")!, "secret2");

    const submitButton = Array.from(container.querySelectorAll("button")).find((button) =>
      button.textContent?.includes("Update password"),
    ) as HTMLButtonElement;

    expect(container.textContent).toContain("Passwords do not match.");
    expect(submitButton).toBeDisabled();
    expect(updateUser).not.toHaveBeenCalled();
  });
});
