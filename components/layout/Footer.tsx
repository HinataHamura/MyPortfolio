import Link from "next/link";
import { Code2, Send, Mail } from "lucide-react";
import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base text-foreground">{profile.name}</p>
          <p className="text-sm text-foreground-secondary">{profile.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-button text-foreground-secondary transition-all duration-200 hover:bg-accent-subtle hover:text-accent"
          >
            <Mail size={18} strokeWidth={1.75} />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-button text-foreground-secondary transition-all duration-200 hover:bg-accent-subtle hover:text-accent"
          >
            <Send size={18} strokeWidth={1.75} />
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-button text-foreground-secondary transition-all duration-200 hover:bg-accent-subtle hover:text-accent"
          >
            <Code2 size={18} strokeWidth={1.75} />
          </Link>
        </div>

        <p className="text-xs text-foreground-secondary">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
