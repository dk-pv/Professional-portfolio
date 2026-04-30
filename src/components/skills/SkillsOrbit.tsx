"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  ShieldCheck,
  Zap,
  CreditCard,
  Wrench,
  Layers,
  Cloud,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    color: "#f59e0b",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "#06b6d4",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Auth",
    icon: ShieldCheck,
    color: "#f59e0b",
    items: [
      { name: "JWT", level: 90 },
      { name: "OAuth", level: 80 },
      { name: "OTP Auth", level: 85 },
    ],
  },
  {
    title: "Real-Time",
    icon: Zap,
    color: "#06b6d4",
    items: [{ name: "Socket.IO", level: 88 }],
  },
  {
    title: "Payments",
    icon: CreditCard,
    color: "#f59e0b",
    items: [{ name: "Stripe API", level: 85 }],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "#06b6d4",
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: "Architecture",
    icon: Layers,
    color: "#f59e0b",
    items: [
      { name: "MVC", level: 90 },
      { name: "Agile", level: 85 },
      { name: "Scrum", level: 80 },
    ],
  },
  {
    title: "Hosting & Cloud",
    icon: Cloud,
    color: "#06b6d4",
    items: [
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 95 },
      { name: "Render", level: 88 },
      { name: "Hostinger", level: 85 },
    ],
  },
];

/* ── Hosting platform logos as SVG badges ── */
const hostingPlatforms = [
  {
    name: "Vercel",
    color: "#fff",
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    desc: "Frontend Deployments",
  },
  {
    name: "AWS",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.2)",
    desc: "Cloud Hosting",
  },
  {
    name: "Render",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.2)",
    desc: "Backend Services",
  },
  {
    name: "Hostinger",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.2)",
    desc: "Web Hosting",
  },
  {
    name: "GoDaddy",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.2)",
    desc: "Domain Management",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-40 px-6 overflow-hidden">

      {/* ── Micro glows (static, layout.tsx handles animated ones) ── */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "10%", left: "50%", transform: "translateX(-50%)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "5%", right: "-5%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

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
            What I Work With
          </motion.p>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills &{" "}
            <span style={{ display: "block" }}>Expertise</span>
          </h2>

          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#64748b" }}>
            Building scalable systems with modern technologies and clean architecture.
          </p>
        </motion.div>

        {/* ── Skills Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${group.color}18`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${group.color}40`;
                  el.style.boxShadow = `0 0 40px ${group.color}10, 0 20px 50px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${group.color}18`;
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                  }}
                />

                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${group.color}08, transparent 65%)`,
                  }}
                />

                {/* Title row */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${group.color}12`,
                      border: `1px solid ${group.color}25`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: group.color }} />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: "#e2e8f0" }}>
                    {group.title}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4 relative z-10">
                  {group.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span style={{ color: "#94a3b8" }}>{skill.name}</span>
                        <span className="font-mono" style={{ color: group.color }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Track */}
                      <div
                        className="w-full h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.1, delay: i * 0.12, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            background:
                              group.color === "#f59e0b"
                                ? "linear-gradient(90deg, #f59e0b, #fbbf24)"
                                : "linear-gradient(90deg, #06b6d4, #22d3ee)",
                          }}
                        >
                          {/* shimmer on bar */}
                          <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                            className="absolute inset-y-0 w-1/3 rounded-full"
                            style={{ background: "rgba(255,255,255,0.4)" }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Hosting & Deployment Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          {/* Top rule */}
          <div
            className="absolute top-0 left-12 right-12 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, #f59e0b, #06b6d4, transparent)",
            }}
          />

          {/* Corner glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-bl-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right, rgba(6,182,212,0.08), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                <Cloud className="w-4 h-4" style={{ color: "#f59e0b" }} />
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "#f59e0b" }}>
                  Deployment & Hosting
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#475569" }}>
                  End-to-end shipping — from local to live
                </p>
              </div>
            </div>

            {/* Platform cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {hostingPlatforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="group rounded-2xl p-4 text-center cursor-default transition-all duration-300"
                  style={{
                    background: platform.bg,
                    border: `1px solid ${platform.border}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${platform.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Dot indicator */}
                  <div className="flex justify-center mb-3">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: platform.color }}
                    />
                  </div>

                  <p
                    className="text-sm font-bold mb-1"
                    style={{ color: platform.color }}
                  >
                    {platform.name}
                  </p>
                  <p className="text-xs leading-tight" style={{ color: "#475569" }}>
                    {platform.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Bottom tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-mono"
            style={{
              background: "rgba(245,158,11,0.05)",
              border: "1px solid rgba(245,158,11,0.15)",
              color: "#64748b",
            }}
          >
            <span style={{ color: "#f59e0b" }}>⚡</span>
            Focused on performance, scalability and real-world production-ready apps
            <span style={{ color: "#06b6d4" }}>🚀</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}