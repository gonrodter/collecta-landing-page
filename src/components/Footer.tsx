import { Instagram } from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/lib/i18n";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="3.75 1 15.571 16.295" fill="currentColor" className={className}>
    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.17-1.095A5.19 5.19 0 0 1 14.275 1H11.53v11.016a2.7 2.7 0 0 1-.017.299 2.47 2.47 0 0 1-2.457 2.184 2.472 2.472 0 0 1 0-4.944c.32 0 .628.061.912.17V6.94A5.212 5.212 0 0 0 3.75 12.084a5.21 5.21 0 0 0 5.212 5.211 5.21 5.21 0 0 0 5.212-5.211V6.49a7.88 7.88 0 0 0 5.147 1.898V5.562Z" />
  </svg>
);

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#fbfcf7] px-5 py-8 text-[#111312]">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-[#e3e6df] pt-8 text-center md:flex-row md:text-left">
        <NavLink to="/" className="text-xl font-extrabold tracking-normal transition-all duration-300 hover:-translate-y-0.5 hover:opacity-70">
          collecta
        </NavLink>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#70756f]">
          <NavLink to="/privacy" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#111312]" activeClassName="text-[#111312]">
            {t("Privacy Policy")}
          </NavLink>
          <NavLink to="/terms" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#111312]" activeClassName="text-[#111312]">
            {t("Terms of Use")}
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 text-[#70756f]">
          <a
            href="https://www.instagram.com/usecollecta/"
            target="_blank"
            rel="noreferrer"
            aria-label={t("Collecta on Instagram")}
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#111312]"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@collecta.app"
            target="_blank"
            rel="noreferrer"
            aria-label={t("Collecta on TikTok")}
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#111312]"
          >
            <TikTokIcon className="h-[18px] w-[18px]" />
          </a>
        </div>

        <p className="text-sm text-[#70756f]">{t("© 2026 Collecta. All rights reserved.")}</p>
      </div>
    </footer>
  );
};

export default Footer;
