import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const heroImage = "/images/hero-post-generator-mockup.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already on the waitlist!");
        } else {
          console.error("Error adding to waitlist:", error);
          toast.error("Something went wrong. Please try again.");
        }
        return;
      }

      toast.success("You're on the list! We'll notify you when we launch.");
      setEmail("");
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen flex-col justify-center overflow-x-clip px-4 pb-12 pt-24 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
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
              All your saved ideas in one place — structured so you can finally create from them.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="mb-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-xl border-2 border-border bg-background px-5 text-base focus-visible:border-primary focus-visible:ring-0"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group h-14 whitespace-nowrap rounded-xl bg-foreground px-8 text-base font-semibold text-background hover:bg-foreground/90"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                100+ already on the waitlist
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
                className="relative flex h-[420px] items-center justify-center rounded-[2.5rem] p-4 shadow-2xl sm:h-[500px] lg:h-[620px] lg:p-5"
                style={{ backgroundColor: "#56ABA0" }}
              >
                <img
                  src={heroImage}
                  alt="Collecta app showing Post Generator"
                  className="mx-auto h-[100%] w-auto max-w-none rounded-[2rem] object-contain"
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
