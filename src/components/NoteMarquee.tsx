import React from "react";

const marqueeItems = [
  "Mega Infrastructure Cinematography",
  "1,000,000+ Combined Audience",
  "451K+ YouTube Subscribers",
  "681K+ Facebook Followers",
  "100% Organic Reach & Engagement",
  "Certified 4K Drone Operators",
  "National Pride & Progress Storytelling",
  "Trusted by BSRM, bKash, Seven Rings & Top Enterprises",
];

export default function NoteMarquee() {
  return (
    <div className="note-marquee-section" aria-hidden="true">
      <div className="note-marquee-track">
        {/* Set 1 */}
        {marqueeItems.map((item, idx) => (
          <div key={`m1-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
        {/* Set 2 (duplicate for seamless loop) */}
        {marqueeItems.map((item, idx) => (
          <div key={`m2-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
        {/* Set 3 (duplicate for ultra-wide screens) */}
        {marqueeItems.map((item, idx) => (
          <div key={`m3-${idx}`} className="note-marquee__item">
            <span>{item}</span>
            <span className="note-marquee__dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
