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
  const [prevRoleIndex, setPrevRoleIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((curr) => {
        setPrevRoleIndex(curr);
        return (curr + 1) % ROLES.length;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    tab?: "Tab 1" | "Tab 2"
  ) => {
    e.preventDefault();
    closeMobileMenu();
    if (tab && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("selectServicesTab", { detail: tab })
      );
    }
    if (typeof window !== "undefined") {
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 120);
          return;
        } else {
          window.location.href = `/${href}`;
          return;
        }
      }
      window.location.href = href;
    }
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
              <Link
                aria-label="Uplift Bangladesh — home"
                href="/"
                aria-current="page"
                className="navbar-logo_wr flex items-center gap-2.5 sm:gap-3 group shrink-0 no-underline"
              >
                {/* Brand Logo - Crisp & Always Visible on ALL devices */}
                <div className="navbar_logo-img-box flex items-center shrink-0">
                  <img
                    src="/assets/img/logo/logo.png"
                    loading="eager"
                    alt="Uplift Bangladesh"
                    className="menu_logo object-contain h-8 sm:h-9 w-auto max-h-[34px] sm:max-h-[38px] transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                {/* Subtle vertical hairline divider */}
                <div
                  className="hidden md:block h-4 w-[1px] bg-black/15 shrink-0"
                  aria-hidden="true"
                />

                {/* Animated Tagline / Roles — visible on tablet & desktop without cutoff */}
                <div className="navbar_logo-wrap hidden md:flex items-center shrink-0 pr-1">
                  <div className="logo-text-flex flex items-center">
                    <div className="navbar_logo-anim relative overflow-hidden h-[1.35em] grid grid-cols-1 w-auto max-w-none">
                      {ROLES.map((role, idx) => {
                        const isActive = idx === roleIndex;
                        const isPrev = idx === prevRoleIndex;
                        return (
                          <div
                            key={role}
                            aria-hidden={!isActive}
                            className={`navbar_logo-anim_text col-start-1 row-start-1 whitespace-nowrap transition-all duration-500 ease-out select-none ${
                              isActive
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : isPrev
                                ? "opacity-0 -translate-y-full pointer-events-none"
                                : "opacity-0 translate-y-full pointer-events-none"
                            }`}
                          >
                            {role}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="navbar_links">
                <div className="navbar_links-wrap">
                  <div
                    className={`w-dropdown ${desktopServicesOpen ? "w--open" : ""}`}
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <div
                      className="dd-toggle w-dropdown-toggle cursor-pointer"
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
                        className={`dd-icon transition-transform duration-200 ${
                          desktopServicesOpen ? "rotate-180" : "rotate-0"
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
                      className={`dropdown-list w-dropdown-list transition-all duration-200 ${
                        desktopServicesOpen
                          ? "w--open block opacity-100 pointer-events-auto -translate-x-1/2 translate-y-0"
                          : ""
                      }`}
                    >
                      <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopServicesOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 1" }));
                              }}
                              className="dropdown-link"
                            >
                              Drone Cinematography
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopServicesOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 1" }));
                              }}
                              className="dropdown-link"
                            >
                              Corporate Brand Films (OVC)
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopServicesOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 1" }));
                              }}
                              className="dropdown-link"
                            >
                              Factory &amp; Industrial Videos
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopServicesOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 1" }));
                              }}
                              className="dropdown-link"
                            >
                              Hotel &amp; Resort Films
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopServicesOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 1" }));
                              }}
                              className="dropdown-link"
                            >
                              Real Estate Productions
                            </a>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div
                    className={`w-dropdown ${desktopFocusOpen ? "w--open" : ""}`}
                    onMouseEnter={() => setDesktopFocusOpen(true)}
                    onMouseLeave={() => setDesktopFocusOpen(false)}
                  >
                    <div
                      className="dd-toggle w-dropdown-toggle cursor-pointer"
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
                        className={`dd-icon transition-transform duration-200 ${
                          desktopFocusOpen ? "rotate-180" : "rotate-0"
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
                      className={`dropdown-list w-dropdown-list transition-all duration-200 ${
                        desktopFocusOpen
                          ? "w--open block opacity-100 pointer-events-auto -translate-x-1/2 translate-y-0"
                          : ""
                      }`}
                    >
                      <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopFocusOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 2" }));
                              }}
                              className="dropdown-link"
                            >
                              Mega Infrastructure
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopFocusOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 2" }));
                              }}
                              className="dropdown-link"
                            >
                              Smart Cities &amp; Urban
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopFocusOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 2" }));
                              }}
                              className="dropdown-link"
                            >
                              Industrial &amp; Economic Zones
                            </a>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <a
                              href="#services"
                              onClick={() => {
                                setDesktopFocusOpen(false);
                                window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: "Tab 2" }));
                              }}
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

              {/* Right Action Controls */}
              <div className="navbar_contact">
                {/* Desktop Phone Card (>= 1280px for spacious layout without cramping) */}
                <div className="navbar-contact hidden xl:block">
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

                {/* Partner CTA button (visible on tablet and desktop >= 640px) */}
                <div className="hidden sm:block">
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

                {/* Mobile Quick Call Button (< 640px) */}
                <div className="block sm:hidden">
                  <a
                    href="tel:01608427446"
                    className="w-[38px] h-[38px] rounded-full bg-[#f4f4f6] border border-black/10 flex items-center justify-center text-[#EE3028] hover:bg-[#EE3028] hover:text-white transition-all shadow-sm active:scale-95"
                    aria-label="Call 01608-427446"
                    title="Call Uplift Bangladesh"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>
                </div>

                {/* Mobile Menu Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-controls="mobile-menu"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  className={`navbar_menu-open cursor-pointer ${mobileMenuOpen ? "open" : ""}`}
                >
                  {mobileMenuOpen ? (
                    <svg
                      width="18"
                      height="18"
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
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="menu-icon"
                    >
                      <path
                        d="M3 6H21"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 12H21"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 18H21"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop overlay */}
        <div
          className={`menu_bg ${mobileMenuOpen ? "is-open" : ""}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-menu"
          className={`menu ${mobileMenuOpen ? "is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeMobileMenu();
            }
          }}
        >
          <div className="menu_content" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="menu_drawer-header">
              <Link
                href="/"
                aria-current="page"
                onClick={closeMobileMenu}
                className="menu_logo-wrap flex items-center gap-2"
              >
                <img
                  loading="lazy"
                  src="/assets/img/logo/logo.png"
                  alt="Uplift Bangladesh"
                  className="menu_logo object-contain max-h-[32px] w-auto"
                />
                <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">
                  MENU
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="menu_close cursor-pointer"
                title="Close menu"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Drawer Links */}
            <div className="menu_items">
              <div className="menu_links">
                <div className="menu_col-1">
                  <div className="menu_links-wrap">
                    {/* Services Accordion */}
                    <div
                      className={`dropdown-menu ${
                        mobileServicesOpen ? "is-open w--open" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="dd-toggle cursor-pointer"
                        aria-expanded={mobileServicesOpen}
                        aria-label="Toggle Services submenu"
                      >
                        <span className="navbar_link-text is--dd">
                          Services
                          <span className="text-[11px] font-semibold text-zinc-400 ml-1.5 font-mono">
                            (05)
                          </span>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 12 7"
                          fill="none"
                          className={`dd-icon transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#EE3028]" : "rotate-0 text-zinc-400"
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

                      <div
                        className={`dropdown-list ${
                          mobileServicesOpen ? "is-open w--open" : ""
                        }`}
                      >
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 1")}
                          className="dropdown-link"
                        >
                          Drone Cinematography
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 1")}
                          className="dropdown-link"
                        >
                          Corporate Brand Films (OVC)
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 1")}
                          className="dropdown-link"
                        >
                          Factory &amp; Industrial Videos
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 1")}
                          className="dropdown-link"
                        >
                          Hotel &amp; Resort Films
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 1")}
                          className="dropdown-link"
                        >
                          Real Estate Productions
                        </a>
                      </div>
                    </div>

                    {/* Focus Areas Accordion */}
                    <div
                      className={`dropdown-menu ${
                        mobileFocusOpen ? "is-open w--open" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileFocusOpen(!mobileFocusOpen)}
                        className="dd-toggle cursor-pointer"
                        aria-expanded={mobileFocusOpen}
                        aria-label="Toggle Focus Areas submenu"
                      >
                        <span className="navbar_link-text is--dd">
                          Focus Areas
                          <span className="text-[11px] font-semibold text-zinc-400 ml-1.5 font-mono">
                            (04)
                          </span>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 12 7"
                          fill="none"
                          className={`dd-icon transition-transform duration-200 ${
                            mobileFocusOpen ? "rotate-180 text-[#EE3028]" : "rotate-0 text-zinc-400"
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

                      <div
                        className={`dropdown-list ${
                          mobileFocusOpen ? "is-open w--open" : ""
                        }`}
                      >
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 2")}
                          className="dropdown-link"
                        >
                          Mega Infrastructure
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 2")}
                          className="dropdown-link"
                        >
                          Smart Cities &amp; Urban
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 2")}
                          className="dropdown-link"
                        >
                          Industrial &amp; Economic Zones
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, "#services", "Tab 2")}
                          className="dropdown-link"
                        >
                          Green Energy &amp; Sustainability
                        </a>
                      </div>
                    </div>

                    {/* Mega-Projects Link */}
                    <a
                      href="#works"
                      onClick={(e) => handleNavClick(e, "#works")}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Mega-Projects</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>

                    {/* Sponsorship Link */}
                    <a
                      href="#sponsorship"
                      onClick={(e) => handleNavClick(e, "#sponsorship")}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Sponsorship Packages</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>

                    {/* Audience Link */}
                    <a
                      href="#audience"
                      onClick={(e) => handleNavClick(e, "#audience")}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Audience &amp; Influence</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>

                    {/* Why Choose Us Link */}
                    <a
                      href="#why-choose-us"
                      onClick={(e) => handleNavClick(e, "#why-choose-us")}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Why Choose Us</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>

                    {/* About Us Link */}
                    <a
                      href="#about"
                      onClick={(e) => handleNavClick(e, "#about")}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">About Us</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>

                    {/* Contact Link */}
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text text-[#EE3028]">Contact &amp; Inquiry</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EE3028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>
                  </div>

                  {/* Direct Action & Contact Section */}
                  <div className="mobile-drawer_contact-card mt-4 pt-4 border-t border-black/8 flex flex-col gap-3">
                    <a
                      href="tel:01608427446"
                      className="flex items-center justify-between p-3.5 bg-zinc-50 border border-black/6 rounded-xl hover:bg-zinc-100 transition-colors no-underline text-inherit"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#EE3028]/10 flex items-center justify-center text-[#EE3028]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-zinc-900">Direct Hotline</span>
                            <span className="inline-block w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
                          </div>
                          <span className="text-sm font-bold text-zinc-700 font-mono">01608-427446</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#EE3028] bg-[#EE3028]/10 px-2.5 py-1 rounded-full">
                        Call Now
                      </span>
                    </a>

                    <a
                      data-wf--button--variant="small-light"
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="button w-inline-block w-full"
                    >
                      <div className="button-in justify-center py-3 bg-[#0f1011] text-white rounded-xl">
                        <div className="button_texts">
                          <div className="button_text _1 font-semibold text-sm">
                            Partner With Us • Get In Touch
                          </div>
                          <div aria-hidden="true" className="button_text _2 font-semibold text-sm">
                            Partner With Us • Get In Touch
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Official Channels */}
                  <div className="menu_legal mt-3 pt-3 border-t border-black/6">
                    <div className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase mb-2">
                      Official Platforms
                    </div>
                    <div className="menu_legal-links flex flex-wrap gap-2">
                      <a
                        href="https://www.youtube.com/@UpliftBangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-semibold text-zinc-700 hover:text-[#EE3028] transition-colors"
                      >
                        YouTube (451K+)
                      </a>
                      <a
                        href="https://www.facebook.com/upliftbangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-semibold text-zinc-700 hover:text-[#EE3028] transition-colors"
                      >
                        Facebook (681K+)
                      </a>
                      <a
                        href="mailto:upliftbd.media@gmail.com"
                        className="px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-semibold text-zinc-700 hover:text-[#EE3028] transition-colors"
                      >
                        Email Inquiry
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
