const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold tracking-tight text-foreground">collecta</span>
        </div>

        <p className="text-center text-xs text-muted-foreground">© 2026 Collecta. Built for organized minds.</p>
      </div>
    </footer>
  );
};

export default Footer;
