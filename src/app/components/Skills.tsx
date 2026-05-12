"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const skillCategories = [
  {
    category: "Mobile",
    skills: ["SwiftUI", "React Native"],
  },
  {
    category: "Languages",
    skills: ["C", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Scripting",
    skills: ["Bash", "ZSH", "PowerShell"],
  },
  {
    category: "Full-Stack",
    skills: ["Next.js", "React", "HTML", "CSS", "Tailwind", "SQL", "Postgres", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="max-w-4xl mx-auto px-6 py-28">
      <SectionLabel label="Stack" />
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
        Tools of the trade.
      </h2>

      <div className="glass rounded-2xl p-8 space-y-8">
        {skillCategories.map((group, gi) => (
          <div key={group.category}>
            <h3 className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/25 mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  className="px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-sm text-white/55 hover:border-primary/40 hover:text-white/90 transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
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
