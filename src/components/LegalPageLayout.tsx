import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useDocumentMetadata } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  pageTitle?: string;
  className?: string;
}

const LegalPageLayout = ({ title, subtitle, children, pageTitle, className }: LegalPageLayoutProps) => {
  useDocumentMetadata({ title: pageTitle ?? `${title} | Collecta` });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-5 pb-24 pt-32 sm:pt-36">
        <div className={cn("container mx-auto max-w-3xl", className)}>
          <div className="mb-12 space-y-4 border-b border-border pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
            <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          </div>

          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
