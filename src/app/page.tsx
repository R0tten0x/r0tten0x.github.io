import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { apps } from "./data/apps";

const appsJsonLd = apps.map((app) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: app.name,
  ...(app.repo && { url: app.repo }),
  applicationCategory: app.kind === "tui" || app.kind === "cli" ? "DeveloperApplication" : "UtilitiesApplication",
  operatingSystem: "macOS",
  programmingLanguage: "Rust",
  description: app.description,
  author: { "@type": "Person", name: "Robert", alternateName: "R0tten0x" },
}));

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border font-mono text-xs text-muted">
        <span>&copy; {new Date().getFullYear()} r0tten0x</span>
        <span>
          built with next.js <span className="text-primary">·</span> written in rust elsewhere
        </span>
      </footer>
    </>
  );
}
