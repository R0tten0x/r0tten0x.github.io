"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.07] blur-[130px] pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Building software{" "}
          <span className="text-primary">
            that ships.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-base md:text-lg text-white/40 max-w-lg font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Full-stack developer with 27 years in IT. I design, build, and ship
          reliable products end to end — solo.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex items-center gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_0_24px_rgba(79,126,255,0.35)] hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(79,126,255,0.55)]"
          >
            View My Work
          </a>
          <a
            href="https://github.com/R0tten0x"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-xl text-sm font-semibold tracking-wide text-white/60 hover:text-white hover:border-primary/40 hover:shadow-[0_0_24px_rgba(79,126,255,0.2)] transition-all duration-200"
          >
            GitHub →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
