"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SERVICES_DATA, FOCUS_AREAS_DATA } from "@/data";
import { ServicesTabType } from "@/types";

const ROLES = [
  "Documentary Filmmaker",
  "Development Content Creator",
  "Mega-Projects Influencer",
  "UPLIFT BANGLADESH",
] as const;

type DropdownKey = "services" | "focus";

interface DropdownConfig {
  key: DropdownKey;
  label: string;
  tab: ServicesTabType;
  items: Array<{ id: number; number: string; title: string }>;
}

const DROPDOWNS: DropdownConfig[] = [
  {
    key: "services",
    label: "Services",
    tab: "Tab 1",
    items: SERVICES_DATA,
  },
  {
    key: "focus",
    label: "Focus Areas",
    tab: "Tab 2",
    items: FOCUS_AREAS_DATA,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFocusOpen, setMobileFocusOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [prevRoleIndex, setPrevRoleIndex] = useState<number | null>(null);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const menuContentRef = useRef<HTMLDivElement | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleDropdownEnter = useCallback(
    (key: DropdownKey) => {
      clearCloseTimer();
      setOpenDropdown(key);
    },
    [clearCloseTimer]
  );

  const handleDropdownLeave = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 160);
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    const updateScrollState = () => {
      rafId = null;
      const scrolled = window.scrollY > 24;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollState);
      }
    };
    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

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

    if (mobileMenuOpen) {
      if (menuContentRef.current) {
        menuContentRef.current.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (menuContentRef.current) {
          menuContentRef.current.scrollTop = 0;
        }
      });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
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
    setMobileServicesOpen(false);
    setMobileFocusOpen(false);
    if (menuContentRef.current) {
      menuContentRef.current.scrollTop = 0;
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    tab?: ServicesTabType
  ) => {
    e.preventDefault();
    clearCloseTimer();
    setOpenDropdown(null);
    closeMobileMenu();

    if (tab && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: tab }));
    }

    if (href === "#top") {
      if (pathname === "/" && typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.push("/", { scroll: false });
      return;
    }

    if (href.startsWith("#")) {
      if (pathname === "/" && typeof document !== "undefined") {
        const el = document.querySelector(href);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 90);
          return;
        }
      }
      router.push(`/${href}`, { scroll: false });
      if (tab && typeof window !== "undefined") {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("selectServicesTab", { detail: tab }));
        }, 350);
      }
      return;
    }

    router.push(href, { scroll: false });
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <nav
        ref={navRef}
        aria-label="Main"
        data-wf--navbar--menu-state={mobileMenuOpen ? "menu-open" : "menu-closed-default"}
        className={`navbar ${isScrolled ? "is-scrolled" : ""}`}
      >
        <div className="navbar_content">
          <div animation="navbar-content" className="padding-global is-tiny">
            <div className="navbar_component">
              <Link
                aria-label="Uplift Bangladesh — home"
                href="/"
                onClick={(e) => handleNavClick(e, "#top")}
                aria-current={pathname === "/" ? "page" : undefined}
                className="navbar-logo_wr flex items-center gap-2.5 sm:gap-3 group shrink-0 no-underline"
              >
                {/* Brand Logo */}
                <div className="navbar_logo-img-box flex items-center shrink-0">
                  <img
                    src="/assets/img/logo/logo.png"
                    loading="eager"
                    alt="Uplift Bangladesh"
                    className="object-contain h-8 w-8 sm:h-9 sm:w-9 transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                {/* Subtle vertical hairline divider */}
                <div
                  className="hidden md:block h-4 w-[1px] bg-black/15 shrink-0"
                  aria-hidden="true"
                />

                {/* Animated Tagline / Roles — fixed min-width prevents center nav jitter */}
                <div className="navbar_logo-wrap hidden md:flex items-center shrink-0 pr-1">
                  <div className="logo-text-flex flex items-center">
                    <div className="navbar_logo-anim relative overflow-hidden h-[1.35em] grid grid-cols-1 min-w-[205px] xl:min-w-[220px]">
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
                  {DROPDOWNS.map((dd) => {
                    const isOpen = openDropdown === dd.key;
                    return (
                      <div
                        key={dd.key}
                        className={`w-dropdown ${isOpen ? "w--open" : ""}`}
                        onMouseEnter={() => handleDropdownEnter(dd.key)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          type="button"
                          className="dd-toggle w-dropdown-toggle cursor-pointer bg-transparent border-0"
                          onClick={() =>
                            setOpenDropdown((curr) => (curr === dd.key ? null : dd.key))
                          }
                          aria-haspopup="menu"
                          aria-expanded={isOpen}
                        >
                          <div className="navbar_menu-link">
                            <div className="navbar_link-texts">
                              <div className="navbar_link-text _1">{dd.label}</div>
                              <div aria-hidden="true" className="navbar_link-text _2">
                                {dd.label}
                              </div>
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 12 7"
                            fill="none"
                            aria-hidden="true"
                            className={`dd-icon transition-transform duration-200 ${
                              isOpen ? "rotate-180" : "rotate-0"
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

                        <nav
                          aria-label={`${dd.label} submenu`}
                          onMouseEnter={() => handleDropdownEnter(dd.key)}
                          onMouseLeave={handleDropdownLeave}
                          className={`dropdown-list w-dropdown-list ${
                            isOpen ? "w--open" : ""
                          }`}
                        >
                          <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                              {dd.items.map((item) => (
                                <div key={item.id} role="listitem" className="w-dyn-item">
                                  <a
                                    href="#services"
                                    onClick={(e) =>
                                      handleNavClick(e, "#services", dd.tab)
                                    }
                                    className="dropdown-link group/item flex items-center justify-between gap-3"
                                  >
                                    <span className="truncate">{item.title}</span>
                                    <span className="font-mono text-[10px] text-zinc-400 group-hover/item:text-[#EE3028] shrink-0">
                                      {item.number.padStart(2, "0")}
                                    </span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </nav>
                      </div>
                    );
                  })}

                  <a
                    href="#works"
                    onClick={(e) => handleNavClick(e, "#works")}
                    className="navbar_menu-link w-inline-block"
                  >
                    <div className="navbar_link-texts">
                      <div className="navbar_link-text _1">Mega-Projects</div>
                      <div aria-hidden="true" className="navbar_link-text _2">
                        Mega-Projects
                      </div>
                    </div>
                    <div className="nav_link-dot"></div>
                  </a>

                  <Link
                    href="/sponsorship"
                    scroll={false}
                    onClick={() => {
                      clearCloseTimer();
                      setOpenDropdown(null);
                      closeMobileMenu();
                    }}
                    className="navbar_menu-link w-inline-block"
                  >
                    <div className="navbar_link-texts">
                      <div className="navbar_link-text _1">Sponsorship</div>
                      <div aria-hidden="true" className="navbar_link-text _2">
                        Sponsorship
                      </div>
                    </div>
                    <div className="nav_link-dot"></div>
                  </Link>
                </div>
              </div>

              {/* Right Action Controls */}
              <div className="navbar_contact">
                {/* Desktop Direct Line (>= 1280px) — synced with site typography & button geometry */}
                <div className="navbar-contact hidden xl:flex items-center">
                  <a
                    href="tel:01608427446"
                    className="group inline-flex items-center gap-2.5 pr-4 border-r border-black/10 no-underline"
                    aria-label="Call Uplift Bangladesh Direct Line at 01608-427446"
                  >
                    <div
                      className="relative w-9 h-9 rounded-[10px] bg-[#f4f4f6] border border-black/[0.08] flex items-center justify-center text-[#0f1011] shrink-0 transition-all duration-300 group-hover:border-[#EE3028]/35 group-hover:bg-[#EE3028]/[0.06] group-hover:text-[#EE3028]"
                      aria-hidden="true"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#EE3028] ring-2 ring-white" />
                    </div>

                    <div className="flex flex-col leading-none">
                      <span className="text-[11px] font-medium text-zinc-500 tracking-[0.01em] leading-tight">
                        Direct Line
                      </span>
                      <div className="relative overflow-hidden h-[1.3em] mt-0.5 text-[13px] font-semibold tracking-[-0.01em] leading-[1.3]">
                        <span className="block text-[#0f1011] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                          01608-427446
                        </span>
                        <span
                          aria-hidden="true"
                          className="block text-[#EE3028] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
                        >
                          Book a Shoot
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Partner CTA button (visible on tablet and desktop >= 640px) */}
                <div className="hidden sm:block">
                  <a
                    data-wf--button--variant="small-light"
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
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
          <div
            ref={menuContentRef}
            className="menu_content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="menu_drawer-header">
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={(e) => handleNavClick(e, "#top")}
                className="menu_logo-wrap flex items-center gap-2"
              >
                <img
                  loading="lazy"
                  src="/assets/img/logo/logo.png"
                  alt="Uplift Bangladesh"
                  className="object-contain h-8 w-8"
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
                    {/* Mobile Services & Focus Areas Accordions synced with data */}
                    {DROPDOWNS.map((dd) => {
                      const isMobileOpen =
                        dd.key === "services" ? mobileServicesOpen : mobileFocusOpen;
                      const toggle = (e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (dd.key === "services") {
                          setMobileServicesOpen((v) => !v);
                        } else {
                          setMobileFocusOpen((v) => !v);
                        }
                      };

                      return (
                        <div
                          key={dd.key}
                          className={`dropdown-menu ${isMobileOpen ? "is-open w--open" : ""}`}
                        >
                          <button
                            type="button"
                            onClick={toggle}
                            className="dd-toggle cursor-pointer w-full text-left"
                            aria-expanded={isMobileOpen}
                            aria-label={`Toggle ${dd.label} submenu`}
                          >
                            <span className="navbar_link-text is--dd pointer-events-none">
                              {dd.label}
                              <span className="text-[11px] font-semibold text-zinc-400 ml-1.5 font-mono">
                                ({String(dd.items.length).padStart(2, "0")})
                              </span>
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 12 7"
                              fill="none"
                              className={`dd-icon pointer-events-none transition-transform duration-200 ${
                                isMobileOpen
                                  ? "rotate-180 text-[#EE3028]"
                                  : "rotate-0 text-zinc-400"
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
                            className={`dropdown-list ${isMobileOpen ? "is-open w--open" : ""}`}
                          >
                            {dd.items.map((item) => (
                              <a
                                key={item.id}
                                href="#services"
                                onClick={(e) => handleNavClick(e, "#services", dd.tab)}
                                className="dropdown-link"
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}

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
                    <Link
                      href="/sponsorship"
                      scroll={false}
                      onClick={() => {
                        clearCloseTimer();
                        setOpenDropdown(null);
                        closeMobileMenu();
                      }}
                      className="menu_menu-link w-inline-block"
                    >
                      <span className="menu_link-text">Sponsorship Packages</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Link>

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

                  {/* Direct Action & Partner CTA Section */}
                  <div className="mobile-drawer_contact-card mt-4 pt-4 border-t border-black/8 flex flex-col gap-3">
                    <a
                      href="tel:01608427446"
                      className="flex items-center justify-between p-3.5 bg-[#f8f8fa] hover:bg-zinc-100 border border-black/[0.08] hover:border-[#EE3028]/35 rounded-2xl transition-all no-underline text-[#0f1011] group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center text-[#0f1011] group-hover:text-[#EE3028] transition-colors shadow-sm">
                          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE3028] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE3028]"></span>
                          </span>
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
                        </div>
                        <div className="flex flex-col leading-none">
                          <span className="text-[11px] font-medium text-zinc-500 tracking-[0.01em]">
                            Direct Line
                          </span>
                          <span className="text-sm font-bold text-[#0f1011] font-mono mt-0.5 group-hover:text-[#EE3028] transition-colors">
                            01608-427446
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium tracking-wide text-white bg-[#EE3028] px-3 py-1.5 rounded-full shadow-sm">
                        Book a Shoot
                      </span>
                    </a>

                    <a
                      data-wf--button--variant="small-light"
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="button w-inline-block w-full"
                    >
                      <div className="button-in justify-center py-3.5 bg-[#0f1011] hover:bg-[#EE3028] text-white rounded-full transition-colors duration-200">
                        <div className="button_texts text-center">
                          <div className="button_text _1 font-medium text-[0.94rem]">
                            Partner With Us
                          </div>
                          <div aria-hidden="true" className="button_text _2 font-medium text-[0.94rem]">
                            Get In Touch
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
                        YouTube (452K+)
                      </a>
                      <a
                        href="https://www.facebook.com/UpliftBangladeshOfficiall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-semibold text-zinc-700 hover:text-[#EE3028] transition-colors"
                      >
                        Facebook (706K+)
                      </a>
                      <a
                        href="https://www.instagram.com/upliftbangladeshofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-semibold text-zinc-700 hover:text-[#EE3028] transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.tiktok.com/@upliftbangladesh.real"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-semibold text-zinc-700 hover:text-[#EE3028] transition-colors"
                      >
                        TikTok
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
