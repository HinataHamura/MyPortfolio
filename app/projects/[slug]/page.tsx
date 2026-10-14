import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink, Code2, NotebookPen } from "lucide-react";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectSection } from "@/components/project/ProjectSection";
import { TechPillList } from "@/components/project/TechPillList";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata();

  return buildMetadata({
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    keywords: project.techStack.join(", "),
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.liveUrl ? { url: project.liveUrl } : {}),
  };

  return (
    <article className="mx-auto max-w-[1280px] px-6 py-16 sm:py-24">
      <JsonLd data={jsonLd} />
      <ProjectHero project={project} />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <ProjectSection title="Problem">{project.problem}</ProjectSection>
          <ProjectSection title="Motivation">{project.motivation}</ProjectSection>
          <ProjectSection title="Architecture">{project.architecture}</ProjectSection>
          <ProjectSection title="Features">
            <ul className="flex flex-col gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    &middot;
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </ProjectSection>
          <ProjectSection title="Challenges">{project.challenges}</ProjectSection>
          <ProjectSection title="Solutions">{project.solutions}</ProjectSection>
          <ProjectSection title="Future Work">{project.futureWork}</ProjectSection>
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:h-fit">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
              Tech Stack
            </h2>
            <div className="mt-3">
              <TechPillList items={project.techStack} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Code2 size={16} strokeWidth={1.75} /> GitHub
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} strokeWidth={1.75} /> Live Demo
                </Link>
              </Button>
            )}
            {project.notebookUrl && (
              <Button asChild>
                <Link href={project.notebookUrl} target="_blank" rel="noopener noreferrer">
                  <NotebookPen size={16} strokeWidth={1.75} /> View Notebook
                </Link>
              </Button>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
