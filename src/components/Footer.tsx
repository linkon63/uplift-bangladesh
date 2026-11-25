"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleFooterNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    tab?: "Tab 1" | "Tab 2"
  ) => {
    e.preventDefault();
    if (tab && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("selectServicesTab", { detail: tab })
      );
    }
    if (typeof window !== "undefined") {
      if (href === "#home" || href === "#top" || href === "/") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
          router.push("/");
        }
        return;
      }
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        } else {
          router.push(`/${href}`);
          return;
        }
      }
      router.push(href, { scroll: false });
    }
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
                                  onClick={(e) => handleFooterNavClick(e, "#home")}
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
                                  onClick={(e) => handleFooterNavClick(e, "#works")}
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
                                <Link
                                  href="/sponsorship"
                                  scroll={false}
                                  className="footer_menu-link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Sponsorship Packages</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Sponsorship Packages
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </Link>
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
                                  onClick={(e) => handleFooterNavClick(e, "#services", "Tab 1")}
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
                                  onClick={(e) => handleFooterNavClick(e, "#services", "Tab 1")}
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
                                  onClick={(e) => handleFooterNavClick(e, "#services", "Tab 1")}
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
                                    <p className="footer_link-text _1">YouTube (452K+)</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      YouTube (452K+)
                                    </p>
                                  </div>
                                  <div className="footer_link-dot"></div>
                                </a>
                                <a
                                  href="https://www.facebook.com/UpliftBangladeshOfficiall"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="footer_menu-link w-inline-block"
                                >
                                  <div className="footer_link-texts">
                                    <p className="footer_link-text _1">Facebook (706K+)</p>
                                    <p aria-hidden="true" className="footer_link-text _2">
                                      Facebook (706K+)
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
                          <div className="email flex items-center gap-2.5 mt-2 flex-wrap">
                            <a
                              href="mailto:upliftbd.media@gmail.com"
                              className="footer_menu-link big-2 w-inline-block text-brand-dark font-semibold"
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
                              className={`cursor-pointer ${copied ? "footer_copy-btn is-copied" : "footer_copy-btn"}`}
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

                    <div className="footer_motto-wrap">
                      <div className="footer_motto-inner">
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
                    <div className="footer_copyright-group flex items-center gap-2 sm:gap-3 flex-wrap">
                      <div className="footer_copyright">
                        © 2026 Uplift Bangladesh™
                      </div>
                      <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">•</span>
                      <div className="footer_powered text-zinc-500 text-sm">
                        Powered by{" "}
                        <a
                          href="https://www.softzino.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-zinc-800 hover:text-[#EE3028] transition-colors underline-offset-2 hover:underline cursor-pointer"
                        >
                          Softzino Technologies
                        </a>
                      </div>
                    </div>
                    <div className="footer_legal-right">
                      <Link
                        href="/legal/privacy-policy"
                        scroll={true}
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0, behavior: "instant" });
                          }
                        }}
                        className="footer_legal-link cursor-pointer"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href="/legal/terms-of-use"
                        scroll={true}
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0, behavior: "instant" });
                          }
                        }}
                        className="footer_legal-link cursor-pointer"
                      >
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
                        className="footer_scroll-top-btn cursor-pointer"
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
