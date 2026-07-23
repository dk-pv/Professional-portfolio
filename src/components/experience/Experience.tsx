"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, MapPin, Server } from "lucide-react";

const experiences = [
  {
    year: "2025 — Present",
    company: "SDEC (Calicut Business Park)",
    role: "MERN Stack Developer",
    location: "Calicut, Kerala",
    icon: Briefcase,
    description:
      "Working on full-stack applications including booking systems, payments and admin dashboards using Node.js, Express.js, MongoDB and Next.js.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Admin Dashboard"],
  },
  {
    year: "2024 — 2025",
    company: "BridgeOn Solution",
    role: "MERN Stack Developer Intern",
    location: "Remote",
    icon: Briefcase,
    description:
      "Developed real-world MERN applications including job portals and educational platforms with authentication, REST APIs and real-time features.",
    tags: ["React", "Express.js", "REST API", "Socket.IO", "JWT"],
  },
  {
    year: "2024 — Present",
    company: "Self-Hosted Projects",
    role: "Cloud Deployment & DevOps",
    location: "Remote / Cloud",
    icon: Server,
    description:
      "Independently deployed and managed production-grade full-stack applications across multiple cloud platforms. Hosted projects on Hostinger with domain configuration via GoDaddy. Deployed backend services on AWS EC2 and S3, and used Render for Node.js APIs. Managed frontend deployments on Vercel with CI/CD pipelines via GitHub.",
    tags: [
      "AWS EC2",
      "AWS S3",
      "Vercel",
      "Render",
      "Hostinger",
      "GoDaddy DNS",
      "CI/CD",
      "GitHub Actions",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const viewport = { once: true, margin: "-80px" } as const;

export default function Experience() {
  return (
    <section id="experience" className="section relative px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <p className="eyebrow mb-4">Where I&apos;ve Worked</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-5 top-2 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(99,102,241,0.5) 12%, rgba(139,92,246,0.5) 70%, transparent)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.company}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="relative pl-16"
                >
                  {/* Node */}
                  <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/10 backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-indigo-300" />
                  </div>

                  {/* Card */}
                  <div className="card card-hover p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                        {exp.year}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      @ {exp.company}
                    </p>

                    <div className="my-5 h-px w-full bg-white/[0.06]" />

                    <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
