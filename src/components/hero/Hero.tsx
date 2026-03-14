"use client";

import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButtons";
import GridBackground from "../ui/GridBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* particles */}
      <HeroParticles />
      <GridBackground />

      {/* glow background */}
      <div className="absolute w-[700px] h-[700px] bg-indigo-500 blur-[220px] opacity-25 rounded-full top-10 left-0" />
      <div className="absolute w-[600px] h-[600px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-indigo-400 mb-4 text-sm tracking-widest uppercase">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Danish PV
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Building scalable full-stack applications and futuristic web
            experiences using modern technologies and clean architecture.
          </p>

          {/* Glass Card */}

          <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
            <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md shadow-xl">
              <p className="text-gray-300 text-sm">
                Specializing in MERN stack, high-performance UI, and cinematic
                web interactions.
              </p>
            </div>
          </Tilt>

          {/* Buttons */}
<div className="mt-10 flex gap-6 flex-wrap">

  <MagneticButton>
    View Projects
  </MagneticButton>

  <MagneticButton>
    Contact Me
  </MagneticButton>

</div>
        </motion.div>

        {/* RIGHT SIDE (Avatar Card) */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <Tilt glareEnable glareMaxOpacity={0.25} scale={1.05}>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[380px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-3xl bg-indigo-500 blur-3xl opacity-20" />

              <div className="relative w-full h-full">
                <Image
                  src="/danish.png"
                  alt="Danish PV"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm"
      >
        <div className="w-[26px] h-[42px] border border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>

        <span className="mt-2 text-xs">Scroll</span>
      </motion.div>
    </section>
  );
}
