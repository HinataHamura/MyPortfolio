"use client";

import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Monogram } from "@/components/Monogram";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[94vh] flex-col justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--accent-subtle),transparent_60%)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.15]"
      />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <Monogram className="h-16 w-16 text-xl" />
          <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
            Available for research &amp; engineering roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-medium leading-[1.03] tracking-tight text-foreground"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg text-foreground-secondary sm:text-xl"
        >
          {profile.title} — {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button asChild>
            <Link href={`mailto:${profile.email}`}>Email Me</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <a
              href="https://drive.google.com/uc?export=download&id=1NFewBgCmLXRv85el1Nj4dRvQEclkadhP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} strokeWidth={1.75} /> Download Resume
            </a>
          </Button>
        </motion.div>

      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground-secondary transition-colors hover:text-accent"
      >
        <ArrowDown size={20} strokeWidth={1.5} className="animate-bounce motion-reduce:animate-none" />
      </Link>
    </section>
  );
}
