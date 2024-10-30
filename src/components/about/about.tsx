import { motion } from "framer-motion";
import { memo } from "react";

function About() {
  return (
    <section className="px-4 py-20 md:px-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gap-8 italic"
        >
          <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
            <p className="mb-4">
              Je m&apos;appelle{" "}
              <span className="font-bold">Emmanuel GHOMSI GHOMSI</span>, et
              depuis plus de 5 ans, j&apos;aide des entreprises et des
              particuliers à transformer leurs idées en produits numériques
              solides et performants.
            </p>
            <p className="mb-4">
              Mon parcours dans la technologie a commencé par une fascination
              pour le développement web. Avec le temps, j&apos;ai cultivé un
              large éventail de compétences, de la conception à
              l&apos;intégration, en passant par la gestion technique et la
              formation.
            </p>
            <p>
              Aujourd&apos;hui, je travaille sur des projets ambitieux pour des
              clients variés, en tant que développeur freelance et chef de
              projet, et je transmets également mes connaissances en tant que
              formateur.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(About);
