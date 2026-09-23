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
    <AnimatedSection id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel label="Contact" />
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 tracking-tight">
        Let&apos;s build something.
      </h2>
      <p className="text-muted text-lg mb-10 max-w-md">
        Want a tool built, or just want to talk Rust? Reach out.
      </p>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="pane p-6 md:p-8 pt-8 mb-5 flex flex-col gap-4">
        <span className="pane-title">message.txt</span>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs text-muted">
              name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="bg-background border border-border rounded-[3px] px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs text-muted">
              email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="bg-background border border-border rounded-[3px] px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-xs text-muted">
            message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What should it automate?"
            className="bg-background border border-border rounded-[3px] px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="px-5 py-2.5 rounded-[3px] bg-primary text-background font-mono text-sm font-semibold transition-colors duration-150 hover:bg-[#ff6a24] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "sending..." : status === "success" ? "sent ✓" : "./send"}
          </button>

          {status === "error" && (
            <p className="text-xs font-mono text-danger">
              Something went wrong — try emailing me directly.
            </p>
          )}
        </div>
      </form>

      {/* Secondary — email + socials */}
      <div className="pane px-6 md:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <a
          href="mailto:r0tten0x@proton.me"
          className="text-muted hover:text-foreground transition-colors text-sm font-mono"
        >
          r0tten0x@proton.me
        </a>

        <div className="h-px sm:h-8 sm:w-px w-full bg-border" />

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-[3px] border border-border text-muted hover:border-primary hover:text-foreground transition-colors duration-150"
            >
              <social.icon className="w-4 h-4" />
              <span className="text-xs font-mono">{social.name.toLowerCase()}</span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
