import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export default async function CaseStudy({ params }: any) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-white">

      {/* 🔥 TITLE */}
      <h1 className="text-5xl font-bold mb-6">
        {project.title}
      </h1>

      {/* 🔥 DESCRIPTION */}
      <p className="text-gray-400 mb-12 max-w-2xl">
        {project.description}
      </p>

      {/* 🔥 TECH STACK */}
      <div className="flex flex-wrap gap-3 mb-16">
        {project.tech.map((tech: string, i: number) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 🔥 USER SECTION */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          User Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {project.images.user.map((img: string, i: number) => (
            <img key={i} src={img} className="rounded-xl" />
          ))}
        </div>

        <ul className="text-gray-400 space-y-2">
          {project.features.user.map((f: string, i: number) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </section>

      {/* 🔥 ADMIN SECTION (IMPORTANT 🔥) */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-400">
          Admin Dashboard
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {project.images.admin.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              className="rounded-xl border border-indigo-500/30"
            />
          ))}
        </div>

        <ul className="text-gray-400 space-y-2">
          {project.features.admin.map((f: string, i: number) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </section>

      {/* 🔥 CASE STUDY */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          Case Study
        </h2>

        <div className="space-y-8 text-gray-400">

          <div>
            <h3 className="text-xl text-white mb-2">Problem</h3>
            <p>{project.caseStudy.problem}</p>
          </div>

          <div>
            <h3 className="text-xl text-white mb-2">Solution</h3>
            <p>{project.caseStudy.solution}</p>
          </div>

          <div>
            <h3 className="text-xl text-white mb-2">Result</h3>
            <p>{project.caseStudy.result}</p>
          </div>

        </div>
      </section>

      {/* 🔥 ARCHITECTURE */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          Architecture
        </h2>

        <ul className="text-gray-400 space-y-2">
          {project.caseStudy.architecture.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </section>

      {/* 🔥 CTA */}
      <section className="text-center mt-32">
        <h2 className="text-3xl font-bold mb-6">
          Explore Live Project
        </h2>

        <div className="flex justify-center gap-4">
          <a
            href={project.live}
            className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-400 transition"
          >
            Live
          </a>

          <a
            href={project.github}
            className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            GitHub
          </a>
        </div>
      </section>

    </div>
  );
}