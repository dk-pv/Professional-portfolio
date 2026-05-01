"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: any;
  onClick: () => void;
}) {
  return (
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.08}>
      <motion.div
        onClick={onClick}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group relative rounded-2xl overflow-hidden cursor-pointer w-full"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(245,158,11,0.15)",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(245,158,11,0.4)";
          el.style.boxShadow =
            "0 0 50px rgba(245,158,11,0.1), 0 20px 60px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(245,158,11,0.15)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, transparent, #f59e0b, transparent)",
          }}
        />

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 z-20 text-xs font-mono px-2.5 py-1 rounded-full capitalize"
          style={{
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(245,158,11,0.25)",
            color: "#f59e0b",
          }}
        >
          {project.category}
        </div>

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center gap-3"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e2e8f0",
              }}
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </motion.a>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                color: "#000",
                fontWeight: 700,
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-lg font-bold" style={{ color: "#e2e8f0" }}>
              {project.title}
            </h3>
            <ArrowUpRight
              className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "#f59e0b" }}
            />
          </div>

          <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full font-mono"
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

          {/* View Details hint */}
          <div
            className="mt-5 pt-4 flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              borderTop: "1px solid rgba(245,158,11,0.12)",
              color: "#f59e0b",
            }}
          >
            <span>Click to explore</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>

        {/* Hover radial glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(245,158,11,0.05), transparent 65%)",
          }}
        />
      </motion.div>
    </Tilt>
  );
}