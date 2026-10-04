import React from "react";
import { SPONSORSHIP_PACKAGES, SPONSORSHIP_BENEFITS, PARTNERSHIP_TERMS } from "@/data";

export default function SponsorshipSection() {

  return (
    <section id="sponsorship" data-wf--services--variant="dark" className="section_home-services">
      <div className="padding-global is-tiny">
        <div className="home-services_component sponsorship_component bg-[#0d0e12] rounded-[1.25rem] text-white overflow-hidden border border-white/[0.08]">
          <div className="padding-section-medium is-mobile-xsmall"></div>
          <div className="padding-global">
            <div className="container-large">
              {/* Section Header */}
              <div className="text-align-center max-w-[860px] mx-auto">
                <div className="text-color-grey-250">
                  <div className="text-style-label-caption center">Partnership &amp; Sponsorship</div>
                </div>
                <div className="spacer-small"></div>
                <h2 className="heading-style-h2 text-white">
                  Content Sponsorship Packages &amp; Remuneration Structure
                </h2>
                <div className="spacer-custom-2"></div>
                <p className="features_desc max-w-[720px] mx-auto text-zinc-400">
                  Join hands with Bangladesh&#x27;s #1 development content creator to achieve multi-platform visibility, authentic audience trust, and national brand stature.
                </p>
              </div>

              <div className="spacer-xlarge"></div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPONSORSHIP_PACKAGES.map((pkg, i) => (
                  <div
                    key={i}
                    className={`rounded-[20px] p-8 sm:p-6 flex flex-col justify-between relative backdrop-blur-xl transition-all duration-300 ${
                      pkg.highlight
                        ? "bg-gradient-to-b from-[#EE3028]/[0.12] to-[#14141a]/80 border border-[#EE3028]/45 shadow-[0_8px_32px_rgba(238,48,40,0.18)]"
                        : "bg-white/[0.03] border border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div
                        className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${
                          pkg.highlight ? "bg-[#EE3028] text-white" : "bg-white/[0.08] text-white"
                        }`}
                      >
                        {pkg.badge}
                      </div>
                      <h3 className="text-[22px] font-bold text-white mb-1">
                        {pkg.platform}
                      </h3>
                      <div className="text-[13px] text-gray-400 mb-5">
                        {pkg.deliverable}
                      </div>

                      <div className="bg-black/35 p-4 rounded-xl mb-6 border border-white/[0.05]">
                        <div className="text-xs text-zinc-500 uppercase tracking-wider">
                          Monthly Volume
                        </div>
                        <div className="text-base font-semibold text-zinc-200 mt-0.5">
                          {pkg.quantity}
                        </div>
                        <div className="h-px bg-white/[0.06] my-3"></div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider">
                          Investment
                        </div>
                        <div
                          className={`text-2xl font-bold mt-1 ${
                            pkg.highlight ? "text-white" : "text-[#00D26A]"
                          }`}
                        >
                          {pkg.investment}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {pkg.rateNote}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-xs uppercase text-zinc-500 tracking-wider mb-3 font-semibold">
                          What This Includes:
                        </div>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                          {pkg.features.map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-[13px] text-zinc-300 flex items-start gap-2 leading-snug"
                            >
                              <span className="text-[#EE3028] text-sm leading-none shrink-0">✓</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href="tel:01608427446"
                      className="button w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa w-inline-block w-full text-center no-underline"
                    >
                      <div
                        className="button-in w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa justify-center"
                      >
                        <div className="button_texts">
                          <div className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _1">
                            Book Package
                          </div>
                          <div
                            aria-hidden="true"
                            className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _2"
                          >
                            Call 01608-427446
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center text-[13px] text-zinc-500">
                * Complimentary Instagram and TikTok benefits are exclusively reserved for contracted long-term annual partners.
              </div>

              <div className="spacer-xlarge"></div>

              {/* Key Benefits Grid */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 sm:p-10 md:p-12">
                <div className="text-align-center max-w-[700px] mx-auto mb-9">
                  <div className="text-color-grey-250">
                    <div className="text-style-label-caption center">Competitive Edge</div>
                  </div>
                  <div className="spacer-small"></div>
                  <h3 className="heading-style-h3 text-white">
                    Key Benefits For Your Brand
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SPONSORSHIP_BENEFITS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6"
                    >
                      <div className="w-9 h-9 rounded-[10px] bg-[#EE3028]/15 border border-[#EE3028]/30 flex items-center justify-center text-[#EE3028] font-bold mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-[17px] font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed m-0">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="spacer-large"></div>

              {/* Terms & Policies Section */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 sm:p-9">
                <div className="mb-7">
                  <div className="text-style-label-caption text-[#EE3028]">Governance &amp; Transparency</div>
                  <h3 className="text-[22px] font-bold text-white mt-1.5">
                    Partnership Terms &amp; Content Management Policies
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {PARTNERSHIP_TERMS.map((term, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-5 bg-black/25 rounded-xl border border-white/[0.04]"
                    >
                      <div className="text-sm font-semibold text-zinc-100 mb-1.5">
                        {term.label}
                      </div>
                      <div className="text-[13px] text-gray-400 leading-relaxed">
                        {term.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="padding-section-medium is-mobile-xsmall"></div>
        </div>
      </div>
    </section>
);
}
