"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButtons";

export default function ContactCTA() {
  const router = useRouter();

  return (
    <section id="contact" className="section relative px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111113] px-8 py-16 text-center sm:px-16 sm:py-20">
        {/* Cheap static accent glow (radial-gradient, painted once) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.14), transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10"
        >
          <p className="eyebrow mb-5 justify-center">Get In Touch</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">exceptional</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of an ambitious team.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton onClick={() => router.push("/contact")}>
              Contact Me
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => router.push("/projects")}
            >
              View Projects
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
