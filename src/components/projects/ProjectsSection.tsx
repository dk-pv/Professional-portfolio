"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const tabs = ["all", "website", "application"];

export default function ProjectsSection() {
  const [tab, setTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filtered =
    tab === "all" ? projects : projects.filter((p) => p.category === tab);

  return (
    <section id="projects" className="relative py-40 px-6 overflow-hidden">

      {/* ── Static micro glows ── */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(90px)", top: "5%", right: "-8%",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 450, height: 450,
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)", bottom: "10%", left: "-6%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
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
            What I've Built
          </motion.p>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </h2>

          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#64748b" }}>
            Real-world full-stack applications built with modern tech and clean architecture.
          </p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-3 mb-14 flex-wrap"
        >
          {tabs.map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-xl text-sm capitalize font-mono transition-all duration-300 relative"
              style={
                tab === t
                  ? {
                      background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                      color: "#000",
                      fontWeight: 700,
                      boxShadow: "0 0 20px rgba(245,158,11,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#475569",
                    }
              }
            >
              {t}
              {tab === t && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Projects Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-sm font-mono" style={{ color: "#475569" }}>
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </div>

      {/* ── Modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}