import { motion } from "framer-motion";

import AppleLogo from "@/components/AppleLogo";
import { APP_STORE_URL } from "@/lib/appConfig";

const CtaSection = () => {
  return (
    <section id="download" className="flex min-h-[48vh] items-center justify-center bg-[#56ABA0] px-5 py-14 text-center text-white">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-3xl flex-col items-center"
      >
        <h2 className="text-[2.8rem] font-extrabold uppercase leading-[0.9] tracking-normal sm:text-[4rem] lg:text-[5rem]">
          Start
        </h2>

        <p className="mt-2 text-xl font-bold uppercase leading-tight tracking-normal sm:text-2xl lg:text-3xl">
          turning saves into content
        </p>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/84 sm:text-lg">
          Collect what inspires you, organize it, and create from it when you are ready.
        </p>

        <motion.a
          href={APP_STORE_URL || undefined}
          whileHover={{ y: -5, scale: 1.04 }}
          whileTap={{ y: 0, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#111312] shadow-[0_18px_34px_-18px_rgba(0,0,0,0.66)] transition-shadow duration-200 hover:bg-white hover:shadow-[0_28px_46px_-22px_rgba(0,0,0,0.76)]"
        >
          <AppleLogo className="h-5 w-5" />
          Download on the App Store
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CtaSection;
