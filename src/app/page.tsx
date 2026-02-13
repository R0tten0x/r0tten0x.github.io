import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-neutral-600 text-xs tracking-wide">
        &copy; {new Date().getFullYear()} R0tten0x
      </footer>
    </>
  );
}
