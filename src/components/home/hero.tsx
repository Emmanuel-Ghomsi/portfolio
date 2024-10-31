import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import useMediaQuery from "@/hooks/use-media-query";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center p-20 px-6 md:flex-row md:p-0">
        <div className="md:w-1/2">
          <TextGenerateEffect
            words="J'aide les entreprises et les particuliers à réaliser des projets numériques de haute qualité, des sites web aux applications mobiles."
            isMobile={isMobile}
          />
          <p className="my-8 text-lg ">
            Hello 👋, je suis <span className="font-bold">Emmanuel</span>,
            Développeur Full Stack et Formateur
          </p>
          <Button asChild>
            <Link href="/appointment">Prendre un rendez-vous</Link>
          </Button>
        </div>
        <div className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
          <Image
            src="/me.jpg"
            alt="Professional headshot"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
