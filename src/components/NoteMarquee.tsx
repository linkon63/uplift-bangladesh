import React from "react";
import { MARQUEE_ITEMS } from "@/data";

export default function NoteMarquee() {
  return (
    <div className="note-marquee-section" aria-hidden="true">
      <div className="note-marquee-track">
        {MARQUEE_ITEMS.map((item, idx) => (
          <div key={`m1-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
        {MARQUEE_ITEMS.map((item, idx) => (
          <div key={`m2-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
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
