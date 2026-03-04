import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToWaitlist = () => {
    const ctaSection = document.querySelector("section:last-of-type");
    ctaSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/90 shadow backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold tracking-tight text-foreground">collecta</span>

        <div className="flex items-center gap-4">
          <Button
            onClick={scrollToWaitlist}
            variant="outline"
            className="h-10 rounded-xl border-2 border-foreground px-5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
