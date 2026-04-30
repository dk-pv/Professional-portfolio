import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import SkillsOrbit from "@/components/skills/SkillsOrbit";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        {" "}
        <About />{" "}
      </section>
      <section id="skills">
        <SkillsOrbit />
      </section>

      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
