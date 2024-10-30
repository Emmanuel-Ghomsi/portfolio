"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-3xl font-semibold mb-4 text-red-500">
        Une erreur est survenue
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Un problème est survenu lors du chargement de la page. Veuillez
        réessayer ou retourner à l&apos;accueil.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => router.push("/")}>
          Retour à l&apos;accueil
        </Button>
        <Button variant="outline" onClick={() => reset()}>
          Réessayer
        </Button>
      </div>
    </div>
  );
}
