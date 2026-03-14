"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative w-[320px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition hover:border-indigo-400/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
      >
        {/* image */}

        <div className="relative h-48 overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />

          {/* hover overlay */}

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

            <a
              href={project.github}
              className="px-4 py-2 text-sm rounded-lg bg-white/20 hover:bg-white/30 transition"
            >
              GitHub
            </a>

            <a
              href={project.live}
              className="px-4 py-2 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-400 transition"
            >
              Live
            </a>

          </div>
        </div>

        {/* content */}

        <div className="p-5">

          <h3 className="text-lg font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </Tilt>
  );
}