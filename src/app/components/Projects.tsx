"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { apps, earlierWork, type App, type AppStatus } from "../data/apps";

const statusStyles: Record<AppStatus, string> = {
  active: "text-primary border-primary/40",
  stable: "text-success border-success/40",
  archived: "text-muted border-border",
};

function StatusTag({ status }: { status: AppStatus }) {
  return (
    <span
      className={`font-mono text-[11px] px-1.5 py-0.5 border rounded-[2px] ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

function AppPane({ app, index }: { app: App; index: number }) {
  return (
    <motion.article
      className="group pane p-5 pt-6 flex flex-col transition-colors duration-200 hover:border-primary/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
    >
      <span className="pane-title">{app.kind}</span>
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-primary">▸</span> {app.name.toLowerCase()}
        </h3>
        <StatusTag status={app.status} />
      </div>
      <p className="text-foreground/65 text-sm leading-relaxed flex-1">
        {app.description}
      </p>
      <div className="mt-5 flex items-end justify-between gap-3 flex-wrap">
        <ul className="flex flex-wrap gap-1.5">
          {app.stack.map((crate) => (
            <li
              key={crate}
              className="font-mono text-[11px] text-muted bg-background border border-border px-1.5 py-0.5 rounded-[2px]"
            >
              {crate}
            </li>
          ))}
        </ul>
        {app.repo ? (
          <a
            href={app.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-primary hover:underline underline-offset-4"
          >
            source →
          </a>
        ) : (
          <span className="font-mono text-xs text-muted/60">private</span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <AnimatedSection id="apps" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel label="Apps" />
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12 tracking-tight">
        Things I&apos;ve built.
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {apps.map((app, i) => (
          <AppPane key={app.name} app={app} index={i} />
        ))}
      </div>

      <div className="mt-14">
        <p className="font-mono text-xs text-muted mb-4">
          <span className="text-primary">#</span> earlier work
        </p>
        <ul className="border-t border-border">
          {earlierWork.map((item) => (
            <li
              key={item.name}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-3 border-b border-border font-mono text-sm"
            >
              <span className="text-foreground sm:w-40 shrink-0">{item.name}</span>
              <span className="text-muted flex-1 font-sans">{item.description}</span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs hover:underline underline-offset-4"
                >
                  view →
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
