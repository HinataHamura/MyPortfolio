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
        description="Research notebooks and deployed systems — proof of the full pipeline from model to production."
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
