"use client";

import { motion } from "framer-motion";

export default function GlowButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative px-8 py-3 rounded-full text-black font-bold text-sm tracking-wide overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
        boxShadow: "0 0 25px rgba(245,158,11,0.4)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 45px rgba(245,158,11,0.7), 0 0 80px rgba(6,182,212,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(245,158,11,0.4)";
      }}
    >
      {/* shimmer sweep */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)", backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}