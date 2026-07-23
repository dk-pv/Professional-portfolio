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

const SITE_URL = "https://danishpv.dev";

const DESCRIPTION =
  "Danish Pv is a Full Stack Developer building enterprise applications, ERP systems and real-time platforms with NestJS, PostgreSQL and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Danish Pv — Full Stack Developer",
    template: "%s — Danish Pv",
  },
  description: DESCRIPTION,
  keywords: [
    "Danish Pv",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Enterprise Applications",
    "ERP",
    "Real-time Systems",
  ],
  authors: [{ name: "Danish Pv" }],
  creator: "Danish Pv",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Danish Pv — Full Stack Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Danish Pv",
    type: "website",
    locale: "en_US",
    images: [{ url: "/danish.png", width: 800, height: 1000, alt: "Danish Pv" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Pv — Full Stack Developer",
    description:
      "Full Stack Developer building enterprise applications, ERP systems and real-time platforms with React, Next.js, NestJS, PostgreSQL and MongoDB.",
    images: ["/danish.png"],
  },
  icons: { icon: "/danish.png" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Danish Pv",
  jobTitle: "Full Stack Developer",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/danish.png`,
  email: "mailto:danish.pv999@gmail.com",
  sameAs: [
    "https://github.com/dk-pv",
    "https://www.linkedin.com/in/danish-pv/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Socket.IO",
    "REST APIs",
    "Enterprise Applications",
    "ERP Systems",
    "Real-time Systems",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

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
