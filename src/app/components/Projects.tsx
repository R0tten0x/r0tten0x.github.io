"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

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
      "Empowering residents to stay up to date on theft, sales, upcoming events, and missing packages.",
    link: null,
  },
  {
    name: "Brawn",
    description:
      "A tool for those seeking to make a bit of money doing unskilled work.",
    link: "https://brawnnow.com",
  },
  {
    name: "Local Gems",
    description:
      "At LocalGems, our mission is to give every small business the visibility it deserves — free from the shadow of big-box corporations.",
    link: "https://localgems.org",
  },
];

const completedProjects = [
  {
    name: "StillUp",
    description:
      "Uptime monitoring and beautiful public status pages — starting at $9/mo. Half the price of the competition, all the features your SaaS needs.",
    link: "https://www.stillup.org",
  },
  {
    name: "Charge Shield",
    description: "ChargeShield fights chargebacks so you don't have to.",
    link: "http://r0tten0x.dev/cs-demo/index.html",
  },
  {
    name: "SnappIcon",
    description:
      "Why spend hours creating web-ready icons when SnappIcon exists.",
    link: "https://snappicon.com",
  },
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
      className="group glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(79,126,255,0.07)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-1">
        <h3 className="text-base font-semibold mb-2 tracking-tight">
          {project.name}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed font-light">
          {project.description}
        </p>
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-[11px] font-mono tracking-wider uppercase text-primary/70 hover:text-primary transition-colors"
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
    <AnimatedSection id="projects" className="max-w-4xl mx-auto px-6 py-28">
      <SectionLabel label="Work" />
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
        Things I&apos;ve built.
      </h2>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-primary/60">
            In Development
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              linkLabel="View Project"
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-primary/60">
            Shipped
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              linkLabel="Visit"
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
