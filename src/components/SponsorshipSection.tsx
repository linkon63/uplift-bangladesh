"use client";

import React, { useState, useEffect } from "react";
import { SPONSORSHIP_PACKAGES, SPONSORSHIP_BENEFITS, PARTNERSHIP_TERMS } from "@/data";

export default function SponsorshipSection() {
  const [activeModalPlatform, setActiveModalPlatform] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalPlatform(null);
      }
    };
    if (activeModalPlatform) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalPlatform]);

  const handleCopy = (text: string, type: "phone" | "email") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    }
  };

  const handleScrollToForm = (platform: string) => {
    setActiveModalPlatform(null);
    if (typeof window !== "undefined") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setTimeout(() => {
        const textarea = document.getElementById("Message") as HTMLTextAreaElement | null;
        if (textarea) {
          textarea.value = `Hello Uplift Bangladesh team,\n\nI would like to inquire about pricing, deliverables, and sponsorship opportunities for the ${platform} package. Please share your commercial rate card and available schedule.`;
          textarea.focus();
        }
      }, 350);
    }
  };

  return (
    <section id="sponsorship" data-wf--services--variant="dark" className="section_home-services relative">
      <div className="padding-global is-tiny">
        <div className="home-services_component sponsorship_component bg-[#0d0e12] rounded-[1.25rem] text-white overflow-hidden border border-white/[0.08]">
          <div className="padding-section-medium is-mobile-xsmall"></div>
          <div className="padding-global">
            <div className="container-large">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPONSORSHIP_PACKAGES.map((pkg, i) => (
                  <div
                    key={i}
                    className={`rounded-[20px] p-5 sm:p-6 flex flex-col justify-between relative backdrop-blur-xl transition-all duration-300 ${
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

                      {/* Monthly Volume & Custom Pricing Box */}
                      <div className="bg-black/40 p-4 rounded-xl mb-5 border border-white/[0.06]">
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Monthly Volume
                        </div>
                        <div className="text-base font-semibold text-zinc-200 mt-0.5">
                          {pkg.quantity}
                        </div>
                        <div className="h-px bg-white/[0.06] my-3"></div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Pricing &amp; Investment
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center justify-between">
                          <span>Custom Quote</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                            On Request
                          </span>
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
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

                    {/* Contact for Price CTA & Direct Phone/Email info */}
                    <div className="mt-auto pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalPlatform(pkg.platform)}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#EE3028] via-[#e22b23] to-[#cc211a] hover:from-[#d4251e] hover:to-[#b71c1c] text-white font-bold text-sm transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.98]"
                      >
                        <svg
                          className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>Contact for Price</span>
                      </button>

                      <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-col gap-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">Hotline:</span>
                          <a
                            href="tel:01608427446"
                            className="font-mono font-bold text-white hover:text-[#EE3028] transition-colors flex items-center gap-1.5 cursor-pointer"
                            title="Direct Call 01608-427446"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A] animate-pulse"></span>
                            01608-427446
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">Email:</span>
                          <a
                            href={`mailto:upliftbd.media@gmail.com?subject=Sponsorship%20Pricing%20Inquiry%20-%20${encodeURIComponent(pkg.platform)}`}
                            className="font-medium text-zinc-300 hover:text-[#EE3028] transition-colors truncate max-w-[170px] cursor-pointer"
                            title="Email upliftbd.media@gmail.com"
                          >
                            upliftbd.media@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center text-[13px] text-zinc-500">
                * Multi-platform syndication across Instagram and TikTok is bundled with contracted annual brand partnerships.
              </div>

              <div className="spacer-xlarge"></div>

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

      {/* Interactive Contact for Price Modal */}
      {activeModalPlatform && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalPlatform(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Contact for Sponsorship Price"
        >
          <div
            className="bg-[#101116] border border-white/15 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalPlatform(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close dialog"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EE3028] animate-pulse"></span>
              <span className="text-xs uppercase font-bold tracking-wider text-red-400">
                Official Commercial Desk
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Contact for {activeModalPlatform} Pricing
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              Connect directly with Uplift Bangladesh&rsquo;s executive desk to receive our commercial rate card, production schedule, and tailored deliverables.
            </p>

            <div className="space-y-3.5 mb-6">
              {/* Phone Hotline Option */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        Direct Phone Hotline
                      </div>
                      <div className="text-base font-bold text-white font-mono">
                        01608-427446
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                  <a
                    href="tel:01608427446"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#EE3028] hover:bg-[#d4251e] text-white text-xs font-bold text-center transition-colors cursor-pointer shadow-sm"
                  >
                    Call Now
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("01608427446", "phone")}
                    className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedPhone ? "Copied!" : "Copy Number"}
                  </button>
                </div>
              </div>

              {/* Email Desk Option */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        Official Inquiry Email
                      </div>
                      <div className="text-sm font-semibold text-white">
                        upliftbd.media@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                  <a
                    href={`mailto:upliftbd.media@gmail.com?subject=Sponsorship%20Pricing%20Inquiry%20-%20${encodeURIComponent(activeModalPlatform)}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#EE3028] hover:bg-[#d4251e] text-white text-xs font-bold text-center transition-colors cursor-pointer shadow-sm"
                  >
                    Send Email
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("upliftbd.media@gmail.com", "email")}
                    className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedEmail ? "Copied!" : "Copy Email"}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleScrollToForm(activeModalPlatform)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Or Fill Out Online Project Inquiry Form</span>
              <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
