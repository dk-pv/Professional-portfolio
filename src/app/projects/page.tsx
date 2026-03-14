"use client";


import Projects from "@/components/projects/ProjectsSection";
import FooterSimple from "@/components/ui/FooterSimple";

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen ">
        <Projects />
      </section>

      {/* Footer */}
      <FooterSimple />
    </>
  );
}
