import { Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-5xl">
        <span className="text-xl font-bold text-foreground">Collecta</span>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="w-4 h-4" />
          <span className="hidden sm:inline">Twitter / X</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
