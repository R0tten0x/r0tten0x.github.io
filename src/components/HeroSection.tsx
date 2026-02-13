"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import TypeWriter from "./TypeWriter";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,65,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Init line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-cyber-green/40 text-sm font-mono mb-6 tracking-widest"
        >
          &gt; initializing...
        </motion.div>

        {/* Main name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <GlitchText
            as="h1"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-cyber-green text-glow-green tracking-wide"
          >
            {SITE.name}
          </GlitchText>
        </motion.div>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300 mb-6 min-h-[2em]"
        >
          <TypeWriter
            text={SITE.title}
            speed={45}
            delay={1000}
            onComplete={() => {
              setShowSubtitle(true);
              setTimeout(() => setShowContent(true), 300);
            }}
          />
        </motion.div>

        {/* Terminal prompt */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-mono text-cyber-green/50 mb-10"
          >
            <span className="text-cyber-green/70">{SITE.prompt}</span>
            <span className="inline-block w-[0.55em] h-[1em] bg-cyber-green/70 ml-1 align-middle animate-[blink_1s_steps(2)_infinite]" />
          </motion.div>
        )}

        {/* CTA Buttons */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border border-cyber-green text-cyber-green font-mono text-sm tracking-wider hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 border-glow-green"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border border-cyber-cyan/40 text-cyber-cyan font-mono text-sm tracking-wider hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300"
            >
              ABOUT ME
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-cyber-green/30">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <svg
            className="w-4 h-4 animate-[float-down_2s_ease-in-out_infinite]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
