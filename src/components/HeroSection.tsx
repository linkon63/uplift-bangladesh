import React from "react";

export default function HeroSection() {
  return (
    <>
        <div id="hero" className="sticky-wr">
            <header className="section_home-header">
                <div className="home-header_content">
                    <div className="padding-global is-tiny is-hero">
                        <div className="home-header_headings text-[#0f1011] gap-[2.5%] w-full">
                            <div className="logo-word flex flex-[1_1_35%] max-w-[37%] items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 760 210" fill="none" className="block w-full h-auto">
                                    <text x="0" y="175" fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="205" letterSpacing="-1px" textLength="760" lengthAdjust="spacingAndGlyphs" fill="currentColor">UPLIFT</text>
                                </svg>
                            </div>
                            <div className="logo-word is-2 flex flex-[1_1_62%] max-w-[63%] items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1480 210" fill="none" className="block w-full h-auto">
                                    <text x="0" y="175" fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="205" letterSpacing="-2px" textLength="1480" lengthAdjust="spacingAndGlyphs" fill="currentColor">BANGLADESH</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="home-header_services">
                        <div id="w-node-fc556ff1-c0cf-362f-2edf-efcc490691da-e651e8e2" className="home-header_service">
                            <div className="home-header_service-text">Documentary Filmmaking</div>
                            <div className="home-header_service-line"></div>
                        </div>
                        <div id="w-node-fc556ff1-c0cf-362f-2edf-efcc490691de-e651e8e2" className="home-header_service">
                            <div className="home-header_service-text">Corporate Brand Films</div>
                            <div className="home-header_service-line"></div>
                        </div>
                        <div id="w-node-fc556ff1-c0cf-362f-2edf-efcc490691e2-e651e8e2" className="home-header_service">
                            <div className="home-header_service-text">Drone Cinematography</div>
                            <div className="home-header_service-line"></div>
                        </div>
                        <div id="w-node-fc556ff1-c0cf-362f-2edf-efcc490691e6-e651e8e2" className="home-header_service">
                            <div className="home-header_service-text">Mega Project Films</div>
                            <div className="home-header_service-line"></div>
                        </div>
                    </div>
                    <a href="#" className="home-header_component w-inline-block w-lightbox">
                        <div id="hero-video" data-video="hero" className="home-header_content_sr"><video muted={true} loop={true}
                                playsInline={true}
                                poster="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6aa1faa8545e931344169a45_69f9c76884333229e651e7bc_6a3148893a8ffe203d76b9f2_showreel-v1_mp4_poster.0000000.webp"
                                preload="none"
                                data-src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a3148893a8ffe203d76b9f2_showreel-v1_mp4_mp4.mp4"
                                className="home-header_video"></video>
                            <div className="custom-play"><button className="play-pause"><span data-state="play"
                                        className="video-button"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                            viewBox="0 0 20 20" fill="none" className="player-icon pause">
                                            <path
                                                d="M5 15.3333V4.66663C5 4.39048 5.22386 4.16663 5.5 4.16663H7.83333C8.10947 4.16663 8.33333 4.39048 8.33333 4.66663V15.3333C8.33333 15.6095 8.10947 15.8333 7.83333 15.8333H5.5C5.22386 15.8333 5 15.6095 5 15.3333Z"
                                                fill="currentColor" stroke="currentColor" strokeWidth="1.5"></path>
                                            <path
                                                d="M11.6667 15.3333V4.66663C11.6667 4.39048 11.8906 4.16663 12.1667 4.16663H14.5001C14.7762 4.16663 15.0001 4.39048 15.0001 4.66663V15.3333C15.0001 15.6095 14.7762 15.8333 14.5001 15.8333H12.1667C11.8906 15.8333 11.6667 15.6095 11.6667 15.3333Z"
                                                fill="currentColor" stroke="currentColor" strokeWidth="1.5"></path>
                                        </svg></span><span data-state="pause" className="video-button"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20"
                                            fill="none" className="player-icon play">
                                            <path
                                                d="M7.80982 4.10849C7.48193 3.84963 7 4.08318 7 4.50093V14.9374C7 15.3552 7.48193 15.5887 7.80982 15.3298L14.4196 10.1116C14.6732 9.91141 14.6732 9.52691 14.4196 9.32674L7.80982 4.10849Z"
                                                fill="currentColor" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg></span></button></div>
                        </div>
                        
                    </a>
                </div>
            </header>
        </div>

    </>
  );
}
