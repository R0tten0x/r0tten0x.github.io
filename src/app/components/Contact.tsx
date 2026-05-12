"use client";

import { motion } from "framer-motion";
import { SiInstagram, SiGithub } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/R0tten0x",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/r0tten0x_",
    icon: SiInstagram,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="max-w-4xl mx-auto px-6 py-28">
      <SectionLabel label="Contact" />
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Let&apos;s build something.
      </h2>
      <p className="text-white/40 text-lg font-light mb-10 max-w-md">
        Have a project in mind or just want to say hi? Reach out.
      </p>

      <div className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-white/30 mb-1">Email</p>
          <a
            href="mailto:r0tten0x@proton.me"
            className="text-white/70 hover:text-white transition-colors text-sm font-mono"
          >
            r0tten0x@proton.me
          </a>
        </div>

        <div className="h-px sm:h-10 sm:w-px w-full bg-white/[0.06]" />

        <div className="flex gap-3">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white/50 hover:border-primary/40 hover:text-white/90 hover:shadow-[0_0_20px_rgba(79,126,255,0.2)] transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <social.icon className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wide">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
