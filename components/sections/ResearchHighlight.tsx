import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/badge";
import { publication, researchPublications } from "@/lib/data/publications";

export function ResearchHighlight() {
  return (
    <section id="research" className="border-y border-border bg-accent-subtle/40">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
        <RevealOnScroll className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-accent">04</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              Research &amp; Publications
            </span>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary">
            Published, accepted, and submitted work across Bangla NLP,
            astronomy, environmental modeling, and speech recognition.
          </p>

          <div className="mt-4 grid gap-6">
            {researchPublications.map((paper, index) => {
              const isFeatured = paper.status === "Published";

              return (
                <RevealOnScroll
                  key={paper.title}
                  delay={index * 0.05}
                  className="rounded-card border border-border bg-surface p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{paper.status}</Badge>
                    <span className="font-mono text-xs text-foreground-secondary">
                      {paper.venue}
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-4xl font-display text-xl leading-snug text-foreground sm:text-2xl">
                    {paper.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    {isFeatured ? publication.abstract : paper.description}
                  </p>

                  {isFeatured && (
                    <>
                      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                        {publication.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-card border border-border bg-background p-4"
                          >
                            <dt className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
                              {stat.label}
                            </dt>
                            <dd className="mt-2 font-display text-xl text-accent">
                              {stat.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-5 leading-relaxed text-foreground-secondary">
                        {publication.keyContribution}
                      </p>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
                            Classical ML Models
                          </h4>
                          <p className="mt-2 text-sm text-foreground">
                            {publication.models.classical.join(", ")}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
                            Transformer Baseline
                          </h4>
                          <p className="mt-2 text-sm text-foreground">
                            {publication.models.transformer.join(", ")}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {"url" in paper && paper.url && (
                    <Link
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      <ExternalLink size={15} strokeWidth={1.75} /> View IEEE Paper
                    </Link>
                  )}
                </RevealOnScroll>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
