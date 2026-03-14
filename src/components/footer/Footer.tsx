"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10 overflow-hidden">

      {/* glow */}

      <div className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[200px] opacity-10 rounded-full top-0 left-0"/>
      <div className="absolute w-[400px] h-[400px] bg-green-400 blur-[200px] opacity-10 rounded-full bottom-0 right-0"/>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold text-white">
              Danish PV
            </h3>

            <p className="text-gray-400 mt-3 text-sm max-w-xs">
              Full Stack Developer building scalable web applications
              and modern digital experiences.
            </p>

          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <h4 className="text-white font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition cursor-pointer">
                About
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Projects
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

            </ul>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >

            <h4 className="text-white font-semibold mb-4">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-5">

              <motion.a
                whileHover={{ y: -4 }}
                href="https://github.com"
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
              >
                <Github size={18} className="text-gray-300"/>
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://linkedin.com"
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
              >
                <Linkedin size={18} className="text-gray-300"/>
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="mailto:danish.pv999@gmail.com"
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
              >
                <Mail size={18} className="text-gray-300"/>
              </motion.a>

            </div>

          </motion.div>

        </div>

        {/* bottom */}

        <div className="mt-14 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Danish PV. All rights reserved.

        </div>

      </div>

    </footer>
  );
}