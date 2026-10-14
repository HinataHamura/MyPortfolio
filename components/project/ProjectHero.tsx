import { Code2, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data/projects";

// Placeholder visual in place of a real screenshot — swap for an actual
// product screenshot (Cook.io / Chat App) or notebook result graph once available.
export function ProjectHero({ project }: { project: Project }) {
  const Icon = project.type === "Research Notebook" ? FlaskConical : Code2;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant={project.type === "Deployed" ? "success" : "default"}>
          {project.statusBadge}
        </Badge>
        {project.period && (
          <span className="font-mono text-xs text-foreground-secondary">
            {project.period}
          </span>
        )}
      </div>

      <h1 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-foreground">
        {project.title}
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-foreground-secondary">
        {project.summary}
      </p>

      <div
        aria-hidden="true"
        className="flex h-64 w-full items-center justify-center rounded-card border border-border bg-[linear-gradient(135deg,var(--accent-subtle),transparent)] sm:h-80"
      >
        <Icon size={56} strokeWidth={1.25} className="text-accent" />
      </div>
    </div>
  );
}
