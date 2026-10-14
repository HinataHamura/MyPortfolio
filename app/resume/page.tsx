import Link from "next/link";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description: "View the resume of Atkia Farzana Esha.",
  openGraph: {
    title: "Resume",
    description: "View the resume of Atkia Farzana Esha.",
    url: `${siteConfig.url}/resume`,
  },
});

export default function ResumePage() {
  return (
    <article className="mx-auto flex max-w-[900px] flex-col items-start gap-6 px-6 py-16 sm:py-24">
      <h1 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-foreground">
        Resume
      </h1>
      <p className="max-w-xl text-foreground-secondary">
        View my resume for a full summary of education,
        experience, publications, and projects.
      </p>
      <Button asChild>
        <Link
          href="https://drive.google.com/file/d/1NFewBgCmLXRv85el1Nj4dRvQEclkadhP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={16} strokeWidth={1.75} /> View Resume
        </Link>
      </Button>
    </article>
  );
}
