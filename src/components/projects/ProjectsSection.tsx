"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const tabs = ["all", "website", "application"] as const;
type Tab = (typeof tabs)[number];
type Project = (typeof projects)[number];

export default function ProjectsSection() {
  const [tab, setTab] = useState<Tab>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    tab === "all" ? projects : projects.filter((p) => p.category === tab);

  return (
    <section id="projects" className="section relative px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow mb-4">What I&apos;ve Built</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Projects
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Real-world full-stack applications built with modern tech and clean
            architecture.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {tabs.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full border border-indigo-400/30 bg-indigo-500/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-sm text-zinc-500">
            No projects in this category yet.
          </p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
