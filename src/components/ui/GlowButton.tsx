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
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`relative px-8 py-3 rounded-full font-bold text-sm tracking-wide overflow-hidden text-black ${className}`}
      style={{
        background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
        boxShadow: "0 0 25px rgba(245,158,11,0.4)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 50px rgba(245,158,11,0.65), 0 0 90px rgba(6,182,212,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 25px rgba(245,158,11,0.4)";
      }}
    >
      {/* Shimmer sweep */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          backgroundSize: "250% 100%",
          backgroundPosition: "200% 0",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}