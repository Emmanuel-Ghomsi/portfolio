import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container z-10 text-center"
      >
        <TextGenerateEffect words="Développeur Full Stack passionné par la technologie et l'innovation, je crée des solutions numériques adaptées aux besoins modernes." />
      </motion.div>
    </section>
  );
}
