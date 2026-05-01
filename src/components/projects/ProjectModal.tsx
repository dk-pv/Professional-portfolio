"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle2, Cpu, ArrowRight } from "lucide-react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"user" | "admin">("user");
  const [imgIndex, setImgIndex] = useState(0);

  const isApp = project.category === "application";
  const images = isApp ? (project.images?.[mode] ?? []) : [project.image];

  // Reset image index on mode change
  useEffect(() => setImgIndex(0), [mode]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const prevImg = () => setImgIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImg = () => setImgIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl pointer-events-auto flex flex-col"
          style={{
            background: "#080808",
            border: "1px solid rgba(245,158,11,0.2)",
            boxShadow: "0 0 80px rgba(245,158,11,0.08), 0 40px 120px rgba(0,0,0,0.8)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top gradient accent */}
          <div
            className="absolute top-0 left-12 right-12 h-px z-10"
            style={{
              background: "linear-gradient(90deg, transparent, #f59e0b, #06b6d4, transparent)",
            }}
          />

          {/* ── HEADER (sticky) ── */}
          <div
            className="flex-shrink-0 px-8 pt-7 pb-5"
            style={{ borderBottom: "1px solid rgba(245,158,11,0.08)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className="text-xs font-mono tracking-widest uppercase mb-2 block"
                  style={{ color: "#f59e0b" }}
                >
                  {project.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: "#e2e8f0" }}>
                  {project.title}
                </h2>
              </div>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* User / Admin toggle */}
            {isApp && (
              <div className="flex gap-2 mt-5">
                {(["user", "admin"] as const).map((m) => (
                  <motion.button
                    key={m}
                    onClick={() => setMode(m)}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300"
                    style={
                      mode === m
                        ? {
                            background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                            color: "#000",
                            boxShadow: "0 0 20px rgba(245,158,11,0.3)",
                          }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#64748b",
                          }
                    }
                  >
                    {m === "user" ? "👤 User View" : "🛡️ Admin View"}
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div className="flex-1 overflow-y-auto scrollbar-thin px-8 py-7 space-y-10">

            {/* ── Image Carousel ── */}
            <div className="relative rounded-2xl overflow-hidden bg-black" style={{ height: 280 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${mode}-${imgIndex}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[imgIndex] ?? project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Image overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Carousel nav (only if > 1 image) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center z-10"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      color: "#f59e0b",
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center z-10"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      color: "#f59e0b",
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === imgIndex ? 20 : 6,
                          height: 6,
                          background: i === imgIndex ? "#f59e0b" : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Mode label */}
              {isApp && (
                <div
                  className="absolute top-3 right-3 text-xs font-mono px-2.5 py-1 rounded-lg capitalize z-10"
                  style={{
                    background: "rgba(0,0,0,0.75)",
                    border: `1px solid ${mode === "user" ? "rgba(245,158,11,0.3)" : "rgba(6,182,212,0.3)"}`,
                    color: mode === "user" ? "#f59e0b" : "#06b6d4",
                  }}
                >
                  {mode} view
                </div>
              )}
            </div>

            {/* ── Description ── */}
            <div>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {project.description}
              </p>
            </div>

            {/* ── Tech Stack ── */}
            <div>
              <h3
                className="text-xs font-mono tracking-widest uppercase mb-3"
                style={{ color: "#f59e0b" }}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono rounded-full"
                    style={{
                      background: "rgba(6,182,212,0.08)",
                      border: "1px solid rgba(6,182,212,0.2)",
                      color: "#06b6d4",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Features ── */}
            {isApp && project.features?.[mode] && (
              <div>
                <h3
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: mode === "user" ? "#f59e0b" : "#06b6d4" }}
                >
                  {mode === "user" ? "👤 User Features" : "🛡️ Admin Features"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.features[mode].map((f: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-2.5 p-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: `1px solid ${mode === "user" ? "rgba(245,158,11,0.1)" : "rgba(6,182,212,0.1)"}`,
                      }}
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: mode === "user" ? "#f59e0b" : "#06b6d4" }}
                      />
                      <span className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Case Study preview ── */}
            {project.caseStudy && (
              <div
                className="rounded-2xl p-6 space-y-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(245,158,11,0.1)",
                }}
              >
                <h3
                  className="text-xs font-mono tracking-widest uppercase"
                  style={{ color: "#f59e0b" }}
                >
                  Case Study Preview
                </h3>

                {[
                  { label: "Problem", text: project.caseStudy.problem },
                  { label: "Solution", text: project.caseStudy.solution },
                  { label: "Result", text: project.caseStudy.result },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#06b6d4" }}>
                      {label}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ── Architecture ── */}
            {project.caseStudy?.architecture && (
              <div>
                <h3
                  className="text-xs font-mono tracking-widest uppercase mb-4 flex items-center gap-2"
                  style={{ color: "#f59e0b" }}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  Architecture
                </h3>
                <div className="space-y-2">
                  {project.caseStudy.architecture.map((item: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl"
                      style={{
                        background: "rgba(6,182,212,0.04)",
                        border: "1px solid rgba(6,182,212,0.1)",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: "#06b6d4" }}
                      />
                      <span className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── FOOTER (sticky) ── */}
          <div
            className="flex-shrink-0 px-8 py-5 flex flex-wrap items-center gap-3"
            style={{ borderTop: "1px solid rgba(245,158,11,0.08)" }}
          >
            <Link href={`/projects/${project.slug}`}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  boxShadow: "0 0 25px rgba(245,158,11,0.35)",
                }}
              >
                Full Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.25)",
                color: "#06b6d4",
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#64748b",
              }}
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}