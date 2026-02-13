import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="max-w-3xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl font-bold mb-2">About Me</h2>
      <div className="h-px w-12 bg-blue-400/60 mb-8" />
      <p className="text-neutral-300 leading-relaxed text-lg">
        Robert (R0tten0x) is an independent full-stack software developer with{" "}
        <span className="text-white font-medium">27 years of experience</span>{" "}
        in IT and technical leadership. His background spans system architecture,
        software engineering, and leading complex technical initiatives. Today, he
        focuses on building reliable, well-engineered solutions end to end,
        combining deep industry experience with hands-on development across modern
        stacks.
      </p>
    </AnimatedSection>
  );
}
