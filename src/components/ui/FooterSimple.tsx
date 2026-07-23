"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/dk-pv", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/danish-pv/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:danish.pv999@gmail.com", icon: Mail, label: "Email" },
];

export default function FooterSimple() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="text-lg font-semibold text-white">Danish Pv</span>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-indigo-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
