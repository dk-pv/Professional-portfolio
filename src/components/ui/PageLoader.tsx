"use client";

import { motion } from "framer-motion";
import GridBackground from "@/components/ui/GridBackground";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Same animated background as rest of site */}
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center gap-10">

        {/* Name with letter stagger */}
        <div className="flex overflow-hidden">
          {"Danish Pv".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="text-6xl md:text-8xl font-black inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #fbbf24 45%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginRight: char === " " ? "0.3em" : "0",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Sub label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xs font-mono tracking-[0.35em] uppercase"
          style={{ color: "#475569" }}
        >
          Full Stack Developer
        </motion.p>

        {/* Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: i === 1 ? "#06b6d4" : "#f59e0b" }}
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{ width: 180, height: 2, background: "rgba(245,158,11,0.15)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #f59e0b, #fbbf24 50%, #06b6d4)",
            }}
          />
          {/* shimmer */}
          <motion.div
            animate={{ x: ["-100%", "250%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/4 rounded-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}