export function TechPillList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
