import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[50vh] items-center justify-center py-20 md:py-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container z-10 text-center"
      >
        <TextGenerateEffect
          words="Prenez rendez-vous pour une consultation afin de discuter des
              besoins de votre projet ou d'explorer les possibilités de
              collaboration."
        />
      </motion.div>
    </section>
  );
}
