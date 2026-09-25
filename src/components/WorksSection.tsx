import React from "react";

const projects = [
  {
    id: 1,
    name: "Padma Multipurpose Bridge",
    milestone: "National Pride",
    sector: "Mega Infrastructure & Engineering",
    href: "https://www.youtube.com/@UpliftBangladesh",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
    alt: "Padma Multipurpose Bridge",
  },
  {
    id: 2,
    name: "Dhaka Metro Rail (MRT Line-6)",
    milestone: "Smart Urban Transit",
    sector: "Urban Planning & Modern Mobility",
    href: "https://www.youtube.com/@UpliftBangladesh",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a918d963853166aa90570c3_Group%201400.webp",
    alt: "Dhaka Metro Rail MRT-6",
  },
  {
    id: 3,
    name: "Hazrat Shahjalal International Airport — Terminal 3",
    milestone: "Global Aviation Gateway",
    sector: "Aviation, Tourism & Global Logistics",
    href: "https://www.youtube.com/@UpliftBangladesh",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a91506acd785cbeba50f8f9_Bravo1Alpha.webp",
    alt: "Hazrat Shahjalal International Airport — Terminal 3",
  },
  {
    id: 4,
    name: "Bangabandhu Sheikh Mujibur Rahman Tunnel",
    milestone: "South Asia's 1st Underwater Tunnel",
    sector: "Engineering Innovation & Connectivity",
    href: "https://www.youtube.com/@UpliftBangladesh",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a955958e3b107ca50cf90e2_Cover%20(13).webp",
    alt: "Karnaphuli River Tunnel",
  },
  {
    id: 5,
    name: "Rooppur Nuclear Power Plant",
    milestone: "Nuclear Energy Era",
    sector: "Clean Energy & Sustainable Power",
    href: "https://www.youtube.com/@UpliftBangladesh",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
    alt: "Rooppur Nuclear Power Plant",
  },
  {
    id: 6,
    name: "Matarbari Deep Sea Port",
    milestone: "Maritime Economic Engine",
    sector: "Deep Sea Port & Export Logistics",
    href: "https://www.youtube.com/@UpliftBangladesh",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a9189a08805fd2c259fee18_Cover6-p-1600.webp",
    alt: "Matarbari Deep Sea Port",
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="works-section">
      {/* ── Section header ───────────────────────────────────── */}
      <div className="works-section__header padding-global">
        <div className="container-xxsmall">
          <div className="text-color-grey-300">
            <div className="text-style-label-caption">Mega-Projects Featured</div>
          </div>
          <div className="spacer-small"></div>
          <div className="text-align-center">
            <h2 className="heading-style-h2">
              Transforming National Ambition into Visual Reality
            </h2>
          </div>
        </div>
      </div>

      <div className="spacer-large show-tablet"></div>

      {/* ── Stacking cards arena ─────────────────────────────── */}
      <div className="works-stack">
        {/*
         * Left side-column — sticky label that updates per active card.
         * JS in CosmosInteractions drives the text swap via data-works-meta.
         */}
        <div className="works-meta works-meta--left" aria-hidden="true">
          <span className="works-meta__label">MILESTONE</span>
          <span className="works-meta__value" data-works-meta="milestone">
            {projects[0].milestone}
          </span>
        </div>

        {/* ── Card list ──────────────────────────────────────── */}
        <div className="works-stack__cards" data-works-stack>
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="works-stack__item"
              data-works-index={idx}
              style={{ zIndex: idx + 1 }}
            >
              {/* Floating top badge */}
              <div className="works-badge">
                <img
                  src="/assets/img/logo/logo.png"
                  alt="Uplift Bangladesh"
                  className="works-badge__icon"
                />
                <span className="works-badge__name">{project.name}</span>
                <span className="works-badge__divider" aria-hidden="true">|</span>
                <span className="works-badge__cta">Watch Documentary →</span>
              </div>

              {/* Main card */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="works-card"
                aria-label={`Watch documentary: ${project.name}`}
              >
                <img
                  loading={idx === 0 ? "eager" : "lazy"}
                  src={project.image}
                  alt={project.alt}
                  className="works-card__image"
                />
                {/* subtle gradient overlay so badge text is legible */}
                <div className="works-card__overlay" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        {/*
         * Right side-column — sticky label that updates per active card.
         */}
        <div className="works-meta works-meta--right" aria-hidden="true">
          <span className="works-meta__label">SECTOR</span>
          <span className="works-meta__value" data-works-meta="sector">
            {projects[0].sector}
          </span>
        </div>
      </div>

      {/* ── "View All Works" CTA — appears after the stack ───── */}
      <div className="works-cta-row">
        <a
          href="https://www.youtube.com/@UpliftBangladesh"
          target="_blank"
          rel="noopener noreferrer"
          className="works-cta-btn"
        >
          Watch All Documentaries
        </a>
      </div>

      <div className="spacer-huge"></div>
    </section>
  );
}
