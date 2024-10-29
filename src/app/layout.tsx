import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CTA from "@/components/layout/cta";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel GHOMSI GHOMSI",
  description: "Portfolio de Emmanuel GHOMSI GHOMSI, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${openSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex w-full items-center justify-center bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="z-10">
              <Header />
              {children}
              <CTA />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
