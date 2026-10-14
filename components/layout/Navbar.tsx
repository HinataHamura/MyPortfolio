"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/lib/data/profile";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 shadow-sm backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-foreground"
        >
          {profile.initials}
        </Link>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm text-foreground-secondary transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-button border border-border text-foreground transition-all duration-200 hover:border-accent hover:text-accent active:scale-95"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto border-t border-border px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
