import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
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
    alternates: { canonical: `/projects/${params.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="rule pt-6">
      <h2 className="mono-label">
        <span className="text-[var(--accent)]">{index} / </span>
        {label}
      </h2>
    </div>
  );
}

const isPrivateBuild = (live: string) => live.includes("github.com");

function Gallery({
  images,
  title,
  kind,
}: {
  images: string[];
  title: string;
  kind: string;
}) {
  return (
    <div
      className={`mt-8 grid gap-5 ${
        images.length > 1 ? "md:grid-cols-2" : ""
      }`}
    >
      {images.map((img, i) => (
        <div key={img} className="frame aspect-[16/9]">
          <Image
            src={img}
            alt={`${title} — ${kind} screenshot ${i + 1} of ${images.length}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-x-12 sm:grid-cols-2">
      {items.map((f) => (
        <li
          key={f}
          className="border-b border-[var(--line)] py-3 text-[15px] leading-relaxed"
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug) as
    | Project
    | undefined;
  if (!project) notFound();

  return (
    <>
      <article className="wrap pb-24 pt-28 md:pt-32">
        {/* Header */}
        <header>
          <Link href="/projects" className="link-u text-sm">
            ← All projects
          </Link>

          <p className="mono-label mt-10 text-[var(--ink-3)]">
            Case study — {project.category}
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            {isPrivateBuild(project.live) ? (
              <span className="mono-label">
                Private / enterprise build — details on request
              </span>
            ) : (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Live site
                <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in new tab)</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u"
            >
              GitHub
              <span aria-hidden="true"> ↗</span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </header>

        {/* Hero screenshot */}
        <div className="frame mt-14 aspect-[16/8]">
          <Image
            src={project.image}
            alt={`${project.title} — main interface`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover object-top"
          />
        </div>

        <div className="mt-20 space-y-20">
          {/* Tech */}
          <section>
            <SectionLabel index="01" label="Technology" />
            <p className="mono-label mt-6 leading-loose text-[var(--ink-2)]">
              {project.tech.join(" · ")}
            </p>
          </section>

          {/* Case study */}
          <section>
            <SectionLabel index="02" label="Case study" />
            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {[
                { label: "Problem", text: project.caseStudy.problem },
                { label: "Solution", text: project.caseStudy.solution },
                { label: "Result", text: project.caseStudy.result },
              ].map(({ label, text }) => (
                <div key={label}>
                  <h3 className="text-base font-semibold">{label}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section>
            <SectionLabel index="03" label="Architecture" />
            <ol className="mt-8">
              {project.caseStudy.architecture.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-6 border-b border-[var(--line)] py-3.5"
                >
                  <span className="mono-label shrink-0 text-[var(--ink-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* User experience — don't repeat the hero screenshot */}
          <section>
            <SectionLabel index="04" label="User experience" />
            {project.images.user.filter((img) => img !== project.image)
              .length > 0 && (
              <Gallery
                images={project.images.user.filter(
                  (img) => img !== project.image,
                )}
                title={project.title}
                kind="user"
              />
            )}
            {project.features.user.length > 0 && (
              <FeatureList items={project.features.user} />
            )}
          </section>

          {/* Admin */}
          {(project.features.admin?.length ?? 0) > 0 && (
            <section>
              <SectionLabel index="05" label="Admin experience" />
              {(project.images.admin?.length ?? 0) > 0 && (
                <Gallery
                  images={project.images.admin ?? []}
                  title={project.title}
                  kind="admin"
                />
              )}
              <FeatureList items={project.features.admin ?? []} />
            </section>
          )}

          {/* Admin workflow (where documented) */}
          {(project.caseStudy.detailedAdminFlow?.length ?? 0) > 0 && (
            <section>
              <SectionLabel index="06" label="Admin workflow" />
              <ol className="mt-8">
                {(project.caseStudy.detailedAdminFlow ?? []).map((step, i) => (
                  <li
                    key={step}
                    className="flex items-baseline gap-6 border-b border-[var(--line)] py-3.5"
                  >
                    <span className="mono-label shrink-0 text-[var(--ink-3)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Footer CTA */}
          <section className="rule pt-10">
            <p className="text-lg">
              {isPrivateBuild(project.live) ? (
                <>
                  This is a private enterprise build — for details or a
                  walkthrough,{" "}
                  <Link href="/contact" className="link-accent font-medium">
                    get in touch
                  </Link>
                  .
                </>
              ) : (
                <>
                  Want the full picture?{" "}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent font-medium"
                  >
                    Explore the live project
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only">(opens in new tab)</span>
                  </a>{" "}
                  or{" "}
                  <Link href="/contact" className="link-accent font-medium">
                    get in touch
                  </Link>
                  .
                </>
              )}
            </p>
          </section>
        </div>
      </article>

      <FooterSimple />
    </>
  );
}
