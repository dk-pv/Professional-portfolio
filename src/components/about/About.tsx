"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* glow background */}

      <div className="absolute w-[600px] h-[600px] bg-indigo-500 blur-[220px] opacity-20 rounded-full top-0 left-10" />
      <div className="absolute w-[500px] h-[500px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-0 right-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* section header */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-green-400 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Passionate MERN Stack Developer focused on building scalable
            full-stack applications and modern web experiences with clean
            architecture and futuristic UI.
          </p>
        </motion.div>

        {/* main grid */}

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* developer card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-3xl bg-indigo-500 blur-3xl opacity-10" />

              <p className="text-gray-300 leading-relaxed relative z-10">
                I am a Full Stack Developer specializing in the MERN stack,
                building scalable and high-performance web applications using
                React, Next.js, Node.js and MongoDB.
                <br />
                <br />I enjoy crafting modern digital experiences with clean UI,
                smooth animations and efficient backend systems.
              </p>
            </motion.div>
          </motion.div>

          {/* stats */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {/* stat card */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition"
            >
              <h3 className="text-4xl font-bold text-indigo-400 group-hover:scale-110 transition">
                2+
              </h3>

              <p className="text-gray-400 mt-3 text-sm">Years Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition"
            >
              <h3 className="text-4xl font-bold text-green-400 group-hover:scale-110 transition">
                3+
              </h3>

              <p className="text-gray-400 mt-3 text-sm">Projects Built</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition"
            >
              <h3 className="text-3xl font-bold text-indigo-400 group-hover:scale-110 transition">
                MERN
              </h3>

              <p className="text-gray-400 mt-3 text-sm">Primary Stack</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition"
            >
              <h3 className="text-3xl font-bold text-green-400 group-hover:scale-110 transition">
                FastAPI
              </h3>

              <p className="text-gray-400 mt-3 text-sm">Backend Tools</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
