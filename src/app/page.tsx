"use client";

import { Suspense, lazy } from "react";
import { HeroSkeleton } from "@/components/home/skeleton/hero-skeleton";
import { ApproachSkeleton } from "@/components/home/skeleton/approach-skeleton";
import { SkillsSkeleton } from "@/components/home/skeleton/skills-skeleton";
import { ProjectsSkeleton } from "@/components/home/skeleton/projects-skeleton";

// Chargement asynchrone des composants
const Hero = lazy(() => import("@/components/home/hero"));
const Approach = lazy(() => import("@/components/home/approach"));
const Skills = lazy(() => import("@/components/home/skills"));
const Projects = lazy(() => import("@/components/home/projects"));

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <hr className="border" />
      <Suspense fallback={<ApproachSkeleton />}>
        <Approach />
      </Suspense>
      <hr className="border" />
      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>
      <hr className="border" />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
    </main>
  );
}
