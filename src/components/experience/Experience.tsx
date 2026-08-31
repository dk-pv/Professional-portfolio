import SectionHeader from "@/components/ui/SectionHeader";

const experiences = [
  {
    year: "2025 — Present",
    company: "SDEC — Calicut Business Park",
    role: "Full Stack Developer",
    location: "Calicut, Kerala",
    description:
      "Building enterprise applications end to end — including Emarath ERP, the FleetTrack real-time vehicle tracking platform and a multi-module enterprise ERP workspace. Design scalable REST APIs with NestJS and PostgreSQL, implement real-time features with Socket.IO and WebSockets, and develop responsive Next.js frontends with role-based access control.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Socket.IO", "REST APIs", "RBAC"],
  },
  {
    year: "2024 — 2025",
    company: "BridgeOn Solution",
    role: "Full Stack Developer Intern",
    location: "Remote",
    description:
      "Developed production full-stack applications including job portals and educational platforms. Built REST APIs, JWT authentication and real-time features with Socket.IO, and implemented responsive React and Next.js interfaces backed by Node.js, Express and MongoDB.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
  },
  {
    year: "2024 — Present",
    company: "Freelance & Independent Projects",
    role: "Full Stack Developer",
    location: "Remote",
    description:
      "Delivered full-stack web applications and e-commerce builds for clients. Handled API and payment-gateway integrations, performance optimization, and end-to-end deployment — Vercel and Railway for applications, plus domain, SSL and CI/CD configuration via GitHub.",
    tags: ["REST APIs", "Cloudinary", "Vercel", "Railway", "CI/CD", "Performance"],
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
