"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Dim track */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[998]"
        style={{ background: "rgba(245,158,11,0.1)" }}
      />

      {/* Animated amber → cyan bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[999]"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #06b6d4 100%)",
            boxShadow: "0 0 10px rgba(245,158,11,0.6), 0 0 20px rgba(245,158,11,0.3)",
          }}
        />
      </motion.div>
    </>
  );
}