export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.07] blur-[130px] pointer-events-none" />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: "hero-fade-in 0.6s ease forwards", opacity: 0 }}
      >
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] max-w-4xl"
          style={{ animation: "hero-slide-up-30 0.7s ease 0.1s forwards", opacity: 0 }}
        >
          Independent Software Engineer{" "}
          <span className="text-primary">
            Building SaaS, Web &amp; Mobile Products
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 text-base md:text-lg text-white/40 max-w-lg font-light leading-relaxed"
          style={{ animation: "hero-slide-up-20 0.7s ease 0.45s forwards", opacity: 0 }}
        >
          Full-stack developer with 27 years in IT. I design, build, and ship
          reliable products end to end — solo.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex items-center gap-4 flex-wrap justify-center"
          style={{ animation: "hero-slide-up-20 0.6s ease 0.65s forwards", opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_0_24px_rgba(79,126,255,0.35)] hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(79,126,255,0.55)]"
          >
            View My Work
          </a>
          <a
            href="https://github.com/R0tten0x"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-xl text-sm font-semibold tracking-wide text-white/60 hover:text-white hover:border-primary/40 hover:shadow-[0_0_24px_rgba(79,126,255,0.2)] transition-all duration-200"
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/25"
        style={{ animation: "hero-fade-in 0.6s ease 1.2s forwards", opacity: 0 }}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <div
          className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
          style={{ animation: "hero-breathe 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
