import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const productsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "StillUp",
    url: "https://www.stillup.org",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Uptime monitoring and beautiful public status pages. Half the price of the competition, all the features your SaaS needs.",
    offers: { "@type": "Offer", price: "9.00", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChargeShield",
    url: "https://r0tten0x.dev",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Chargeback prevention and protection SaaS. ChargeShield fights chargebacks so you don't have to.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnappIcon",
    url: "https://snappicon.com",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description: "App icon and favicon generator. Create web-ready icons instantly.",
  },
];

export default function Home() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
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
