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
        <div className="home-services_component sponsorship_component" style={{
          backgroundColor: "#0d0e12",
          borderRadius: "1.25rem",
          color: "#ffffff",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}>
          <div className="padding-section-medium is-mobile-xsmall"></div>
          <div className="padding-global">
            <div className="container-large">
              {/* Section Header */}
              <div className="text-align-center" style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="text-color-grey-250">
              <div className="text-style-label-caption center">Partnership &amp; Sponsorship</div>
            </div>
            <div className="spacer-small"></div>
            <h2 className="heading-style-h2" style={{ color: "#ffffff" }}>
              Content Sponsorship Packages &amp; Remuneration Structure
            </h2>
            <div className="spacer-custom-2"></div>
            <p className="features_desc" style={{ maxWidth: "720px", margin: "0 auto" }}>
              Join hands with Bangladesh&#x27;s #1 development content creator to achieve multi-platform visibility, authentic audience trust, and national brand stature.
            </p>
          </div>

          <div className="spacer-xlarge"></div>

          {/* Pricing Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "24px"
          }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                style={{
                  background: pkg.highlight
                    ? "linear-gradient(180deg, rgba(238, 48, 40, 0.12) 0%, rgba(20, 20, 26, 0.8) 100%)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: pkg.highlight
                    ? "1px solid rgba(238, 48, 40, 0.45)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  backdropFilter: "blur(16px)"
                }}
              >
                <div>
                  <div style={{
                    display: "inline-block",
                    background: pkg.highlight ? "#EE3028" : "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    marginBottom: "16px"
                  }}>
                    {pkg.badge}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    {pkg.platform}
                  </h3>
                  <div style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px" }}>
                    {pkg.deliverable}
                  </div>

                  <div style={{
                    background: "rgba(0, 0, 0, 0.35)",
                    padding: "16px",
                    borderRadius: "12px",
                    marginBottom: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.05)"
                  }}>
                    <div style={{ fontSize: "12px", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Monthly Volume
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 600, color: "#e4e4e7", marginTop: "2px" }}>
                      {pkg.quantity}
                    </div>
                    <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.06)", margin: "12px 0" }}></div>
                    <div style={{ fontSize: "12px", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Investment
                    </div>
                    <div style={{ fontSize: "26px", fontWeight: 700, color: pkg.highlight ? "#ffffff" : "#00D26A", marginTop: "4px" }}>
                      {pkg.investment}
                    </div>
                    <div style={{ fontSize: "12px", color: "#a1a1aa", marginTop: "2px" }}>
                      {pkg.rateNote}
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <div style={{ fontSize: "12px", textTransform: "uppercase", color: "#71717a", letterSpacing: "0.05em", marginBottom: "12px", fontWeight: 600 }}>
                      What This Includes:
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: "13px", color: "#d4d4d8", display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: "1.4" }}>
                          <span style={{ color: "#EE3028", fontSize: "14px", lineHeight: "1" }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:01608427446"
                  className="button w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa w-inline-block"
                  style={{ width: "100%", textAlign: "center", textDecoration: "none" }}
                >
                  <div className="button-in w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa" style={{ justifyContent: "center" }}>
                    <div className="button_texts">
                      <div className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _1">
                        Book Package
                      </div>
                      <div aria-hidden="true" className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _2">
                        Call 01608-427446
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "16px", textAlign: "center", fontSize: "13px", color: "#71717a" }}>
            * Complimentary Instagram and TikTok benefits are exclusively reserved for contracted long-term annual partners.
          </div>

          <div className="spacer-xlarge"></div>

          {/* Key Benefits Grid */}
          <div style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "24px",
            padding: "clamp(24px, 4vw, 48px) clamp(16px, 3.5vw, 36px)"
          }}>
            <div className="text-align-center" style={{ maxWidth: "700px", margin: "0 auto 36px auto" }}>
              <div className="text-color-grey-250">
                <div className="text-style-label-caption center">Competitive Edge</div>
              </div>
              <div className="spacer-small"></div>
              <h3 className="heading-style-h3" style={{ color: "#ffffff" }}>
                Key Benefits For Your Brand
              </h3>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "24px"
            }}>
              {keyBenefits.map((item, idx) => (
                <div key={idx} style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  padding: "24px"
                }}>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(238, 48, 40, 0.15)",
                    border: "1px solid rgba(238, 48, 40, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EE3028",
                    fontWeight: 700,
                    marginBottom: "16px"
                  }}>
                    0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: "17px", fontWeight: 600, color: "#ffffff", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="spacer-large"></div>

          {/* Terms & Policies Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "24px",
            padding: "clamp(24px, 4vw, 40px) clamp(16px, 3.5vw, 36px)"
          }}>
            <div style={{ marginBottom: "28px" }}>
              <div className="text-style-label-caption" style={{ color: "#EE3028" }}>Governance &amp; Transparency</div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginTop: "6px" }}>
                Partnership Terms &amp; Content Management Policies
              </h3>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "20px"
            }}>
              {terms.map((term, tIdx) => (
                <div key={tIdx} style={{
                  padding: "18px 20px",
                  background: "rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.04)"
                }}>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#f4f4f5", marginBottom: "6px" }}>
                    {term.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.5" }}>
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
