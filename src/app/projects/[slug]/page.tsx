import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import FooterSimple from "@/components/ui/FooterSimple";

export default async function CaseStudyPage({ params }: any) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <main className="min-h-screen text-white">

        {/* ── Hero banner ── */}
        <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 60%, #000 100%)",
            }}
          />

          {/* Back link */}
          <div className="absolute top-8 left-8 z-10">
            <Link href="/projects">
              <span
                className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  color: "#f59e0b",
                }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Projects
              </span>
            </Link>
          </div>

          {/* Hero text */}
          <div className="absolute bottom-12 left-0 right-0 px-6 max-w-6xl mx-auto">
            <span
              className="text-xs font-mono tracking-widest uppercase mb-3 block"
              style={{ color: "#f59e0b" }}
            >
              Case Study
            </span>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "#94a3b8" }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

          {/* ── Tech Stack ── */}
          <section>
            <SectionLabel icon={<Cpu className="w-3.5 h-3.5" />} label="Tech Stack" />
            <div className="flex flex-wrap gap-3 mt-6">
              {project.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-mono rounded-xl"
                  style={{
                    background: "rgba(6,182,212,0.08)",
                    border: "1px solid rgba(6,182,212,0.22)",
                    color: "#06b6d4",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* ── User Experience ── */}
          <section>
            <SectionLabel color="#f59e0b" label="👤 User Experience" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {project.images.user.map((img: string, i: number) => (
                <div key={i} className="relative h-52 rounded-2xl overflow-hidden group">
                  <Image src={img} alt={`User ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(245,158,11,0.08)", border: "2px solid rgba(245,158,11,0.3)", borderRadius: "1rem" }}
                  />
                </div>
              ))}
            </div>
            <FeatureList items={project.features.user} color="#f59e0b" />
          </section>

          {/* ── Admin Dashboard ── */}
          <section>
            <SectionLabel color="#06b6d4" label="🛡️ Admin Dashboard" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {project.images.admin.map((img: string, i: number) => (
                <div key={i} className="relative h-52 rounded-2xl overflow-hidden group">
                  <Image src={img} alt={`Admin ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(6,182,212,0.08)", border: "2px solid rgba(6,182,212,0.3)", borderRadius: "1rem" }}
                  />
                </div>
              ))}
            </div>
            <FeatureList items={project.features.admin} color="#06b6d4" />
          </section>

          {/* ── Case Study ── */}
          <section>
            <SectionLabel label="Case Study" />
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: AlertCircle, label: "Problem", text: project.caseStudy.problem, color: "#f59e0b" },
                { icon: Lightbulb, label: "Solution", text: project.caseStudy.solution, color: "#06b6d4" },
                { icon: TrendingUp, label: "Result", text: project.caseStudy.result, color: "#f59e0b" },
              ].map(({ icon: Icon, label, text, color }) => (
                <div
                  key={label}
                  className="rounded-2xl p-7 relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${color}20`,
                  }}
                >
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                  />
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <h3 className="font-bold mb-3" style={{ color }}>
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Architecture ── */}
          <section>
            <SectionLabel icon={<Cpu className="w-3.5 h-3.5" />} label="Architecture" />
            <div className="mt-8 space-y-3">
              {project.caseStudy.architecture.map((item: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(6,182,212,0.04)",
                    border: "1px solid rgba(6,182,212,0.1)",
                  }}
                >
                  <span
                    className="text-xs font-mono font-bold mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(6,182,212,0.15)", color: "#06b6d4" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="text-center pb-10">
            <div
              className="inline-block px-12 py-10 rounded-3xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(6,182,212,0.06))",
                border: "1px solid rgba(245,158,11,0.15)",
              }}
            >
              <div
                className="absolute top-0 left-1/4 right-1/4 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #f59e0b, transparent)" }}
              />
              <h2 className="text-3xl font-black mb-3" style={{ color: "#e2e8f0" }}>
                Explore Live Project
              </h2>
              <p className="text-sm mb-8" style={{ color: "#64748b" }}>
                See it in action or browse the source code.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-black transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    boxShadow: "0 0 30px rgba(245,158,11,0.35)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#94a3b8",
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}

// ── Helpers ──

function SectionLabel({
  label,
  color = "#f59e0b",
  icon,
}: {
  label: string;
  color?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon && (
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}
        >
          {icon}
        </div>
      )}
      <p className="text-xs font-mono tracking-[0.3em] uppercase flex items-center gap-3" style={{ color }}>
        {!icon && <span className="inline-block w-8 h-px" style={{ background: color }} />}
        {label}
      </p>
    </div>
  );
}

function FeatureList({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 mt-6">
      {items.map((f: string, i: number) => (
        <div
          key={i}
          className="flex items-start gap-3 p-4 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${color}12`,
          }}
        >
          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color }} />
          <span className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
            {f}
          </span>
        </div>
      ))}
    </div>
  );
}