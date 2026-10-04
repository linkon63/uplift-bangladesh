"use client";

import { useState, useEffect } from "react";

interface UseAnimatedCounterOptions {
  target: number;
  duration?: number;
  trigger: boolean;
}

export function useAnimatedCounter({
  target,
  duration = 2200,
  trigger,
}: UseAnimatedCounterOptions): number {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    // Check for reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timer = setTimeout(() => setDisplayValue(target), 0);
      return () => clearTimeout(timer);
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic Ease-Out: 1 - (1 - progress)^4
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(easeOut * target);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, trigger]);

  return displayValue;
}
