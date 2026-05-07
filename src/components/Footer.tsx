import { NavLink } from "@/components/NavLink";
import { Instagram } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="3.75 1 15.571 16.295"
    fill="currentColor"
    className={className}
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.17-1.095A5.19 5.19 0 0 1 14.275 1H11.53v11.016a2.7 2.7 0 0 1-.017.299 2.47 2.47 0 0 1-2.457 2.184 2.472 2.472 0 0 1 0-4.944c.32 0 .628.061.912.17V6.94A5.212 5.212 0 0 0 3.75 12.084a5.21 5.21 0 0 0 5.212 5.211 5.21 5.21 0 0 0 5.212-5.211V6.49a7.88 7.88 0 0 0 5.147 1.898V5.562Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#3f978e] px-5 py-6 text-white sm:py-7">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <NavLink to="/" className="text-lg font-bold tracking-tight transition-opacity hover:opacity-80">
            collecta
          </NavLink>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/72 md:justify-start">
            <NavLink
              to="/privacy"
              className="transition-colors hover:text-white"
              activeClassName="text-white"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="transition-colors hover:text-white"
              activeClassName="text-white"
            >
              Terms of Use
            </NavLink>
          </nav>

          <div className="flex items-center gap-4 text-sm text-white/72">
            <a
              href="https://www.instagram.com/usecollecta/"
              target="_blank"
              rel="noreferrer"
              aria-label="Collecta on Instagram"
              className="inline-flex items-center justify-center transition-colors hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@collecta.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Collecta on TikTok"
              className="inline-flex items-center justify-center transition-colors hover:text-white"
            >
              <TikTokIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <p className="text-sm text-white/72">© 2026 Collecta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
