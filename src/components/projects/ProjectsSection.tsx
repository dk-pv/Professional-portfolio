"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ProjectModal from "./ProjectModal";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);




export default function Projects() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
const [selectedProject, setSelectedProject] = useState<any>(null);
  /* Auto slider */

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* Horizontal scroll */

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    gsap.to(el, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "+=1200",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  const project = projects[index];

  return (
    <section id="projects" className="py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}

        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-green-400 text-transparent bg-clip-text">
            Projects
          </h2>
        </div>

        {/* FEATURED AUTO SLIDER */}

        <div className="mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[320px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, i) => (
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
          </AnimatePresence>
        </div>
      </div>

      {/* HORIZONTAL SCROLL PROJECTS */}

      <div ref={scrollRef} className="flex gap-10 px-20">
  {projects.map((project, index) => (
    <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <div
        onClick={() => setSelectedProject(project)}
        className="w-[320px] cursor-pointer backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-400/40 transition"
      >
        <div className="relative h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <span className="absolute top-3 left-3 text-xs bg-indigo-500 px-2 py-1 rounded">
            Admin Included
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            {project.description}
          </p>
        </div>
      </div>
    </Tilt>
  ))}
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
