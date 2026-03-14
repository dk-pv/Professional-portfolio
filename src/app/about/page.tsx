"use client";

import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import FooterSimple from "@/components/ui/FooterSimple";

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen ">
        <About />
        <Experience />
      </section>

      {/* Footer */}
      <FooterSimple />
    </>
  );
}
