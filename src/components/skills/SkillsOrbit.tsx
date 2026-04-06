"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  ShieldCheck,
  Zap,
  CreditCard,
  Wrench,
  Layers,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Auth",
    icon: ShieldCheck,
    items: [
      { name: "JWT", level: 90 },
      { name: "OAuth", level: 80 },
      { name: "OTP Auth", level: 85 },
    ],
  },
  {
    title: "Real-Time",
    icon: Zap,
    items: [{ name: "Socket.IO", level: 88 }],
  },
  {
    title: "Payments",
    icon: CreditCard,
    items: [{ name: "Stripe API", level: 85 }],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: "Architecture",
    icon: Layers,
    items: [
      { name: "MVC", level: 90 },
      { name: "Agile", level: 85 },
      { name: "Scrum", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[200px] opacity-20 top-0 left-0" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[200px] opacity-20 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building scalable systems with modern technologies and clean architecture.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition"
              >

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl" />

                {/* title */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <Icon className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                </div>

                {/* skills */}
                <div className="space-y-4 relative z-10">
                  {group.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>

                      {/* progress bar */}
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 max-w-xl mx-auto">
            I focus on performance, scalability, and building real-world applications
            that deliver seamless user experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}