import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-5xl font-semibold text-gray-800 dark:text-white">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-medium text-gray-700 dark:text-gray-300">
          Page introuvable
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          La page que vous recherchez semble introuvable. Elle a peut-être été
          supprimée ou déplacée.
        </p>
        <Link href="/" passHref>
          <Button>Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </main>
  );
}
