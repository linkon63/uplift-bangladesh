"use client";

import React from "react";
import { SERVICES_DATA, FOCUS_AREAS_DATA } from "@/data";
import { useServicesTab } from "@/hooks";
import { ServiceCard } from "./services/ServiceCard";

export default function ServicesSection() {
  const { activeTab, setActiveTab, servicesCount, focusAreasCount } = useServicesTab("Tab 1");

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
                    <div className="tab-menu w-tab-menu" role="tablist">
                      <a
                        data-w-tab="Tab 1"
                        role="tab"
                        id="tab-services"
                        aria-controls="pane-services"
                        aria-selected={activeTab === "Tab 1"}
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
                        <div className="navbar_works-number">
                          {`(${servicesCount})`}
                        </div>
                      </a>
                      <a
                        data-w-tab="Tab 2"
                        role="tab"
                        id="tab-focus"
                        aria-controls="pane-focus"
                        aria-selected={activeTab === "Tab 2"}
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
                        <div className="navbar_works-number">
                          {`(${focusAreasCount})`}
                        </div>
                      </a>
                    </div>

                    <div className="tabs-content w-tab-content">
                      {/* Tab 1 — Services */}
                      <div
                        id="pane-services"
                        role="tabpanel"
                        aria-labelledby="tab-services"
                        data-w-tab="Tab 1"
                        className={`w-tab-pane transition-opacity duration-300 ${
                          activeTab === "Tab 1" ? "w--tab-active block opacity-100" : "hidden opacity-0"
                        }`}
                      >
                        <div className="relative w-dyn-list">
                          <div
                            role="list"
                            className="home-services_items w-dyn-items"
                          >
                            {SERVICES_DATA.map((service) => (
                              <ServiceCard key={service.id} item={service} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tab 2 — Focus Areas */}
                      <div
                        id="pane-focus"
                        role="tabpanel"
                        aria-labelledby="tab-focus"
                        data-w-tab="Tab 2"
                        className={`w-tab-pane transition-opacity duration-300 ${
                          activeTab === "Tab 2" ? "w--tab-active block opacity-100" : "hidden opacity-0"
                        }`}
                      >
                        <div className="relative w-dyn-list">
                          <div
                            role="list"
                            className="home-services_items w-dyn-items"
                          >
                            {FOCUS_AREAS_DATA.map((area) => (
                              <ServiceCard key={area.id} item={area} />
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
