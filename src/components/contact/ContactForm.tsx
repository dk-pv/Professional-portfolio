"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-[2px] border border-[#918d83] bg-white px-4 py-3.5 text-[var(--ink)] transition-colors focus:border-[var(--accent)]";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{
    kind: "ok" | "error" | "";
    text: string;
  }>({ kind: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ kind: "", text: "" });

    try {
      const res = await fetch("https://formspree.io/f/mdapgkbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ kind: "ok", text: "Message sent — I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ kind: "error", text: "Something went wrong. Please try again or email me directly." });
      }
    } catch {
      setStatus({ kind: "error", text: "Network error. Please try again or email me directly." });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mono-label mb-2 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mono-label mb-2 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mono-label mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
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
        className="btn btn-solid w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-5 text-sm ${
          status.kind === "error" ? "text-red-700" : "text-emerald-700"
        }`}
      >
        {status.text}
      </p>
    </form>
  );
}
