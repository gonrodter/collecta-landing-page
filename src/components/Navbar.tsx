import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/90 shadow backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
          collecta
        </Link>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-xl border-2 border-foreground px-5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <a href="/#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
