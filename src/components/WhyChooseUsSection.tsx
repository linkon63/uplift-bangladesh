import React from "react";
import { VideoPlayer } from "@/components/common/VideoPlayer";

export default function WhyChooseUsSection() {
  return (
    <>
        <section id="why-choose-us" data-wf--services--variant="dark" className="section_home-services">
            <div className="padding-global is-tiny">
                <div className="home-services_component text-white">
                    <div className="padding-global">
                        <div className="padding-section-medium is-mobile-xsmall"></div>
                        <div className="container-large">
                            <div className="features_component">
                                <div className="text-color-grey-250">
                                    <div className="text-style-label-caption center">Why choose us</div>
                                </div>
                                <div className="spacer-small"></div>
                                <div className="max-width-xxlarge">
                                    <div className="text-color-white">
                                        <div className="text-align-center">
                                            <h2 className="heading-style-h2 text-white">
                                                A trusted content partner bringing reach, credibility, and impact to your brand
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-custom-2"></div>
                                <p className="features_desc text-[#b0b4c3] text-center max-w-[780px]">
                                    Transparent sponsorship pricing, authentic storytelling, and a strategy-focused approach to brand visibility.
                                </p>
                                <div className="spacer-medium"></div>
                                <a data-wf--button--variant="medium-dark"
                                    href="mailto:upliftbd.media@gmail.com"
                                    className="button w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa w-inline-block">
                                    <div className="button-in w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa">
                                        <div className="button_texts">
                                            <div className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _1">
                                                Get in Touch</div>
                                            <div aria-hidden="true"
                                                className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _2">
                                                upliftbd.media@gmail.com</div>
                                        </div>
                                        <div className="button_glow-wrap">
                                            <div className="button_glow w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button_border-wrap">
                                        <div className="button_border w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa"></div>
                                    </div>
                                </a>
                                <div className="spacer-xxlarge"></div>
                                <div className="features_grid">
                                    <div className="features_sync bg-[#0e1015] border border-white/10">
                                        {/* Dark Architectural & Golden-Hour Studio Backdrop (replaces desert photo) */}
                                        <div
                                            aria-hidden="true"
                                            className="features_sync-img pointer-events-none overflow-hidden"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at 78% 22%, rgba(238, 48, 40, 0.22) 0%, transparent 48%), radial-gradient(circle at 20% 55%, rgba(217, 119, 6, 0.16) 0%, transparent 52%), linear-gradient(160deg, #12151e 0%, #171316 55%, #0c0d12 100%)",
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0 opacity-[0.14]"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
                                                    backgroundSize: "44px 44px",
                                                }}
                                            />
                                        </div>

                                        <div className="features_calendar border border-white/10 bg-[#0b0c10]/85 shadow-2xl">
                                            <div className="w-full px-6 pt-5 pb-4 border-b border-white/10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-400">
                                                        Shoot Schedule
                                                    </span>
                                                    <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-zinc-500">
                                                        Dhaka &bull; Field Ops
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-7 gap-y-2.5 text-center text-[12px] font-medium text-zinc-200 mb-2">
                                                    <span>Mo</span>
                                                    <span>Tu</span>
                                                    <span>We</span>
                                                    <span>Th</span>
                                                    <span>Fr</span>
                                                    <span>Sa</span>
                                                    <span>Su</span>
                                                </div>

                                                <div className="grid grid-cols-7 gap-y-2 text-center text-[12px] items-center justify-items-center text-zinc-400">
                                                    <span />
                                                    <span />
                                                    <span />
                                                    <span className="w-7 h-7 flex items-center justify-center">1</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">2</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">3</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">4</span>

                                                    <span className="w-7 h-7 flex items-center justify-center">5</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">6</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">7</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">8</span>
                                                    <span
                                                        title="Flight Ops &amp; Aerial Survey"
                                                        className="w-7 h-7 rounded-md bg-[#161922] border border-white/15 flex items-center justify-center text-white"
                                                    >
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="9" y="9" width="6" height="6" rx="1" />
                                                            <path d="M9 9L5 5M15 9l4-4M9 15l-4 4M15 15l4 4" />
                                                        </svg>
                                                    </span>
                                                    <span className="w-7 h-7 flex items-center justify-center">10</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">11</span>

                                                    <span className="w-7 h-7 flex items-center justify-center">12</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">13</span>
                                                    <span className="w-7 h-7 rounded-md bg-white text-[#0f1011] font-semibold flex items-center justify-center shadow">
                                                        14
                                                    </span>
                                                    <span className="w-7 h-7 flex items-center justify-center">15</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">16</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">17</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">18</span>

                                                    <span className="w-7 h-7 flex items-center justify-center">19</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">20</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">21</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">22</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">23</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">24</span>
                                                    <span
                                                        title="4K Cinema Shoot"
                                                        className="w-7 h-7 rounded-md bg-[#161922] border border-[#EE3028]/40 flex items-center justify-center text-[#EE3028]"
                                                    >
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M23 7l-7 5 7 5V7z" />
                                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                                        </svg>
                                                    </span>

                                                    <span className="w-7 h-7 flex items-center justify-center">26</span>
                                                    <span
                                                        title="Post &amp; Dailies"
                                                        className="w-7 h-7 rounded-md bg-[#161922] border border-white/15 flex items-center justify-center text-white"
                                                    >
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="2" y="3" width="20" height="18" rx="2" />
                                                            <path d="M7 3v18M17 3v18M2 12h20" />
                                                        </svg>
                                                    </span>
                                                    <span className="w-7 h-7 flex items-center justify-center">28</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">29</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">30</span>
                                                    <span className="w-7 h-7 flex items-center justify-center">31</span>
                                                    <span />
                                                </div>
                                            </div>

                                            <div className="features_meetings">
                                                <div className="features_meeting-in _1">
                                                    <div className="features_meeting-group">
                                                        <div className="features_meeting">
                                                            <div className="features_time">06:00 AM</div>
                                                            <div className="features_infos">
                                                                <div className="features_meet-info">CAAB flight clearance &amp; sunrise aerials</div>
                                                                <div className="w-6 h-6 rounded-md bg-[#161922] border border-white/15 flex items-center justify-center text-white shrink-0">
                                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                        <rect x="9" y="9" width="6" height="6" rx="1" />
                                                                        <path d="M9 9L5 5M15 9l4-4M9 15l-4 4M15 15l4 4" />
                                                                    </svg>
                                                                </div>
                                                                <div className="features_user">@Flight Ops</div>
                                                            </div>
                                                        </div>
                                                        <div className="features_meeting">
                                                            <div className="features_time">10:00 AM</div>
                                                            <div className="features_infos">
                                                                <div className="features_meet-info">4K cinema ground unit &amp; site interviews</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features_meeting-in _2">
                                                    <div className="features_meeting-group">
                                                        <div className="features_meeting">
                                                            <div className="features_time">02:00 PM</div>
                                                            <div className="features_infos">
                                                                <div className="features_meet-info">Infrastructure &amp; engineering detail shots</div>
                                                                <div className="w-6 h-6 rounded-md bg-[#161922] border border-[#EE3028]/40 flex items-center justify-center text-[#EE3028] shrink-0">
                                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                        <path d="M23 7l-7 5 7 5V7z" />
                                                                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                                                    </svg>
                                                                </div>
                                                                <div className="features_user">@Cinema Unit</div>
                                                            </div>
                                                        </div>
                                                        <div className="features_meeting">
                                                            <div className="features_time">05:30 PM</div>
                                                            <div className="features_infos">
                                                                <div className="features_meet-info">Golden hour mega-project wide sweeps</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features_meeting-in _3">
                                                    <div className="features_meeting-group">
                                                        <div className="features_meeting">
                                                            <div className="features_time">08:00 PM</div>
                                                            <div className="features_infos">
                                                                <div className="features_meet-info">On-set dailies backup &amp; footage sync</div>
                                                                <div className="w-6 h-6 rounded-md bg-[#161922] border border-white/15 flex items-center justify-center text-white shrink-0">
                                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                        <rect x="2" y="3" width="20" height="18" rx="2" />
                                                                        <path d="M7 3v18M17 3v18M2 12h20" />
                                                                    </svg>
                                                                </div>
                                                                <div className="features_user">@Post Team</div>
                                                            </div>
                                                        </div>
                                                        <div className="features_meeting">
                                                            <div className="features_time">09:30 PM</div>
                                                            <div className="features_infos">
                                                                <div className="features_meet-info">Next-day call sheet &amp; crew briefing</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features_sync-texts">
                                            <h4 className="features_heading">Precision Production Schedules</h4>
                                            <p className="features_subheading">Every shoot is meticulously planned with site reconnaissance, regulatory drone permits, and high-impact cinematic staging.</p>
                                        </div>
                                        <div className="features_gradient-sync"></div>
                                    </div>
                                    <div className="features_column">
                                        <div className="chatanim">
                                            <div data-w-id="bc9f34be-b268-1ee3-d18d-8fa2c3e02cb8"
                                                className="home-grid_chat">
                                                <div className="home-grid_label">Real-time collaboration</div>
                                                <div className="home-grid_chat-in">
                                                    <div className="home-grid_chat-group _1">
                                                        <div
                                                            aria-hidden="true"
                                                            className="chat_pic _1 bg-[#14161c] border border-white/15 flex items-center justify-center text-white shrink-0"
                                                        >
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M10 11h2M10 15h2M14 11h2M14 15h2M9 21v-4a3 3 0 0 1 6 0v4M12 3l9 4H3l9-4z" />
                                                            </svg>
                                                        </div>
                                                            <div className="chat_message _2">
                                                                <div className="home-grid_message">
                                                                    <p data-split="" className="home-grid_message-text _1">
                                                                        Hi Uplift team! We want to sponsor a documentary on our upcoming Bangladesh project.</p>
                                                                </div>
                                                            </div>
                                                            <div className="chat_spacing _2"></div>
                                                    </div>
                                                    <div className="home-grid_chat-group _2">
                                                        <div className="home-grid_chats _2">
                                                            <div className="chat_message _5">
                                                                <div className="home-grid_message">
                                                                    <p data-split="" className="home-grid_message-text _3">
                                                                        We&#x27;ve covered mega projects &amp; industries across Bangladesh. Share your launch date — let&#x27;s plan!</p>
                                                                </div>
                                                            </div>
                                                        </div><img loading="lazy"
                                                            src="/assets/img/logo/logo.png"
                                                            alt="Uplift Bangladesh" className="chat_pic _2 object-contain bg-[#0b0c10]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <VideoPlayer
                                            containerClassName="red-dot"
                                            videoClassName="red-dot_vid"
                                            poster="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a2d7cbbf789986bf2972fa2_A%20red%20metallic_poster.0000000.jpg"
                                            src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a2d7cbbf789986bf2972fa2_A%20red%20metallic_mp4.mp4"
                                            autoPlay={true}
                                            loop={true}
                                            muted={true}
                                            lazyLoadMargin="400px 0px"
                                        >
                                            <div className="features_heading">1,150,000+<br />Organic Community</div>
                                        </VideoPlayer>
                                    </div>
                                    <div id="w-node-_0a62ecc4-5f80-8eb1-4336-7d525cfd03dd-e651e8e2"
                                        className="features_timeline">
                                        <div className="features_timeline-head">
                                            <div className="features_timeline-heading text-white">Content Delivery Timeline</div>
                                            <div className="features_timeline-data">
                                                <div className="features_experts">
                                                    <div className="features_timeline-texts hide-small-screen">In-House Crew</div>
                                                    <div className="flex items-center gap-1.5">
                                                        <div title="Cinema Direction" className="w-7 h-7 rounded-full bg-[#161922] border border-white/15 flex items-center justify-center text-white">
                                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M23 7l-7 5 7 5V7z" />
                                                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                                            </svg>
                                                        </div>
                                                        <div title="Certified Drone Ops" className="w-7 h-7 rounded-full bg-[#161922] border border-[#EE3028]/40 flex items-center justify-center text-[#EE3028]">
                                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="9" y="9" width="6" height="6" rx="1" />
                                                                <path d="M9 9L5 5M15 9l4-4M9 15l-4 4M15 15l4 4" />
                                                            </svg>
                                                        </div>
                                                        <div title="Post-Production" className="w-7 h-7 rounded-full bg-[#161922] border border-white/15 flex items-center justify-center text-white">
                                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="2" y="3" width="20" height="18" rx="2" />
                                                                <path d="M7 3v18M17 3v18M2 12h20" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features_date">
                                                    <div aria-hidden="true" className="features_date-icon-wrap"><img
                                                            src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/69f9c76f84333229e651eadf_calendar-white.svg"
                                                            loading="lazy" alt="" className="features_date-icon" /></div>
                                                    <div className="features_data-line"></div>
                                                    <div className="features_date-text-wrap">
                                                        <div className="features_date-text">Turnaround: 4 weeks</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features_time-wrapper">
                                            <div className="features_time-wrap">
                                                <div className="features_time-rows">
                                                    <div className="features_time-row order-1">
                                                        <div id="w-node-_0a62ecc4-5f80-8eb1-4336-7d525cfd03f4-e651e8e2"
                                                            className="features_time-block timeline-step-block">
                                                            <span className="timeline-step-badge">01</span>
                                                            <div className="timeline_text">
                                                                <div className="features_timeline-texts">Pre-Production &amp; Scripting (7 days)</div><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="100%"
                                                                    viewBox="0 0 14 14" fill="none"
                                                                    className="timeline_arrow shrink-0">
                                                                    <path
                                                                        d="M11.8245 7.29201L8.11853 10.9979C8.04127 11.0752 7.93647 11.1186 7.82721 11.1186C7.71794 11.1186 7.61315 11.0752 7.53588 10.9979C7.45862 10.9207 7.41521 10.8158 7.41521 10.7065C7.41521 10.5973 7.45862 10.4925 7.53588 10.4153L10.5392 7.41245H2.47426C2.36506 7.41245 2.26032 7.36907 2.18311 7.29185C2.10588 7.21463 2.0625 7.10989 2.0625 7.00068C2.0625 6.89148 2.10588 6.78675 2.18311 6.70952C2.26032 6.6323 2.36506 6.58892 2.47426 6.58892H10.5392L7.53588 3.58612C7.45862 3.50886 7.41521 3.40407 7.41521 3.2948C7.41521 3.18553 7.45862 3.08074 7.53588 3.00348C7.61315 2.92621 7.71794 2.88281 7.82721 2.88281C7.93647 2.88281 8.04127 2.92621 8.11853 3.00348L11.8245 6.70936C11.8627 6.7476 11.8931 6.79301 11.9138 6.843C11.9345 6.89299 11.9452 6.94658 11.9452 7.00068C11.9452 7.0548 11.9345 7.10837 11.9138 7.15836C11.8931 7.20835 11.8627 7.25377 11.8245 7.29201Z"
                                                                        fill="#F5F5F5"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features_time-row order-2">
                                                        <div id="w-node-_0a62ecc4-5f80-8eb1-4336-7d525cfd03fa-e651e8e2"
                                                            className="features_time-block timeline-step-block">
                                                            <span className="timeline-step-badge">02</span>
                                                            <div className="timeline_text">
                                                                <div className="features_timeline-texts">4K Drone &amp; Site Shoot (7 days)</div><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="100%"
                                                                    viewBox="0 0 14 14" fill="none"
                                                                    className="timeline_arrow shrink-0">
                                                                    <path
                                                                        d="M11.8245 7.29201L8.11853 10.9979C8.04127 11.0752 7.93647 11.1186 7.82721 11.1186C7.71794 11.1186 7.61315 11.0752 7.53588 10.9979C7.45862 10.9207 7.41521 10.8158 7.41521 10.7065C7.41521 10.5973 7.45862 10.4925 7.53588 10.4153L10.5392 7.41245H2.47426C2.36506 7.41245 2.26032 7.36907 2.18311 7.29185C2.10588 7.21463 2.0625 7.10989 2.0625 7.00068C2.0625 6.89148 2.10588 6.78675 2.18311 6.70952C2.26032 6.6323 2.36506 6.58892 2.47426 6.58892H10.5392L7.53588 3.58612C7.45862 3.50886 7.41521 3.40407 7.41521 3.2948C7.41521 3.18553 7.45862 3.08074 7.53588 3.00348C7.61315 2.92621 7.71794 2.88281 7.82721 2.88281C7.93647 2.88281 8.04127 2.92621 8.11853 3.00348L11.8245 6.70936C11.8627 6.7476 11.8931 6.79301 11.9138 6.843C11.9345 6.89299 11.9452 6.94658 11.9452 7.00068C11.9452 7.0548 11.9345 7.10837 11.9138 7.15836C11.8931 7.20835 11.8627 7.25377 11.8245 7.29201Z"
                                                                        fill="#F5F5F5"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features_time-row order-4">
                                                        <div id="w-node-_0a62ecc4-5f80-8eb1-4336-7d525cfd0400-e651e8e2"
                                                            className="features_time-block timeline-step-block">
                                                            <span className="timeline-step-badge">03</span>
                                                            <div className="timeline_text">
                                                                <div className="features_timeline-texts">Post-Production, Color &amp; Delivery (14 days)</div><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="100%"
                                                                    viewBox="0 0 14 14" fill="none"
                                                                    className="timeline_arrow shrink-0">
                                                                    <path
                                                                        d="M11.8245 7.29201L8.11853 10.9979C8.04127 11.0752 7.93647 11.1186 7.82721 11.1186C7.71794 11.1186 7.61315 11.0752 7.53588 10.9979C7.45862 10.9207 7.41521 10.8158 7.41521 10.7065C7.41521 10.5973 7.45862 10.4925 7.53588 10.4153L10.5392 7.41245H2.47426C2.36506 7.41245 2.26032 7.36907 2.18311 7.29185C2.10588 7.21463 2.0625 7.10989 2.0625 7.00068C2.0625 6.89148 2.10588 6.78675 2.18311 6.70952C2.26032 6.6323 2.36506 6.58892 2.47426 6.58892H10.5392L7.53588 3.58612C7.45862 3.50886 7.41521 3.40407 7.41521 3.2948C7.41521 3.18553 7.45862 3.08074 7.53588 3.00348C7.61315 2.92621 7.71794 2.88281 7.82721 2.88281C7.93647 2.88281 8.04127 2.92621 8.11853 3.00348L11.8245 6.70936C11.8627 6.7476 11.8931 6.79301 11.9138 6.843C11.9345 6.89299 11.9452 6.94658 11.9452 7.00068C11.9452 7.0548 11.9345 7.10837 11.9138 7.15836C11.8931 7.20835 11.8627 7.25377 11.8245 7.29201Z"
                                                                        fill="#F5F5F5"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features_time-lines">
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                    <div className="features_time-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="padding-section-medium is-tablet-small"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
