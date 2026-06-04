import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AppStoreBadge from "@/components/AppStoreBadge";
import AppleLogo from "@/components/AppleLogo";
import { APP_STORE_URL, HAS_APP_STORE_URL } from "@/lib/appConfig";
import { trackAppStoreClick } from "@/lib/attribution";
import { useI18n } from "@/lib/i18n";

const Navbar = () => {
  const { t } = useI18n();
  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : "/#download";
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 bg-[#fbfcf7]/88 px-5 backdrop-blur-xl transition-shadow ${hasScrolled ? "shadow-[0_10px_34px_-30px_rgba(17,19,18,0.65)]" : ""}`}>
      <div className="container mx-auto flex max-w-7xl items-center justify-between py-4">
        <a href="/#" className="text-2xl font-extrabold tracking-normal text-[#111312] transition-opacity hover:opacity-70">
          collecta
        </a>

        <nav className="hidden items-center gap-8 text-sm font-extrabold text-[#111312] lg:flex">
          <a href="/#who-for" className="transition-opacity hover:opacity-65">
            {t("Who it is for")}
          </a>
          <a href="/#include" className="transition-opacity hover:opacity-65">
            {t("Features")}
          </a>
          <a href="/#why" className="transition-opacity hover:opacity-65">
            {t("Why Collecta")}
          </a>
          <a href="/#pipeline" className="transition-opacity hover:opacity-65">
            {t("How it works")}
          </a>
          <a href="/#faq" className="transition-opacity hover:opacity-65">
            {t("FAQ")}
          </a>
        </nav>

        <div className="hidden sm:block">
          <AppStoreBadge href={ctaHref} className="h-10" />
        </div>

        <a
          href={ctaHref}
          target={HAS_APP_STORE_URL ? "_blank" : undefined}
          rel={HAS_APP_STORE_URL ? "noreferrer" : undefined}
          onClick={() => {
            if (HAS_APP_STORE_URL) trackAppStoreClick(ctaHref);
          }}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#111312] px-3.5 py-2 text-xs font-extrabold leading-none text-white sm:hidden"
        >
          <AppleLogo className="h-4 w-4 shrink-0" />
          <span className="translate-y-[0.5px]">{t("Get app")}</span>
        </a>

      </div>
    </header>
  );
};

export default Navbar;
