"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2+", label: "Years Experience", color: "#f59e0b", sub: "yrs" },
  { value: "3+", label: "Projects Built", color: "#06b6d4", sub: "apps" },
  { value: "MERN", label: "Primary Stack", color: "#f59e0b", sub: "stack" },
  { value: "FastAPI", label: "Backend Tools", color: "#06b6d4", sub: "python" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #050505 0%, #000000 60%, #000000 100%)",
      }}
    >
      {/* ── Animated glow orbs ── */}
      <motion.div
        style={{
          y: bgY,
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          top: "-5%",
          left: "-10%",
          filter: "blur(90px)",
        }}
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          top: "-5%",
          left: "-10%",
          filter: "blur(90px)",
          opacity: 0.08,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          bottom: "-5%",
          right: "-10%",
          filter: "blur(90px)",
          opacity: 0.06,
        }}
      />

      {/* ── Grid texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-3"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
              className="w-8 h-px inline-block"
              style={{ background: "#f59e0b" }}
            />
            Who I Am
          </motion.p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl leading-relaxed"
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
            {/* Top accent line */}
            <div
              className="h-px mb-8 w-full"
              style={{
                background: "linear-gradient(90deg, #f59e0b, transparent)",
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
                  "inset 0 1px 0 rgba(245,158,11,0.08), 0 30px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-20"
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

              {/* Bottom tag row */}
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
                  ),
                )}
              </div>
            </motion.div>

            {/* ── Timeline strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl p-6 flex items-center gap-5"
              style={{
                background: "rgba(6,182,212,0.04)",
                border: "1px solid rgba(6,182,212,0.15)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background: "rgba(6,182,212,0.15)",
                  border: "1px solid rgba(6,182,212,0.3)",
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
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group relative rounded-2xl p-7 text-center cursor-default overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${stat.color}25`,
                  boxShadow: `0 0 0 0 ${stat.color}00`,
                }}
                onHoverStart={(e) => {
                  (e.target as HTMLElement).style.boxShadow =
                    `0 0 30px ${stat.color}15`;
                  (e.target as HTMLElement).style.borderColor =
                    `${stat.color}40`;
                }}
                onHoverEnd={(e) => {
                  (e.target as HTMLElement).style.boxShadow =
                    `0 0 0 0 ${stat.color}00`;
                  (e.target as HTMLElement).style.borderColor =
                    `${stat.color}25`;
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}08, transparent 70%)`,
                  }}
                />

                {/* Top accent */}
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

            {/* ── Wide bottom card ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="col-span-2 rounded-2xl p-6 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(6,182,212,0.06))",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.03) 0%, transparent 50%, rgba(6,182,212,0.03) 100%)",
                }}
              />
              <p
                className="text-xs font-mono text-center relative z-10"
                style={{ color: "#475569" }}
              >
                <span style={{ color: "#f59e0b" }}>Frontend</span> ·{" "}
                <span style={{ color: "#94a3b8" }}>Backend</span> ·{" "}
                <span style={{ color: "#06b6d4" }}>Database</span> ·{" "}
                <span style={{ color: "#94a3b8" }}>DevOps</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
