"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

const links = [
  { href: "#about", label: "about" },
  { href: "#apps", label: "apps" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
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
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "bg-background/95 border-border" : "bg-transparent border-transparent"
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3.5 px-6">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 font-mono text-sm text-foreground/85 hover:text-foreground transition-colors"
        >
          <Image
            src="/avatar.png"
            alt="R0tten0x"
            width={26}
            height={26}
            className="rounded-[3px] ring-1 ring-border"
          />
          <span>
            r0tten0x<span className="text-primary">@</span>dev
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`font-mono text-xs transition-colors duration-150 ${
                  isActive ? "text-primary" : "text-muted hover:text-foreground"
                }`}
              >
                <span className={isActive ? "" : "invisible"}>▸</span> {link.label}
              </a>
            );
          })}
        </div>

        {/* Right — GitHub */}
        <a
          href="https://github.com/R0tten0x"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted hover:text-foreground transition-colors duration-150"
        >
          <SiGithub className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
}
