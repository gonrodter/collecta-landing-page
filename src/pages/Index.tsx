import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useDocumentMetadata, useI18n } from "@/lib/i18n";

const Index = () => {
  const { t } = useI18n();

  useDocumentMetadata({
    title: t("Collecta - Save social posts and turn them into content"),
    description: t("Save posts from social media, organize them by topic, and turn them into content you can actually publish."),
    imageAlt: t("Screenshot of the Collecta landing page hero with the app preview, App Store badge, and Product Hunt badge."),
  });

  return (
    <div className="min-h-screen bg-[#fbfcf7]">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
