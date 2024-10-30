import { memo } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[50vh] items-center justify-center py-20 md:py-0"
    >
      <div className="container z-10 text-center">
        <TextGenerateEffect
          words="Prenez rendez-vous pour une consultation afin de discuter des
              besoins de votre projet ou d'explorer les possibilités de
              collaboration."
        />
      </div>
    </section>
  );
}

export default memo(Hero);
