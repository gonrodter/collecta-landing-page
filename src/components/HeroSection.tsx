import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import appMockup from "@/assets/app-mockup.png";

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast.success("You're on the list! We'll notify you when we launch.");
    setEmail("");
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          Stop losing your saved posts to the digital black hole.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Centralize your saved content from Instagram, TikTok, and X. Our AI tags and organizes everything automatically, so you can actually find it later.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
        >
          <Input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 px-4 text-base bg-background border-border focus-visible:ring-primary"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Join Early Access Waitlist"}
          </Button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground mb-16"
        >
          Join other makers and early adopters organizing their second brain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto max-w-xs sm:max-w-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl blur-3xl" />
          <img
            src={appMockup}
            alt="Collecta app interface showing organized saved posts"
            className="relative w-full rounded-2xl shadow-2xl shadow-black/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
