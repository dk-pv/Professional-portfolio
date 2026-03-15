"use client";

import { motion } from "framer-motion";

const skillCategories = [
  "Frontend",
  "Backend",
  "Auth",
  "Real-Time",
  "Payments",
  "Tools",
  "Architecture",
];

const stack = [
  "React.js",
  "Next.js",
  "Redux",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "MongoDB",
  "Mongoose",
  "JWT",
  "OAuth",
  "OTP Authentication",
  "Socket.IO",
  "Stripe API",
  "Git",
  "GitHub",
  "Postman",
  "Axios",
  "npm",
  "Agile",
  "Scrum",
  "MVC Architecture",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-40 px-6 overflow-hidden"
    >

      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[220px] opacity-20 rounded-full top-0 left-0" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[220px] opacity-20 rounded-full bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* left intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              I build things for the people
            </h3>

            <p className="italic text-gray-400">
              I can Design, Develop, Deploy
            </p>

            {/* categories */}
            <div className="mt-14">

              <div className="flex items-center gap-4 mb-5">
                <span className="text-lg font-medium">Skills →</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillCategories.map((cat, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-12">
                <span className="text-lg font-medium">Work Stack →</span>
              </div>

            </div>
          </motion.div>

          {/* right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            {/* paragraph */}
            <p className="text-gray-400 leading-relaxed mb-6">
              I specialize in building full-stack web applications using
              <span className="text-white"> Next.js, React, and the MERN stack</span>,
              focusing on scalable architecture and modern development
              practices.
            </p>

            <p className="text-gray-400 leading-relaxed mb-12">
              I enjoy designing user interfaces from scratch and implementing
              them with
              <span className="text-white"> Tailwind CSS and modern frontend tools</span>,
              creating fast, responsive, and production-ready web applications.
            </p>

            {/* stack grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
              {stack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-sm hover:text-white transition"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
