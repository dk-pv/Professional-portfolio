"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButtons";

export default function ContactCTA() {

  const router = useRouter();

  return (
    <section id="contact" className="relative py-44 px-6 overflow-hidden">

      {/* background glow */}

      <div className="absolute w-[700px] h-[700px] bg-indigo-500 blur-[220px] opacity-20 rounded-full -top-20 left-0"/>
      <div className="absolute w-[600px] h-[600px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-0 right-0"/>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"/>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
        >
          Let’s Build Something Amazing
        </motion.h2>

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >

          <MagneticButton onClick={() => router.push("/contact")}>
            Contact Me
          </MagneticButton>

          <MagneticButton onClick={() => router.push("/projects")}>
            View Projects
          </MagneticButton>

        </motion.div>

      </div>
    </section>
  );
}