import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { TechStack } from "@/components/sections/TechStack";
import { ResearchHighlight } from "@/components/sections/ResearchHighlight";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Achievements />
      <ResearchHighlight />
      <Skills />
      <TechStack />
      <Contact />
    </>
  );
}
