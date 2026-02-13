"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLink = project.links.appStore || project.links.web;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="group relative border border-cyber-green/15 bg-cyber-gray/60 p-6 hover:border-cyber-green/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,65,0.08)]"
    >
      {/* Top row: icon + info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-cyber-green/10">
          <Image
            src={project.icon}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-mono text-lg font-semibold group-hover:text-cyber-green transition-colors duration-300">
            {project.name}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-cyber-cyan/70 text-xs font-mono">
              {project.category}
            </span>
            <span className="text-gray-600">|</span>
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="text-gray-500 text-xs font-mono"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm font-mono leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Bottom: status + action */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-mono px-3 py-1 rounded-full border ${
            project.status === "Published"
              ? "text-cyber-green border-cyber-green/30 bg-cyber-green/5"
              : "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/5"
          }`}
        >
          {project.status}
        </span>

        {hasLink ? (
          <a
            href={project.links.appStore || project.links.web}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-4 py-2 border border-cyber-green/40 text-cyber-green hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 tracking-wider"
          >
            DOWNLOAD
          </a>
        ) : (
          <span className="text-xs font-mono px-4 py-2 border border-gray-700 text-gray-500 tracking-wider cursor-default">
            COMING SOON
          </span>
        )}
      </div>
    </motion.div>
  );
}
