import { motion } from "framer-motion";
import addImage from "@/assets/add.png";
import askCollectaImage from "@/assets/ask_collecta.png";
import categoriesImage from "@/assets/categories.png";
import profileImage from "@/assets/profile.png";

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

        {/* How It Works Steps - Alternating Layout */}
        <div className="space-y-24">
          {[
            {
              id: 1,
              title: "Add Anything, Anywhere",
              description: "Save content from any app using your phone's native share button. Just hit share and select Collecta, or simply paste a link or upload a screenshot.",
              image: addImage,
              alt: "Add content to Collecta via share menu, link, or screenshot"
            },
            {
              id: 2,
              title: "Ask Collecta",
              description: "Just describe what you're looking for. Our AI understands context and finds exactly what you need.",
              image: askCollectaImage,
              alt: "Ask Collecta AI to find your posts"
            },
            {
              id: 3,
              title: "Browse by Category",
              description: "Everything auto-organized into smart categories. Recipes, travel, fitness—perfectly sorted without lifting a finger.",
              image: categoriesImage,
              alt: "Browse posts organized by category"
            },
            {
              id: 4,
              title: "Track Your Collection",
              description: "See your saving habits, discover patterns, and get insights on what you collect most.",
              image: profileImage,
              alt: "View your collection stats and insights"
            }
          ].map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Column */}
              <div className="flex-1 w-full max-w-2xl">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-border bg-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 max-w-lg text-center lg:text-left">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl mb-6">
                  {step.id}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
