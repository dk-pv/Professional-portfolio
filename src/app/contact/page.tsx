"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import FooterSimple from "@/components/ui/FooterSimple";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://formspree.io/f/mdapgkbb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch {
      setStatus("Network error ❌");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-400/60";

  return (
    <>
      <section className="section relative px-6 pt-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <p className="eyebrow mb-4 justify-center">Get In Touch</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Contact Me
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
              Whether it&apos;s an enterprise build, a full-stack role, or a hard
              problem worth solving — send a message and I&apos;ll get back to
              you.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
              autoComplete="off"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full !py-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-zinc-300"
                >
                  {status}
                </motion.p>
              )}
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="card space-y-4 p-7">
                <a
                  href="mailto:danish.pv999@gmail.com"
                  className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                    <Mail size={18} />
                  </span>
                  danish.pv999@gmail.com
                </a>
                <a
                  href="tel:+917994890280"
                  className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                    <Phone size={18} />
                  </span>
                  +91 79948 90280
                </a>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/dk-pv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-indigo-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/danish-pv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-indigo-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSimple />
    </>
  );
}
