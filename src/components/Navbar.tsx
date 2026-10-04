"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ROLES = [
  "Documentary Filmmaker",
  "Development Content Creator",
  "Mega-Projects Influencer",
  "UPLIFT BANGLADESH",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFocusOpen, setMobileFocusOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopFocusOpen, setDesktopFocusOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  // Lock body scroll when mobile drawer is open & support Escape key
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <nav
        aria-label="Main"
        data-wf--navbar--menu-state={mobileMenuOpen ? "menu-open" : "menu-closed-default"}
        className="navbar"
      >
        <div className="navbar_content">
          <div animation="navbar-content" className="padding-global is-tiny">
            <div className="navbar_component">
              {/* Brand Logo & Animated Roles */}
              <Link
                aria-label="Uplift Bangladesh — home"
                href="/"
                aria-current="page"
                className="navbar-logo_wr w-inline-block w--current"
              >
                <div className="menu_logo-wr">
                  <img
                    src="/assets/img/logo/logo.png"
                    loading="lazy"
                    alt="Uplift Bangladesh"
                    className="menu_logo object-contain max-h-[36px] w-auto"
                  />
                </div>
                <div className="navbar_logo-wrap">
                  <div className="logo-text-flex">
                    <div className="navbar_logo-anim relative overflow-hidden h-[1.3em]">
                      {ROLES.map((role, idx) => (
                        <div
                          key={role}
                          aria-hidden={idx !== roleIndex}
                          className={`navbar_logo-anim_text transition-all duration-500 ease-out whitespace-nowrap ${idx === roleIndex
                              ? "opacity-100 translate-y-0 relative"
                              : "opacity-0 translate-y-full absolute inset-0 pointer-events-none"
                            }`}
                        >
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="navbar_links">
                <div className="navbar_links-wrap">
                  {/* Desktop Services Dropdown */}
                  <div
                    className={`w-dropdown ${desktopServicesOpen ? "w--open" : ""}`}
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <div
                      className="dd-toggle w-dropdown-toggle"
                      onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                      role="button"
                      aria-haspopup="menu"
                      aria-expanded={desktopServicesOpen}
                    >
                      <div className="navbar_menu-link">
                        <div className="navbar_link-texts">
                          <div className="navbar_link-text _1">Services</div>
                          <div aria-hidden="true" className="navbar_link-text _2">
                            Services
                          </div>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 12 7"
                        fill="none"
                        className={`dd-icon transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <path
                          d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <nav
                      className={`dropdown-list w-dropdown-list transition-all duration-200 ${desktopServicesOpen
                          ? "w--open block opacity-100 pointer-events-auto -translate-x-1/2 translate-y-0"
                          : ""
                        }`}
                    >
                      <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopServicesOpen(false)}
                              className="dropdown-link"
                            >
                              Drone Cinematography
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopServicesOpen(false)}
                              className="dropdown-link"
                            >
                              Corporate Brand Films (OVC)
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopServicesOpen(false)}
                              className="dropdown-link"
                            >
                              Factory &amp; Industrial Videos
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopServicesOpen(false)}
                              className="dropdown-link"
                            >
                              Hotel &amp; Resort Films
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopServicesOpen(false)}
                              className="dropdown-link"
                            >
                              Real Estate Productions
                            </a>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  {/* Desktop Focus Areas Dropdown */}
                  <div
                    className={`w-dropdown ${desktopFocusOpen ? "w--open" : ""}`}
                    onMouseEnter={() => setDesktopFocusOpen(true)}
                    onMouseLeave={() => setDesktopFocusOpen(false)}
                  >
                    <div
                      className="dd-toggle w-dropdown-toggle"
                      onClick={() => setDesktopFocusOpen(!desktopFocusOpen)}
                      role="button"
                      aria-haspopup="menu"
                      aria-expanded={desktopFocusOpen}
                    >
                      <div className="navbar_menu-link">
                        <div className="navbar_link-texts">
                          <div className="navbar_link-text _1">Focus Areas</div>
                          <div aria-hidden="true" className="navbar_link-text _2">
                            Focus Areas
                          </div>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 12 7"
                        fill="none"
                        className={`dd-icon transition-transform duration-200 ${desktopFocusOpen ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <path
                          d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <nav
                      className={`dropdown-list w-dropdown-list transition-all duration-200 ${desktopFocusOpen
                          ? "w--open block opacity-100 pointer-events-auto -translate-x-1/2 translate-y-0"
                          : ""
                        }`}
                    >
                      <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopFocusOpen(false)}
                              className="dropdown-link"
                            >
                              Mega Infrastructure
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopFocusOpen(false)}
                              className="dropdown-link"
                            >
                              Smart Cities &amp; Urban
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopFocusOpen(false)}
                              className="dropdown-link"
                            >
                              Industrial &amp; Economic Zones
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => setDesktopFocusOpen(false)}
                              className="dropdown-link"
                            >
                              Green Energy &amp; Sustainability
                            </a>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <a href="#works" className="navbar_menu-link w-inline-block">
                    <div className="navbar_link-texts">
                      <div className="navbar_link-text _1">Mega-Projects</div>
                      <div aria-hidden="true" className="navbar_link-text _2">
                        Mega-Projects
                      </div>
                    </div>
                    <div className="nav_link-dot"></div>
                  </a>

                  <a href="#sponsorship" className="navbar_menu-link w-inline-block">
                    <div className="navbar_link-texts">
                      <div className="navbar_link-text _1">Sponsorship</div>
                      <div aria-hidden="true" className="navbar_link-text _2">
                        Sponsorship
                      </div>
                    </div>
                    <div className="nav_link-dot"></div>
                  </a>
                </div>
              </div>

              {/* Navbar Right: Phone contact, Mobile Menu Toggle Button, Partner CTA */}
              <div className="navbar_contact">
                <div className="navbar-contact">
                  <div data-wf--talk-to--variant="base">
                    <a href="tel:01608427446" className="navbar_talk-to w-inline-block">
                      <img
                        loading="lazy"
                        src="/assets/img/logo/logo.png"
                        alt="Uplift Bangladesh"
                        className="navbar_contact-pic object-contain"
                      />
                      <div className="navbar_contact-texts">
                        <div className="relative">
                          <div className="nav_contact-name">Uplift Bangladesh</div>
                          <div className="online"></div>
                        </div>
                        <div className="home-header_position">01608-427446</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Mobile Hamburger / Cross Toggle Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-controls="mobile-menu"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  className={`navbar_menu-open ${mobileMenuOpen ? "open" : ""}`}
                >
                  {mobileMenuOpen ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0f1011"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="menu-icon"
                    >
                      <path
                        d="M3 5H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 12H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 19H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </button>

                {/* Desktop Partner CTA */}
                <div>
                  <a
                    data-wf--button--variant="small-light"
                    href="#contact"
                    className="button w-inline-block"
                  >
                    <div className="button-in">
                      <div className="button_texts">
                        <div className="button_text _1">Partner With Us</div>
                        <div aria-hidden="true" className="button_text _2">
                          Get In Touch
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop Overlay (Clicking dark area outside drawer closes it) */}
        <div
          className={`menu_bg ${mobileMenuOpen ? "is-open" : ""}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Mobile Navigation Drawer Modal */}
        <div
          id="mobile-menu"
          className={`menu ${mobileMenuOpen ? "is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          onClick={(e) => {
            // Close if clicking the backdrop area outside the card
            if (e.target === e.currentTarget) {
              closeMobileMenu();
            }
          }}
        >
          <div className="menu_content" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header: Brand Logo on Left, High-Contrast Cross Close Button on Right */}
            <div className="menu_drawer-header">
              <Link
                href="/"
                aria-current="page"
                onClick={closeMobileMenu}
                className="menu_logo-wrap w-inline-block w--current"
              >
                <img
                  loading="lazy"
                  src="/assets/img/logo/logo.png"
                  alt="Uplift Bangladesh"
                  className="menu_logo object-contain max-h-[38px] w-auto"
                />
              </Link>

              {/* Dedicated Cross (X) Close Button */}
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="menu_close"
                title="Close menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Drawer Body Items */}
            <div className="menu_items">
              <div className="menu_links">
                <div className="menu_col-1">
                  <div className="menu_links-wrap">
                    {/* Mobile Services Accordion Dropdown */}
                    <div
                      className={`dropdown-menu ${mobileServicesOpen ? "is-open w--open" : ""
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="dd-toggle"
                        aria-expanded={mobileServicesOpen}
                        aria-label="Toggle Services submenu"
                      >
                        <span className="navbar_link-text is--dd">Services</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 12 7"
                          fill="none"
                          className={`dd-icon transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#EE3028]" : "rotate-0 text-zinc-500"
                            }`}
                        >
                          <path
                            d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>

                      {/* Expanded Submenu List */}
                      <div
                        className={`dropdown-list ${mobileServicesOpen ? "is-open w--open" : ""
                          }`}
                      >
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Drone Cinematography
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Corporate Brand Films (OVC)
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Factory &amp; Industrial Videos
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Hotel &amp; Resort Films
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Real Estate Productions
                        </a>
                      </div>
                    </div>

                    {/* Mobile Focus Areas Accordion Dropdown */}
                    <div
                      className={`dropdown-menu ${mobileFocusOpen ? "is-open w--open" : ""
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileFocusOpen(!mobileFocusOpen)}
                        className="dd-toggle"
                        aria-expanded={mobileFocusOpen}
                        aria-label="Toggle Focus Areas submenu"
                      >
                        <span className="navbar_link-text is--dd">Focus Areas</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 12 7"
                          fill="none"
                          className={`dd-icon transition-transform duration-200 ${mobileFocusOpen ? "rotate-180 text-[#EE3028]" : "rotate-0 text-zinc-500"
                            }`}
                        >
                          <path
                            d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>

                      {/* Expanded Submenu List */}
                      <div
                        className={`dropdown-list ${mobileFocusOpen ? "is-open w--open" : ""
                          }`}
                      >
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Mega Infrastructure
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Smart Cities &amp; Urban
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Industrial &amp; Economic Zones
                        </a>
                        <a
                          href="#services"
                          onClick={closeMobileMenu}
                          className="dropdown-link"
                        >
                          Green Energy &amp; Sustainability
                        </a>
                      </div>
                    </div>

                    {/* Direct Navigation Links */}
                    <a
                      href="#works"
                      onClick={closeMobileMenu}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Mega-Projects</span>
                    </a>

                    <a
                      href="#sponsorship"
                      onClick={closeMobileMenu}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Sponsorship</span>
                    </a>
                  </div>

                  {/* Mobile Contact & Direct Action in Drawer */}
                  <div data-wf--talk-to--variant="base">
                    <div className="navbar_talk-to_wr">
                      <a
                        href="tel:01608427446"
                        className="navbar_talk-to no-underline"
                      >
                        <img
                          loading="lazy"
                          src="/assets/img/logo/logo.png"
                          alt="Uplift Bangladesh"
                          className="navbar_contact-pic object-contain"
                        />
                        <div className="navbar_contact-texts">
                          <div className="relative">
                            <div className="nav_contact-name">Uplift Bangladesh</div>
                            <div className="online"></div>
                          </div>
                          <div className="home-header_position">01608-427446</div>
                        </div>
                      </a>

                      <a
                        data-wf--button--variant="small-light"
                        href="#contact"
                        onClick={closeMobileMenu}
                        className="button w-inline-block w-full"
                      >
                        <div className="button-in justify-center">
                          <div className="button_texts">
                            <div className="button_text _1">Partner With Us</div>
                            <div aria-hidden="true" className="button_text _2">
                              Get In Touch
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Social and Community Links */}
                  <div className="menu_legal">
                    <div className="menu_legal-links">
                      <a
                        href="https://www.youtube.com/@UpliftBangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu_legal-link"
                      >
                        YouTube (451K+)
                      </a>
                      <a
                        href="https://www.facebook.com/upliftbangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu_legal-link"
                      >
                        Facebook (681K+)
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu_legal-link"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu_legal-link"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
