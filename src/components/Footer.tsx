"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dhakaTime, setDhakaTime] = useState<{ time: string; period: string }>({
    time: "11:30",
    period: "pm",
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).formatToParts(new Date());

        const hour = parts.find((p) => p.type === "hour")?.value || "12";
        const minute = parts.find((p) => p.type === "minute")?.value || "00";
        const period = (parts.find((p) => p.type === "dayPeriod")?.value || "PM").toLowerCase();

        setDhakaTime({
          time: `${hour}:${minute}`,
          period: period,
        });
      } catch (err) {
        // Fallback
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("upliftbd.media@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <footer id="contact" className="section">
        <div className="padding-global is-tiny">
          <div className="section_footer">
            <div className="padding-global">
              <div className="container-large">
                <div className="footer_component">
                  <div className="footer_content">
                    <div className="footer_content-in">
                      <div>
                        <div className="text-color-grey-400">
                          <div className="text-size-regular">Let&#x27;s talk &amp; grow together</div>
                        </div>
                        <div className="spacer-small"></div>
                        <div data-wf--contact-form--variant="footer" className="form-block w-form">
                          {formSubmitted ? (
                            <div
                              className="w-form-done"
                              style={{
                                display: "block",
                                backgroundColor: "#f0fdf4",
                                border: "1px solid #bbf7d0",
                                padding: "24px",
                                borderRadius: "12px",
                                color: "#166534",
                                fontWeight: 500,
                              }}
                            >
                              <div>Thank you! Your message has been received!</div>
                            </div>
                          ) : (
                            <form
                              id="contact-form"
                              name="wf-form-Contact-form-2"
                              onSubmit={handleFormSubmit}
                              className="message-form w-variant-7fe56b33-fb0b-9458-a747-1b9719c8c1fc"
                            >
                              <div className="message-form_flex">
                                <div className="w-variant-7fe56b33-fb0b-9458-a747-1b9719c8c1fc">
                                  <label htmlFor="Name" className="contact-form_field-label">
                                    Name / Organization
                                  </label>
                                  <input
                                    className="newsletter-field is-light w-input"
                                    autoComplete="name"
                                    maxLength={256}
                                    name="Name"
                                    placeholder="Your Name or Company"
                                    type="text"
                                    id="Name"
                                    required={true}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="email" className="contact-form_field-label">
                                    Email Address
                                  </label>
                                  <input
                                    className="newsletter-field is-light w-node-_9936124d-877c-4e8d-8025-c2a762c38f4d-62c38f49 w-input"
                                    autoComplete="email"
                                    maxLength={256}
                                    name="email"
                                    placeholder="Enter your corporate email"
                                    type="email"
                                    id="email"
                                    required={true}
                                  />
                                </div>
                              </div>
                              <div className="message-form_flex" style={{ marginTop: "12px" }}>
                                <div style={{ width: "100%" }}>
                                  <label htmlFor="phone" className="contact-form_field-label">
                                    Contact Number
                                  </label>
                                  <input
                                    className="newsletter-field is-light w-input"
                                    name="phone"
                                    placeholder="01XXXXXXXXX"
                                    type="tel"
                                    id="phone"
                                  />
                                </div>
                              </div>
                              <div
                                className="form-message w-variant-7fe56b33-fb0b-9458-a747-1b9719c8c1fc"
                                style={{ marginTop: "12px" }}
                              >
                                <label htmlFor="Message" className="contact-form_field-label">
                                  Project / Sponsorship Inquiry
                                </label>
                                <textarea
                                  id="Message"
                                  name="Message"
                                  maxLength={5000}
                                  placeholder="Tell us about your infrastructure project, corporate film, or sponsorship requirements"
                                  className="newsletter-field is-light is-message w-input"
                                ></textarea>
                              </div>
                              <div className="spacer-xxsmall"></div>
                              <input
                                type="submit"
                                className="button-solid w-button"
                                value="Send Inquiry"
                                style={{ cursor: "pointer" }}
                              />
                            </form>
                          )}
                        </div>
                      </div>
                      <div
                        id="w-node-_4e586890-f8b1-4a56-f25a-8c2d60a9a425-1f0f9ecf"
                        className="footer-right"
                      >
                        <div className="footer-grid">
                          {/* Pages Links (Requirement 11.5) */}
                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Pages:</div>
                            </div>
                            <div className="footer-links_columns">
                              <div className="footer_links-list">
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="#home"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Home</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Home
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="#works"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Works</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Works
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="#sponsorship"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Sponsorship Packages</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Sponsorship Packages
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Services Links (Requirement 11.6) */}
                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Services:</div>
                            </div>
                            <div className="footer-links_columns">
                              <div className="footer_links-list">
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="#services"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Documentary Films</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Documentary Films
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="#services"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Corporate Brand Films</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Corporate Brand Films
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="#services"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Drone Cinematography</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Drone Cinematography
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Contact Links (Requirement 11.7) */}
                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Contact:</div>
                            </div>
                            <div className="footer-links_columns">
                              <div className="footer_links-list">
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="https://www.youtube.com/@UpliftBangladesh"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">YouTube (451K+)</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      YouTube (451K+)
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="https://www.facebook.com/upliftbangladesh"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Facebook (681K+)</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Facebook (681K+)
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  data-wf--footer-link--variant="base"
                                  href="mailto:upliftbd.media@gmail.com"
                                  className="footer_link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Email Inquiry</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Email Inquiry
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Headquarters Area (Requirement 11.3 & 11.4) */}
                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Headquarters:</div>
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#52525b",
                                lineHeight: "1.6",
                                marginTop: "12px",
                              }}
                            >
                              <p
                                style={{
                                  margin: "0 0 6px 0",
                                  color: "#0f1011",
                                  fontWeight: 600,
                                }}
                              >
                                Uplift Bangladesh
                              </p>
                              <p style={{ margin: "0 0 4px 0", color: "#4b5563" }}>
                                Bashundhara R/A, Dhaka-1229, Bangladesh
                              </p>
                              <p style={{ margin: 0 }}>
                                <a
                                  href="tel:01608427446"
                                  style={{
                                    color: "#EE3028",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                  }}
                                >
                                  Hotline: 01608-427446
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Corporate Email with Clickable mailto and Clipboard Copy Trigger (Requirement 11.1 & 11.2) */}
                        <div style={{ marginTop: "24px" }}>
                          <div className="text-color-grey-400">
                            <div className="text-size-regular">Corporate Email:</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              marginTop: "8px",
                              flexWrap: "wrap",
                            }}
                          >
                            <a
                              href="mailto:upliftbd.media@gmail.com"
                              className="footer_link big-2 w-inline-block"
                              style={{ color: "#0f1011", fontWeight: 700, fontSize: "1.1rem" }}
                            >
                              <div className="footer_link-texts big-3">
                                <p className="footer_link-text _1 big-4">upliftbd.media@gmail.com</p>
                                <p aria-hidden="true" className="footer_link-text _2 big-5">
                                  upliftbd.media@gmail.com
                                </p>
                              </div>
                            </a>
                            <button
                              type="button"
                              onClick={handleCopyEmail}
                              aria-label="Copy email address"
                              className={copied ? "footer_copy-btn is-copied" : "footer_copy-btn"}
                            >
                              {copied ? (
                                <>
                                  <span>✓</span>
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                  </svg>
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timer Cards: Bangladesh, Dhaka Location Card + Audience Metrics (Requirement 11.9) */}
                    <div className="footer_content-in is-time">
                      <div className="timer-card" data-time="dhaka">
                        <div className="relative">
                          <div className="timer time">{dhakaTime.time}</div>
                          <div className="time-pm">{dhakaTime.period} BST</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <p className="text-size-small text-weight-medium" style={{ color: "#0f1011" }}>
                              Bangladesh, Dhaka
                            </p>
                          </div>
                          <div className="date-time">
                            <p className="text-size-small" style={{ color: "#059669", fontWeight: 600 }}>
                              ● Production Active
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="timer-card">
                        <div className="relative">
                          <div className="timer time">451K+</div>
                          <div className="time-pm">Subs</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <p className="text-size-small text-weight-medium" style={{ color: "#0f1011" }}>
                              YouTube Channel
                            </p>
                          </div>
                          <div className="date-time">
                            <p className="text-size-small" style={{ color: "#71717a" }}>
                              Long-form documentaries
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="timer-card">
                        <div className="relative">
                          <div className="timer time">681K+</div>
                          <div className="time-pm">Followers</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <p className="text-size-small text-weight-medium" style={{ color: "#0f1011" }}>
                              Facebook Community
                            </p>
                          </div>
                          <div className="date-time">
                            <p className="text-size-small" style={{ color: "#71717a" }}>
                              Viral reels &amp; updates
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="timer-card">
                        <div className="relative">
                          <div className="timer time">1M+</div>
                          <div className="time-pm">Reach</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <p className="text-size-small text-weight-medium" style={{ color: "#0f1011" }}>
                              Combined Audience
                            </p>
                          </div>
                          <div className="date-time">
                            <p className="text-size-small" style={{ color: "#71717a" }}>
                              100% Organic Reach
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Wordmark Typographic Header (Requirement 11.10) */}
                    <div
                      style={{
                        textAlign: "center",
                        padding: "48px 0 24px 0",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                        marginBottom: "24px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(22px, 6.5vw, 92px)",
                          fontWeight: 900,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "#18181b",
                          background: "linear-gradient(180deg, #18181b 30%, #52525b 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          lineHeight: 1.1,
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        UPLIFT BANGLADESH
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(11px, 2.8vw, 14px)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#EE3028",
                          marginTop: "12px",
                          fontWeight: 600,
                          lineHeight: 1.5,
                          wordBreak: "break-word",
                        }}
                      >
                        Rise • Focus • Dominate • Documenting Progress. Building Trust. Inspiring a Nation.
                      </div>
                    </div>
                  </div>

                  {/* Legal and Copyright Area (Requirement 11.8) */}
                  <div className="footer_legal-wrap">
                    <div className="footer_copyright" style={{ color: "#71717a" }}>
                      © 2025 Uplift Bangladesh™. All rights reserved.
                    </div>
                    <div className="w-dyn-list">
                      <div role="list" className="legal-wr w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <span className="footer_copyright" style={{ color: "#71717a" }}>
                            Bashundhara R/A, Dhaka-1229, Bangladesh
                          </span>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <a
                            href="tel:01608427446"
                            className="footer_copyright link"
                            style={{ color: "#52525b" }}
                          >
                            Hotline: 01608-427446
                          </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <a
                            href="mailto:upliftbd.media@gmail.com"
                            className="footer_copyright link"
                            style={{ color: "#52525b" }}
                          >
                            upliftbd.media@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
