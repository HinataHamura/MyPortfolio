import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/lib/data/profile";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <SectionHeading index="07" title="Experience" />

      <div className="mt-12 flex flex-col gap-8">
        {experience.map((job, i) => (
          <RevealOnScroll
            key={job.role}
            delay={i * 0.05}
            className="flex flex-col gap-2 border-l-2 border-accent pl-6"
          >
            <span className="font-mono text-xs uppercase tracking-wide text-accent">
              {job.period} · {job.duration}
            </span>
            <h3 className="font-display text-xl text-foreground">
              {job.role} —{" "}
              {job.orgUrl ? (
                <Link
                  href={job.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                >
                  {job.org} <ExternalLink className="inline" size={14} />
                </Link>
              ) : (
                job.org
              )}
            </h3>
            <p className="text-sm text-foreground-secondary">{job.location}</p>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground-secondary">
              {job.description}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
