import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToWaitlist = () => {
    const ctaSection = document.querySelector('section:last-of-type');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
        <span className="text-xl font-bold text-foreground tracking-tight">
          collecta
        </span>
        
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          
          <Button
            onClick={scrollToWaitlist}
            variant="outline"
            className="h-10 px-5 text-sm font-medium border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-xl transition-colors"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
