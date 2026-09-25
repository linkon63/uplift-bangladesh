import React from "react";

const clientPortfolio = [
  { id: "01", code: "BSRM", name: "BSRM", desc: "Infrastructure & Mega-Rebar" },
  { id: "02", code: "bKash", name: "bKash", desc: "FinTech & Digital Payments" },
  { id: "03", code: "7 RINGS", name: "Seven Rings Cement", desc: "Heavy Construction Partner" },
  { id: "04", code: "SHAH", name: "Shah Cement", desc: "National Infrastructure Giant" },
  { id: "05", code: "BANGLALINK", name: "Banglalink", desc: "Digital Connectivity & Telecom" },
  { id: "06", code: "AIRTEL", name: "Airtel", desc: "Youth Network & Communication" },
  { id: "07", code: "SAMSUNG", name: "Samsung", desc: "Consumer Electronics & Innovation" },
  { id: "08", code: "NESTLE", name: "Nestle", desc: "Nutrition, Health & Wellness" },
  { id: "09", code: "BBA", name: "Bangladesh Bridge Authority", desc: "Mega-Infrastructure Sponsor" },
  { id: "10", code: "DNCC", name: "Dhaka North City Corporation", desc: "Smart Urban Governance" },
  { id: "11", code: "SHELTECH", name: "Sheltech", desc: "Modern Real Estate & Architecture" },
  { id: "12", code: "RUPAYAN", name: "Rupayan Group", desc: "Mega Townships & Real Estate" },
  { id: "13", code: "HOLIDAY INN", name: "Holiday Inn", desc: "International Hospitality" },
];

export default function ClientsSection() {
  return (
    <>
      <section className="section_clients">
        <div className="padding-section-medium"></div>
        <div className="padding-global">
          <div className="container-large">
            <div className="clients_head">
              <div className="clients_head-wrap">
                <div className="text-color-grey-300">
                  <div className="text-style-label-caption">WE ARE</div>
                </div>
                <div className="spacer-custom-2"></div>
                <div>
                  <h1 className="heading-style-h1">
                    Documenting Progress. Building Trust. Inspiring a Nation.
                  </h1>
                </div>
                <div className="spacer-medium is-tablet-small"></div>
                <div className="max-width-small">
                  <div className="text-color-grey-400">
                    <div className="font-secondary">
                      <div className="text-size-xsmall">
                        <p className="text-weight-medium">
                          <strong>UPLIFT BANGLADESH</strong> is Bangladesh&#x27;s leading development-focused media and documentary platform, dedicated to showcasing the nation&#x27;s remarkable transformation through cinematic storytelling, world-class documentaries, and impactful digital content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clients_auth">
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 10% 20%, rgba(238, 48, 40, 0.1) 0%, rgba(255, 255, 255, 0.02) 90%), #141517",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    minHeight: "340px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "#ffffff",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#EE3028",
                          boxShadow: "0 0 10px #EE3028",
                        }}
                      ></span>
                      <span
                        style={{
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        Organic Platform Impact
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "38px",
                        fontWeight: "800",
                        letterSpacing: "-1px",
                        lineHeight: "1.1",
                        color: "#fff",
                      }}
                    >
                      1,000,000+
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        marginTop: "4px",
                      }}
                    >
                      Combined Digital Community Across Platforms
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                      margin: "20px 0",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "10px",
                        padding: "12px 14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>
                        451,000+
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "2px",
                        }}
                      >
                        YouTube Subscribers
                      </div>
                    </div>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "10px",
                        padding: "12px 14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>
                        681,000+
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "2px",
                        }}
                      >
                        Facebook Followers
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      paddingTop: "14px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)" }}>
                      100% Organic Reach
                    </span>
                    <span style={{ fontSize: "11px", color: "#EE3028", fontWeight: "600" }}>
                      Verified Audience ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-xlarge is-mobile-medium"></div>
          </div>
        </div>

        {/* Marquee Brand Cards (Requirement 14.1, 14.2, 14.3) */}
        <div className="clients_logos">
          <div className="brands_card-group">
            {clientPortfolio.map((client) => (
              <div key={client.id} className="clients_brand-card">
                <div className="clients_card">
                  <div aria-hidden="true" className="clients_number">
                    ({client.id})
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "800",
                      letterSpacing: "0.5px",
                      color: "#0f1011",
                    }}
                  >
                    {client.code}
                  </div>
                </div>
                <div className="clients_texts">
                  <div className="clients_name">{client.name}</div>
                  <p className="clients_desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="brands_card-group">
            {clientPortfolio.map((client) => (
              <div key={`dup-${client.id}`} className="clients_brand-card">
                <div className="clients_card">
                  <div aria-hidden="true" className="clients_number">
                    ({client.id})
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "800",
                      letterSpacing: "0.5px",
                      color: "#0f1011",
                    }}
                  >
                    {client.code}
                  </div>
                </div>
                <div className="clients_texts">
                  <div className="clients_name">{client.name}</div>
                  <p className="clients_desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="brands_card-group">
            {clientPortfolio.map((client) => (
              <div key={`tri-${client.id}`} className="clients_brand-card">
                <div className="clients_card">
                  <div aria-hidden="true" className="clients_number">
                    ({client.id})
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "800",
                      letterSpacing: "0.5px",
                      color: "#0f1011",
                    }}
                  >
                    {client.code}
                  </div>
                </div>
                <div className="clients_texts">
                  <div className="clients_name">{client.name}</div>
                  <p className="clients_desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="padding-section-medium"></div>
      </section>
    </>
  );
}
