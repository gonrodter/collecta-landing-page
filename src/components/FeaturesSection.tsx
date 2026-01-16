import { motion } from "framer-motion";
import { LinkIcon, Share2, Sparkles } from "lucide-react";

const features = [
  {
    icon: LinkIcon,
    title: "The Infinite Scroll Trap",
    description: "You save things to read later, but 'later' never comes. Your bookmarks are buried across three different apps.",
  },
  {
    icon: Share2,
    title: "One-Tap Capture",
    description: "Just use the native 'Share' button on your phone to send any post directly to Collecta. No clunky copy-pasting.",
  },
  {
    icon: Sparkles,
    title: "Auto-Organization",
    description: "Don't waste time tagging. Collecta's AI intelligently categorizes posts into Recipes, Marketing, Tutorials, etc.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
        >
          Why Collecta?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
