"use client";

import Hero from "@/components/home/hero";
import Approach from "@/components/home/approach";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <hr className="border" />
      <Approach />
      <hr className="border" />
      <Skills />
      <hr className="border" />
      <Projects />
    </main>
  );
}
