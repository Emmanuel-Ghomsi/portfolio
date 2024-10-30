import { HoverEffect } from "../ui/card-hover-effect";
import { approaches } from "@/data";
import { memo } from "react";

function Approach() {
  return (
    <section id="approach" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold">Mon approche</h2>
          <hr className="w-1/6 border-2 border-primary/20 dark:border-primary/50" />
        </div>

        <div className="mx-auto w-full px-8">
          <HoverEffect items={approaches} />
        </div>
      </div>
    </section>
  );
}

export default memo(Approach);
