import React from "react";
import { WORKS_PROJECTS } from "@/data";

export default function WorksSection() {
  return (
    <section id="works" className="section_works">
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

      <div className="padding-global is-tiny">
        <div className="container-large">
          <div className="works_wrapper w-dyn-list">
            <div role="list" className="works_list w-dyn-items">
              {WORKS_PROJECTS.map((project, idx) => (
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

                      <img
                        loading={idx === 0 ? "eager" : "lazy"}
                        src={project.image}
                        alt={project.alt}
                        className="works_image"
                      />
                    </a>

                    {/* Mobile & Tablet Metadata Row */}
                    <div className="lg:hidden flex flex-col gap-1 mt-3 px-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-zinc-900 leading-snug">
                          {project.name}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-[#EE3028] bg-[#EE3028]/10 px-2 py-0.5 rounded-full shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 font-medium m-0">
                        {project.sector}
                      </p>
                    </div>

                    <div className="works_infos hidden lg:flex">
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
