import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-center md:mb-0">
            <p>&copy; 2024 <span className="text-sm font-bold">Emmanuel GHOMSI GHOMSI</span>. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com/GhomsiEmmanuel"
              className="text-muted-foreground hover:text-primary"
              target="__blank"
            >
              <Twitter className="size-6" />
              <span className="sr-only">X</span>
            </Link>
            <Link
              href="https://github.com/Emmanuel-Ghomsi"
              className="text-muted-foreground hover:text-primary"
              target="__blank"
            >
              <Github className="size-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuel-ghomsi-ghomsi-7b97671b4"
              className="text-muted-foreground hover:text-primary"
              target="__blank"
            >
              <Linkedin className="size-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
