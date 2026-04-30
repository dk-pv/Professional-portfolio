"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2+", label: "Years Experience", color: "#f59e0b" },
  { value: "3+", label: "Projects Built", color: "#06b6d4" },
  { value: "MERN", label: "Primary Stack", color: "#f59e0b" },
  { value: "FastAPI", label: "Backend Tools", color: "#06b6d4" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 px-6 overflow-hidden"
    >
      {/*
        NO <GridBackground /> here — it lives in layout.tsx (fixed, full page).
        Each section just needs its own subtle inline micro-glow
        so the zone feels distinct without re-rendering animations.
      */}

      {/* ── About micro-glow: amber bottom-left ── */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-10%",
          left: "-8%",
        }}
      />
      {/* ── About micro-glow: cyan top-right ── */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-8%",
          right: "-6%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
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
            <span
              className="inline-block w-8 h-px"
              style={{ background: "#f59e0b" }}
            />
            Who I Am
          </motion.p>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-none"
            style={{
              background:
                "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl leading-relaxed"
            style={{ color: "#64748b" }}
          >
            Passionate MERN Stack Developer focused on building scalable
            full-stack applications and modern web experiences with clean
            architecture and futuristic UI.
          </p>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Bio card ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Top accent rule */}
            <div
              className="h-px mb-8 w-full"
              style={{
                background:
                  "linear-gradient(90deg, #f59e0b, rgba(6,182,212,0.4), transparent)",
              }}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(245,158,11,0.15)",
                boxShadow:
                  "inset 0 1px 0 rgba(245,158,11,0.08), 0 30px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, #f59e0b, transparent)",
                }}
              />

              <p
                className="text-base leading-relaxed relative z-10"
                style={{ color: "#94a3b8" }}
              >
                I am a{" "}
                <span className="font-semibold" style={{ color: "#f59e0b" }}>
                  Full Stack Developer
                </span>{" "}
                specializing in the{" "}
                <span className="font-semibold" style={{ color: "#06b6d4" }}>
                  MERN stack
                </span>
                , building scalable and high-performance web applications using
                React, Next.js, Node.js and MongoDB.
              </p>

              <div
                className="my-6 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(245,158,11,0.3), transparent)",
                }}
              />

              <p
                className="text-base leading-relaxed relative z-10"
                style={{ color: "#94a3b8" }}
              >
                I enjoy crafting modern digital experiences with{" "}
                <span className="font-semibold" style={{ color: "#fbbf24" }}>
                  clean UI
                </span>
                ,{" "}
                <span className="font-semibold" style={{ color: "#06b6d4" }}>
                  smooth animations
                </span>{" "}
                and efficient backend systems.
              </p>

              {/* Tech tags */}
              <div className="mt-8 flex gap-2 flex-wrap">
                {["React", "Next.js", "Node.js", "MongoDB", "FastAPI"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full"
                      style={{
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.2)",
                        color: "#f59e0b",
                      }}
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Currently strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: "rgba(6,182,212,0.04)",
                border: "1px solid rgba(6,182,212,0.15)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.25)",
                }}
              >
                🚀
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#06b6d4" }}
                >
                  Currently
                </p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                  Building full-stack products & exploring AI integrations
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Stats grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative rounded-2xl p-7 text-center cursor-default overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${stat.color}22`,
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${stat.color}45`;
                  el.style.boxShadow = `0 0 35px ${stat.color}12`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${stat.color}22`;
                  el.style.boxShadow = "none";
                }}
              >
                {/* Hover glow layer */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}07, transparent 70%)`,
                  }}
                />

                {/* Top accent on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                  }}
                />

                <motion.h3
                  className="text-4xl font-black leading-none relative z-10"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.h3>

                <p
                  className="mt-3 text-xs uppercase tracking-wider font-mono relative z-10"
                  style={{ color: "#475569" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}

            {/* Full-width bottom tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              viewport={{ once: true }}
              className="col-span-2 rounded-2xl p-5 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.05), rgba(6,182,212,0.05))",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p className="text-xs font-mono" style={{ color: "#475569" }}>
                <span style={{ color: "#f59e0b" }}>Frontend</span>
                {" · "}
                <span style={{ color: "#94a3b8" }}>Backend</span>
                {" · "}
                <span style={{ color: "#06b6d4" }}>Database</span>
                {" · "}
                <span style={{ color: "#94a3b8" }}>DevOps</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}