import { motion } from "framer-motion";

import AppStoreBadge from "@/components/AppStoreBadge";
import heroMockup from "@/assets/hero-image.webp";
import { APP_STORE_URL, HAS_APP_STORE_URL } from "@/lib/appConfig";

const HeroSection = () => {
  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : "#download";

  return (
    <section className="overflow-hidden bg-[#fbfcf7] px-5 pb-14 pt-24 text-left text-[#111312] sm:pb-20 sm:pt-28">
      <div className="container mx-auto max-w-7xl">
        <div className="grid justify-center items-center gap-10 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[620px]"
          >
            <div className="hidden sm:inline-flex lg:hidden xl:inline-flex items-center rounded-full border border-[#56ABA0] bg-[#56ABA0] px-4 py-2 text-sm font-semibold text-[#fbfcf7] shadow-[0_12px_28px_-24px_rgba(17,19,18,0.5)]">
              Built for creators who save more ideas than they publish
            </div>

            <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.04] tracking-normal sm:text-[3.15rem] xl:text-[3.75rem]">
              Turn saved inspiration into posts you can actually publish
            </h1>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-[#5f6360]">
              Collecta helps creators transform saved posts, links and rough ideas into clear content plans, hooks, scripts and publishing checklists, so you never have to start from a blank page.
            </p>

            <div className="mt-7 flex justify-start">
              <AppStoreBadge href={ctaHref} className="h-10 sm:h-12 lg:h-16" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            {/* TODO: Replace with the final rectangular hero mockup showing saved inspiration -> Post Generator -> publish-ready output. */}
            <img
              src={heroMockup}
              alt="Collecta app mockup showing saved inspiration turning into publish-ready content."
              className="w-[118%] max-w-none md:max-w-[700px] lg:max-w-none -translate-x-[7%] drop-shadow-[0_28px_44px_rgba(17,19,18,0.18)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
