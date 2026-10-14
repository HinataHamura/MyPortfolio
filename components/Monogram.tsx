import { cn } from "@/lib/utils";

// No headshot photo available — styled initials monogram stands in wherever a photo would go.
export function Monogram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border border-border bg-accent-subtle font-display text-accent",
        className
      )}
      aria-hidden="true"
    >
      AFE
    </div>
  );
}
