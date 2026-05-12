import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.05]">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/20">
          &copy; {new Date().getFullYear()} R0tten0x
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/15">
          Built with Next.js &amp; Tailwind
        </span>
      </footer>
    </>
  );
}
