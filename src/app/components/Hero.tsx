import { apps } from "../data/apps";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen max-w-5xl mx-auto px-6 pt-24 pb-16">
      <div style={{ animation: "hero-fade-in 0.6s ease forwards", opacity: 0 }}>
        <p className="font-mono text-xs text-muted mb-6">
          <span className="text-primary">$</span> whoami
          <span className="text-foreground/80"> robert (r0tten0x): systems &amp; rust developer</span>
        </p>

        <h1
          className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] max-w-4xl"
          style={{ animation: "hero-slide-up-30 0.7s ease 0.1s forwards", opacity: 0 }}
        >
          Rust tools for the machine{" "}
          <span className="text-primary">you actually use.</span>
        </h1>

        <p
          className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed"
          style={{ animation: "hero-slide-up-20 0.7s ease 0.45s forwards", opacity: 0 }}
        >
          Menu bar utilities, background daemons, and terminal system observers,
          built in Rust for macOS. 27 years in IT, now spent automating the boring parts.
        </p>

        <div
          className="mt-10 flex items-center gap-3 flex-wrap"
          style={{ animation: "hero-slide-up-20 0.6s ease 0.65s forwards", opacity: 0 }}
        >
          <a
            href="#apps"
            className="px-5 py-2.5 rounded-[3px] bg-primary text-background font-mono text-sm font-semibold transition-colors duration-150 hover:bg-[#ff6a24]"
          >
            ./view-apps
          </a>
          <a
            href="https://github.com/R0tten0x"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-[3px] border border-border font-mono text-sm text-foreground/80 hover:border-primary hover:text-foreground transition-colors duration-150"
          >
            github →
          </a>
        </div>

        {/* Terminal block */}
        <div
          className="pane mt-14 max-w-xl"
          style={{ animation: "hero-slide-up-20 0.6s ease 0.85s forwards", opacity: 0 }}
        >
          <span className="pane-title">zsh — ~/Developer/Projects</span>
          <div className="px-5 pt-6 pb-5 font-mono text-[13px] leading-6 overflow-x-auto">
            <p>
              <span className="text-primary">❯</span> ls --apps
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 text-foreground/85">
              {apps.map((app) => (
                <span key={app.name}>{app.name.toLowerCase()}</span>
              ))}
            </div>
            <p className="mt-1">
              <span className="text-primary">❯</span>{" "}
              <span
                aria-hidden
                className="inline-block w-2 h-4 align-[-2px] bg-foreground/80"
                style={{ animation: "hero-caret 1.1s step-end infinite" }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
