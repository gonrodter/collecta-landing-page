import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
            collecta
          </NavLink>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <NavLink
              to="/privacy"
              className="transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              Terms of Service
            </NavLink>
          </nav>
        </div>

        <p className="text-center text-xs text-muted-foreground">© 2026 Collecta. Built for organized minds.</p>
      </div>
    </footer>
  );
};

export default Footer;
