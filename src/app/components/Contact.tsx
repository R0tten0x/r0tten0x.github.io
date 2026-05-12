"use client";

import { useState } from "react";
import { SiInstagram, SiGithub } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const socials = [
  { name: "GitHub", href: "https://github.com/R0tten0x", icon: SiGithub },
  { name: "Instagram", href: "https://instagram.com/r0tten0x_", icon: SiInstagram },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mpqkevql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatedSection id="contact" className="max-w-4xl mx-auto px-6 py-28">
      <SectionLabel label="Contact" />
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Let&apos;s build something.
      </h2>
      <p className="text-white/40 text-lg font-light mb-10 max-w-md">
        Have a project in mind or just want to say hi? Reach out.
      </p>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 mb-4 flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-widest uppercase text-white/30">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(79,126,255,0.1)] transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-widest uppercase text-white/30">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(79,126,255,0.1)] transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-mono tracking-widest uppercase text-white/30">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(79,126,255,0.1)] transition-all resize-none"
          />
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_0_24px_rgba(79,126,255,0.35)] hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(79,126,255,0.55)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : status === "success" ? "Sent ✓" : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-[11px] font-mono text-danger/80">
              Something went wrong — try emailing me directly.
            </p>
          )}
        </div>
      </form>

      {/* Secondary — email + socials */}
      <div className="glass rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <a
          href="mailto:r0tten0x@proton.me"
          className="text-white/40 hover:text-white transition-colors text-sm font-mono"
        >
          r0tten0x@proton.me
        </a>

        <div className="h-px sm:h-8 sm:w-px w-full bg-white/[0.06]" />

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2.5 px-4 py-2 rounded-xl text-white/50 hover:border-primary/40 hover:text-white/90 hover:shadow-[0_0_20px_rgba(79,126,255,0.2)] transition-all duration-200"
            >
              <social.icon className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wide">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
