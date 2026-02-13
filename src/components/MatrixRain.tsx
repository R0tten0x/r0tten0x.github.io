"use client";

import { useEffect, useRef } from "react";

const CHARACTERS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\+=~`!@#$%^&*";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const fontSize = 14;
    let columns: number;
    let drops: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
    }

    resize();

    let lastFrame = 0;
    const frameInterval = 1000 / 15; // 15 fps

    function draw(timestamp: number) {
      if (timestamp - lastFrame < frameInterval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx!.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] < 0) {
          drops[i]++;
          continue;
        }

        const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        ctx!.fillStyle = "rgba(0, 255, 65, 0.9)";
        ctx!.fillText(char, x, y);

        // Dimmer trail
        if (drops[i] > 1) {
          const trailChar =
            CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          ctx!.fillStyle = "rgba(0, 255, 65, 0.15)";
          ctx!.fillText(trailChar, x, y - fontSize);
        }

        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    }

    let animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
    />
  );
}
