"use client";

import { HeroSkeleton } from "@/components/about/skeleton/hero-skeleton";
import { TimelineSkeleton } from "@/components/about/skeleton/timeline-skeleton";
import { Suspense, lazy } from "react";

// Importation asynchrone des composants
const Hero = lazy(() => import("@/components/about/hero"));
const EducationTimeline = lazy(
  () => import("@/components/about/education-timeline")
);
const CertificationTimeline = lazy(
  () => import("@/components/about/certification-timeline")
);
const ExperienceTimeline = lazy(
  () => import("@/components/about/experiences-timeline")
);
const About = lazy(() => import("@/components/about/about"));

export default function AboutMe() {
  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <hr className="border" />

      <Suspense
        fallback={
          <div className="mb-4 h-8 w-full rounded bg-gray-400 dark:bg-gray-600"></div>
        }
      >
        <About />
      </Suspense>
      <hr className="border" />

      <Suspense fallback={<TimelineSkeleton />}>
        <EducationTimeline />
      </Suspense>
      <hr className="border" />

      <Suspense fallback={<TimelineSkeleton />}>
        <CertificationTimeline />
      </Suspense>
      <hr className="border" />

      <Suspense fallback={<TimelineSkeleton />}>
        <ExperienceTimeline />
      </Suspense>
    </main>
  );
}
