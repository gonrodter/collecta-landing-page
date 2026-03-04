import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const useCases = [
  {
    emoji: "💾",
    category: "Save",
    title: "Capture everything",
    description: "Reels, threads, carousels, ideas — all in one place.",
  },
  {
    emoji: "🗂️",
    category: "Organize",
    title: "Make sense of it",
    description: "Structured into collections built for creators.",
  },
  {
    emoji: "✨",
    category: "Generate",
    title: "Turn saves into posts",
    description: "Select inspirations and get a clear execution plan.",
  },
];

const comparison = {
  native: ["Scattered across apps", "No structure", "Hard to reuse", "Built for consumption"],
  collecta: ["Centralized", "Structured", "Built for creators", "Designed for output"],
};

const FeaturesSection = () => {
  return (
    <section className="bg-muted/30 px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Stop <span className="italic text-primary">hoarding</span>.
            <br />
            Start <span className="italic">using</span>.
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">Your saved content finally works for you.</p>
        </motion.div>

        <div className="mb-24 grid gap-6 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border-2 border-border bg-background p-8 transition-colors hover:border-primary/50"
            >
              <span className="mb-4 block text-4xl">{useCase.emoji}</span>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">{useCase.category}</span>
              <h3 className="mb-2 text-xl font-bold text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-6"
        >
          <div className="h-px flex-1 bg-border" />
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">How it works</h3>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="space-y-24">
          {[
            {
              id: 1,
              title: "Add Anything, Anywhere",
              description:
                "Save content from any app using the share button. Paste links or upload screenshots.",
              image: "/images/feature-save-mockup.png",
              alt: "Add content to Collecta via share menu, link, or screenshot",
            },
            {
              id: 2,
              title: "Automatically Organized",
              description:
                "Your saves are structured into clean collections so you can browse without chaos.",
              image: "/images/feature-organize-mockup.png",
              alt: "View organized collections in Collecta",
            },
            {
              id: 3,
              title: "Post Generator",
              description:
                "Select up to 5 saved posts. Choose platform and format. Get a structured execution plan.",
              image: "/images/feature-generate-mockup.png",
              alt: "Use Post Generator to turn saved posts into content",
            },
            {
              id: 4,
              title: "Execute",
              description: "Stop overthinking. Follow the plan and publish.",
              image: "/images/feature-execute-mockup.png",
              alt: "Follow an execution plan and publish consistently",
            },
          ].map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col items-center gap-12 lg:gap-20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full max-w-2xl flex-1">
                <div className="group relative">
                  <div className="absolute -inset-4 rounded-[2rem] bg-[#56ABA0]/10 blur-2xl transition-colors duration-500 group-hover:bg-primary/20" />
                  <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-[#56ABA0] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src={step.image} alt={step.alt} className="h-auto w-full" />
                  </div>
                </div>
              </div>

              <div className="max-w-lg flex-1 text-center lg:text-left">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {step.id}
                </span>
                <h3 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">{step.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Comparison</p>
          <h3 className="mb-3 text-center text-2xl font-bold text-foreground sm:text-3xl">Why not just use native saves?</h3>
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
            Built for creators who care about clarity, retrieval speed, and consistent output.
          </p>

          <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-background">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
            <div className="relative grid md:grid-cols-2">
              <div className="border-b-2 border-border bg-muted/40 p-8 md:border-b-0 md:border-r-2">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                  <XCircle className="h-3.5 w-3.5" />
                  Native saves
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {comparison.native.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 text-muted-foreground/70">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Collecta
                </div>
                <ul className="space-y-3 text-foreground">
                  {comparison.collecta.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
