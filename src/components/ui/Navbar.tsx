"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
  backdrop-blur-xl bg-white/5 border border-white/10
  shadow-lg shadow-black/20
  px-10 py-3 rounded-full flex gap-8 items-center text-sm text-gray-300"
    >
      {/* Home button */}
      <a
        href="/"
        className="relative group hover:text-indigo-400 transition"
      >
        Home
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
      </a>

      {/* Other links */}
      {["about", "skills", "projects", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`} // 🔥 better for section scroll
          className="relative group hover:text-indigo-400 transition"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}

          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </motion.nav>
  );
}