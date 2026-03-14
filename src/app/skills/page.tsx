"use client";
import SkillsOrbit from "@/components/skills/SkillsOrbit";

import FooterSimple from "@/components/ui/FooterSimple";

export default function SkillsPage() {
  return (
    <>
      <section className="min-h-screen ">
       <SkillsOrbit/>
      </section>

      {/* Footer */}
      <FooterSimple />
    </>
  );
}
