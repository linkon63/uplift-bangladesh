import React from "react";

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

                {/* 2 About Items in exact order (Requirement 7 Criterion 4) */}
                <div className="about_items">
                  {/* Item 1: Bangladesh Based */}
                  <div className="about_item">
                    <div
                      className="about_lottie"
                      data-w-id="4c18b827-b20c-1e1d-1997-95cc5621e935"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/664b347d42b63a8c8c6026dc/664ca8e0cfd8688ec332af69_globe.json"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="1"
                      data-is-ix2-target="0"
                      data-renderer="svg"
                      data-default-duration="2"
                      data-duration="0"
                      data-loading="eager"
                    ></div>
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

                  {/* Item 2: Mission-driven storytelling */}
                  <div className="about_item">
                    <div
                      className="about_lottie big"
                      data-w-id="4c18b827-b20c-1e1d-1997-95cc5621e93d"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/69f9c76f84333229e651eb01_Loading%20Icon%20Dot%20Orbit.lottie"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="1"
                      data-is-ix2-target="0"
                      data-renderer="svg"
                      data-default-duration="0"
                      data-duration="1.3333333333333333"
                      data-loading="eager"
                    ></div>
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

              {/* Team Grid (Requirement 7 Criteria 5, 6, 7) */}
              <div
                id="w-node-_4c18b827-b20c-1e1d-1997-95cc5621e944-5621e91f"
                data-w-id="4c18b827-b20c-1e1d-1997-95cc5621e944"
                className="home-grid_team"
              >
                <div className="team-heading">
                  <h3 className="home-grid_team-heading">
                    A dedicated crew of filmmakers and storytellers
                  </h3>
                  <div className="text-style-label-caption text-zinc-400">
                    Not AI-generated content
                  </div>
                </div>

                <div className="home-grid_circle-1">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5b8b75eb263d8b6c19d5_68486ea1b62e298a9c363bac_woman-1.webp-4.webp"
                    alt="Production Director"
                    className="home-grid_member _1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5b8b4732127b1f42b5e4_68486ea1b62e298a9c363bac_woman-1.webp.webp"
                    alt="Cinematographer"
                    className="home-grid_member _2"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5b8a2e32fcf2cf5cbd35_68486ea1b62e298a9c363bac_woman-1.webp-2.webp"
                    alt="Drone Pilot"
                    className="home-grid_member _6"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5b8be38134f60bd5a601_inha.webp"
                    alt="Executive Producer"
                    className="home-grid_member _3"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5b8aa0d32dad6ff79188_68486ea1b62e298a9c363bac_woman-1.webp-3.webp"
                    alt="Post-Production Lead"
                    className="home-grid_member _4"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5b8a09be1cb47db79c7e_68486ea1b62e298a9c363bac_woman-1.webp-1.webp"
                    alt="Sound Engineer"
                    className="home-grid_member _5"
                  />
                </div>

                <div className="home-grid_circle-2">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5cd7ee3735e033960565_valentyn.webp"
                    alt="Aerial Survey Specialist"
                    className="home-grid_member-in _4"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5cd745d6b1d026231ea7_6848719db62e298a9c37c483_woman-4.webp-1.webp"
                    alt="VFX & Motion Graphics"
                    className="home-grid_member-in _6"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5cd70b0b87df0f8be562_6848719db62e298a9c37c483_woman-4.webp-2.webp"
                    alt="Colorist"
                    className="home-grid_member-in _1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5cd8337c92754f2dbdb4_vova.webp"
                    alt="Field Producer"
                    className="home-grid_member-in _5"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5cd723d1e9a481cbd2d0_6848719db62e298a9c37c483_woman-4.webp.webp"
                    alt="Narrator & Scriptwriter"
                    className="home-grid_member-in _2"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6a6b5cd793ba195c7cc0f442_rostyslav.webp"
                    alt="Research Specialist"
                    className="home-grid_member-in _3"
                  />
                </div>

                <canvas id="space" className="space-canvas"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-section-medium"></div>
      </section>
    </>
  );
}
