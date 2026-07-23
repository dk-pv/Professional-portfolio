import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import SkillsSection from "@/components/skills/SkillsOrbit";
import Experience from "@/components/experience/Experience";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
}
