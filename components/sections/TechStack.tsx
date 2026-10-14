"use client";

import { RevealOnScroll, staggerContainer } from "@/components/motion/RevealOnScroll";
import { motion } from "framer-motion";

const stack = [
  "Python",
  "PyTorch",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "Docker",
  "Nginx",
  "PM2",
  "Microsoft Azure",
  "Firebase",
  "WebSocket",
  "MySQL",
];

export function TechStack() {
  return (
    <section id="tech-stack" aria-label="Tooling overview" className="bg-surface/60 scroll-mt-24">
      <div className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-wide text-foreground-secondary">
            Tools I ship with
          </p>
        </RevealOnScroll>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-6 flex flex-wrap gap-3"
        >
          {stack.map((tool) => (
            <motion.li
              key={tool}
              variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-button border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground transition-colors duration-200 hover:border-accent"
            >
              {tool}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
