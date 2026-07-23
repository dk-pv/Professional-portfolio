import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const SITE_URL = "https://danishpv.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/skills", "/projects", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
