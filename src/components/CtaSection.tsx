import { motion } from "framer-motion";

import AppStoreBadge from "@/components/AppStoreBadge";
import { APP_NAME, APP_STORE_URL } from "@/lib/appConfig";

const CtaSection = () => {
  return (
    <section id="download" className="px-5 py-32">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(circle_at_top_left,_rgba(86,171,160,0.2),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] px-6 py-10 shadow-[0_36px_110px_-60px_rgba(15,23,42,0.45)] sm:px-10 sm:py-14"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary/75">
              App Store Release
            </p>

            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              {APP_NAME} is live.
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Download the app, capture what you want to keep, and turn saved inspiration into ready-to-publish posts.
            </p>

            <div className="flex justify-center">
              <AppStoreBadge href={APP_STORE_URL || undefined} className="h-[52px] sm:h-[58px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
