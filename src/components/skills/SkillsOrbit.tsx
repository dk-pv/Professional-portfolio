"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose"],
  },
  {
    title: "Authentication",
    items: ["JWT", "OAuth", "OTP Auth"],
  },
  {
    title: "Real-Time",
    items: ["Socket.IO"],
  },
  {
    title: "Payments",
    items: ["Stripe API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Axios", "npm"],
  },
  {
    title: "Architecture",
    items: ["MVC", "Agile", "Scrum"],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[200px] opacity-20 top-0 left-0" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[200px] opacity-20 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting scalable, high-performance web applications with modern technologies.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition"
            >

              {/* glow hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />

              {/* title */}
              <h3 className="text-xl font-semibold mb-6 relative z-10">
                {group.title}
              </h3>

              {/* items */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

        {/* bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            I focus on building production-ready applications with clean architecture,
            optimized performance, and scalable backend systems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}