"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[999] h-px origin-left"
    >
      <div
        className="h-full w-full"
        style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
      />
    </motion.div>
  );
}
