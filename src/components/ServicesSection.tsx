import React from "react";

const services = [
  {
    id: 1,
    title: "Documentary Filmmaking",
    tags: ["Feature Length", "Short-Form", "Series", "Broadcast", "Digital"],
    description:
      "Comprehensive investigative and milestone documentary filmmaking chronicling national progress, massive infrastructure feats, and human-centered stories that resonate across Bangladesh and globally.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
  },
  {
    id: 2,
    title: "Corporate Brand Films (OVC)",
    tags: ["Corporate Identity", "Brand Storytelling", "Commercial", "TVC", "Product Launch"],
    description:
      "High-impact online video commercials and cinematic corporate profile films that elevate enterprise prestige, build consumer trust, and communicate visionary market leadership.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
  },
  {
    id: 3,
    title: "Drone Cinematography & Aerial Survey",
    tags: ["Aerial Photography", "4K Video", "Survey", "Infrastructure", "Real Estate"],
    description:
      "Certified aerial production teams deploying advanced 4K drone systems to capture sweeping panoramas, structural surveys, and cinematic aerial views of mega-construction.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a960be8bd7079f1a7fdf108_6a9186e28805fd2c259d8a07_cover3.webp",
  },
];

const focusAreas = [
  {
    id: 1,
    title: "Mega Infrastructure",
    tags: ["Bridges", "Tunnels", "Roads", "Highways", "Flyovers"],
    description:
      "Chronicling massive civil engineering milestones connecting communities and fueling national economic growth across Bangladesh.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
  },
  {
    id: 2,
    title: "Smart Cities & Urban Development",
    tags: ["Metro Rail", "City Planning", "Urban Mobility", "Public Transport"],
    description:
      "Documenting urban transit innovations, smart city architecture, and the modernization of urban life and commuting.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a918d963853166aa90570c3_Group%201400.webp",
  },
  {
    id: 3,
    title: "Industrial Manufacturing",
    tags: ["Factory Films", "Industrial Process", "RMG Sector", "Export Zones"],
    description:
      "Showcasing high-precision manufacturing, industrial automation, and the global export powerhouses powering the economy.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a9189ab604ec65ad1129612_53-p-800.webp",
  },
  {
    id: 4,
    title: "Energy & Sustainability",
    tags: ["Renewable Energy", "Solar", "Wind", "Nuclear", "Green Tech"],
    description:
      "Documenting the nation's transition to sustainable power generation and clean energy infrastructure.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
  },
  {
    id: 5,
    title: "Aviation & Maritime",
    tags: ["Airports", "Seaports", "Aviation", "Logistics", "Trade"],
    description:
      "Capturing the modernization of global trade gateways connecting Bangladesh to the world.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a91506acd785cbeba50f8f9_Bravo1Alpha.webp",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      {/* ── Crosshair corner accents ─────────────────────────── */}
      <div className="services-crosshair services-crosshair--tl" aria-hidden="true">+</div>
      <div className="services-crosshair services-crosshair--tr" aria-hidden="true">+</div>
      <div className="services-crosshair services-crosshair--bl" aria-hidden="true">+</div>
      <div className="services-crosshair services-crosshair--br" aria-hidden="true">+</div>

      <div className="services-container">
        <h2 className="sr-only">
          Production services and key focus areas of Uplift Bangladesh
        </h2>

        {/* ── Sticky tab bar ───────────────────────────────────── */}
        <div className="services-tabs-sticky">
          <div className="services-tabs">
            <button
              className="services-tab services-tab--active"
              data-services-tab="services"
              aria-selected="true"
            >
              Services <span className="services-tab__count">(3)</span>
            </button>
            <button
              className="services-tab"
              data-services-tab="focus-areas"
              aria-selected="false"
            >
              Focus Areas <span className="services-tab__count">(5)</span>
            </button>
          </div>
        </div>

        {/* ── Tab 1: Services ───────────────────────────────────── */}
        <div className="services-pane services-pane--active" data-services-pane="services">
          {services.map((service, idx) => (
            <div key={service.id} className="service-row">
              {/* Left column: title, tags, CTA */}
              <div className="service-row__left">
                <div className="service-row__number" aria-hidden="true">
                  {idx + 1}
                </div>
                <h3 className="service-row__title">{service.title}</h3>
                <div className="service-row__tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="service-row__cta">
                  Enquire Now
                </a>
              </div>

              {/* Right column: image + description */}
              <div className="service-row__right">
                <div className="service-row__image-wrap">
                  <img
                    loading={idx === 0 ? "eager" : "lazy"}
                    src={service.image}
                    alt={service.title}
                    className="service-row__image"
                  />
                </div>
                <p className="service-row__desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tab 2: Focus Areas ────────────────────────────────── */}
        <div className="services-pane" data-services-pane="focus-areas">
          {focusAreas.map((area, idx) => (
            <div key={area.id} className="service-row">
              <div className="service-row__left">
                <div className="service-row__number" aria-hidden="true">
                  {idx + 1}
                </div>
                <h3 className="service-row__title">{area.title}</h3>
                <div className="service-row__tags">
                  {area.tags.map((tag, i) => (
                    <span key={i} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="service-row__cta">
                  Learn More
                </a>
              </div>

              <div className="service-row__right">
                <div className="service-row__image-wrap">
                  <img
                    loading="lazy"
                    src={area.image}
                    alt={area.title}
                    className="service-row__image"
                  />
                </div>
                <p className="service-row__desc">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
