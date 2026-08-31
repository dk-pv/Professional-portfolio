import SectionHeader from "@/components/ui/SectionHeader";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Hono.js", "REST APIs", "JWT & Auth"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose"],
  },
  {
    title: "Real-Time",
    items: ["Socket.IO", "WebSockets", "Live Tracking", "Notifications"],
  },
  {
    title: "DevOps",
    items: ["Vercel", "Railway", "Hostinger", "Git & GitHub", "CI/CD"],
  },
  {
    title: "Tools",
    items: ["Cloudinary", "Postman", "Performance", "SEO"],
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

      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title}>
            <Sub className="mono-label border-b border-[var(--line)] pb-3 text-[var(--ink)]">
              {group.title}
            </Sub>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((skill) => (
                <li key={skill} className="text-[15px] text-[var(--ink-2)]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
