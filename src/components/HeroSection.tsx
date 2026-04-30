import { motion } from "framer-motion";

import AppleLogo from "@/components/AppleLogo";
import heroPoster from "@/assets/hero-post-generator-mockup.png";
import { APP_STORE_URL } from "@/lib/appConfig";

const FIRST_MOCKUP_VIDEO_WEBM = "/assets/collecta-first-mockup.webm";
const FIRST_MOCKUP_VIDEO_MP4 = "/assets/collecta-first-mockup.mp4";

const HeroSection = () => {
  return (
    <section className="flex min-h-[86vh] flex-col items-center justify-start overflow-x-clip bg-[#56ABA0] px-5 pb-8 pt-16 text-center text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-[3.2rem] font-extrabold uppercase leading-[0.88] tracking-normal sm:text-[4.6rem] lg:text-[6rem]"
        >
          Save
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="mt-2 text-xl font-bold uppercase leading-tight tracking-normal sm:text-2xl lg:text-3xl"
        >
          Organize it. Turn it into content.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/84 sm:text-lg"
        >
          Save posts from social media, organize them by topic, and turn them into content you can actually publish.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, scale: 1.04 }}
          whileTap={{ y: 0, scale: 0.97 }}
          transition={{
            opacity: { duration: 0.55, delay: 0.24, ease: "easeOut" },
            y: { type: "spring", stiffness: 420, damping: 24 },
            scale: { type: "spring", stiffness: 420, damping: 24 },
          }}
          href={APP_STORE_URL || "#download"}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#111312] shadow-[0_18px_34px_-18px_rgba(0,0,0,0.66)] transition-shadow duration-200 hover:bg-white hover:shadow-[0_28px_46px_-22px_rgba(0,0,0,0.76)]"
        >
          <AppleLogo className="h-5 w-5" />
          Download on the App Store
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
          className="flex h-[500px] w-full items-center justify-center overflow-hidden sm:h-[680px] sm:py-6 lg:h-[760px]"
        >
          <video
            className="aspect-[5/4] h-auto w-[164vw] max-w-none shrink-0 object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.28)] sm:w-[820px] lg:w-[960px] xl:w-[1040px]"
            poster={heroPoster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label="Collecta first mockup video showing how content is saved"
          >
            <source src={FIRST_MOCKUP_VIDEO_WEBM} type="video/webm" />
            <source src={FIRST_MOCKUP_VIDEO_MP4} type="video/mp4" />
            <img src={heroPoster} alt="Collecta app showing saved posts" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
