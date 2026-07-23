import type { Metadata } from "next";
import ProjectsSection from "@/components/projects/ProjectsSection";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real-world full-stack projects by Danish Pv — booking systems, real estate platforms, e-commerce and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-16">
        <ProjectsSection />
      </div>
      <FooterSimple />
    </>
  );
}
