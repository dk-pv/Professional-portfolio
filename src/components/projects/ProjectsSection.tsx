"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import SectionHeader from "@/components/ui/SectionHeader";

const tabs = ["all", "application", "website"] as const;
type Tab = (typeof tabs)[number];

/* Curated subset for the home page — diverse, flagship-first. */
const FEATURED_SLUGS = ["fleettrack", "enterprise-erp", "vrs-realinvest", "limoxy"];

const isPrivateBuild = (live: string) => live.includes("github.com");

export default function ProjectsSection({
  titleAs = "h2",
  featured = false,
}: {
  titleAs?: "h1" | "h2";
  featured?: boolean;
}) {
  const [tab, setTab] = useState<Tab>("all");
  const Sub = titleAs === "h1" ? "h2" : "h3";

  const list = featured
    ? FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)!).filter(
        Boolean,
      )
    : tab === "all"
      ? projects
      : projects.filter((p) => p.category === tab);

  return (
    <section id="projects" className="section wrap">
      <div className="reveal">
        <SectionHeader
          index={titleAs === "h2" ? "02" : undefined}
          label="Projects"
          title={featured ? "Selected work" : "All projects"}
          as={titleAs}
          lead="Production systems — enterprise platforms, real-time infrastructure and client builds."
        />

        {!featured && (
          <div
            role="group"
            aria-label="Filter projects"
            className="mt-10 flex flex-wrap gap-2"
          >
            {tabs.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  aria-pressed={active}
                  onClick={() => setTab(t)}
                  className={`btn !min-h-0 !px-4 !py-1.5 text-sm capitalize ${
                    active ? "btn-solid" : "btn-outline"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Project rows */}
      <div className="mt-14 space-y-20 md:space-y-28">
        {list.map((project, i) => {
          const number = String(i + 1).padStart(2, "0");
          const reversed = i % 2 === 1;
          const priv = isPrivateBuild(project.live);
          return (
            <article
              key={project.slug}
              className="reveal grid items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              {/* Screenshot */}
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`${project.title} case study`}
                tabIndex={-1}
                className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}
              >
                <div className="frame aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={`${project.title} — interface screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-top"
                  />
                </div>
              </Link>

              {/* Text */}
              <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                <p className="mono-label text-[var(--ink-3)]">
                  {number} — {project.category}
                </p>

                <Sub className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    {project.title}
                  </Link>
                </Sub>

                <p className="mt-4 text-[15px] leading-relaxed">
                  {project.description.split(". ")[0].replace(/\.$/, "")}.
                </p>

                <p className="mono-label mt-5 text-[var(--ink-3)]">
                  {project.tech.slice(0, 5).join(" · ")}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="link-accent font-medium"
                  >
                    Case study →
                  </Link>
                  {priv ? (
                    <span className="mono-label text-[var(--ink-3)]">
                      Private build
                    </span>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u"
                    >
                      Live
                      <span aria-hidden="true"> ↗</span>
                      <span className="sr-only">
                        — {project.title} live site (opens in new tab)
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {featured && (
        <p className="reveal mt-16">
          <Link href="/projects" className="link-accent text-sm font-medium">
            All projects →
          </Link>
        </p>
      )}

      {list.length === 0 && (
        <p className="py-20 text-center text-sm text-[var(--ink-3)]">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
