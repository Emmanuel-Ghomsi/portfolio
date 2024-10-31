import { memo } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import useMediaQuery from "@/hooks/use-media-query";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

export default memo(Hero);
