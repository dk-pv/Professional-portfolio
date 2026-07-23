"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
      style={{ background: "#09090b" }}
    >
      <div className="flex overflow-hidden">
        {"Danish Pv".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-gradient text-5xl font-semibold md:text-6xl"
            style={{ marginRight: char === " " ? "0.28em" : "0" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </div>

      <div
        className="relative h-px w-44 overflow-hidden rounded-full"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500"
      >
        Full Stack Developer
      </motion.p>
    </motion.div>
  );
}
