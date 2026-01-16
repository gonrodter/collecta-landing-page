import { motion } from "framer-motion";
import { Sparkles, Share, FolderOpen } from "lucide-react";

const useCases = [
  {
    emoji: "🍳",
    category: "Recipes",
    title: "That viral pasta recipe?",
    description: "Found instantly. No more scrolling through 400 saved reels.",
  },
  {
    emoji: "💡",
    category: "Ideas",
    title: "Startup ideas at 2am?",
    description: "Captured and waiting for when inspiration calls again.",
  },
  {
    emoji: "📍",
    category: "Places",
    title: "Hidden gem cafés?",
    description: "Organized by city. Your future travels, planned.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stop <span className="italic text-primary">hoarding</span>.
            <br />
            Start <span className="italic">using</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your saved content finally works for you.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <span className="text-4xl mb-4 block">{useCase.emoji}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                {useCase.category}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider with title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16"
        >
          <div className="flex-1 h-px bg-border" />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            How it works
          </h3>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* How It Works Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-foreground text-background mb-4">
              <Share className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">1. Share</h3>
            <p className="text-muted-foreground">
              Use your phone's native share button. One tap, done.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">2. AI Sorts</h3>
            <p className="text-muted-foreground">
              Our AI reads, understands, and categorizes automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-foreground text-background mb-4">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">3. Find</h3>
            <p className="text-muted-foreground">
              Search or browse by category. It's always there.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
