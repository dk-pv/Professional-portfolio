"use client";

import { motion, type Variants } from "framer-motion";
import { Code, Server, Database, Zap, Cloud, Wrench } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 90 },
      { name: "NestJS", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "Hono.js", level: 80 },
      { name: "REST APIs", level: 92 },
      { name: "JWT & Auth", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 88 },
      { name: "Prisma ORM", level: 87 },
      { name: "Mongoose", level: 85 },
    ],
  },
  {
    title: "Real-Time",
    icon: Zap,
    items: [
      { name: "Socket.IO", level: 88 },
      { name: "WebSockets", level: 85 },
      { name: "Live Tracking", level: 85 },
      { name: "Notifications", level: 84 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    items: [
      { name: "Vercel", level: 95 },
      { name: "Railway", level: 88 },
      { name: "Hostinger", level: 85 },
      { name: "Git & GitHub", level: 92 },
      { name: "CI/CD", level: 82 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Cloudinary", level: 85 },
      { name: "WooCommerce", level: 82 },
      { name: "Postman", level: 88 },
      { name: "Performance", level: 88 },
      { name: "SEO", level: 85 },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const viewport = { once: true, margin: "-80px" } as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="section relative px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-4">What I Work With</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Skills &amp; Expertise
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Building scalable systems with modern technologies and clean
            architecture.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="h-full"
              >
                <div className="card card-hover h-full p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
                    <Icon className="h-4 w-4 text-indigo-300" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="text-zinc-400">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #6366f1, #8b5cf6)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 flex justify-center"
        >
          <div className="card max-w-xl px-8 py-5 text-center">
            <p className="text-sm leading-relaxed text-zinc-400">
              Focused on{" "}
              <span className="text-indigo-300">performance</span>,{" "}
              <span className="text-violet-300">scalability</span>, and building
              real-world applications that deliver seamless user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
