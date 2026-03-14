"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-gray-400 text-sm">
          © 2026 Danish. Built with Next.js & Tailwind.
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com"
            className="text-gray-400 hover:text-white transition"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin />
          </a>

          <a
            href="mailto:danish.pv999@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            <Mail />
          </a>

        </div>

      </div>

    </footer>
  );
}
