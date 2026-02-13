"use client";

interface GlitchTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
}

export default function GlitchText({
  children,
  as: Tag = "h2",
  className = "",
}: GlitchTextProps) {
  return (
    <Tag className={`glitch-text ${className}`} data-text={children}>
      {children}
    </Tag>
  );
}
