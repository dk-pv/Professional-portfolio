import SectionHeader from "@/components/ui/SectionHeader";

/* Grouped by what I build, each tied to shipped work. */
const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux", "Zustand", "Tailwind CSS"],
    proof: "The Emarath, SDEC ERP and FleetTrack frontends, plus client sites.",
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express.js", "Hono.js", "REST APIs"],
    proof: "The APIs behind the ERP, tracking and booking platforms.",
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
    proof: "Schemas for leads, telemetry, attendance and payroll; MongoDB for bookings and content.",
  },
  {
    title: "Real-time",
    items: ["Socket.IO", "WebSockets"],
    proof: "FleetTrack's live vehicle map and the SDEC ERP's notifications and presence.",
  },
  {
    title: "Auth & access control",
    items: ["JWT", "OAuth", "OTP", "RBAC"],
    proof: "HttpOnly-cookie JWT in Emarath; a ~170-key permission registry in the SDEC ERP.",
  },
  {
    title: "Deployment & tooling",
    items: ["Docker", "AWS", "Vercel", "Render", "Railway", "Git & GitHub", "CI/CD"],
    proof: "FleetTrack ships as Docker services; the rest deploy on managed platforms.",
  },
];

export default function SkillsSection({
  titleAs = "h2",
}: {
  titleAs?: "h1" | "h2";
}) {
  const Sub = titleAs === "h1" ? "h2" : "h3";
  return (
    <section id="skills" className="section wrap reveal">
      <SectionHeader
        index={titleAs === "h2" ? "04" : undefined}
        label="Skills"
        title="What I work with"
        as={titleAs}
      />

      <div className="mt-12">
        {skills.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 border-b border-[var(--line)] py-6 first:border-t md:grid-cols-[220px_1fr] md:gap-12"
          >
            <Sub className="text-base font-semibold text-[var(--ink)]">
              {group.title}
            </Sub>
            <div>
              <p className="text-[15px] text-[var(--ink-2)]">
                {group.items.join(" · ")}
              </p>
              <p className="mt-1.5 text-sm text-[var(--ink-3)]">
                {group.proof}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
