"use client";

import { memo } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
};

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div className="card card-hover group relative overflow-hidden">
      {/* Full-card focusable trigger (keyboard + mouse) — sibling to the links */}
      <button
        type="button"
        onClick={onClick}
        aria-label={`View details for ${project.title}`}
        className="absolute inset-0 z-10 h-full w-full cursor-pointer"
      />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <span className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-medium capitalize text-zinc-300 backdrop-blur-sm">
          {project.category}
        </span>

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Hover / focus overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !py-2 !text-xs"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2 !text-xs"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <p className="mb-5 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-indigo-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Click to explore</span>
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
