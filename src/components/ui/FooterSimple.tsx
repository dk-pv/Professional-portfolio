"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import GridBackground from "@/components/ui/GridBackground";

const socials = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:danish.pv999@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-14 px-6" style={{ borderTop: "1px solid rgba(245,158,11,0.12)" }}>
      <GridBackground />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <span
            className="text-xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Danish Pv
          </span>
          <p className="text-xs font-mono" style={{ color: "#475569" }}>
            © 2026 · Built with Next.js & Tailwind
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-3"
        >
          {socials.map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center group transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#475569",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(245,158,11,0.4)";
                el.style.color = "#f59e0b";
                el.style.boxShadow = "0 0 20px rgba(245,158,11,0.15)";
                el.style.background = "rgba(245,158,11,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.color = "#475569";
                el.style.boxShadow = "none";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient rule */}
      <div
        className="mt-10 h-px max-w-6xl mx-auto"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.25), rgba(6,182,212,0.25), transparent)",
        }}
      />
    </footer>
  );
}