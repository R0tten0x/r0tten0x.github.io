"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import GlitchText from "@/components/GlitchText";
import { BIO, STATS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-12">
          <GlitchText
            as="h2"
            className="text-3xl sm:text-4xl font-display text-cyber-green text-glow-green tracking-wide"
          >
            // About
          </GlitchText>
          <div className="mt-3 h-[1px] w-16 bg-cyber-green/30" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-base sm:text-lg leading-[1.8] font-mono">
              {BIO}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="border border-cyber-green/10 bg-cyber-gray/50 p-4 group hover:border-cyber-green/30 transition-all duration-300"
              >
                <div className="text-cyber-green/50 text-xs font-mono tracking-wider mb-1">
                  &gt; {stat.label}
                </div>
                <div className="text-white font-mono text-lg group-hover:text-cyber-green transition-colors duration-300">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
