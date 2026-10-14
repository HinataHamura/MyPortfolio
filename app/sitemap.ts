import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/resume"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
