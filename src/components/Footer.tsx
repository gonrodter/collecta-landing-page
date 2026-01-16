import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-foreground tracking-tight">collecta</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © 2026 Collecta. Built for organized minds.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
