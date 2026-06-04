import { Instagram } from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/lib/i18n";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="3.75 1 15.571 16.295" fill="currentColor" className={className}>
    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.17-1.095A5.19 5.19 0 0 1 14.275 1H11.53v11.016a2.7 2.7 0 0 1-.017.299 2.47 2.47 0 0 1-2.457 2.184 2.472 2.472 0 0 1 0-4.944c.32 0 .628.061.912.17V6.94A5.212 5.212 0 0 0 3.75 12.084a5.21 5.21 0 0 0 5.212 5.211 5.21 5.21 0 0 0 5.212-5.211V6.49a7.88 7.88 0 0 0 5.147 1.898V5.562Z" />
  </svg>
);

const articleFooterLinks = [
  {
    slug: "content-planning-app",
    label: { en: "Planning app", es: "Planificación" },
  },
  {
    slug: "saved-posts-to-content-plans",
    label: { en: "Saved posts", es: "Posts guardados" },
  },
  {
    slug: "content-ideas-app",
    label: { en: "Content ideas", es: "Ideas de contenido" },
  },
  {
    slug: "instagram-saved-posts-content",
    label: { en: "Instagram saves", es: "Guardados de Instagram" },
  },
  {
    slug: "content-workflow-for-creators",
    label: { en: "Creator workflow", es: "Flujo de creador" },
  },
];

const Footer = () => {
  const { language, t } = useI18n();

  return (
    <footer className="bg-[#fbfcf7] px-4 pb-5 pt-10 text-[#fbfcf7] sm:px-5 sm:pt-14">
      <div className="container mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#111312] px-5 pb-0 pt-7 shadow-[0_28px_80px_-60px_rgba(17,19,18,0.75)] sm:px-8 sm:pt-9 lg:px-10">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[0.95fr_1fr_0.75fr_0.75fr]">
          <div>
            <NavLink to="/" className="inline-flex text-2xl font-extrabold tracking-normal transition-all duration-300 hover:-translate-y-0.5 hover:opacity-75">
              collecta
            </NavLink>
            <p className="mt-4 max-w-[220px] text-sm font-medium leading-6 text-[#c7cdc8]">
              {language === "es"
                ? "Convierte inspiración guardada en planes de contenido que sí puedes publicar."
                : "Turn saved inspiration into content plans you can actually publish."}
            </p>
          </div>

          <nav aria-label="Articles">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#a9e0d8]">
              {language === "es" ? "Artículos" : "Articles"}
            </p>
            <ul className="mt-4 grid gap-3 text-sm font-extrabold uppercase leading-5 tracking-normal text-white">
              {articleFooterLinks.map((link) => (
                <li key={link.slug}>
                  <NavLink
                    to={`/${link.slug}`}
                    className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:text-[#a9e0d8]"
                    activeClassName="text-[#a9e0d8]"
                  >
                    {link.label[language]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#a9e0d8]">Legal</p>
            <ul className="mt-4 grid gap-3 text-sm font-extrabold uppercase leading-5 tracking-normal text-white">
              <li>
                <NavLink to="/privacy" className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:text-[#a9e0d8]" activeClassName="text-[#a9e0d8]">
                  {t("Privacy Policy")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:text-[#a9e0d8]" activeClassName="text-[#a9e0d8]">
                  {t("Terms of Use")}
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="lg:text-right">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#a9e0d8]">
              {language === "es" ? "Redes" : "Social"}
            </p>
            <div className="mt-4 flex items-center gap-4 text-white lg:justify-end">
              <a
                href="https://www.instagram.com/usecollecta/"
                target="_blank"
                rel="noreferrer"
                aria-label={t("Collecta on Instagram")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a9e0d8] hover:text-[#111312]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@collecta.app"
                target="_blank"
                rel="noreferrer"
                aria-label={t("Collecta on TikTok")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a9e0d8] hover:text-[#111312]"
              >
                <TikTokIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-10 min-h-[76px] sm:mt-12 sm:min-h-[126px] md:min-h-[150px] lg:min-h-[184px] xl:min-h-[190px]">
          <p className="absolute left-0 top-0 z-10 text-xs font-bold text-[#c7cdc8] sm:text-sm">
            {t("© 2026 Collecta. All rights reserved.")}
          </p>
          <p
            aria-hidden="true"
            className="absolute -bottom-[0.18em] left-1/2 w-full -translate-x-1/2 select-none text-center text-[3.2rem] font-black uppercase leading-none tracking-normal text-white min-[390px]:text-[3.7rem] sm:text-[7rem] md:text-[8.7rem] lg:text-[11.5rem] xl:text-[14rem] 2xl:text-[15rem]"
          >
            collecta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
