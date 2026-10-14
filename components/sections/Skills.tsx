import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { skills, spokenLanguages } from "@/lib/data/profile";

const groups = [
  { title: "Evaluation & Writing", items: skills.evaluationAndWriting },
  { title: "Languages", items: skills.languages },
  { title: "Web & Data", items: skills.webAndData },
  { title: "ML & AI", items: skills.mlAndAi },
  { title: "Cloud & Infra", items: skills.cloudAndInfra },
];

export function Skills() {
  return (
    <section id="skills" className="bg-surface/60">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
        <SectionHeading
          index="03"
          title="Skills"
          description="Core competencies across languages, web engineering, applied ML, and cloud infrastructure."
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <RevealOnScroll key={group.title} delay={i * 0.05}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2} className="mt-12 flex gap-8 border-t border-border pt-8">
          {spokenLanguages.map((lang) => (
            <div key={lang.name}>
              <p className="text-sm font-medium text-foreground">{lang.name}</p>
              <p className="text-xs text-foreground-secondary">{lang.level}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
