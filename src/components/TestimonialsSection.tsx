import React from "react";

export default function TestimonialsSection() {
  const targetProfiles = [
    {
      role: "Decision-Makers & Corporate Leaders",
      desc: "C-suite executives, corporate leaders, and industrialists tracking economic growth, market dynamics, and infrastructure expansion.",
      tag: "C-Suite & Board Level"
    },
    {
      role: "Government Officials & Policymakers",
      desc: "Administrative leaders, foreign investors, and international policy stakeholders engaged with national transformation initiatives.",
      tag: "Public Governance"
    },
    {
      role: "Engineers, Architects & Planners",
      desc: "Technical professionals passionate about cutting-edge structural engineering, sustainable design, and smart city infrastructure.",
      tag: "Technical Experts"
    },
    {
      role: "Industrialists & Factory Owners",
      desc: "Plant owners, manufacturing giants, and export leaders driving national GDP output and local/global supply chains.",
      tag: "Industrial Sector"
    },
    {
      role: "Real Estate Developers & Investors",
      desc: "Property developers and high-net-worth investors monitoring prime commercial zones, modern townships, and real estate assets.",
      tag: "High-Net-Worth"
    },
    {
      role: "Educated Professionals & Global Diaspora",
      desc: "Career-driven professionals and non-resident Bangladeshis actively following national progress, trade, and economic milestones.",
      tag: "Global Audience"
    }
  ];

  return (
    <>
        <section id="audience" className="section_testimonials">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
                <div className="container-large">
                    <div className="testimonials_component">
                        <div className="testimonials_head">
                            <div className="text-color-grey-300">
                                <div className="clutch-heading w-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#00D26A" style={{ display: "inline-block", marginRight: "8px", verticalAlign: "middle" }}>
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                    <span className="text-size-small" style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "#18181b" }}>
                                        100% Organic Reach • Zero Artificial Boosting
                                    </span>
                                </div>
                            </div>
                            <div className="spacer-custom-2"></div>
                            <div className="testimonials_heading-wrap">
                                <div className="text-align-center">
                                    <h2 className="heading-style-h3 display-inline" style={{ color: "var(--_colors---primary--black, #0f1011)" }}>
                                        Trusted by brands and organisations across Bangladesh
                                    </h2>
                                </div>
                            </div>
                            <div className="spacer-small"></div>
                            <p style={{ textAlign: "center", color: "#52525b", maxWidth: "780px", margin: "0 auto", fontSize: "16px", lineHeight: "1.6" }}>
                                Target Audience Profile &amp; National Demographic Influence: Direct access to high-intent decision-makers, government leaders, industrialists, and educated professionals across Bangladesh and the global diaspora.
                            </p>
                        </div>
                        <div className="spacer-large"></div>
                        <div className="reviews-wr">
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                                gap: "20px",
                                width: "100%"
                            }}>
                                {targetProfiles.map((item, idx) => (
                                    <div key={idx} style={{
                                        background: "#ffffff",
                                        border: "1px solid rgba(0, 0, 0, 0.08)",
                                        borderRadius: "16px",
                                        padding: "28px 24px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease"
                                    }}>
                                        <div>
                                            <div style={{
                                                display: "inline-block",
                                                background: "#f4f4f5",
                                                border: "1px solid #e4e4e7",
                                                padding: "4px 12px",
                                                borderRadius: "100px",
                                                fontSize: "12px",
                                                fontWeight: 600,
                                                color: "#EE3028",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em",
                                                marginBottom: "16px"
                                            }}>
                                                {item.tag}
                                            </div>
                                            <h3 style={{ fontSize: "19px", fontWeight: 700, color: "var(--_colors---primary--black, #0f1011)", marginBottom: "12px", lineHeight: "1.3" }}>
                                                {item.role}
                                            </h3>
                                            <p style={{ fontSize: "14px", color: "#52525b", lineHeight: "1.6", margin: 0 }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="spacer-xlarge is-mobile-large"></div>
                    <div className="testimonials_numbers">
                        <div className="testimonials_numbers-main" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                            gap: "36px",
                            alignItems: "flex-start",
                            width: "100%"
                        }}>
                            {/* Stat 1: 451,000+ */}
                            <div className="number_block" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <div style={{
                                    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1,
                                    color: "var(--_colors---primary--black, #0f1011)",
                                    whiteSpace: "nowrap"
                                }}>
                                    451,000+
                                </div>
                                <p className="number_desc" style={{ color: "#4b5563", margin: 0, fontSize: "15px", fontWeight: 500 }}>
                                    YouTube Subscribers
                                </p>
                            </div>

                            {/* Stat 2: 681,000+ */}
                            <div className="number_block" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <div style={{
                                    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1,
                                    color: "var(--_colors---primary--black, #0f1011)",
                                    whiteSpace: "nowrap"
                                }}>
                                    681,000+
                                </div>
                                <p className="number_desc" style={{ color: "#4b5563", margin: 0, fontSize: "15px", fontWeight: 500 }}>
                                    Facebook Followers
                                </p>
                            </div>

                            {/* Stat 3: 30+ */}
                            <div className="number_block" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <div style={{
                                    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1,
                                    color: "var(--_colors---primary--black, #0f1011)",
                                    whiteSpace: "nowrap"
                                }}>
                                    30+
                                </div>
                                <p className="number_desc" style={{ color: "#4b5563", margin: 0, fontSize: "15px", fontWeight: 500 }}>
                                    National &amp; International Brand Clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="padding-section-medium"></div>
        </section>
    </>
  );
}
