import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import SectionHeader from "@/components/ui/SectionHeader";

/* Curated subset for the home page — flagship first, then diverse. */
const FEATURED_SLUGS = ["emarath-erp", "fleettrack", "vrs-realinvest", "limoxy"];

const isPrivateBuild = (live: string) => live.includes("github.com");

function ProjectMeta({
  project,
  number,
  as: Sub,
}: {
  project: Project;
  number?: string;
  as: "h2" | "h3";
}) {
  const priv = isPrivateBuild(project.live);
  return (
    <>
      <p className="mono-label text-[var(--ink-3)]">
        {number ? `${number} — ` : ""}
        {project.category}
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
          <span className="mono-label text-[var(--ink-3)]">Private build</span>
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
    </>
  );
}

export default function ProjectsSection({
  titleAs = "h2",
  featured = false,
}: {
  titleAs?: "h1" | "h2";
  featured?: boolean;
}) {
  const Sub = titleAs === "h1" ? "h2" : "h3";

  const list = featured
    ? FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)!).filter(
        Boolean,
      )
    : projects;

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
      </div>

      {/* Project rows — the flagship gets a full-width lead treatment;
          the rest alternate. Rows 1–2 load eagerly (near the first
          viewport); deeper rows stay lazy. */}
      <div className="mt-14 space-y-20 md:space-y-28">
        {list.map((project, i) => {
          const number = featured ? undefined : String(i + 1).padStart(2, "0");
          const eager = i > 0 && i <= 2;

          if (i === 0) {
            return (
              <article key={project.slug} className="reveal">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`${project.title} case study`}
                  tabIndex={-1}
                >
                  <div className="frame aspect-[21/10]">
                    <Image
                      src={project.image}
                      alt={`${project.title} — interface screenshot`}
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 1152px"
                      className="object-cover object-top"
                    />
                  </div>
                </Link>
                <div className="mt-8 md:grid md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-7 lg:col-span-6">
                    <ProjectMeta project={project} number={number} as={Sub} />
                  </div>
                </div>
              </article>
            );
          }

          const reversed = i % 2 === 0;
          return (
            <article
              key={project.slug}
              className="reveal grid items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`${project.title} case study`}
                tabIndex={-1}
                className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}
              >
                <div className="frame aspect-[21/10]">
                  <Image
                    src={project.image}
                    alt={`${project.title} — interface screenshot`}
                    fill
                    loading={eager ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-top"
                  />
                </div>
              </Link>

              <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                <ProjectMeta project={project} number={number} as={Sub} />
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
    </section>
  );
}
