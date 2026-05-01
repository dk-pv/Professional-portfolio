"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Server } from "lucide-react";

const experiences = [
  {
    year: "2025 — Present",
    company: "SDEC (Calicut Business Park)",
    role: "MERN Stack Developer",
    color: "#f59e0b",
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
    color: "#06b6d4",
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
    color: "#f59e0b",
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

export default function Experience() {
  return (
    <section id="experience" className="relative py-40 px-6 overflow-hidden">

      {/* ── Static micro glows ── */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 450, height: 450,
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(80px)", top: "5%", left: "-8%",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(80px)", bottom: "5%", right: "-6%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase font-mono mb-4 flex items-center gap-3"
            style={{ color: "#f59e0b" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "#f59e0b" }} />
            Where I've Worked
          </motion.p>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-none"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 w-[2px] h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #f59e0b 20%, #06b6d4 65%, #f59e0b 85%, transparent)",
            }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.18 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.18 + 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.3 }}
                    className="absolute left-0 top-8 w-[42px] h-[42px] -translate-x-[calc(50%-1px)] flex items-center justify-center rounded-full z-10"
                    style={{
                      background: `radial-gradient(circle, ${exp.color}30, ${exp.color}10)`,
                      border: `2px solid ${exp.color}`,
                      boxShadow: `0 0 20px ${exp.color}50, 0 0 40px ${exp.color}20`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: exp.color }} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative rounded-3xl p-8 overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${exp.color}20`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${exp.color}45`;
                      el.style.boxShadow = `0 0 50px ${exp.color}12, 0 20px 60px rgba(0,0,0,0.4)`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${exp.color}20`;
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Top gradient accent */}
                    <div
                      className="absolute top-0 left-8 right-8 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)`,
                      }}
                    />

                    {/* Hover radial glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 15% 50%, ${exp.color}06, transparent 60%)`,
                      }}
                    />

                    {/* Year + Location row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5 relative z-10">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{
                          background: `${exp.color}12`,
                          border: `1px solid ${exp.color}28`,
                          color: exp.color,
                        }}
                      >
                        {exp.year}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs font-mono"
                        style={{ color: "#475569" }}
                      >
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Role */}
                    <h3
                      className="text-xl font-bold mb-1 relative z-10"
                      style={{ color: "#e2e8f0" }}
                    >
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p
                      className="text-sm font-mono mb-5 relative z-10"
                      style={{ color: "#475569" }}
                    >
                      @ {exp.company}
                    </p>

                    {/* Divider */}
                    <div
                      className="mb-5 h-px w-full"
                      style={{
                        background: `linear-gradient(90deg, ${exp.color}25, transparent)`,
                      }}
                    />

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-6 relative z-10"
                      style={{ color: "#94a3b8" }}
                    >
                      {exp.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono rounded-full transition-all duration-200"
                          style={{
                            background: `${exp.color}08`,
                            border: `1px solid ${exp.color}20`,
                            color: exp.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div
            className="px-8 py-5 rounded-2xl text-center max-w-xl"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.05), rgba(6,182,212,0.05))",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p className="text-xs font-mono" style={{ color: "#475569" }}>
              <span style={{ color: "#f59e0b" }}>SDEC</span>
              {" · "}
              <span style={{ color: "#94a3b8" }}>BridgeOn Solution</span>
              {" · "}
              <span style={{ color: "#06b6d4" }}>Cloud & DevOps</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}