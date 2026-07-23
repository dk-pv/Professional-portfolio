import type { Metadata } from "next";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Danish Pv — a Full Stack Developer specializing in the MERN stack, with experience across booking systems, dashboards and cloud deployment.",
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
