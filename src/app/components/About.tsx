import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { apps } from "../data/apps";

const stats = [
  { key: "experience", value: "27 years in IT" },
  { key: "apps", value: `${apps.length} built in Rust` },
  { key: "platform", value: "macOS · terminal" },
  { key: "focus", value: "automation, observability" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel label="About" />
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10 tracking-tight">
        Small tools, sharp edges.{" "}
        <span className="text-muted">No bloat.</span>
      </h2>

      <div className="grid md:grid-cols-[1fr_300px] gap-5">
        <div className="pane p-6 md:p-8">
          <span className="pane-title">about.md</span>
          <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
            Robert (R0tten0x) has spent{" "}
            <span className="text-foreground font-semibold">27 years</span> in IT,
            across system architecture, software engineering, and technical leadership.
            These days most of that goes into Rust: menu bar utilities, background
            daemons that tidy the filesystem, and terminal dashboards that show what the
            machine is doing. They&apos;re small, fast, single-purpose tools that run quietly
            and stay out of the way.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-6 font-mono text-xs text-primary hover:underline underline-offset-4"
          >
            get in touch →
          </a>
        </div>

        <div className="pane p-6 font-mono text-sm">
          <span className="pane-title">stats.toml</span>
          <dl className="space-y-3">
            {stats.map((stat) => (
              <div key={stat.key}>
                <dt className="text-muted text-xs">{stat.key}</dt>
                <dd className="text-foreground">
                  <span className="text-primary">=</span> &quot;{stat.value}&quot;
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </AnimatedSection>
  );
}
