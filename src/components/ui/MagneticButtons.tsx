"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "amber" | "outline";
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
    if (ref.current)
      ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const isOutline = variant === "outline";

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.93 }}
      className="relative px-8 py-3 rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300"
      style={{
        background: isOutline
          ? "rgba(245,158,11,0.06)"
          : "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
        border: isOutline ? "1px solid rgba(245,158,11,0.35)" : "none",
        color: isOutline ? "#f59e0b" : "#000",
        boxShadow: isOutline ? "none" : "0 0 22px rgba(245,158,11,0.35)",
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = isOutline
          ? "0 0 25px rgba(245,158,11,0.2)"
          : "0 0 45px rgba(245,158,11,0.6), 0 0 80px rgba(6,182,212,0.2)";
        if (isOutline) el.style.background = "rgba(245,158,11,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = isOutline ? "none" : "0 0 22px rgba(245,158,11,0.35)";
        if (isOutline) el.style.background = "rgba(245,158,11,0.06)";
        reset();
      }}
    >
      {/* shimmer on solid variant */}
      {!isOutline && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
            backgroundSize: "250% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}