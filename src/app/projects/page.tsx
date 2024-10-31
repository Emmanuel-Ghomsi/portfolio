"use client";

import { useState, Suspense, lazy } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data";
import { HeroSkeleton } from "@/components/about/skeleton/hero-skeleton";
import { ProjectSectionSkeleton } from "@/components/projects/project-section-skeleton";
import useMediaQuery from "@/hooks/use-media-query";

// Chargement asynchrone des composants
const Hero = lazy(() => import("@/components/projects/hero"));

const allTechnologies = Array.from(
  new Set(
    projects.flatMap((project) => project.technologies.map((tech) => tech.name))
  )
);

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const filteredProjects = selectedTech
    ? projects.filter((project) =>
        project.technologies
          .map((technology) => {
            if (technology.name.includes(selectedTech)) return project.title;
          })
          .includes(project.title)
      )
    : projects;

  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <hr className="border" />

      <Suspense fallback={<ProjectSectionSkeleton />}>
        <section className="px-4 pb-20 pt-10 md:px-0">
          <div className="container mx-auto">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTech === null ? "default" : "outline"}
                onClick={() => setSelectedTech(null)}
              >
                Tous
              </Button>
              {allTechnologies.map((tech, index) => (
                <Button
                  key={index}
                  variant={selectedTech === tech ? "default" : "outline"}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </Button>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: isMobile ? 0.1 : 0.5 }}
                  >
                    <Card className="overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: isMobile ? 0.1 : 0.3 }}
                      >
                        <Image
                          src={project.image ?? ""}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="h-48 w-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap items-center">
                          {project.technologies.map((tech, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: isMobile ? 0.1 : 0.2 }}
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
                                  loading="lazy"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </Suspense>
    </main>
  );
}
