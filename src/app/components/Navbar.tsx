"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 text-sm font-mono tracking-widest uppercase text-white/70 hover:text-white transition-colors"
        >
          <Image
            src="/avatar.png"
            alt="R0tten0x"
            width={28}
            height={28}
            className="rounded-full ring-1 ring-white/10"
          />
          R0tten0x
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-[11px] font-mono tracking-[0.18em] uppercase transition-colors duration-200 ${
                active === link.href.slice(1)
                  ? "text-primary"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Spacer to balance flex layout */}
        <div className="w-24 hidden md:block" />
      </div>
    </motion.nav>
  );
}
