import { TextGenerateEffect } from "../ui/text-generate-effect";
import { memo } from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[50vh] items-center justify-center py-20 md:py-0"
    >
      <div className="container z-10 text-center">
        <TextGenerateEffect
          words="Découvrez une collection d'applications web et de solutions
              logicielles innovantes que j'ai développées et qui témoignent
              de mon expertise en matière de développement intégral."
        />
      </div>
    </section>
  );
}

export default memo(Hero);
