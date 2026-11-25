"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavigationScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const raf = requestAnimationFrame(() => {
        if (!window.location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        } else {
          try {
            const el = document.querySelector(window.location.hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
          } catch {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          }
        }
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [pathname]);

  return null;
}
