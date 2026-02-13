"use client";

import { motion } from "framer-motion";
import { SiInstagram, SiGithub } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/r0tten0x_",
    icon: SiInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/R0tten0x",
    icon: SiGithub,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Contact</h2>
      <div className="h-px w-12 bg-blue-400/60 mb-8" />
      <div className="flex gap-6">
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-neutral-300 hover:border-blue-400/30 hover:text-white transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <social.icon className="w-5 h-5" />
            <span className="text-sm">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  );
}
