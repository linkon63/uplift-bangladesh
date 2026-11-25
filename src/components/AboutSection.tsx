import React from "react";
import SpaceCanvas from "@/components/canvas/SpaceCanvas";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="section_about">
        <div className="padding-section-medium"></div>
        <div className="padding-global is-tiny">
          <div className="container-large">
            <div className="about_component">
              <div className="about_content">
                <div className="about_content-main">
                  <div className="text-color-grey-300">
                    <div className="text-style-label-caption">About us</div>
                  </div>
                  <div className="spacer-small"></div>
                  <h2 className="heading-style-h3 is-mobile-h4 text-[#0f1011]">
                    A trusted documentary team documenting Bangladesh&#x27;s progress and inspiring a nation
                  </h2>
                  <div className="spacer-custom-2"></div>
                  <p className="about_paragraph text-[#0f1011]">
                    We&#x27;re not a generic content creator. We&#x27;re an embedded documentary team — the longer you partner with us, the deeper our storytelling impact becomes. We focus on the projects that define Bangladesh&#x27;s future.
                  </p>
                  <div className="spacer-custom-2"></div>
                  <p className="about_paragraph text-zinc-600">
                    We bring Bangladesh&#x27;s most ambitious infrastructure, engineering, industrial, transportation, aviation, energy, and smart development projects to life—capturing the vision, innovation, and progress shaping the country&#x27;s future. More than a media platform, UPLIFT BANGLADESH is a movement committed to strengthening Bangladesh&#x27;s global image.
                  </p>
                  <div className="spacer-medium"></div>
                </div>

                <div className="about_items">
                  <div className="about_item">
                    <div
                      key="static-bangladesh-globe"
                      className="w-7 h-7 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        stroke="#0f1011"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="14" cy="14" r="10.5" />
                        <path d="M3.5 14h21" />
                        <ellipse cx="14" cy="14" rx="4.6" ry="10.5" />
                      </svg>
                    </div>
                    <div className="about_item-texts">
                      <h3 className="about_item-title text-[#0f1011]">
                        Bangladesh Based
                      </h3>
                      <div>
                        <p className="text-size-small text-weight-medium text-zinc-600">
                          Operating from Dhaka — deeply embedded in the nation&#x27;s development story
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="about_item">
                    <div
                      key="static-mission-target"
                      className="w-7 h-7 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="14"
                          cy="14"
                          r="10.5"
                          stroke="#0f1011"
                          strokeWidth="1.6"
                          strokeDasharray="3.2 3.2"
                          opacity="0.55"
                        />
                        <circle
                          cx="14"
                          cy="14"
                          r="6.2"
                          stroke="#0f1011"
                          strokeWidth="1.6"
                        />
                        <circle cx="14" cy="14" r="2.6" fill="#EE3028" />
                      </svg>
                    </div>
                    <div className="about_item-texts">
                      <h3 className="about_item-title text-[#0f1011]">
                        Mission-driven storytelling
                      </h3>
                      <div>
                        <p className="text-size-small text-weight-medium text-zinc-600">
                          We document real progress, build public trust, and inspire national pride
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="w-node-_4c18b827-b20c-1e1d-1997-95cc5621e944-5621e91f"
                data-w-id="4c18b827-b20c-1e1d-1997-95cc5621e944"
                className="home-grid_team"
              >
                <div className="team-heading">
                  <h3 className="home-grid_team-heading">
                    A dedicated crew of filmmakers and storytellers
                  </h3>
                </div>

                <div className="home-grid_circle-1" aria-hidden="true">
                  {/* Cinema Camera */}
                  <div title="Cinema Camera" className="home-grid_member _1 bg-[#14161c] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 7l-7 5 7 5V7z" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </div>
                  {/* Camera Lens / Cinematography */}
                  <div title="Cinematography" className="home-grid_member _2 bg-[#14161c] border border-white/10 flex items-center justify-center text-[#EE3028] shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3.5" />
                      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                    </svg>
                  </div>
                  {/* Aerial Drone */}
                  <div title="Aerial Drone" className="home-grid_member _6 bg-[#14161c] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="6" height="6" rx="1.5" />
                      <path d="M9 9L5 5M15 9l4-4M9 15l-4 4M15 15l4 4" />
                      <circle cx="5" cy="5" r="2.2" />
                      <circle cx="19" cy="5" r="2.2" />
                      <circle cx="5" cy="19" r="2.2" />
                      <circle cx="19" cy="19" r="2.2" />
                    </svg>
                  </div>
                  {/* Clapperboard / Directing */}
                  <div title="Directing" className="home-grid_member _3 bg-[#14161c] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4z" />
                      <path d="M4 11l-.9-3.4a2 2 0 0 1 1.4-2.4l13.6-3.6a2 2 0 0 1 2.4 1.4L21.4 6.4 4 11z" />
                      <path d="M8.5 9.8l1.2-4.6M14 8.3l1.2-4.6" />
                    </svg>
                  </div>
                  {/* Film Frame / Storyboarding */}
                  <div title="Documentary Film" className="home-grid_member _4 bg-[#14161c] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="18" rx="2" />
                      <path d="M7 3v18M17 3v18M2 12h20M2 7.5h5M2 16.5h5M17 7.5h5M17 16.5h5" />
                    </svg>
                  </div>
                  {/* Studio Microphone */}
                  <div title="Audio & Voiceover" className="home-grid_member _5 bg-[#14161c] border border-white/10 flex items-center justify-center text-[#EE3028] shadow-lg">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                </div>

                <div className="home-grid_circle-2" aria-hidden="true">
                  {/* Play / Documentary Release */}
                  <div title="Documentary Release" className="home-grid_member-in _4 bg-[#181a21] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </div>
                  {/* Broadcast / National Reach */}
                  <div title="Broadcast Reach" className="home-grid_member-in _6 bg-[#181a21] border border-white/10 flex items-center justify-center text-[#EE3028] shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
                    </svg>
                  </div>
                  {/* Editing & Post-Production */}
                  <div title="Post-Production" className="home-grid_member-in _1 bg-[#181a21] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="21" x2="4" y2="14" />
                      <line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" />
                      <line x1="20" y1="12" x2="20" y2="3" />
                      <line x1="1" y1="14" x2="7" y2="14" />
                      <line x1="9" y1="8" x2="15" y2="8" />
                      <line x1="17" y1="16" x2="23" y2="16" />
                    </svg>
                  </div>
                  {/* Headphones / Sound Mixing */}
                  <div title="Sound Design" className="home-grid_member-in _5 bg-[#181a21] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  </div>
                  {/* Scripting & Research */}
                  <div title="Storytelling & Script" className="home-grid_member-in _2 bg-[#181a21] border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  {/* Mega-Project Infrastructure / Location */}
                  <div title="On-Site Filming" className="home-grid_member-in _3 bg-[#181a21] border border-white/10 flex items-center justify-center text-[#EE3028] shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                </div>

                <SpaceCanvas />
              </div>
            </div>
          </div>
        </div>
        <div className="padding-section-medium"></div>
      </section>
    </>
  );
}
