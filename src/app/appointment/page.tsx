"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/appointment/hero";

export default function AppointmentPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main>
      <Hero />
      <hr className="border" />

      <section className="px-4 py-10 md:px-0">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
    </main>
  );
}
