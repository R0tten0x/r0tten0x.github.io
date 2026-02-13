"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayText("");
    setIsComplete(false);
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay, startTyping]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayText, isTyping, text, speed, onComplete]);

  return { displayText, isTyping, isComplete };
}
