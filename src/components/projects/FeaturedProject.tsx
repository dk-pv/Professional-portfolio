"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  project: any;
}

export default function FeaturedProject({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center mb-32"
    >
      {/* image */}

      <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* content */}

      <div>
        <h3 className="text-3xl font-bold mb-4 text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition"
          >
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}