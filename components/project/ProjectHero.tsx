import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data/projects";

export function ProjectHero({ project }: { project: Project }) {
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

      <div className="relative aspect-[16/8] w-full overflow-hidden rounded-card border border-border bg-surface">
        <Image
          src={project.image}
          alt={`Illustrated project cover for ${project.title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1280px"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
