"use client";

import React from "react";
import { AnimatedCounterProps } from "@/types";
import { useAnimatedCounter } from "@/hooks";

export function AnimatedCounter({
  target,
  duration = 2200,
  suffix = "+",
  trigger,
}: AnimatedCounterProps) {
  const displayValue = useAnimatedCounter({ target, duration, trigger });

  return (
    <span className="tabular-nums inline-block font-sans font-medium">
      {displayValue.toLocaleString("en-US")}
      <span className="text-[#EE3028] ml-0.5 font-medium">
        {suffix}
      </span>
    </span>
  );
}
