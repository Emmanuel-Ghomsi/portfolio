import Image from "next/image";
import { skills } from "@/data";
import { memo } from "react";

function Skills() {
  return (
    <section id="approach" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold">
            Compétences & Technologies
          </h2>
          <hr className="w-1/6 border-2 border-primary/20 dark:border-primary/50" />
        </div>

        <div className="mx-auto w-full px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center rounded-lg border border-zinc-500 bg-white p-3 dark:bg-black"
              >
                <Image
                  src={skill.image}
                  alt={skill.image}
                  height="30"
                  width="30"
                  className="size-6 md:size-8"
                />
                <p className="ml-2 text-xs font-medium text-black dark:text-neutral-200 md:ml-3 md:text-sm">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
