"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "amber" | "cyan" | "outline";
}

export default function MagneticButton({
  children,
  onClick,
  variant = "amber",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current!.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const styles = {
    amber: {
      background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      boxShadow: "0 0 20px rgba(245,158,11,0.35)",
      color: "#000",
      border: "none",
      hoverShadow: "0 0 40px rgba(245,158,11,0.6)",
    },
    cyan: {
      background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
      boxShadow: "0 0 20px rgba(6,182,212,0.35)",
      color: "#000",
      border: "none",
      hoverShadow: "0 0 40px rgba(6,182,212,0.6)",
    },
    outline: {
      background: "rgba(255,255,255,0.03)",
      boxShadow: "none",
      color: "#f59e0b",
      border: "1px solid rgba(245,158,11,0.35)",
      hoverShadow: "0 0 25px rgba(245,158,11,0.2)",
    },
  }[variant];

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      whileTap={{ scale: 0.94 }}
      className="relative px-8 py-3 rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300"
      style={{
        background: styles.background,
        boxShadow: styles.boxShadow,
        color: styles.color,
        border: styles.border,
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = styles.hoverShadow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = styles.boxShadow;
        reset();
      }}
    >
      {/* inner shimmer */}
      <motion.span
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}