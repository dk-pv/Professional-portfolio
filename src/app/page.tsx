import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Experience from "@/components/experience/Experience";
import SkillsSection from "@/components/skills/SkillsSection";
import ContactCTA from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection featured />
      <Experience />
      <SkillsSection />
      <ContactCTA />
      <Footer />
    </>
  );
}
