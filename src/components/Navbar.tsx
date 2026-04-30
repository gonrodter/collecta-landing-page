import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AppleLogo from "@/components/AppleLogo";
import { APP_STORE_URL, HAS_APP_STORE_URL } from "@/lib/appConfig";

const Navbar = () => {
  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : "/#download";
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-[#56ABA0]/95 text-white backdrop-blur-md transition-colors ${
        hasScrolled ? "border-b border-white/25" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="text-base font-bold tracking-tight transition-opacity hover:opacity-80 sm:text-lg">
          collecta
        </Link>

        <motion.a
          href={ctaHref}
          target={HAS_APP_STORE_URL ? "_blank" : undefined}
          rel={HAS_APP_STORE_URL ? "noreferrer" : undefined}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ y: 0, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 440, damping: 24 }}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111312] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.65)] transition-shadow duration-200 hover:bg-white hover:shadow-[0_18px_32px_-16px_rgba(0,0,0,0.74)] sm:text-sm"
        >
          <AppleLogo className="h-4 w-4" />
          Download
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
