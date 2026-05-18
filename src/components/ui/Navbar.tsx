"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Shrink navbar on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-2
          rounded-full border border-white/10
          px-3 py-2
          transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-2xl bg-[#020617]/80 shadow-xl shadow-black/30"
              : "backdrop-blur-xl bg-white/5"
          }
        `}
      >
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mr-3 px-3 py-1 font-[Syne] font-bold text-sm text-white tracking-tight hover:text-indigo-400 transition-colors"
        >
          Danish<span className="text-indigo-400">.</span>
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mr-2" />

        {/* Links */}
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`
                relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-white bg-indigo-500/20 border border-indigo-500/40"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-indigo-500/15 border border-indigo-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 ml-2" />

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200 shadow-lg shadow-indigo-500/25"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden ml-2 p-2 rounded-full hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <span className="block w-4 h-px bg-white mb-1" />
          <span className="block w-4 h-px bg-white mb-1" />
          <span className="block w-2 h-px bg-white" />
        </button>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 rounded-2xl border border-white/10 backdrop-blur-2xl bg-[#020617]/90 p-4 flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                {link.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="mt-1 px-4 py-3 rounded-xl text-sm font-semibold bg-indigo-500 text-white text-center"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
