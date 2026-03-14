"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButtons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-44 px-6 overflow-hidden"
    >

      {/* background glow */}

      <div className="absolute w-[700px] h-[700px] bg-indigo-500 blur-[220px] opacity-20 rounded-full -top-20 left-0"/>
      <div className="absolute w-[600px] h-[600px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-0 right-0"/>

      {/* spotlight layer */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"/>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* heading */}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
        >
          Let’s Build Something Amazing
        </motion.h2>

        {/* subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          I’m always open to discussing new projects, creative ideas or
          opportunities to be part of an amazing team.
        </motion.p>

        {/* CTA buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >

          <MagneticButton>
            Contact  Me
          </MagneticButton>

          <MagneticButton>
            View Projects
          </MagneticButton>

        </motion.div>

        {/* divider */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-[1px] bg-white/10 my-16"
        />

        {/* social icons */}

        <div className="flex justify-center gap-8">

          <motion.a
            whileHover={{ y: -6, scale: 1.1 }}
            href="https://github.com"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
          >
            <Github className="text-gray-300"/>
          </motion.a>

          <motion.a
            whileHover={{ y: -6, scale: 1.1 }}
            href="https://linkedin.com"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
          >
            <Linkedin className="text-gray-300"/>
          </motion.a>

          <motion.a
            whileHover={{ y: -6, scale: 1.1 }}
            href="mailto:danish.pv999@gmail.com"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
          >
            <Mail className="text-gray-300"/>
          </motion.a>

        </div>

        {/* contact info */}

        <div className="mt-10 text-gray-400 text-sm space-y-2">

          <p>
            <span className="text-gray-300">Email:</span> danish.pv999@gmail.com
          </p>

          <p>
            <span className="text-gray-300">Phone:</span> +91 7994890280
          </p>

        </div>

      </div>
    </section>
  );
}