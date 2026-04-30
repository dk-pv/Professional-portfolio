"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {/* Amber → Cyan wipe curtain on enter */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9990]"
          initial={{ scaleX: 1, transformOrigin: "left center" }}
          animate={{ scaleX: 0, transformOrigin: "right center" }}
          transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
          style={{
            background:
              "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #06b6d4 100%)",
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}