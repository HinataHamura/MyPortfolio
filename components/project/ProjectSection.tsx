import type { ReactNode } from "react";

type ProjectSectionProps = {
  title: string;
  children: ReactNode;
};

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="flex flex-col gap-3 border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl text-foreground">{title}</h2>
      <div className="max-w-2xl text-base leading-relaxed text-foreground-secondary">
        {children}
      </div>
    </section>
  );
}
