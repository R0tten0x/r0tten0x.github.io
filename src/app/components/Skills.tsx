"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    category: "Mobile Development",
    skills: ["SwiftUI", "ReactNative"],
  },
  {
    category: "Programming Languages",
    skills: ["C", "Python"],
  },
  {
    category: "Scripting Languages",
    skills: ["Python", "Bash", "ZSH", "Powershell"],
  },
  {
    category: "Fullstack",
    skills: ["Javascript", "HTML", "CSS", "Tailwind", "Next.js", "React", "SQL", "Postgres", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Skills</h2>
      <div className="h-px w-12 bg-blue-400/60 mb-8" />
      <div className="space-y-8">
        {skillCategories.map((group, gi) => (
          <div key={group.category}>
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-neutral-300 hover:border-blue-400/30 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: gi * 0.1 + si * 0.05,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
