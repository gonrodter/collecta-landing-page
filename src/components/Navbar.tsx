import { Link } from "react-router-dom";

import AppStoreBadge from "@/components/AppStoreBadge";
import { APP_STORE_URL, HAS_APP_STORE_URL } from "@/lib/appConfig";

const Navbar = () => {
  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : "/#download";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/90 shadow backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
          collecta
        </Link>

        <div className="flex items-center gap-4">
          <AppStoreBadge href={ctaHref} className="h-10 sm:h-11" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
