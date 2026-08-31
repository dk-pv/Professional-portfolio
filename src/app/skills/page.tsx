import type { Metadata } from "next";
import SkillsSection from "@/components/skills/SkillsOrbit";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies Danish Pv works with — React, Next.js, TypeScript, NestJS, Node.js, PostgreSQL, MongoDB and real-time systems.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <div className="pt-16">
        <SkillsSection titleAs="h1" />
      </div>
      <FooterSimple />
    </>
  );
}
