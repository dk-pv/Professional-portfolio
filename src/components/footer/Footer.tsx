"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { href: "https://github.com/dk-pv", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/danish-pv/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:danish.pv999@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white">Danish Pv</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm text-zinc-400 md:mx-0">
              Full Stack Developer building scalable web applications and modern
              digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Connect</h4>
            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-indigo-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.06] pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Danish Pv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
