import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APP_NAME } from "@/lib/appConfig";
import { useDocumentMetadata, useI18n } from "@/lib/i18n";
import { type ConsumedPasswordRecovery } from "@/lib/passwordRecovery";
import { supabase } from "@/lib/supabaseClient";

type SessionStatus = "checking" | "ready" | "error";
type SubmitStatus = "idle" | "loading" | "success";

const LOGIN_PATH = "/";

const getPasswordValidationError = (password: string, confirmPassword: string) => {
  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return "";
};

const ResetPassword = ({ recovery }: { recovery: ConsumedPasswordRecovery | null }) => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const initializedRef = useRef(false);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>(recovery?.kind === "session" ? "checking" : "error");
  const [sessionError, setSessionError] = useState(
    recovery?.kind === "error"
      ? recovery.message
      : "This password recovery link is invalid or has expired. Please request a new reset link.",
  );
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  useDocumentMetadata({
    title: t("Reset password | Collecta"),
    description: t("Choose a new password for your Collecta account."),
  });

  useEffect(() => {
    if (initializedRef.current || recovery?.kind !== "session") return;

    initializedRef.current = true;
    let isMounted = true;

    const setRecoverySession = async () => {
      const { error } = await supabase.auth.setSession({
        access_token: recovery.accessToken,
        refresh_token: recovery.refreshToken,
      });

      if (!isMounted) return;

      if (error) {
        setSessionError(t("This password recovery link is invalid or has expired. Please request a new reset link."));
        setSessionStatus("error");
        return;
      }

      setSessionStatus("ready");
    };

    void setRecoverySession();

    return () => {
      isMounted = false;
    };
  }, [recovery, t]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = getPasswordValidationError(newPassword, confirmPassword);

    if (validationError) {
      setFormError(t(validationError));
      return;
    }

    setFormError("");
    setSubmitStatus("loading");

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setSubmitStatus("idle");
      setFormError(error.message || t("We could not update your password. Please try again."));
      return;
    }

    setSubmitStatus("success");
    window.setTimeout(() => navigate(LOGIN_PATH, { replace: true }), 1400);
  };

  const isSubmitting = submitStatus === "loading";
  const validationError = newPassword || confirmPassword ? getPasswordValidationError(newPassword, confirmPassword) : "";
  const helperText = formError || (validationError ? t(validationError) : "");

  return (
    <div className="min-h-screen bg-[#fbfcf7] px-5 py-8 text-[#111312]">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-center">
        <Link to="/" className="mb-8 text-2xl font-extrabold tracking-normal transition-opacity hover:opacity-70">
          collecta
        </Link>

        <section className="rounded-lg border border-[#dfe5dc] bg-white p-6 shadow-[0_24px_70px_-54px_rgba(17,19,18,0.85)] sm:p-8">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-[#078d80]">{APP_NAME}</p>
          <h1 className="text-3xl font-extrabold tracking-normal">{t("Reset password")}</h1>
          <p className="mt-3 text-sm leading-6 text-[#5f6360]">{t("Choose a new password for your Collecta account.")}</p>

          {sessionStatus === "checking" ? (
            <div className="mt-8 flex items-center gap-3 rounded-lg border border-[#dfe5dc] bg-[#fbfcf7] p-4 text-sm font-semibold text-[#5f6360]">
              <Loader2 className="h-4 w-4 animate-spin text-[#078d80]" aria-hidden="true" />
              {t("Checking your recovery link...")}
            </div>
          ) : null}

          {sessionStatus === "error" ? (
            <div className="mt-8 space-y-5">
              <Alert variant="destructive" className="rounded-lg bg-red-50">
                <AlertCircle className="h-4 w-4" aria-hidden="true" />
                <AlertTitle>{t("Recovery link unavailable")}</AlertTitle>
                <AlertDescription>{t(sessionError)}</AlertDescription>
              </Alert>

              <Button asChild className="w-full bg-[#111312] font-extrabold text-white hover:bg-[#111312]/90">
                <Link to={LOGIN_PATH}>{t("Back to login")}</Link>
              </Button>
            </div>
          ) : null}

          {sessionStatus === "ready" ? (
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {submitStatus === "success" ? (
                <Alert className="rounded-lg border-[#56ABA0] bg-[#ecf8f6] text-[#105b53]">
                  <CheckCircle2 className="h-4 w-4 text-[#078d80]" aria-hidden="true" />
                  <AlertTitle>{t("Password updated")}</AlertTitle>
                  <AlertDescription>{t("Redirecting you back to Collecta...")}</AlertDescription>
                </Alert>
              ) : null}

              <div className="space-y-2">
                <Label htmlFor="new-password">{t("New password")}</Label>
                <Input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={6}
                  value={newPassword}
                  disabled={isSubmitting || submitStatus === "success"}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">{t("Confirm password")}</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={6}
                  value={confirmPassword}
                  disabled={isSubmitting || submitStatus === "success"}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
              </div>

              {helperText ? <p className="text-sm font-semibold text-destructive">{helperText}</p> : null}

              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success" || Boolean(validationError)}
                className="h-11 w-full bg-[#111312] font-extrabold text-white hover:bg-[#111312]/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    {t("Updating...")}
                  </>
                ) : (
                  t("Update password")
                )}
              </Button>
            </form>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default ResetPassword;
