import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Global UI
import GridBackground from "@/components/ui/GridBackground";
import CursorEffect from "@/components/ui/CursorEffect";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/ui/SmoothScroll";
import LoaderProvider from "@/components/ui/LoaderProvider";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danish Pv — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack, high-performance UI, and modern web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>

        {/* ── ONE global background for the entire site ── */}
        <GridBackground />

        {/* ── Global UI overlays ── */}
        <CursorEffect />
        <ScrollProgress />
        <SmoothScroll />

        {/* ── Page loader wraps everything ── */}
        <LoaderProvider>

          {/* ── Navbar ── */}
          <Navbar />

          {/* ── Page content with transition ── */}
          <PageTransition>
            <main>{children}</main>
          </PageTransition>

        </LoaderProvider>

      </body>
    </html>
  );
}