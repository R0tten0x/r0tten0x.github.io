"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    name: "Bury Me Here",
    description:
      "Sometimes we don't want a response, bury your secrets below and move on.",
    link: "https://burymehere.app",
  },
  {
    name: "MollisonTownhomes",
    description:
      "To empower residents with the ability to keep up to date on theft, sales, upcoming events, missing packages.",
    link: null,
  },
];

const completedProjects = [ 
  {
    name: "StillUp - Know before your users do",
    description: 
    "Uptime monitoring and beautiful public status pages — starting at $9/mo. Half the price of the competition, all the features your SaaS needs.",
    link: "https://www.stillup.org"
  },
  {
    name: "Charge Shield",
    description:
    "ChargeShield fights chargebacks so you don't have to.",
    link: "http://r0tten0x.dev/cs-demo/index.html",
  },
  {
    name: "SnappIcon",
    description:
    "Why spend hours creating web ready icons when SnappIcon exits",
    link: "https://snappicon.com"
  }
  
];

function ProjectCard({
  project,
  index,
  linkLabel = "View Project",
}: {
  project: { name: string; description: string; link: string | null };
  index: number;
  linkLabel?: string;
}) {
  return (
    <motion.div
      key={project.name}
      className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        {project.description}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          {linkLabel}
          <span className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div className="h-px w-12 bg-blue-400/60 mb-10" />

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-blue-400">
            In Development
          </h3>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} linkLabel="View Project" />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-blue-400">
            Shipped
          </h3>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {completedProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} linkLabel="Visit" />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
