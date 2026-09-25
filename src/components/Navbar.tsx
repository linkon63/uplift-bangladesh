import React from "react";

export default function Navbar() {
  return (
    <>
<a href="#main" className="skip-link">Skip to content</a>
    <nav aria-label="Main" data-wf--navbar--menu-state="menu-closed-default" className="navbar">
        <div className="navbar_content">
            <div animation="navbar-content" className="padding-global is-tiny">
                <div className="navbar_component">
                    <a aria-label="Uplift Bangladesh — home" href="/" aria-current="page"
                        className="navbar-logo_wr w-inline-block w--current">
                        <div className="menu_logo-wr"><img
                                src="/assets/img/logo/logo.png"
                                loading="lazy" alt="Uplift Bangladesh" className="menu_logo" style={{ objectFit: "contain", maxHeight: "36px", width: "auto" }} /></div>
                        <div className="navbar_logo-wrap">
                            <div className="logo-text-flex">
                                <div className="navbar_logo-anim">
                                    <div aria-hidden="true" className="navbar_logo-anim_text">Documentary Filmmaker</div>
                                    <div aria-hidden="true" className="navbar_logo-anim_text is-abs">Development Content Creator</div>
                                    <div aria-hidden="true" className="navbar_logo-anim_text is-abs">Mega-Projects Influencer</div>
                                    <div aria-hidden="true" className="navbar_logo-anim_text is-abs">Bangladesh&#x27;s #1 Brand</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="navbar_links">
                        <div className="navbar_links-wrap">
                            <div data-hover="true" data-delay="0" className="w-dropdown">
                                <div className="dd-toggle w-dropdown-toggle">
                                    <div className="navbar_link">
                                        <div className="navbar_link-texts">
                                            <div className="navbar_link-text _1">Services</div>
                                            <div aria-hidden="true" className="navbar_link-text _2">Services</div>
                                        </div>
                                    </div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 7"
                                        fill="none" className="dd-icon">
                                        <path
                                            d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                                <nav className="dropdown-list w-dropdown-list">
                                    <div className="w-dyn-list">
                                        <div role="list" className="w-dyn-items">
                                            <div role="listitem" className="w-dyn-item"><a
                                                    href="#services" className="dropdown-link">Drone Cinematography</a></div>
                                            <div role="listitem" className="w-dyn-item"><a href="#services"
                                                    className="dropdown-link">Corporate Brand Films (OVC)</a></div>
                                            <div role="listitem" className="w-dyn-item"><a href="#services"
                                                    className="dropdown-link">Factory & Industrial Videos</a></div>
                                            <div role="listitem" className="w-dyn-item"><a href="#services"
                                                    className="dropdown-link">Hotel & Resort Films</a></div>
                                            <div role="listitem" className="w-dyn-item"><a href="#services"
                                                    className="dropdown-link">Real Estate Productions</a></div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div data-hover="true" data-delay="0" className="w-dropdown">
                                <div className="dd-toggle w-dropdown-toggle">
                                    <div className="navbar_link">
                                        <div className="navbar_link-texts">
                                            <div className="navbar_link-text _1">Focus Areas</div>
                                            <div aria-hidden="true" className="navbar_link-text _2">Focus Areas</div>
                                        </div>
                                    </div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 7"
                                        fill="none" className="dd-icon">
                                        <path
                                            d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                                <nav className="dropdown-list w-dropdown-list">
                                    <div className="w-dyn-list">
                                        <div role="list" className="w-dyn-items">
                                            <div role="listitem" className="w-dyn-item"><a href="#services"
                                                    className="dropdown-link">Mega Infrastructure</a></div>
                                            <div role="listitem" className="w-dyn-item"><a
                                                    href="#services" className="dropdown-link">Smart Cities & Urban</a></div>
                                            <div role="listitem" className="w-dyn-item"><a
                                                    href="#services" className="dropdown-link">Industrial & Economic Zones</a></div>
                                            <div role="listitem" className="w-dyn-item"><a
                                                    href="#services" className="dropdown-link">Green Energy & Sustainability</a></div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <a href="#works" className="navbar_link w-inline-block">
                                <div className="navbar_link-texts">
                                    <div className="navbar_link-text _1">Mega-Projects</div>
                                    <div aria-hidden="true" className="navbar_link-text _2">Mega-Projects</div>
                                </div>
                                <div className="nav_link-dot"></div>
                            </a>
                            <a href="#sponsorship" className="navbar_link w-inline-block">
                                <div className="navbar_link-texts">
                                    <div className="navbar_link-text _1">Sponsorship</div>
                                    <div aria-hidden="true" className="navbar_link-text _2">Sponsorship</div>
                                </div>
                                <div className="nav_link-dot"></div>
                            </a>
                        </div>
                    </div>
                    <div className="navbar_contact">
                        <div className="navbar-contact">
                            <div data-wf--talk-to--variant="base"><a
                                    href="tel:01608427446"
                                    className="navbar_talk-to w-inline-block"><img loading="lazy"
                                        src="/assets/img/logo/logo.png"
                                        alt="Uplift Bangladesh" className="navbar_contact-pic" style={{ objectFit: "contain" }} />
                                    <div className="navbar_contact-texts">
                                        <div className="relative">
                                            <div className="nav_contact-name">Uplift Bangladesh</div>
                                            <div className="online"></div>
                                        </div>
                                        <div className="home-header_position">01608-427446</div>
                                    </div>
                                </a></div>
                        </div><button fs-scrolldisable-element="toggle" fs-scrolldisable-media="(max-width: 767px)"
                            aria-controls="mobile-menu" aria-label="Open menu" aria-expanded="false"
                            className="navbar_menu-open"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                viewBox="0 0 24 24" fill="none" aria-hidden="true" className="menu-icon">
                                <path d="M3 5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg></button>
                        <div>
                            <a data-wf--button--variant="small-light"
                                href="#contact"
                                className="button w-inline-block">
                                <div className="button-in">
                                    <div className="button_texts">
                                        <div className="button_text _1">Partner With Us</div>
                                        <div aria-hidden="true" className="button_text _2">Get In Touch</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mobile-menu" className="menu">
            <div className="menu_content">
                <div className="menu_items">
                    <div className="menu_links"><a href="/" aria-current="page"
                            className="menu_logo-wrap w-inline-block w--current"><img loading="lazy"
                                src="/assets/img/logo/logo.png"
                                alt="Uplift Bangladesh" className="menu_logo" style={{ objectFit: "contain", maxHeight: "40px" }} /></a>
                        <div className="menu_col-1">
                            <div className="menu_links-wrap">
                                <div data-hover="false" data-delay="0" className="dropdown-menu w-dropdown">
                                    <div className="dd-toggle w-dropdown-toggle">
                                        <div className="navbar_link">
                                            <div className="navbar_link-texts">
                                                <div className="navbar_link-text is--dd">Services</div>
                                            </div>
                                        </div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 7"
                                            fill="none" className="dd-icon">
                                            <path
                                                d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <nav className="dropdown-list w-dropdown-list">
                                        <div className="w-dyn-list">
                                            <div role="list" className="w-dyn-items">
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services" className="dropdown-link">Drone Cinematography</a></div>
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services"
                                                        className="dropdown-link">Corporate Brand Films</a></div>
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services"
                                                        className="dropdown-link">Factory & Industrial OVC</a></div>
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services"
                                                        className="dropdown-link">Real Estate & Hospitality</a></div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div data-hover="false" data-delay="0" className="dropdown-menu w-dropdown">
                                    <div className="dd-toggle w-dropdown-toggle">
                                        <div className="navbar_link">
                                            <div className="navbar_link-texts">
                                                <div className="navbar_link-text is--dd">Focus Areas</div>
                                            </div>
                                        </div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 7"
                                            fill="none" className="dd-icon">
                                            <path
                                                d="M1 1L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L11 1"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <nav className="dropdown-list w-dropdown-list">
                                        <div className="w-dyn-list">
                                            <div role="list" className="w-dyn-items">
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services"
                                                        className="dropdown-link">Mega Infrastructure</a></div>
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services" className="dropdown-link">Smart Cities & Urban</a></div>
                                                <div role="listitem" className="w-dyn-item"><a
                                                        href="#services" className="dropdown-link">Economic Zones</a></div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <a href="#works" className="menu_link w-inline-block">
                                    <div className="menu_link-texts">
                                        <p className="menu_link-text _1">Mega-Projects</p>
                                        <p aria-hidden="true" className="menu_link-text _2">Mega-Projects</p>
                                    </div>
                                    <div className="menu_link-dot"></div>
                                </a>
                                <a href="#sponsorship" className="menu_link w-inline-block">
                                    <div className="menu_link-texts">
                                        <p className="menu_link-text _1">Sponsorship</p>
                                        <p aria-hidden="true" className="menu_link-text _2">Sponsorship</p>
                                    </div>
                                    <div className="menu_link-dot"></div>
                                </a>
                            </div>
                            <div data-wf--talk-to--variant="base">
                                <div className="navbar_talk-to_wr">
                                    <div className="navbar_talk-to"><img loading="lazy"
                                            src="/assets/img/logo/logo.png"
                                            alt="Uplift Bangladesh" className="navbar_contact-pic" style={{ objectFit: "contain" }} />
                                        <div className="navbar_contact-texts">
                                            <div className="relative">
                                                <div className="nav_contact-name">Uplift Bangladesh</div>
                                                <div className="online"></div>
                                            </div>
                                            <div className="home-header_position">01608-427446</div>
                                        </div>
                                    </div>
                                    <a data-wf--button--variant="small-light"
                                        href="#contact"
                                        className="button w-inline-block">
                                        <div className="button-in">
                                            <div className="button_texts">
                                                <div className="button_text _1">Partner With Us</div>
                                                <div aria-hidden="true" className="button_text _2">Get In Touch</div>
                                            </div>
                                            <div className="button_glow-wrap">
                                                <div className="button_glow"></div>
                                            </div>
                                        </div>
                                        <div className="button_border-wrap">
                                            <div className="button_border"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="menu_legal">
                                <div className="menu_legal-links"><a href="https://www.youtube.com/@UpliftBangladesh"
                                        target="_blank" className="menu_legal-link">YouTube (451K+)</a><a
                                        href="https://www.facebook.com/upliftbangladesh" target="_blank"
                                        className="menu_legal-link">Facebook (681K+)</a><a
                                        href="https://www.instagram.com" target="_blank"
                                        className="menu_legal-link">Instagram</a><a
                                        href="https://www.tiktok.com" target="_blank"
                                        className="menu_legal-link">TikTok</a></div>
                            </div>
                        </div>
                    </div>
                </div><button aria-label="Close Menu" className="menu_close"><svg xmlns="http://www.w3.org/2000/svg"
                        width="100%" viewBox="0 0 56 56" fill="none" className="close">
                        <rect width="56" height="56" rx="28" fill="#F5F5F5"></rect>
                        <path
                            d="M23.6328 32.3688L28.0017 28M28.0017 28L32.3705 23.6311M28.0017 28L23.6328 23.6311M28.0017 28L32.3705 32.3688"
                            stroke="#0F1011" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></button>
            </div>
        </div>
        <div className="menu_bg"></div>
        <div className="hidden w-embed">
            
        </div>
    </nav>

    </>
  );
}
