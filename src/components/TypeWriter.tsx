"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function TypeWriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypeWriterProps) {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block w-[0.6em] h-[1.1em] bg-cyber-green ml-[2px] align-middle ${
            isComplete ? "animate-[blink_1s_steps(2)_infinite]" : ""
          }`}
        />
      )}
    </span>
  );
}
