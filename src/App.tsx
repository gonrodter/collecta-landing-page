import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AttributionCapture from "@/components/AttributionCapture";
import { I18nProvider } from "@/lib/i18n";
import posthog, { isPostHogEnabled } from "@/lib/posthog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import ResetPassword from "./pages/ResetPassword";
import SeoPage, { seoPages } from "./pages/SeoPage";
import Terms from "./pages/Terms";
import { initialPasswordRecovery } from "./lib/passwordRecovery";

const queryClient = new QueryClient();

const PostHogPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (!isPostHogEnabled) return;

    posthog.capture("$pageview", {
      $current_url: window.location.href,
      path: location.pathname,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <I18nProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AttributionCapture />
          <ScrollToTop />
          <PostHogPageView />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reset-password" element={<ResetPassword recovery={initialPasswordRecovery} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {seoPages.map((page) => (
              <Route key={page.slug} path={`/${page.slug}`} element={<SeoPage page={page} />} />
            ))}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </I18nProvider>
);

export default App;
