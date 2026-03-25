import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="border-t border-border px-5 py-10 sm:py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <NavLink to="/" className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
            collecta
          </NavLink>
          <nav className="grid w-full max-w-xs grid-cols-2 gap-4 text-center text-sm text-muted-foreground sm:w-auto sm:max-w-none sm:flex sm:items-center sm:gap-6 sm:text-left">
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
              Terms of Use
            </NavLink>
          </nav>
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground">© 2026 Collecta. Built for organized minds.</p>
      </div>
    </footer>
  );
};

export default Footer;
