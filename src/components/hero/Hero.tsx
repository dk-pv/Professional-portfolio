"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroParticles from "./HeroParticles";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButtons";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityFade = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.06,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const name = "Danish Pv".split("");

  return (
    <section
      ref={containerRef}
    className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-20"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #050505 0%, #000000 60%, #000000 100%)",
      }}
    >
      <HeroParticles />

      {/* ── Glow Orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          top: "-10%",
          left: "-15%",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          bottom: "-5%",
          right: "-10%",
          filter: "blur(80px)",
        }}
      />

      {/* ── Diagonal accent line ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(245,158,11,0.03) 80px, rgba(245,158,11,0.03) 81px)",
        }}
      />

      {/* ── Floating badge top-right ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute top-32 right-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono tracking-widest"
        style={{
          borderColor: "rgba(6,182,212,0.3)",
          background: "rgba(6,182,212,0.05)",
          color: "#06b6d4",
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"
        />
        Available for hire
      </motion.div>

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* ── LEFT ── */}
     <div className="mt-6 md:mt-0">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xs tracking-[0.3em] uppercase font-mono flex items-center gap-3"
            style={{ color: "#f59e0b" }}
          >
            <span
              className="w-8 h-px inline-block"
              style={{ background: "#f59e0b" }}
            />
            Full Stack Developer
          </motion.p>

          {/* ── Animated name ── */}
          <h1
            className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight"
            style={{ perspective: "600px" }}
          >
            <span className="flex flex-wrap">
              {name.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{
                    background:
                      char === " "
                        ? "transparent"
                        : "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "#ffffff",
                    marginRight: char === " " ? "0.25em" : "0",
                    textShadow: "none",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            style={{ color: "#cbd5f5" }}
          >
            Building scalable full-stack applications and futuristic web
            experiences using modern technologies and clean architecture.
          </motion.p>

          {/* ── Glass info card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.1}
              scale={1.02}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
            >
              <div
                className="rounded-2xl p-5 max-w-md relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  boxShadow:
                    "inset 0 1px 0 rgba(245,158,11,0.1), 0 20px 40px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #f59e0b, transparent)",
                  }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#94a3b8" }}
                >
                  ⚡ Specializing in{" "}
                  <span style={{ color: "#f59e0b" }}>MERN stack</span>,
                  high-performance UI, and{" "}
                  <span style={{ color: "#06b6d4" }}>
                    cinematic web interactions
                  </span>
                  .
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-8 flex gap-4 flex-wrap items-center"
          >
            <Link href="/projects">
              <MagneticButton>View Projects</MagneticButton>
            </Link>
          </motion.div>

          {/* ── Tech stack pills ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-8 flex gap-2 flex-wrap"
          >
            {["React", "Next.js", "Node.js", "MongoDB", "TypeScript"].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + i * 0.08 }}
                  className="px-3 py-1 text-xs font-mono rounded-full"
                  style={{
                    background: "rgba(6,182,212,0.08)",
                    border: "1px solid rgba(6,182,212,0.2)",
                    color: "#06b6d4",
                  }}
                >
                  {tech}
                </motion.span>
              ),
            )}
          </motion.div>
        </div>

        {/* ── RIGHT (Avatar) ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center relative"
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[460px] rounded-3xl"
            style={{
              border: "1px dashed rgba(245,158,11,0.25)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[500px] rounded-3xl"
            style={{
              border: "1px dashed rgba(6,182,212,0.15)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <Tilt
            glareEnable
            glareMaxOpacity={0.15}
            scale={1.04}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[380px] rounded-3xl p-1 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(6,182,212,0.3))",
                boxShadow:
                  "0 0 60px rgba(245,158,11,0.15), 0 0 100px rgba(6,182,212,0.1)",
              }}
            >
              <div
                className="w-full h-full rounded-3xl overflow-hidden relative"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                {/* Corner accents */}
                <div
                  className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg z-20"
                  style={{ borderColor: "#f59e0b" }}
                />
                <div
                  className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg z-20"
                  style={{ borderColor: "#f59e0b" }}
                />
                <div
                  className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg z-20"
                  style={{ borderColor: "#06b6d4" }}
                />
                <div
                  className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 rounded-br-lg z-20"
                  style={{ borderColor: "#06b6d4" }}
                />

                <Image
                  src="/danish.png"
                  alt="Danish PV"
                  fill
                  className="object-cover"
                />

                {/* Bottom overlay tag */}
                <div
                  className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-xl text-xs font-mono z-20 flex justify-between items-center"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    color: "#f59e0b",
                  }}
                >
                  <span>Danish Pv</span>
                  <span style={{ color: "#06b6d4" }}>Full Stack Dev</span>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, #f59e0b, transparent)",
          }}
        />
        <span
          className="text-xs font-mono tracking-widest"
          style={{ color: "#f59e0b", opacity: 0.6 }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
