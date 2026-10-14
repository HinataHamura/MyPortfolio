import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll className={cn(align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="font-mono text-xs tracking-widest text-accent">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
          {title}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-foreground",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-xl text-foreground-secondary",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
