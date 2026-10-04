import React from "react";
import { VideoPlayer } from "@/components/common/VideoPlayer";

export default function HeroSection() {
  return (
    <>
      <div id="hero" className="sticky-wr">
        <header className="section_home-header">
          <div className="home-header_content">
            <div className="padding-global is-tiny is-hero">
              <div className="home-header_headings text-[#0f1011] w-full block">
                <div className="w-full overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 240"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-auto block select-none overflow-visible"
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
                      fontWeight="500"
                      className="font-display font-medium uppercase tracking-[0.01em] [font-size:235px]"
                    >
                      UPLIFT BANGLADESH
                    </text>
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
              <VideoPlayer
                id="hero-video"
                dataVideoPrefix="hero"
                containerClassName="home-header_content_sr"
                videoClassName="home-header_video"
                poster="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/6aa1faa8545e931344169a45_69f9c76884333229e651e7bc_6a3148893a8ffe203d76b9f2_showreel-v1_mp4_poster.0000000.webp"
                src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc%2F6a3148893a8ffe203d76b9f2_showreel-v1_mp4_mp4.mp4"
                muted
                loop
                autoPlay
              />
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
