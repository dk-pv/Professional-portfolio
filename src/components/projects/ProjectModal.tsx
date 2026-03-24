"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ProjectModal({ project, onClose }: any) {
  const [mode, setMode] = useState<"user" | "admin">("user");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-lg flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-4xl w-full p-6 relative"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white"
          >
            ✕
          </button>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-white mb-4">
            {project.title}
          </h2>

          {/* TOGGLE */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setMode("user")}
              className={`px-4 py-2 rounded ${
                mode === "user" ? "bg-indigo-500" : "bg-white/10"
              }`}
            >
              User
            </button>

            <button
              onClick={() => setMode("admin")}
              className={`px-4 py-2 rounded ${
                mode === "admin" ? "bg-indigo-500" : "bg-white/10"
              }`}
            >
              Admin
            </button>
          </div>

          {/* IMAGE */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-4">
            <Image
              src={project.images?.[mode]?.[0]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* FEATURES */}
          <ul className="text-gray-400 text-sm space-y-1 mb-4">
            {project.features?.[mode]?.map((f: string, i: number) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="px-5 py-2 bg-indigo-500 rounded-lg"
            >
              View Case Study
            </Link>

            <a
              href={project.live}
              className="px-5 py-2 bg-white/10 rounded-lg"
            >
              Live
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}