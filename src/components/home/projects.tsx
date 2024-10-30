import { projects } from "@/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { memo } from "react";

function Projects() {
  return (
    <section id="approach" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold">
            Quelques projets réalisés
          </h2>
          <hr className="w-1/6 border-2 border-primary/20 dark:border-primary/50" />
        </div>

        <div className="mx-auto w-full px-8">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative flex h-[40rem] items-center justify-center"
                >
                  <Card className="h-[35rem] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={project.image ? project.image : ""}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="py-4 text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="py-4">
                        {project.description.length > 100
                          ? project.description.substring(0, 100) + "..."
                          : project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap items-center">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div
                              className="flex size-8 items-center justify-center rounded-full border border-zinc-400 bg-white lg:size-10"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <Image
                                src={tech.image}
                                alt={tech.name}
                                className="p-2"
                                width={50}
                                height={50}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
