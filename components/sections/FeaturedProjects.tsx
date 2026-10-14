import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <SectionHeading
        index="05"
        title="Featured Projects"
        description="Applied AI research, full-stack systems, and deployed products—from model development to usable software."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
