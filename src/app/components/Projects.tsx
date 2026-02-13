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

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div className="h-px w-12 bg-blue-400/60 mb-8" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="inline-block text-[10px] tracking-widest uppercase text-blue-400/80 mb-3">
              In Progress
            </span>
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
                View Project
                <span className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
