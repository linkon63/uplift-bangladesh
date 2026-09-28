"use client";

import React, { useState } from "react";

const services = [
  {
    id: 1,
    number: "1",
    title: "Documentary Filmmaking",
    variant: "base",
    tags: ["Feature Length", "Short-Form", "Series", "Broadcast", "Digital"],
    description:
      "Comprehensive investigative and milestone documentary filmmaking chronicling national progress, massive infrastructure feats, and human-centered stories that resonate across Bangladesh and globally.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
    cta: "#contact",
    ctaLabel: "Enquire Now",
  },
  {
    id: 2,
    number: "2",
    title: "Corporate Brand Films (OVC)",
    variant: "base",
    tags: ["Corporate Identity", "Brand Storytelling", "Commercial", "TVC", "Product Launch"],
    description:
      "High-impact online video commercials and cinematic corporate profile films that elevate enterprise prestige, build consumer trust, and communicate visionary market leadership.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
    cta: "#contact",
    ctaLabel: "Enquire Now",
  },
  {
    id: 3,
    number: "3",
    title: "Drone Cinematography & Aerial Survey",
    variant: "base",
    tags: ["Aerial Photography", "4K Video", "Survey", "Infrastructure", "Real Estate"],
    description:
      "Certified aerial production teams deploying advanced 4K drone systems to capture sweeping panoramas, structural surveys, and cinematic aerial views of mega-construction.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a960be8bd7079f1a7fdf108_6a9186e28805fd2c259d8a07_cover3.webp",
    cta: "#contact",
    ctaLabel: "Enquire Now",
  },
];

const focusAreas = [
  {
    id: 1,
    number: "1",
    title: "Mega Infrastructure",
    variant: "base",
    tags: ["Bridges", "Tunnels", "Roads", "Highways", "Flyovers"],
    description:
      "Chronicling massive civil engineering milestones connecting communities and fueling national economic growth across Bangladesh.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
    cta: "#contact",
    ctaLabel: "Learn More",
  },
  {
    id: 2,
    number: "2",
    title: "Smart Cities & Urban Development",
    variant: "base",
    tags: ["Metro Rail", "City Planning", "Urban Mobility", "Public Transport"],
    description:
      "Documenting urban transit innovations, smart city architecture, and the modernization of urban life and commuting.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a918d963853166aa90570c3_Group%201400.webp",
    cta: "#contact",
    ctaLabel: "Learn More",
  },
  {
    id: 3,
    number: "3",
    title: "Industrial Manufacturing",
    variant: "base",
    tags: ["Factory Films", "Industrial Process", "RMG Sector", "Export Zones"],
    description:
      "Showcasing high-precision manufacturing, industrial automation, and the global export powerhouses powering the economy.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a9189ab604ec65ad1129612_53-p-800.webp",
    cta: "#contact",
    ctaLabel: "Learn More",
  },
  {
    id: 4,
    number: "4",
    title: "Energy & Sustainability",
    variant: "base",
    tags: ["Renewable Energy", "Solar", "Wind", "Nuclear", "Green Tech"],
    description:
      "Documenting the nation's transition to sustainable power generation and clean energy infrastructure.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
    cta: "#contact",
    ctaLabel: "Learn More",
  },
  {
    id: 5,
    number: "5",
    title: "Aviation & Maritime",
    variant: "base",
    tags: ["Airports", "Seaports", "Aviation", "Logistics", "Trade"],
    description:
      "Capturing the modernization of global trade gateways connecting Bangladesh to the world.",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a91506acd785cbeba50f8f9_Bravo1Alpha.webp",
    cta: "#contact",
    ctaLabel: "Learn More",
  },
];

function ServiceItem({
  item,
}: {
  item: (typeof services)[0] | (typeof focusAreas)[0];
}) {
  return (
    <div role="listitem" className="service-sticky w-dyn-item">
      <div
        data-wf--home-services_item--variant={item.variant}
        className="home-services_item"
      >
        <div className="line-2 is-darker"></div>
        <div className="home-services_item-in">
          <div className="home-services_examples">
            <div className="home-services_item-head">
              <div className="home-services_number">
                <div>{item.number}</div>
              </div>
              <h2 className="home-services_title">{item.title}</h2>
            </div>
            <div className="home-services_services">
              <div className="tag-text w-richtext">
                {item.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            </div>
            <div className="service-button_desktop">
              <a
                data-wf--button--variant="small-light"
                href={item.cta}
                className="button w-inline-block"
              >
                <div className="button-in">
                  <div className="button_texts">
                    <div className="button_text _1">{item.ctaLabel}</div>
                    <div aria-hidden="true" className="button_text _2">
                      {item.ctaLabel}
                    </div>
                  </div>
                  <div className="button_glow-wrap">
                    <div className="button_glow"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="home-services_desc">
            <div className="home-services_img-wrap">
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="home-services_img"
              />
            </div>
            <div className="home-services_text-wrap">
              <p className="text-color-grey-300-2">{item.description}</p>
            </div>
          </div>
          <div className="service-button_mobile">
            <a
              data-wf--button--variant="medium-light"
              href={item.cta}
              className="button w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 w-inline-block"
            >
              <div className="button-in w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57">
                <div className="button_texts w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57">
                  <div className="button_text w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 _1">
                    {item.ctaLabel}
                  </div>
                  <div
                    aria-hidden="true"
                    className="button_text w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 _2"
                  >
                    {item.ctaLabel}
                  </div>
                </div>
                <div className="button_glow-wrap">
                  <div className="button_glow"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"Tab 1" | "Tab 2">("Tab 1");

  return (
    <section id="services" data-wf--services--variant="dark" className="section_home-services">
      <div className="padding-global is-tiny">
        <div className="home-services_component">
          <div className="padding-section-small"></div>
          <div className="padding-global services">
            <div className="container-medium">
              <div className="home-services_head">
                <div className="home-services_icons">
                  {/* Decorative cross icons */}
                  {["tl", "tr", "bl", "br"].map((pos) => (
                    <img
                      key={pos}
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a20c794fcbc3b8530bc40d9_close-white.svg"
                      alt=""
                      className="home-services_icon"
                    />
                  ))}
                </div>
              </div>

              <div className="spacer-xlarge is-mobile-medium"></div>

              <div className="head-grid">
                <div className="home-services_content">
                  <h2 className="sr-only">
                    Production services and key focus areas of Uplift Bangladesh
                  </h2>

                  {/* Tab switcher — matching cosmos.studio tabs */}
                  <div
                    data-current={activeTab}
                    data-easing="ease"
                    data-duration-in="300"
                    data-duration-out="100"
                    className="w-tabs"
                  >
                    <div className="tab-menu w-tab-menu">
                      <a
                        data-w-tab="Tab 1"
                        role="tab"
                        href="#tab-services"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("Tab 1");
                        }}
                        className={`tab-link w-inline-block w-tab-link ${
                          activeTab === "Tab 1" ? "w--current" : ""
                        }`}
                      >
                        <div>Services</div>
                        <div data-count="services" className="navbar_works-number">
                          ({services.length})
                        </div>
                      </a>
                      <a
                        data-w-tab="Tab 2"
                        role="tab"
                        href="#tab-focus"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("Tab 2");
                        }}
                        className={`tab-link w-inline-block w-tab-link ${
                          activeTab === "Tab 2" ? "w--current" : ""
                        }`}
                      >
                        <div>Focus Areas</div>
                        <div data-count="industries" className="navbar_works-number">
                          ({focusAreas.length})
                        </div>
                      </a>
                    </div>

                    <div className="tabs-content w-tab-content">
                      {/* Tab 1 — Services */}
                      <div
                        data-w-tab="Tab 1"
                        className={`w-tab-pane transition-opacity duration-300 ${
                          activeTab === "Tab 1" ? "w--tab-active block opacity-100" : "hidden opacity-0"
                        }`}
                      >
                        <div className="relative w-dyn-list">
                          <div
                            data-items="services"
                            role="list"
                            className="home-services_items w-dyn-items"
                          >
                            {services.map((s) => (
                              <ServiceItem key={s.id} item={s} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tab 2 — Focus Areas */}
                      <div
                        data-w-tab="Tab 2"
                        className={`w-tab-pane transition-opacity duration-300 ${
                          activeTab === "Tab 2" ? "w--tab-active block opacity-100" : "hidden opacity-0"
                        }`}
                      >
                        <div className="relative w-dyn-list">
                          <div
                            data-items="industries"
                            role="list"
                            className="home-services_items w-dyn-items"
                          >
                            {focusAreas.map((a) => (
                              <ServiceItem key={a.id} item={a} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-section-small"></div>
        </div>
      </div>
    </section>
  );
}
