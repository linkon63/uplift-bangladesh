import React from "react";
import { WORKS_PROJECTS } from "@/data";

const SOCIAL_CHANNELS = [
  {
    name: "YouTube",
    meta: "452K+ Subscribers",
    href: "https://www.youtube.com/@UpliftBangladesh",
    badgeClass: "bg-[#FF0000]/10 text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    meta: "706K+ Followers",
    href: "https://www.facebook.com/UpliftBangladeshOfficiall",
    badgeClass: "bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    meta: "Visual Reels",
    href: "https://www.instagram.com/upliftbangladeshofficial",
    badgeClass: "bg-[#E4405F]/10 text-[#E4405F] group-hover:bg-[#E4405F] group-hover:text-white",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    meta: "Short Stories",
    href: "https://www.tiktok.com/@upliftbangladesh.real",
    badgeClass: "bg-[#0f1011]/[0.07] text-[#0f1011] group-hover:bg-[#0f1011] group-hover:text-white",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.8a8.28 8.28 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.21z" />
      </svg>
    ),
  },
];

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

      <div className="button-center flex-col items-center gap-6">
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

        {/* Unified Official Social Channels Dock */}
        <div className="flex flex-col items-center gap-3.5 px-4 w-full max-w-3xl">
          <div className="text-color-grey-300">
            <div className="text-style-label-caption">
              Watch &amp; Follow Across Official Channels
            </div>
          </div>
          <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex sm:flex-wrap items-stretch justify-center bg-white border border-black/[0.08] rounded-2xl p-1.5 gap-1.5 shadow-[0_10px_30px_rgba(15,16,17,0.06)]">
            {SOCIAL_CHANNELS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Uplift Bangladesh on ${social.name} (${social.meta})`}
                className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-[#f4f4f6] transition-all duration-200 no-underline"
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${social.badgeClass}`}
                >
                  {social.icon}
                </span>
                <div className="flex flex-col text-left leading-none min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] font-semibold text-[#0f1011]">
                      {social.name}
                    </span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="text-zinc-400 group-hover:text-[#0f1011] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-medium text-zinc-500 mt-0.5 whitespace-nowrap">
                    {social.meta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="spacer-huge"></div>
    </section>
  );
}
