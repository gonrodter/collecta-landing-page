import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import { supabase } from "@/lib/supabaseClient";
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
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("This email is already on the waitlist!");
        } else {
          console.error('Error adding to waitlist:', error);
          toast.error("Something went wrong. Please try again.");
        }
        return;
      }

      toast.success("You're on the list! We'll notify you when we launch.");
      setEmail("");
    } catch (err) {
      console.error('Unexpected error:', err);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="order-2 lg:order-1">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            ease: "easeOut"
          }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Save it.
              <br />
              <span className="italic text-primary">Find</span> it.
              <br />
              <span className="text-muted-foreground/60">Actually use it.</span>
            </h1>
          </motion.div>

          <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut"
          }} className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Your saved posts from Instagram, TikTok & X — automatically organized by AI. No more endless scrolling through chaos.
          </motion.p>

          <motion.form initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.25,
            ease: "easeOut"
          }} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mb-6">
            <Input type="email" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value)} className="h-14 px-5 text-base bg-background border-2 border-border focus-visible:border-primary focus-visible:ring-0 rounded-xl" />
            <Button type="submit" disabled={isSubmitting} className="h-14 px-8 text-base font-semibold bg-foreground hover:bg-foreground/90 text-background rounded-xl whitespace-nowrap group">
              {isSubmitting ? "Joining..." : <>
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>}
            </Button>
          </motion.form>

          <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.35
          }} className="text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              100+ already on the waitlist
            </span>
          </motion.p>
        </div>

        {/* Right Column - App Mockup */}
        <motion.div initial={{
          opacity: 0,
          scale: 0.95,
          y: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} className="order-1 lg:order-2 relative">
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[2rem] blur-2xl" />

            {/* Phone mockup */}
            <div className="relative bg-foreground rounded-[2.5rem] p-3 shadow-2xl shadow-foreground/10">
              <img src={appMockup} alt="Collecta app showing organized saved posts" className="w-full rounded-[2rem]" />
            </div>

            {/* Floating badges */}
            <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }} className="absolute -left-4 top-1/4 bg-background border-2 border-border rounded-xl px-4 py-2 shadow-lg animate-float">
              <span className="text-sm font-medium text-foreground">🍳 Recipes</span>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.7
            }} className="absolute -right-4 top-1/2 bg-background border-2 border-border rounded-xl px-4 py-2 shadow-lg animate-float-delayed">
              <span className="text-sm font-medium text-foreground">📈 Marketing</span>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }} className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-lg animate-float-slow">
              <span className="text-sm font-medium">✨ AI Sorted</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};
export default HeroSection;