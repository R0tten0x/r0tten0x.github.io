import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const stats = [
  { value: "27yrs", label: "In the industry" },
  { value: "5+", label: "Apps shipped" },
  { value: "E2E", label: "Design to deploy" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="max-w-4xl mx-auto px-6 py-28">
      <SectionLabel label="About Me" />
      <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
        Solo dev. Full stack.{" "}
        <span className="text-white/40">No agency needed.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-primary mb-1">{stat.value}</p>
            <p className="text-xs font-mono tracking-widest uppercase text-white/35">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-8">
        <p className="text-white/60 leading-relaxed text-lg font-light">
          Robert (R0tten0x) is an independent full-stack developer with{" "}
          <span className="text-white font-semibold">27 years of experience</span>{" "}
          in IT and technical leadership. His background spans system architecture,
          software engineering, and leading complex technical initiatives. Today, he
          focuses on building reliable, well-engineered solutions end to end —
          combining deep industry experience with hands-on development across modern
          stacks.
        </p>
      </div>
    </AnimatedSection>
  );
}
