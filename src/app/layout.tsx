import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Global UI
import GridBackground from "@/components/ui/GridBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoaderProvider from "@/components/ui/LoaderProvider";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danishpv.dev"),
  title: {
    default: "Danish Pv — Full Stack Developer",
    template: "%s — Danish Pv",
  },
  description:
    "Full Stack Developer specializing in the MERN stack, high-performance UI, and modern, production-grade web experiences.",
  keywords: [
    "Danish Pv",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Web Developer",
  ],
  authors: [{ name: "Danish Pv" }],
  openGraph: {
    title: "Danish Pv — Full Stack Developer",
    description:
      "Full Stack Developer specializing in the MERN stack, high-performance UI, and modern web experiences.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/danish.png", width: 800, height: 1000, alt: "Danish Pv" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Pv — Full Stack Developer",
    description:
      "Full Stack Developer specializing in the MERN stack and modern web experiences.",
    images: ["/danish.png"],
  },
  icons: { icon: "/danish.png" },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {/* One static, GPU-cheap background for the entire site */}
        <GridBackground />

        {/* Top scroll-progress bar */}
        <ScrollProgress />

        <LoaderProvider>
          <Navbar />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
        </LoaderProvider>
      </body>
    </html>
  );
}
