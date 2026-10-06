"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clocks, setClocks] = useState<{
    london: { time: string; period: string; date: string; city: string };
    newyork: { time: string; period: string; date: string; city: string };
    dubai: { time: string; period: string; date: string; city: string };
    dhaka: { time: string; period: string; date: string; city: string };
  }>({
    london: { time: "04:50", period: "am", date: "Monday, September 28", city: "UK, London" },
    newyork: { time: "11:50", period: "pm", date: "Sunday, September 27", city: "USA, New York" },
    dubai: { time: "07:50", period: "am", date: "Monday, September 28", city: "UAE, Dubai" },
    dhaka: { time: "09:50", period: "am", date: "Monday, September 28", city: "Bangladesh, Dhaka" },
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatCity = (timeZone: string, city: string) => {
        try {
          const parts = new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).formatToParts(now);

          const hour = parts.find((p) => p.type === "hour")?.value || "12";
          const minute = parts.find((p) => p.type === "minute")?.value || "00";
          const period = (parts.find((p) => p.type === "dayPeriod")?.value || "am").toLowerCase();

          const date = new Intl.DateTimeFormat("en-US", {
            timeZone,
            weekday: "long",
            month: "long",
            day: "numeric",
          }).format(now);

          return { time: `${hour}:${minute}`, period, date, city };
        } catch {
          return { time: "12:00", period: "pm", date: "Monday, September 28", city };
        }
      };

      setClocks({
        london: formatCity("Europe/London", "UK, London"),
        newyork: formatCity("America/New_York", "USA, New York"),
        dubai: formatCity("Asia/Dubai", "UAE, Dubai"),
        dhaka: formatCity("Asia/Dhaka", "Bangladesh, Dhaka"),
      });
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
                            <div className="w-form-done block bg-green-50 border border-green-200 p-6 rounded-xl text-green-800 font-medium">
                              <div>Thank you! Your message has been received!</div>
                            </div>
                          ) : (
                            <form
                              id="contact-form"
                              name="wf-form-Contact-form-2"
                              aria-label="Form"
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
                              <div className="message-form_flex mt-3">
                                <div className="w-full">
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
                              <div className="form-message w-variant-7fe56b33-fb0b-9458-a747-1b9719c8c1fc mt-3">
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
                                className="button-solid w-button cursor-pointer"
                                value="Send Inquiry"
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
                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Pages:</div>
                            </div>
                            <div className="footer-links_columns">
                              <div className="footer_links-list">
                                <a
                                  href="#home"
                                  className="footer_menu-link w-inline-block"
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
                                  href="#works"
                                  className="footer_menu-link w-inline-block"
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
                                  href="#sponsorship"
                                  className="footer_menu-link w-inline-block"
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

                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Services:</div>
                            </div>
                            <div className="footer-links_columns">
                              <div className="footer_links-list">
                                <a
                                  href="#services"
                                  className="footer_menu-link w-inline-block"
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
                                  href="#services"
                                  className="footer_menu-link w-inline-block"
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
                                  href="#services"
                                  className="footer_menu-link w-inline-block"
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

                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Contact:</div>
                            </div>
                            <div className="footer-links_columns">
                              <div className="footer_links-list">
                                <a
                                  href="https://www.youtube.com/@UpliftBangladesh"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="footer_menu-link w-inline-block"
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
                                  href="https://www.facebook.com/upliftbangladesh"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="footer_menu-link w-inline-block"
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
                                  href="mailto:upliftbd.media@gmail.com"
                                  className="footer_menu-link w-inline-block"
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

                          <div className="footer_links-group">
                            <div className="text-color-grey-400">
                              <div className="text-size-regular">Headquarters:</div>
                            </div>
                            <div className="text-sm text-zinc-600 leading-relaxed mt-3">
                              <p className="mb-1.5 text-brand-dark font-semibold">
                                Uplift Bangladesh
                              </p>
                              <p className="mb-1 text-gray-600">
                                Bashundhara R/A, Dhaka-1229, Bangladesh
                              </p>
                              <p className="m-0">
                                <a
                                  href="tel:01608427446"
                                  className="text-brand-red no-underline font-semibold hover:underline"
                                >
                                  Hotline: 01608-427446
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="text-color-grey-400">
                            <div className="text-size-regular">Corporate Email:</div>
                          </div>
                          <div className="email flex items-center gap-3 mt-2 flex-wrap">
                            <a
                              href="mailto:upliftbd.media@gmail.com"
                              className="footer_menu-link big-2 w-inline-block text-brand-dark font-bold"
                            >
                              <div className="footer_link-texts big-3">
                                <p className="footer_link-text _1 big-4">upliftbd.media@gmail.com</p>
                                <p aria-hidden="true" className="footer_link-text _2 big-5">
                                  upliftbd.media@gmail.com
                                </p>
                              </div>
                              <div className="footer_link-dot big-7"></div>
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

                    <div className="footer_content-in is-time">
                      <div data-time="london" className="timer-card">
                        <div className="timer-clock-wrap">
                          <div className="timer-clock-ghost">88:88</div>
                          <div className="timer-clock-active time">{clocks.london.time}</div>
                          <div className="timer-clock-pm time-pm">{clocks.london.period}</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M10 2.666V1.333M10 2.666V4M10 2.666H7M2 6.666V12.666C2 13.403 2.597 14 3.333 14H12.667C13.403 14 14 13.403 14 12.666V6.666H2Z" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M2 6.667V4C2 3.264 2.597 2.667 3.333 2.667H4.667" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.668 1.333V4" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14 6.667V4C14 3.264 13.402 2.667 12.665 2.667H12.332" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium date">{clocks.london.date}</span>
                          </div>
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M13.335 6.666C13.335 9.612 8.001 14.666 8.001 14.666C8.001 14.666 2.668 9.612 2.668 6.666C2.668 3.721 5.056 1.333 8.001 1.333C10.947 1.333 13.335 3.721 13.335 6.666Z" stroke="#707070" strokeWidth="1.4" />
                              <path d="M8 7.333C8.368 7.333 8.667 7.035 8.667 6.667C8.667 6.298 8.368 6 8 6C7.632 6 7.333 6.298 7.333 6.667C7.333 7.035 7.632 7.333 8 7.333Z" fill="#707070" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium">{clocks.london.city}</span>
                          </div>
                        </div>
                      </div>

                      <div data-time="newyork" className="timer-card">
                        <div className="timer-clock-wrap">
                          <div className="timer-clock-ghost">88:88</div>
                          <div className="timer-clock-active time">{clocks.newyork.time}</div>
                          <div className="timer-clock-pm time-pm">{clocks.newyork.period}</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M10 2.666V1.333M10 2.666V4M10 2.666H7M2 6.666V12.666C2 13.403 2.597 14 3.333 14H12.667C13.403 14 14 13.403 14 12.666V6.666H2Z" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M2 6.667V4C2 3.264 2.597 2.667 3.333 2.667H4.667" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.668 1.333V4" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14 6.667V4C14 3.264 13.402 2.667 12.665 2.667H12.332" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium date">{clocks.newyork.date}</span>
                          </div>
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M13.335 6.666C13.335 9.612 8.001 14.666 8.001 14.666C8.001 14.666 2.668 9.612 2.668 6.666C2.668 3.721 5.056 1.333 8.001 1.333C10.947 1.333 13.335 3.721 13.335 6.666Z" stroke="#707070" strokeWidth="1.4" />
                              <path d="M8 7.333C8.368 7.333 8.667 7.035 8.667 6.667C8.667 6.298 8.368 6 8 6C7.632 6 7.333 6.298 7.333 6.667C7.333 7.035 7.632 7.333 8 7.333Z" fill="#707070" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium">{clocks.newyork.city}</span>
                          </div>
                        </div>
                      </div>

                      <div data-time="dubai" className="timer-card">
                        <div className="timer-clock-wrap">
                          <div className="timer-clock-ghost">88:88</div>
                          <div className="timer-clock-active time">{clocks.dubai.time}</div>
                          <div className="timer-clock-pm time-pm">{clocks.dubai.period}</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M10 2.666V1.333M10 2.666V4M10 2.666H7M2 6.666V12.666C2 13.403 2.597 14 3.333 14H12.667C13.403 14 14 13.403 14 12.666V6.666H2Z" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M2 6.667V4C2 3.264 2.597 2.667 3.333 2.667H4.667" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.668 1.333V4" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14 6.667V4C14 3.264 13.402 2.667 12.665 2.667H12.332" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium date">{clocks.dubai.date}</span>
                          </div>
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M13.335 6.666C13.335 9.612 8.001 14.666 8.001 14.666C8.001 14.666 2.668 9.612 2.668 6.666C2.668 3.721 5.056 1.333 8.001 1.333C10.947 1.333 13.335 3.721 13.335 6.666Z" stroke="#707070" strokeWidth="1.4" />
                              <path d="M8 7.333C8.368 7.333 8.667 7.035 8.667 6.667C8.667 6.298 8.368 6 8 6C7.632 6 7.333 6.298 7.333 6.667C7.333 7.035 7.632 7.333 8 7.333Z" fill="#707070" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium">{clocks.dubai.city}</span>
                          </div>
                        </div>
                      </div>

                      <div data-time="dhaka" className="timer-card">
                        <div className="timer-clock-wrap">
                          <div className="timer-clock-ghost">88:88</div>
                          <div className="timer-clock-active time">{clocks.dhaka.time}</div>
                          <div className="timer-clock-pm time-pm">{clocks.dhaka.period}</div>
                        </div>
                        <div className="timer-divider"></div>
                        <div className="date-time_wr">
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M10 2.666V1.333M10 2.666V4M10 2.666H7M2 6.666V12.666C2 13.403 2.597 14 3.333 14H12.667C13.403 14 14 13.403 14 12.666V6.666H2Z" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M2 6.667V4C2 3.264 2.597 2.667 3.333 2.667H4.667" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.668 1.333V4" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14 6.667V4C14 3.264 13.402 2.667 12.665 2.667H12.332" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium date">{clocks.dhaka.date}</span>
                          </div>
                          <div className="date-time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                              <path d="M13.335 6.666C13.335 9.612 8.001 14.666 8.001 14.666C8.001 14.666 2.668 9.612 2.668 6.666C2.668 3.721 5.056 1.333 8.001 1.333C10.947 1.333 13.335 3.721 13.335 6.666Z" stroke="#707070" strokeWidth="1.4" />
                              <path d="M8 7.333C8.368 7.333 8.667 7.035 8.667 6.667C8.667 6.298 8.368 6 8 6C7.632 6 7.333 6.298 7.333 6.667C7.333 7.035 7.632 7.333 8 7.333Z" fill="#707070" stroke="#707070" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-size-small text-weight-medium">{clocks.dhaka.city}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer_motto-wrap">
                      <div className="footer_motto-inner">
                        <span className="footer_motto-highlight">Rise • Focus • Dominate</span>
                        <span className="footer_motto-dot">•</span>
                        <span className="footer_motto-text">Documenting Progress. Building Trust. Inspiring a Nation.</span>
                      </div>
                    </div>

                    <div className="footer_wordmark-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 240"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        className="footer_wordmark-svg"
                        role="img"
                        aria-label="UPLIFT BANGLADESH"
                      >
                        <text
                          x="50%"
                          y="200"
                          textAnchor="middle"
                          textLength="1440"
                          lengthAdjust="spacingAndGlyphs"
                          fill="#0f1011"
                          className="font-display font-black uppercase tracking-[0.01em] [font-size:235px]"
                        >
                          UPLIFT BANGLADESH
                        </text>
                      </svg>
                    </div>
                  </div>

                  <div className="footer_legal-wrap">
                    <div className="footer_copyright">
                      © 2026 Uplift Bangladesh™
                    </div>
                    <div className="footer_legal-right">
                      <Link href="/legal/privacy-policy" className="footer_legal-link">
                        Privacy Policy
                      </Link>
                      <Link href="/legal/terms-of-use" className="footer_legal-link">
                        Terms of use
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        aria-label="Scroll to top"
                        className="footer_scroll-top-btn"
                        title="Scroll to top"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                      </button>
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
