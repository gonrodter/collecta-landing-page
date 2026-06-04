import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/appConfig";
import { useDocumentMetadata, useI18n } from "@/lib/i18n";

const pageTitle = "Collecta - Turn saved inspiration into content plans";
const pageDescription =
  "Collecta helps content creators turn saved posts, links and rough ideas into hooks, scripts, checklists and content plans so they can publish faster.";

const Index = () => {
  const { t } = useI18n();

  useDocumentMetadata({
    title: t(pageTitle),
    description: t(pageDescription),
    imageAlt: t("Collecta mobile app showing a content plan generated from saved inspiration."),
    canonical: SITE_URL,
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
