"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);

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
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5"
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto flex justify-center gap-8 py-4 px-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(link.href)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`text-sm tracking-wide transition-colors duration-200 ${
              active === link.href.slice(1)
                ? "text-blue-400"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
