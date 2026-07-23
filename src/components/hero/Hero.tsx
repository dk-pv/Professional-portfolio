"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const TECH = ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* ── LEFT ── */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="eyebrow mb-5">
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-white">Danish </span>
            <span className="text-gradient">Pv</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-9 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Building scalable full-stack applications and polished, modern web
            experiences with clean architecture and thoughtful detail.
          </motion.p>

          {/* Info card */}
          <motion.div
            variants={item}
            className="card max-w-md p-5"
          >
            <p className="text-sm leading-relaxed text-zinc-400">
              Specializing in the{" "}
              <span className="font-medium text-indigo-300">MERN stack</span>,
              high-performance UI, and{" "}
              <span className="font-medium text-violet-300">
                refined web interactions
              </span>
              .
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Tech pills */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {TECH.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Available badge */}
          <div className="absolute -top-2 right-2 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for work
          </div>

          {/* Static soft ring */}
          <div className="absolute h-[420px] w-[340px] rounded-[2rem] border border-white/[0.06]" />

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[380px] w-[300px] rounded-[1.75rem] p-px"
            style={{
              background:
                "linear-gradient(150deg, rgba(99,102,241,0.5), rgba(139,92,246,0.25) 45%, rgba(255,255,255,0.04))",
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-zinc-950">
              {/* Corner brackets */}
              <span className="absolute left-3 top-3 z-20 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-indigo-400/70" />
              <span className="absolute right-3 top-3 z-20 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-indigo-400/70" />
              <span className="absolute bottom-3 left-3 z-20 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-violet-400/60" />
              <span className="absolute bottom-3 right-3 z-20 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-violet-400/60" />

              <Image
                src="/danish.png"
                alt="Danish Pv"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 300px"
                className="object-cover"
              />

              {/* Name tag */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-2 text-xs backdrop-blur-sm">
                <span className="font-medium text-white">Danish Pv</span>
                <span className="text-indigo-300">Full Stack Dev</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
