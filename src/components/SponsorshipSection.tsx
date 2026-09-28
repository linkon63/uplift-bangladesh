import React from "react";

export default function SponsorshipSection() {
  const packages = [
    {
      platform: "YouTube",
      badge: "Flagship Long-Form",
      deliverable: "Long-Form Sponsored Documentary Videos",
      quantity: "08 - 10 Videos / month",
      investment: "৳ 15,000",
      rateNote: "per content",
      highlight: true,
      features: [
        "In-depth cinematic feature & site walkthrough",
        "Contextual brand integration & executive interview",
        "Permanent archival on YouTube (451K+ subscribers)",
        "4K UHD mastering with professional color grade"
      ]
    },
    {
      platform: "Facebook",
      badge: "High-Engagement Viral Reach",
      deliverable: "Sponsored Short Video Reels",
      quantity: "30 - 40 Reels / month",
      investment: "৳ 5,000",
      rateNote: "per content (Min. 5 content)",
      highlight: false,
      features: [
        "Fast-paced, mobile-optimized vertical video",
        "Direct access to 681,000+ active Facebook followers",
        "High viral potential and organic shareability",
        "Brand tag, call-to-action & product highlight"
      ]
    },
    {
      platform: "Instagram",
      badge: "Complimentary Bonus",
      deliverable: "Sponsored Short Video Reels",
      quantity: "30 - 40 Reels / month",
      investment: "COMPLIMENTARY",
      rateNote: "For contracted annual partners",
      highlight: false,
      features: [
        "Cross-posted high-aesthetic visual reels",
        "Targeted at urban youth, designers & young professionals",
        "Seamless storytelling with audio trends",
        "Zero additional production surcharge"
      ]
    },
    {
      platform: "TikTok",
      badge: "Complimentary Bonus",
      deliverable: "Sponsored Short Video Reels",
      quantity: "10 - 15 Reels / month",
      investment: "COMPLIMENTARY",
      rateNote: "For contracted annual partners",
      highlight: false,
      features: [
        "Gen-Z & broad national demographic amplification",
        "Fast-cut highlight snippets of mega infrastructure",
        "Algorithm-friendly engaging formats",
        "Zero additional production surcharge"
      ]
    }
  ];

  const keyBenefits = [
    {
      title: "100% Organic Audience",
      desc: "A trusted community built naturally without artificial boosting, ensuring genuine engagement and authentic brand sentiment."
    },
    {
      title: "Highly Relevant Demographics",
      desc: "Direct access to over 1,000,000+ followers actively tracking real estate, economy, engineering, and national markets."
    },
    {
      title: "High-Trust Platform Association",
      desc: "Partnering with Bangladesh's premier nation-building media platform lends tremendous prestige, credibility, and national stature."
    },
    {
      title: "Omni-Channel Amplification",
      desc: "Simultaneous multi-platform coverage across YouTube, Facebook, Instagram, and TikTok for maximum market penetration."
    }
  ];

  const terms = [
    {
      label: "Agreement Duration",
      detail: "Strategic partnership agreement spans an initial term of 1 (one) year from date of execution."
    },
    {
      label: "Payment Terms",
      detail: "All monthly payments are strictly payable at the conclusion of each respective calendar month."
    },
    {
      label: "Non-Cancellable Contract",
      detail: "To guarantee continuous brand presence, narrative building, and campaign continuity, the contract is non-cancellable."
    },
    {
      label: "Content Compensation",
      detail: "Any deficit due to technical or operational factors is fully compensated in the subsequent month's schedule."
    },
    {
      label: "Pure Organic Reach",
      detail: "All viewership and reach generated will remain strictly organic, upholding authentic brand credibility."
    },
    {
      label: "Renewal Option",
      detail: "Preferential renewal options and legacy pricing structures are extended upon completion of the initial term."
    }
  ];

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
                {packages.map((pkg, i) => (
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
                  {keyBenefits.map((item, idx) => (
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
                  {terms.map((term, tIdx) => (
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
