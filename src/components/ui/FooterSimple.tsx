"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:danish.pv999@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 px-6" style={{ borderTop: "1px solid rgba(245,158,11,0.12)" }}>
      {/* subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.05), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span
            className="text-xs font-mono tracking-widest px-3 py-1 rounded-full"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b" }}
          >
            © 2026
          </span>
          <p className="text-sm" style={{ color: "#475569" }}>
            Danish Pv — Built with{" "}
            <span style={{ color: "#94a3b8" }}>Next.js</span> &{" "}
            <span style={{ color: "#94a3b8" }}>Tailwind</span>
          </p>
        </motion.div>

        {/* Right: social links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          {links.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#475569",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#f59e0b";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(245,158,11,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "#475569";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 h-px max-w-6xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.2), rgba(6,182,212,0.2), transparent)" }} />
    </footer>
  );
}