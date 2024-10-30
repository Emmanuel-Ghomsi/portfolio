import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { memo } from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:w-1/2"
        >
          <TextGenerateEffect words="J'aide les entreprises et les particuliers à réaliser des projets numériques de haute qualité, des sites web aux applications mobiles." />
          <p className="my-8 text-lg ">
            Hello 👋, je suis <span className="font-bold">Emmanuel</span>,
            Développeur Full Stack et Formateur
          </p>
          <Button asChild>
            <Link href="/appointment">Prendre un rendez-vous</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2"
        >
          <Image
            src="/me.jpg"
            alt="Professional headshot"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Hero);
