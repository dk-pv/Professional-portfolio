import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import FooterSimple from "@/components/ui/FooterSimple";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <article className="min-h-screen text-white">
        {/* Hero banner */}
        <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(9,9,11,0.35) 0%, rgba(9,9,11,0.75) 60%, #09090b 100%)",
            }}
          />

          <div className="absolute left-6 top-24 z-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-indigo-400/40 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Projects
            </Link>
          </div>

          <div className="absolute bottom-12 left-0 right-0 mx-auto max-w-6xl px-6">
            <span className="mb-3 block text-xs font-medium uppercase tracking-widest text-indigo-300">
              Case Study
            </span>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg text-zinc-300">
              {project.description}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-6xl space-y-24 px-6 py-20">
          {/* Tech */}
          <section>
            <SectionLabel icon={<Cpu className="h-3.5 w-3.5" />} label="Tech Stack" />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <span key={tech} className="pill pill-accent !text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* User experience */}
          <section>
            <SectionLabel label="User Experience" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {project.images.user.map((img, i) => (
                <div
                  key={i}
                  className="group relative h-52 overflow-hidden rounded-2xl border border-white/[0.06]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} user view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
            {(project.features.user?.length ?? 0) > 0 && (
              <FeatureList items={project.features.user} />
            )}
          </section>

          {/* Admin dashboard */}
          {(project.images.admin?.length ?? 0) > 0 && (
            <section>
              <SectionLabel label="Admin Dashboard" />
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {(project.images.admin ?? []).map((img, i) => (
                  <div
                    key={i}
                    className="group relative h-52 overflow-hidden rounded-2xl border border-white/[0.06]"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} admin view ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
              <FeatureList items={project.features.admin ?? []} />
            </section>
          )}

          {/* Case study */}
          <section>
            <SectionLabel label="Case Study" />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { icon: AlertCircle, label: "Problem", text: project.caseStudy.problem },
                { icon: Lightbulb, label: "Solution", text: project.caseStudy.solution },
                { icon: TrendingUp, label: "Result", text: project.caseStudy.result },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="card p-7">
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
                    <Icon className="h-4 w-4 text-indigo-300" />
                  </div>
                  <h3 className="mb-3 font-semibold text-white">{label}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section>
            <SectionLabel icon={<Cpu className="h-3.5 w-3.5" />} label="Architecture" />
            <div className="mt-8 space-y-3">
              {project.caseStudy.architecture.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-xs font-semibold text-indigo-300">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="pb-6 text-center">
            <div className="relative mx-auto inline-block overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111113] px-10 py-12 sm:px-16">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <h2 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">
                  Explore Live Project
                </h2>
                <p className="mb-8 text-sm text-zinc-400">
                  See it in action or browse the source code.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      <FooterSimple />
    </>
  );
}

function SectionLabel({
  label,
  icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
          {icon}
        </div>
      ) : (
        <span className="h-px w-7 bg-gradient-to-r from-indigo-400 to-transparent" />
      )}
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-300">
        {label}
      </p>
    </div>
  );
}

function FeatureList({ items = [] }: { items?: string[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((f, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
        >
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-indigo-400" />
          <span className="text-sm leading-relaxed text-zinc-400">{f}</span>
        </div>
      ))}
    </div>
  );
}
