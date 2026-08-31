import Image from "next/image";
import Link from "next/link";

const TECH = ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO"];

export default function Hero() {
  return (
    <section id="home" className="wrap pb-8 pt-32 md:pb-12 md:pt-40">
      <div className="grid items-end gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        {/* ── Left: statement ── */}
        <div className="enter">
          <p className="mono-label mb-6">
            Available for work — Full Stack Developer
          </p>

          <h1 className="text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[1.02] tracking-tight">
            Danish Pv
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed md:text-xl">
            I build enterprise software end to end — ERP platforms, real-time
            tracking and business systems — with NestJS, PostgreSQL and
            Next.js, from data model to production.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-2)]">
            Most of my time goes into the parts you don&apos;t see: schema
            design, role-based access control, and keeping live data
            consistent over WebSockets.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/projects" className="btn btn-solid">
              View projects
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Resume
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(PDF, opens in new tab)</span>
            </a>
          </div>

          <p className="mono-label mt-10 text-[var(--ink-2)]">
            {TECH.join(" · ")}
          </p>
        </div>

        {/* ── Right: portrait ── */}
        <div className="enter-delay hidden md:block md:justify-self-end">
          <div className="frame aspect-[4/5] w-[280px] lg:w-[320px]">
            <Image
              src="/dk.webp"
              alt="Danish Pv"
              fill
              priority
              sizes="(max-width: 767px) 0px, 320px"
              className="object-cover"
            />
          </div>
          <p className="mono-label mt-3 text-[var(--ink-3)]">
            Calicut, Kerala — IST
          </p>
        </div>
      </div>
    </section>
  );
}
