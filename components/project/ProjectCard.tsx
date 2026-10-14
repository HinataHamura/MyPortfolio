import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Code2, NotebookPen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TechPillList } from "@/components/project/TechPillList";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-accent motion-reduce:hover:translate-y-0">
      <div
        className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface"
      >
        <Image
          src={project.image}
          alt={`Illustrated project cover for ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge variant={project.type === "Deployed" ? "success" : "default"}>
            {project.statusBadge}
          </Badge>
          {project.period && (
            <span className="font-mono text-xs text-foreground-secondary">
              {project.period}
            </span>
          )}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <TechPillList items={project.techStack.slice(0, 6)} />

        <div className="flex flex-wrap items-center gap-4 pt-1">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <Code2 size={16} strokeWidth={1.75} /> GitHub
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <ExternalLink size={16} strokeWidth={1.75} /> Live Demo
            </Link>
          )}
          {project.notebookUrl && (
            <Link
              href={project.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <NotebookPen size={16} strokeWidth={1.75} /> Notebook
            </Link>
          )}
          <Button asChild size="sm" className="ml-auto">
            <Link href={`/projects/${project.slug}`}>
              View Details
              <ArrowUpRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
