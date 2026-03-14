// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import FeaturedProject from "./FeaturedProject";
// import ProjectCard from "./ProjectCard";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [

//   {
//     title: "VRS RealInvest",
//     description:
//       "Real estate investment platform with modern UI and property listing system.",
//     tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
//     image: "/vrs.png",
//     github: "#",
//     live: "#",
//   },

//   {
//     title: "Limoxy",
//     description:
//       "Booking management platform with invoices and admin dashboard.",
//     tech: ["Next.js", "Express", "MongoDB"],
//     image: "/limoxy.png",
//     github: "#",
//     live: "#",
//   },

//   {
//     title: "Fetch Kids",
//     description:
//       "E-commerce platform with reporting and integrations.",
//     tech: ["Next.js", "Node.js", "MongoDB"],
//     image: "/fetch-kids.png",
//     github: "#",
//     live: "#",
//   },
// ];

// export default function ProjectsSection() {

//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {

//     if (!scrollRef.current) return;

//     const el = scrollRef.current;

//     gsap.to(el, {
//       xPercent: -50,
//       ease: "none",
//       scrollTrigger: {
//         trigger: el,
//         start: "top center",
//         end: "+=1200",
//         scrub: true,
//         pin: true,
//       },
//     });

//   }, []);

//   return (
//     <section
//       id="projects"
//       className="relative py-40 overflow-hidden"
//     >

//       {/* spotlight cursor */}

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"/>

//       <div className="max-w-7xl mx-auto px-6">

//         {/* title */}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-green-400 text-transparent bg-clip-text">
//             Projects
//           </h2>

//           <p className="text-gray-400 mt-6 max-w-xl mx-auto">
//             A selection of projects showcasing my work in full-stack development
//             and modern UI design.
//           </p>
//         </motion.div>

//         {/* featured */}

//         <FeaturedProject project={projects[0]} />

//       </div>

//       {/* horizontal scroll */}

//       <div
//         ref={scrollRef}
//         className="flex gap-10 px-20"
//       >

//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}

//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "VRS RealInvest",
    description:
      "Real estate investment platform with modern UI and property listing system.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    image: "/vrs.png",
    github: "#",
    live: "#",
  },
  {
    title: "Limoxy",
    description:
      "Booking management platform with invoices and admin dashboard.",
    tech: ["Next.js", "Express", "MongoDB"],
    image: "/limoxy.png",
    github: "#",
    live: "#",
  },
  {
    title: "Fetch Kids",
    description:
      "E-commerce platform with reporting and integrations.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    image: "/fetch-kids.png",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

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

      <div
        ref={scrollRef}
        className="flex gap-10 px-20"
      >

        {projects.map((project, index) => (

          <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8}>

            <div className="w-[320px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

              <div className="relative h-48">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

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

    </section>
  );
}