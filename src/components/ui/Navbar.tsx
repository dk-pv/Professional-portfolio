"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);
  const hiddenRef = useRef(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  /* Shrink + hide-on-scroll-down / show-on-scroll-up.
     rAF-throttled and ref-guarded so setState only fires on real changes. */
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;

      const nextScrolled = y > 24;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      let nextHidden = hiddenRef.current;
      if (y < 80) nextHidden = false;
      else if (y > lastYRef.current + 6) nextHidden = true;
      else if (y < lastYRef.current - 6) nextHidden = false;

      if (nextHidden !== hiddenRef.current) {
        hiddenRef.current = nextHidden;
        setHidden(nextHidden);
      }

      lastYRef.current = y;
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via a single IntersectionObserver */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{
          y: hidden && !mobileOpen ? -96 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto flex items-center rounded-full glass transition-[gap,padding,box-shadow] duration-300 ${
          scrolled
            ? "gap-1 px-2 py-1.5 shadow-lg shadow-black/40"
            : "gap-1.5 px-3 py-2"
        }`}
        aria-label="Primary"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="mr-1 rounded-full px-3 py-1 text-sm font-bold tracking-tight text-white transition-colors hover:text-indigo-300"
          aria-label="Home"
        >
          D<span className="text-indigo-400">K</span>
        </Link>

        <span className="mx-1 hidden h-4 w-px bg-white/10 md:block" />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-indigo-400/30 bg-indigo-500/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <span className="mx-1 hidden h-4 w-px bg-white/10 md:block" />

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-colors duration-200 hover:bg-indigo-400 md:inline-block"
        >
          Resume ↗
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed left-4 right-4 top-20 z-40 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
