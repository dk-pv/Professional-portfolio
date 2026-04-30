"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{ width: 600, height: 600, background: "radial-gradient(circle, #f59e0b, transparent 70%)", filter: "blur(120px)", top: "-20%", left: "-15%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute rounded-full"
        style={{ width: 500, height: 500, background: "radial-gradient(circle, #06b6d4, transparent 70%)", filter: "blur(120px)", bottom: "-10%", right: "-10%" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative flex flex-col items-center gap-10">

        {/* Animated name */}
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.08em" }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-5xl md:text-7xl font-black tracking-wide"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Danish Pv
        </motion.h1>

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xs font-mono tracking-[0.3em] uppercase"
          style={{ color: "#475569" }}
        >
          Full Stack Developer
        </motion.p>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: i === 1 ? "#06b6d4" : "#f59e0b" }}
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="h-[2px] rounded-full relative overflow-hidden"
          style={{ background: "linear-gradient(90deg, #f59e0b, #06b6d4)" }}
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/3 rounded-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}