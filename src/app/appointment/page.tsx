"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { HeroSkeleton } from "@/components/about/skeleton/hero-skeleton";
import { CalendlySkeleton } from "@/components/appointment/calendly-skeleton";
import useMediaQuery from "@/hooks/use-media-query";

// Chargement asynchrone des composants
const Hero = lazy(() => import("@/components/appointment/hero"));

export default function AppointmentPage() {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <hr className="border" />

      <Suspense fallback={<CalendlySkeleton />}>
        <section className="px-4 py-10 md:px-0">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: isMobile ? 0.1 : 0.5,
                delay: isMobile ? 0.1 : 0.2,
              }}
              className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg"
            >
              {isMounted && (
                <iframe
                  src="https://calendly.com/emmanuelghomsi/discutonstechen15mins"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Prendre rendez-vous"
                  className="w-full"
                ></iframe>
              )}
            </motion.div>
          </div>
        </section>
      </Suspense>
    </main>
  );
}
