import type { Metadata } from "next";
import { profile } from "@/lib/data/profile";

export const siteConfig = {
  name: profile.name,
  url: "https://atkia-farzana-esha.vercel.app",
  description:
    "CSE undergraduate at RUET and aspiring AI researcher. Published IEEE author on Bangla NLP dialect classification, building and deploying production ML systems.",
};

export function buildMetadata(overrides: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — Aspiring AI Researcher`,
      template: "%s | Atkia Farzana Esha",
    },
    description: siteConfig.description,
    keywords: [
      "Atkia Farzana Esha",
      "Bangla NLP researcher",
      "RUET CSE ML",
      "dialect classification IEEE",
      "Bangla dialect classification",
      "machine learning researcher Bangladesh",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
    },
    ...overrides,
  };
}
