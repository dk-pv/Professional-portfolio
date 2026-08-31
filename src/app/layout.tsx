import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  authors: [{ name: "Danish Pv" }],
  creator: "Danish Pv",
  openGraph: {
    title: "Danish Pv — Full Stack Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Danish Pv",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Danish Pv — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Pv — Full Stack Developer",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Danish Pv",
  jobTitle: "Full Stack Developer",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/dk.webp`,
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
    "REST APIs",
    "Enterprise Applications",
    "ERP Systems",
    "Real-time Systems",
  ],
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
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

        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
