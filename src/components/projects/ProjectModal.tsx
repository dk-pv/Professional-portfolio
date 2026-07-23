"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Cpu,
  ArrowRight,
} from "lucide-react";

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
  const images: string[] = isApp
    ? project.images?.[mode] ?? []
    : [project.image];

  useEffect(() => setImgIndex(0), [mode]);

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const prevImg = () =>
    setImgIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImg = () =>
    setImgIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          initial={{ scale: 0.96, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111113] shadow-2xl shadow-black/60"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex-shrink-0 border-b border-white/[0.06] px-8 pb-5 pt-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-indigo-300">
                  {project.category}
                </span>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {isApp && (
              <div className="mt-5 flex gap-2">
                {(["user", "admin"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`rounded-xl px-5 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                      mode === m
                        ? "bg-indigo-500 text-white"
                        : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
                    }`}
                  >
                    {m === "user" ? "User View" : "Admin View"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Body */}
          <div className="flex-1 space-y-10 overflow-y-auto px-8 py-7">
            {/* Carousel */}
            <div className="relative h-[280px] overflow-hidden rounded-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${mode}-${imgIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[imgIndex] ?? project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white transition-colors hover:bg-black/80"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImg}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white transition-colors hover:bg-black/80"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: i === imgIndex ? 20 : 6,
                          background:
                            i === imgIndex ? "#6366f1" : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {isApp && (
                <span className="absolute right-3 top-3 z-10 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 text-xs font-medium capitalize text-zinc-300">
                  {mode} view
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            {/* Tech */}
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-indigo-300">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span key={tech} className="pill pill-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {isApp && project.features?.[mode] && (
              <div>
                <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-indigo-300">
                  {mode === "user" ? "User Features" : "Admin Features"}
                </h3>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {project.features[mode].map((f: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-indigo-400" />
                      <span className="text-xs leading-relaxed text-zinc-400">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case study */}
            {project.caseStudy && (
              <div className="space-y-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-xs font-medium uppercase tracking-widest text-indigo-300">
                  Case Study Preview
                </h3>
                {[
                  { label: "Problem", text: project.caseStudy.problem },
                  { label: "Solution", text: project.caseStudy.solution },
                  { label: "Result", text: project.caseStudy.result },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <p className="mb-1 text-xs font-semibold text-violet-300">
                      {label}
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture */}
            {project.caseStudy?.architecture && (
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-indigo-300">
                  <Cpu className="h-3.5 w-3.5" />
                  Architecture
                </h3>
                <div className="space-y-2">
                  {project.caseStudy.architecture.map(
                    (it: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
                        <span className="text-xs leading-relaxed text-zinc-500">
                          {it}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-shrink-0 flex-wrap items-center gap-3 border-t border-white/[0.06] px-8 py-5">
            <Link
              href={`/projects/${project.slug}`}
              className="btn btn-primary"
            >
              Full Case Study
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
