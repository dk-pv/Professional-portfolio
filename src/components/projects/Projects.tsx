// "use client";

// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import Image from "next/image";

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
//       "Booking management platform with invoices, payments and admin dashboard.",
//     tech: ["Next.js", "Express", "MongoDB", "Tailwind"],
//     image: "/limoxy.png",
//     github: "#",
//     live: "#",
//   },

//   {
//     title: "Fetch Kids",
//     description:
//       "E-commerce platform with admin reporting system and Google Drive integration.",
//     tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
//     image: "/fetch-kids.png",
//     github: "#",
//     live: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-40 px-6 overflow-hidden">
//       {/* background glow */}

//       <div className="absolute w-[600px] h-[600px] bg-indigo-500 blur-[220px] opacity-20 rounded-full top-20 left-0" />
//       <div className="absolute w-[500px] h-[500px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-10 right-0" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* title */}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           ```
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-green-400 text-transparent bg-clip-text">
//             Projects
//           </h2>
//           <p className="text-gray-400 mt-6 max-w-xl mx-auto">
//             A selection of projects showcasing my work in full-stack development
//             and modern UI design.
//           </p>
//           ```
//         </motion.div>

//         {/* projects grid */}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {projects.map((project, index) => (
//             <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8}>
//               <motion.div
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition hover:border-indigo-400/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
//               >
//                 {/* project image */}

//                 <div className="relative h-56 overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover object-top group-hover:scale-110 transition duration-700"
//                   />

//                   {/* hover overlay buttons */}

//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
//                     <a
//                       href={project.github}
//                       className="px-4 py-2 text-sm rounded-lg bg-white/20 hover:bg-white/30 transition"
//                     >
//                       GitHub
//                     </a>

//                     <a
//                       href={project.live}
//                       className="px-4 py-2 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-400 transition"
//                     >
//                       Live
//                     </a>
//                   </div>
//                 </div>

//                 {/* content */}

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-white">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-400 mt-3 text-sm leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* tech stack */}

//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {project.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/20"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </Tilt>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import ProjectsSection from "./ProjectsSection";

export default function Page() {
  return (
    <>
      <ProjectsSection />
    </>
  );
}