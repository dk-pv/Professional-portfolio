"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
      >
        Danish Pv...
      </motion.h1>
    </motion.div>
  );
}
