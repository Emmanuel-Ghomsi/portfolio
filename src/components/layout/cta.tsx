import React from "react";
import { Boxes } from "../ui/background-boxes";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section id="make-an-appointment">
      <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
        <div className="pointer-events-none absolute inset-0 z-20 size-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-2xl text-white relative z-20")}>
          Intéressé par une collaboration ?
        </h1>
        <Button asChild className="z-20 my-8">
          <Link href="/appointment">Prendre un rendez-vous</Link>
        </Button>
      </div>
    </section>
  );
}
