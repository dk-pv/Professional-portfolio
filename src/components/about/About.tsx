"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "ERP", label: "Enterprise Apps" },
  { value: "NestJS", label: "Backend Framework" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const viewport = { once: true, margin: "-80px" } as const;

export default function About() {
  return (
    <section id="about" className="section relative px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-4">Professional Summary</p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            About Me
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            I build the systems businesses run on — ERP platforms, real-time
            tracking and internal tooling used by real teams. My work lives in
            the parts that are hard to get right: data modeling, access control,
            real-time reliability, and APIs that stay clean as a product grows.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="card card-hover p-8">
              <p className="text-base leading-relaxed text-zinc-300">
                Over the last two years I&apos;ve shipped enterprise software
                end to end:{" "}
                <span className="font-medium text-violet-300">
                  Emarath ERP
                </span>
                , an HR management system, and{" "}
                <span className="font-medium text-white">FleetTrack</span> — a
                real-time vehicle-tracking platform that streams live telemetry
                over WebSockets. I own features from the database schema and API
                design through to the interface teams use every day.
              </p>

              <div className="my-6 h-px w-full bg-white/[0.06]" />

              <p className="text-base leading-relaxed text-zinc-300">
                I work across the stack with intent — modeling data in
                PostgreSQL and MongoDB, building secure REST APIs with{" "}
                <span className="font-medium text-indigo-300">
                  role-based access control
                </span>
                , adding real-time features with{" "}
                <span className="font-medium text-violet-300">Socket.IO</span>,
                and shipping responsive Next.js frontends. I optimize for the
                next engineer: clear boundaries, predictable APIs, and code
                that&apos;s straightforward to extend.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "NestJS",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Prisma",
                  "Socket.IO",
                ].map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Current */}
            <div className="card mt-5 flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-lg">
                🚀
              </div>

              <div>
                <p className="text-sm font-medium text-green-400">
                  Currently Working On
                </p>

                <p className="mt-0.5 text-xs text-zinc-500">
                  Building Emarath ERP and internal enterprise tooling —
                  shipping new modules, tightening business workflows, and
                  adding AI-assisted automation where it removes real manual
                  work.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="card card-hover p-6 text-center"
              >
                <h3 className="text-3xl font-semibold leading-none text-white sm:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="card col-span-2 p-5 text-center"
            >
              <p className="text-xs tracking-wide text-zinc-500">
                <span className="text-indigo-300">
                  React & Next.js
                </span>
                {" · "}
                <span className="text-zinc-300">
                  NestJS & Node.js
                </span>
                {" · "}
                <span className="text-violet-300">
                  PostgreSQL & MongoDB
                </span>
                {" · "}
                <span className="text-zinc-300">
                  ERP • Real-Time • AI
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}