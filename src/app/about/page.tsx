import type { Metadata } from "next";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Danish Pv — a Full Stack Developer with 2+ years building enterprise ERP systems, real-time platforms and scalable web applications with NestJS, Next.js, PostgreSQL and MongoDB.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-16">
        <About />
        <Experience />
      </div>
      <FooterSimple />
    </>
  );
}
