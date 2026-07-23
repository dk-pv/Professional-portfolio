import type { Metadata } from "next";
import SkillsSection from "@/components/skills/SkillsOrbit";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The technologies Danish Pv works with — React, Next.js, Node.js, MongoDB, and the full MERN toolchain.",
};

export default function SkillsPage() {
  return (
    <>
      <div className="pt-16">
        <SkillsSection />
      </div>
      <FooterSimple />
    </>
  );
}
