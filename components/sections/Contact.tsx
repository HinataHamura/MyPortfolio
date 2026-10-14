import Link from "next/link";
import { Code2, Send, Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <SectionHeading
        index="08"
        title="Contact"
        description="Open to research collaborations, internships, and engineering roles. Reach out directly — no forms, just real links."
      />

      <RevealOnScroll delay={0.1} className="mt-8 flex flex-col items-start gap-6">
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href={`mailto:${profile.email}`}>
              <Mail size={16} strokeWidth={1.75} /> Email Me
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Send size={16} strokeWidth={1.75} /> LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={profile.github} target="_blank" rel="noopener noreferrer">
              <Code2 size={16} strokeWidth={1.75} /> GitHub
            </Link>
          </Button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
