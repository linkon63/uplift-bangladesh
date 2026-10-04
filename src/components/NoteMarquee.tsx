import React from "react";
import { MARQUEE_ITEMS } from "@/data";

export default function NoteMarquee() {
  return (
    <div className="note-marquee-section" aria-hidden="true">
      <div className="note-marquee-track">
        {/* Set 1 */}
        {MARQUEE_ITEMS.map((item, idx) => (
          <div key={`m1-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
        {/* Set 2 (duplicate for seamless loop) */}
        {MARQUEE_ITEMS.map((item, idx) => (
          <div key={`m2-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
        {/* Set 3 (duplicate for ultra-wide screens) */}
        {MARQUEE_ITEMS.map((item, idx) => (
          <div key={`m3-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
