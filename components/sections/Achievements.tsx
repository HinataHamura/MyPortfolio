import Link from "next/link";
import { Trophy, Award } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { awards, certifications } from "@/lib/data/profile";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <SectionHeading
        index="06"
        title="Achievements & Certifications"
        description="Competitive results and completed credentials, verified against issuing organizations."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {awards.map((award, i) => (
          <RevealOnScroll key={award.name} delay={i * 0.05}>
            <Card className="h-full transition-colors duration-200 hover:border-accent">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent">
                    <Trophy size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <CardTitle className="text-lg leading-snug">{award.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {award.issuer}
                      {"date" in award && award.date ? ` · ${award.date}` : ""}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {award.description}
                </p>
                {"url" in award && award.url && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      View Datathon Post
                    </Link>
                    {"supportingUrl" in award &&
                      typeof award.supportingUrl === "string" && (
                      <Link
                        href={award.supportingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
                      >
                        View CUET Datathon PDF
                      </Link>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </RevealOnScroll>
        ))}

        {certifications.map((cert, i) => (
          <RevealOnScroll key={cert.name} delay={(awards.length + i) * 0.05}>
            <Card className="h-full transition-colors duration-200 hover:border-accent">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent">
                    <Award size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <CardTitle className="text-lg leading-snug">{cert.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {cert.issuer}
                      {"date" in cert && cert.date ? ` · ${cert.date}` : ""}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {"description" in cert && cert.description && (
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {cert.description}
                  </p>
                )}
                {"credentialId" in cert && cert.credentialId && (
                  <p className="mt-2 font-mono text-xs text-foreground-secondary">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {"url" in cert && cert.url && (
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    View DataCamp Certificate
                  </Link>
                )}
              </CardContent>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
