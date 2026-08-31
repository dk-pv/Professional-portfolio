import SectionHeader from "@/components/ui/SectionHeader";

const experiences = [
  {
    year: "2025 — Present",
    company: "Shahi Solutions",
    role: "Full Stack Developer",
    location: "Calicut, Kerala",
    description:
      "Own end-to-end development of production applications — Emarath ERP, a CRM-centered ERP for lead management and sales operations; the SDEC company ERP with its attendance-to-payroll pipeline; and the FleetTrack real-time fleet-tracking platform. I design the PostgreSQL schemas and REST APIs, build real-time features with Socket.IO, and ship the Next.js frontends with role-based access control.",
    tags: ["Next.js", "NestJS", "Express.js", "PostgreSQL", "Prisma", "Socket.IO", "RBAC"],
  },
  {
    year: "2024 — 2025",
    company: "BridgeOn Solution",
    role: "Full Stack Developer",
    location: "Manjeri, Kerala",
    description:
      "Developed and shipped full-stack job portal and educational platforms in an Agile environment — secure REST APIs, authentication with JWT, OAuth and OTP verification, role-based access control, and real-time features with Socket.IO, on React and Next.js frontends over Node.js, Express and MongoDB.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "OAuth"],
  },
  {
    year: "2024 — Present",
    company: "Freelance & Client Projects",
    role: "Full Stack Developer",
    location: "Remote",
    description:
      "Built full-stack sites and applications for clients — VRS RealInvest, Royal Limoxy, Fetch Kids and MoodByteal — handling REST APIs, media pipelines, payment-gateway integrations, performance work and deployment with domain, SSL and CI/CD configuration.",
    tags: ["REST APIs", "Cloudinary", "Vercel", "Railway", "CI/CD"],
  },
];

export default function Experience({
  showIndex = true,
}: {
  showIndex?: boolean;
}) {
  return (
    <section id="experience" className="section wrap reveal">
      <SectionHeader
        index={showIndex ? "03" : undefined}
        label="Experience"
        title="Where I've worked"
      />

      <div className="mt-12">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="grid gap-4 border-b border-[var(--line)] py-10 first:border-t md:grid-cols-[220px_1fr] md:gap-12"
          >
            <div>
              <p className="mono-label">{exp.year}</p>
              <p className="mono-label mt-1.5 text-[var(--ink-3)]">
                {exp.location}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-[var(--ink-2)]">{exp.company}</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
                {exp.description}
              </p>
              <p className="mono-label mt-5 text-[var(--ink-3)]">
                {exp.tags.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
