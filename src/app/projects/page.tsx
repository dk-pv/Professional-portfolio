import type { Metadata } from "next";
import ProjectsSection from "@/components/projects/ProjectsSection";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects by Danish Pv — enterprise ERP systems, the FleetTrack real-time tracking platform, booking and e-commerce applications, and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-16">
        <ProjectsSection titleAs="h1" />
      </div>
      <FooterSimple />
    </>
  );
}
