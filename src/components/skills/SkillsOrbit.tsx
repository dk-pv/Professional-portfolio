"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Axios", "Stripe API"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-36 px-6 overflow-hidden">

      {/* glow background */}

      <div className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[200px] opacity-20 rounded-full top-20 left-0" />
      <div className="absolute w-[500px] h-[500px] bg-green-400 blur-[200px] opacity-20 rounded-full bottom-0 right-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Skills
          </h2>

          <p className="text-gray-400 mt-5 max-w-lg mx-auto">
            Technologies I use to build scalable full-stack applications and
            modern web experiences.
          </p>
        </motion.div>

        {/* skills grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-indigo-500/20 hover:border-indigo-400/30 transition"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
