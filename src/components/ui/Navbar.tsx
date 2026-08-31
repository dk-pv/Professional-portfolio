"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);
  const tickingRef = useRef(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Border-on-scroll. rAF-throttled, setState only on real change. */
  useEffect(() => {
    const update = () => {
      const next = window.scrollY > 8;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
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

  /* Close drawer on Escape, return focus to the toggle */
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[var(--bg)]/95 backdrop-blur-sm transition-shadow ${
        scrolled || mobileOpen ? "border-b border-[var(--line)]" : ""
      }`}
    >
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="text-[15px] font-semibold tracking-tight text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
        >
          Danish&nbsp;Pv
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  isActive
                    ? "text-[var(--ink)]"
                    : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-[var(--accent)] transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transformOrigin: "left" }}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline !min-h-0 !px-4 !py-1.5 text-sm"
          >
            Resume
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(PDF, opens in new tab)</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          onClick={() => setMobileOpen((p) => !p)}
          className="flex h-11 w-11 items-center justify-center text-[var(--ink)] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--line)] bg-[var(--bg)] px-6 py-4 md:hidden"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-[var(--line)] py-3.5 text-[15px] text-[var(--ink)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn btn-solid mt-4 w-full"
          >
            Resume
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(PDF, opens in new tab)</span>
          </a>
        </div>
      )}
    </header>
  );
}
