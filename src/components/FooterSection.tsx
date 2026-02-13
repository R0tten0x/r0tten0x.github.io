"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlitchText from "./GlitchText";
import SectionWrapper from "./SectionWrapper";
import { SOCIAL_LINKS, SITE } from "@/lib/constants";

export default function FooterSection() {
  return (
    <SectionWrapper id="contact" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl text-center">
        {/* Section heading */}
        <div className="mb-12">
          <GlitchText
            as="h2"
            className="text-3xl sm:text-4xl font-display text-cyber-green text-glow-green tracking-wide"
          >
            // Connect
          </GlitchText>
          <div className="mt-3 h-[1px] w-16 bg-cyber-green/30 mx-auto" />
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {SOCIAL_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 flex items-center justify-center border border-cyber-green/20 rounded-full bg-cyber-gray/50 hover:border-cyber-green/60 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] transition-all duration-300 group"
              title={link.name}
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 invert"
              />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-cyber-green/10 mb-8" />

        {/* Copyright */}
        <p className="text-gray-600 text-xs font-mono tracking-wider">
          {SITE.copyright}
        </p>
      </div>
    </SectionWrapper>
  );
}
