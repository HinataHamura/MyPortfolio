import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  NotebookPen,
  FlaskConical,
  Rocket,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechPillList } from "@/components/project/TechPillList";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const HeaderIcon =
    project.type === "Deployed"
      ? Rocket
      : project.type === "Applied AI"
        ? Code2
        : FlaskConical;

  return (
    <Card className="group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-accent motion-reduce:hover:translate-y-0">
      <div
        aria-hidden="true"
        className="relative flex h-28 items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_20%,var(--accent-subtle),var(--surface)_70%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
        <HeaderIcon
          size={36}
          strokeWidth={1.25}
          className="relative text-accent transition-transform duration-300 group-hover:scale-110"
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
          <Link
            href={`/projects/${project.slug}`}
            className="group/cta ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent"
          >
            Case Study
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
