import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Monogram } from "@/components/Monogram";
import { profile, education } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <RevealOnScroll>
          <Monogram className="h-28 w-28 text-2xl" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-accent">01</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              About
            </span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight text-foreground">
            Research rigor, shipped as software
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
            {profile.about}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
            {profile.positioning}
          </p>
          <dl
            id="education"
            className="scroll-mt-24 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2"
          >
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
                Education
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                {education.degree}, {education.institution}
              </dd>
              <dd className="mt-1 font-mono text-xs text-foreground-secondary">
                {education.period} · {education.detail}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
                Location
              </dt>
              <dd className="mt-1 text-sm text-foreground">{profile.location}</dd>
            </div>
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
}
