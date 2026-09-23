"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const skillCategories = [
  {
    category: "systems",
    skills: ["Rust", "C", "Swift", "SwiftUI"],
  },
  {
    category: "crates",
    skills: ["tokio", "ratatui", "notify", "serde", "tray-icon", "winit", "sysinfo", "rayon"],
  },
  {
    category: "scripting",
    skills: ["Bash", "Zsh", "Python", "PowerShell"],
  },
  {
    category: "also",
    skills: ["TypeScript", "Next.js", "React", "SQL", "Postgres"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="stack" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel label="Stack" />
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12 tracking-tight">
        Tools of the trade.
      </h2>

      <div className="pane p-6 md:p-8 pt-8 space-y-6">
        <span className="pane-title">Cargo.toml</span>
        {skillCategories.map((group, gi) => (
          <div key={group.category} className="grid sm:grid-cols-[120px_1fr] gap-3 items-start">
            <h3 className="font-mono text-xs text-muted pt-1.5">
              [{group.category}]
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  className="font-mono px-2.5 py-1 rounded-[2px] border border-border bg-background text-[13px] text-foreground/75 hover:border-primary hover:text-foreground transition-colors duration-150 cursor-default"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.03 }}
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
