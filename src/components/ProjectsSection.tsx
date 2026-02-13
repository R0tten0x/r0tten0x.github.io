"use client";

import GlitchText from "./GlitchText";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-12">
          <GlitchText
            as="h2"
            className="text-3xl sm:text-4xl font-display text-cyber-green text-glow-green tracking-wide"
          >
            // Projects
          </GlitchText>
          <div className="mt-3 h-[1px] w-16 bg-cyber-green/30" />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
