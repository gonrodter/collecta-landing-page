import { motion } from "framer-motion";

import AppStoreBadge from "@/components/AppStoreBadge";
import ProductHuntBadge from "@/components/ProductHuntBadge";
import { APP_STORE_URL } from "@/lib/appConfig";

const heroImage = "/images/hero-post-generator-mockup.png";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center overflow-x-clip px-4 pb-12 pt-24 sm:px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 mx-auto w-full max-w-xl lg:order-1 lg:mx-0 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                Save it.
                <br />
                <span className="text-muted-foreground/60">Organize</span> it.
                <br />
                <span><span className="italic text-primary">Turn it</span> into content.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Save posts from social media, organize them by topic, and turn them into content you can actually publish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mb-6 flex flex-col items-start gap-4"
            >
              <AppStoreBadge href={APP_STORE_URL || undefined} className="h-[52px] sm:h-[58px]" />
              <ProductHuntBadge className="w-[220px] sm:w-[250px]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Available now on the App Store
              </span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 relative lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[420px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl sm:-inset-4" />

              <div
                className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[2.5rem] p-4 shadow-2xl sm:h-[500px] lg:h-[620px] lg:p-5"
                style={{ backgroundColor: "#56ABA0" }}
              >
                <img
                  src={heroImage}
                  alt="Collecta app showing Post Generator"
                  className="mx-auto h-full w-full rounded-[2rem] object-cover object-top sm:w-auto sm:max-w-none sm:object-contain"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute left-1 top-[5%] z-10 animate-float-delayed rounded-xl border-2 border-border bg-background px-3 py-1.5 shadow-lg sm:left-2 sm:px-4 sm:py-2"
              >
                <span className="text-xs font-medium text-foreground sm:text-sm">🍳 Recipes</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute left-0 bottom-[50%] animate-float rounded-xl border-2 border-border bg-background px-3 py-1.5 shadow-lg sm:-left-4 sm:px-4 sm:py-2"
              >
                <span className="text-xs font-medium text-foreground sm:text-sm">💻 Tech</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute left-0 bottom-[20%] animate-float-delayed rounded-xl border-2 border-border bg-background px-3 py-1.5 shadow-lg sm:-left-2 sm:px-4 sm:py-2"
              >
                <span className="text-xs font-medium text-foreground sm:text-sm">📈 Marketing</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute right-0 top-[35%] animate-float rounded-xl border-2 border-border bg-background px-3 py-1.5 shadow-lg sm:-right-2 sm:px-4 sm:py-2"
              >
                <span className="text-xs font-medium text-foreground sm:text-sm">🎨 Design</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute right-0 top-[60%] animate-float-delayed rounded-xl border-2 border-border bg-background px-4 py-2 shadow-lg sm:-right-10"
              >
                <span className="text-sm font-medium text-foreground">💪 Fitness</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 animate-float-slow rounded-xl bg-foreground px-4 py-2 text-primary-foreground shadow-lg"
              >
                <span className="text-sm font-medium">✨ Post Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
