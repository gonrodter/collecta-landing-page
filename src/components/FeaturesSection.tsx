import { motion } from "framer-motion";

import executeMockup from "@/assets/feature-execute-mockup.png";
import generateMockup from "@/assets/feature-generate-mockup.png";
import organizeMockup from "@/assets/feature-organize-mockup.png";

const sections = [
  {
    verb: "Organize",
    rest: "everything by topic",
    description: "Turn scattered inspiration into collections you can actually browse when planning content.",
    image: organizeMockup,
    alt: "Collecta organizing saved posts into collections",
  },
  {
    verb: "Generate",
    rest: "your next post",
    description: "Select saved examples, choose a format, and let Collecta shape the idea into a clear direction.",
    image: generateMockup,
    alt: "Collecta generating a new post from saved inspiration",
  },
  {
    verb: "Execute",
    rest: "with a clear plan",
    description: "Follow the brief, record what you need, and move from saved idea to published post faster.",
    image: executeMockup,
    alt: "Collecta execution plan for publishing content",
  },
];

const FeaturesSection = () => {
  return (
    <>
      {sections.map((section) => (
        <section key={section.verb} className="flex min-h-[78vh] flex-col items-center justify-start overflow-x-clip bg-[#56ABA0] px-5 pb-8 pt-8 text-center text-white sm:pt-10">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-4xl flex-col items-center"
          >
            <h2 className="text-[2.8rem] font-extrabold uppercase leading-[0.88] tracking-normal sm:text-[4.2rem] lg:text-[5.8rem]">
              {section.verb}
            </h2>

            <p className="mt-2 text-xl font-bold uppercase leading-tight tracking-normal sm:text-2xl lg:text-3xl">
              {section.rest}
            </p>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/84 sm:text-lg">
              {section.description}
            </p>

            <div className="mt-2 flex h-[530px] w-full items-center justify-center overflow-hidden sm:mt-4 sm:h-[650px] sm:py-8 md:h-[600px] md:py-6 lg:h-[640px] xl:h-[680px]">
              <img
                src={section.image}
                alt={section.alt}
                className="aspect-[5/4] h-auto w-[680px] max-w-none shrink-0 object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.28)] sm:w-[740px] md:w-[800px] lg:w-[860px] xl:w-[920px]"
              />
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
};

export default FeaturesSection;
