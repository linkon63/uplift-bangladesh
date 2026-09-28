import React from "react";

const projects = [
  {
    id: 1,
    name: "Padma Multipurpose Bridge",
    year: "2022",
    sector: "Mega Infrastructure & Engineering",
    href: "https://www.youtube.com/@UpliftBangladesh",
    thumbnail:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group%201000002663.webp",
    alt: "Padma Multipurpose Bridge",
  },
  {
    id: 2,
    name: "Dhaka Metro Rail (MRT Line-6)",
    year: "2023",
    sector: "Urban Planning & Modern Mobility",
    href: "https://www.youtube.com/@UpliftBangladesh",
    thumbnail:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a918d963853166aa90570c3_Group%201400.webp",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a918d963853166aa90570c3_Group%201400.webp",
    alt: "Dhaka Metro Rail MRT-6",
  },
  {
    id: 3,
    name: "Hazrat Shahjalal International Airport — Terminal 3",
    year: "2024",
    sector: "Aviation, Tourism & Global Logistics",
    href: "https://www.youtube.com/@UpliftBangladesh",
    thumbnail:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a91506acd785cbeba50f8f9_Bravo1Alpha.webp",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a91506acd785cbeba50f8f9_Bravo1Alpha.webp",
    alt: "Hazrat Shahjalal International Airport — Terminal 3",
  },
  {
    id: 4,
    name: "Bangabandhu Sheikh Mujibur Rahman Tunnel",
    year: "2024",
    sector: "Engineering Innovation & Connectivity",
    href: "https://www.youtube.com/@UpliftBangladesh",
    thumbnail:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a955958e3b107ca50cf90e2_Cover%20(13).webp",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a955958e3b107ca50cf90e2_Cover%20(13).webp",
    alt: "Karnaphuli River Tunnel",
  },
  {
    id: 5,
    name: "Rooppur Nuclear Power Plant",
    year: "2025",
    sector: "Clean Energy & Sustainable Power",
    href: "https://www.youtube.com/@UpliftBangladesh",
    thumbnail:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780%20(1).webp",
    alt: "Rooppur Nuclear Power Plant",
  },
  {
    id: 6,
    name: "Matarbari Deep Sea Port",
    year: "2026",
    sector: "Deep Sea Port & Export Logistics",
    href: "https://www.youtube.com/@UpliftBangladesh",
    thumbnail:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a9189a08805fd2c259fee18_Cover6-p-1600.webp",
    image:
      "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a9189a08805fd2c259fee18_Cover6-p-1600.webp",
    alt: "Matarbari Deep Sea Port",
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="section_works">
      {/* ── Section header */}
      <div className="padding-global">
        <div className="container-xxsmall">
          <div className="works_head">
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
      </div>

      <div className="spacer-large show-tablet"></div>

      {/* ── Project cards list */}
      <div className="padding-global is-tiny">
        <div className="container-large">
          <div className="works_wrapper w-dyn-list">
            <div role="list" className="works_list w-dyn-items">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  role="listitem"
                  className="works_item w-dyn-item"
                  data-w-id="48090b36-5fd8-5a0a-bf37-08438b7acbf3"
                >
                  <div className="works_card-wrap">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="works_card w-inline-block"
                      aria-label={`Watch documentary: ${project.name}`}
                    >
                      {/* Floating label */}
                      <div className="works_label">
                        <div className="about_label-infos">
                          <img
                            loading="lazy"
                            src={project.thumbnail}
                            alt=""
                            className="works_pic"
                          />
                          <h3 className="works_name">{project.name}</h3>
                        </div>
                        <div className="see-works_divider"></div>
                        <div className="text-size-tiny text-color-white">Watch Documentary</div>
                      </div>

                      {/* Full-width project image */}
                      <img
                        loading={idx === 0 ? "eager" : "lazy"}
                        src={project.image}
                        alt={project.alt}
                        className="works_image"
                      />
                    </a>

                    {/* Meta info row */}
                    <div className="works_infos">
                      <div className="works_infos-group">
                        <div className="text-color-grey-400">
                          <div {...{ animation: "year-1" }} className="text-style-label-caption">Year</div>
                        </div>
                        <div {...{ animation: "year-2" }} className="works_info">{project.year}</div>
                      </div>
                      <div className="works_infos-group right">
                        <div className="text-color-grey-400">
                          <div {...{ animation: "service-1" }} className="text-style-label-caption no-underline">Sector</div>
                        </div>
                        <div {...{ animation: "service-2" }} className="works_info">{project.sector}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── "View All" CTA button */}
      <div className="button-center">
        <a
          data-wf--button--variant="medium-light"
          href="https://www.youtube.com/@UpliftBangladesh"
          target="_blank"
          rel="noopener noreferrer"
          className="button w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 w-inline-block"
        >
          <div className="button-in w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57">
            <div className="button_texts w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57">
              <div className="button_text w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 _1">
                Watch All Documentaries
              </div>
              <div
                aria-hidden="true"
                className="button_text w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 _2"
              >
                Watch All Documentaries
              </div>
            </div>
            <div className="button_glow-wrap">
              <div className="button_glow"></div>
            </div>
          </div>
          <div className="button_border-wrap">
            <div className="button_border"></div>
          </div>
        </a>
      </div>

      <div className="spacer-huge"></div>
    </section>
  );
}
