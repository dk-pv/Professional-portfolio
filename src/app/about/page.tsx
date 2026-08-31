import type { Metadata } from "next";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Danish Pv — Full Stack Developer building enterprise applications, ERP platforms and real-time systems with NestJS, PostgreSQL and Next.js.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-16">
        <About titleAs="h1" />
        <Experience showIndex={false} />
      </div>
      <FooterSimple />
    </>
  );
}
