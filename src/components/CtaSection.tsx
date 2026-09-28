import React from "react";

export default function CtaSection() {
  return (
    <section className="section_cta">
      <div className="padding-global is-tiny">
        <div className="cta_component is-center">
          <div className="cta-text">
            <h2 className="heading-style-h1 cta">
              Start your journey<br />with Uplift Bangladesh
            </h2>
            <a
              data-wf--button--variant="medium-dark"
              href="mailto:upliftbd.media@gmail.com"
              className="button w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa w-inline-block"
            >
              <div className="button-in w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa">
                <div className="button_texts">
                  <div className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _1">
                    Get in Touch
                  </div>
                  <div
                    aria-hidden="true"
                    className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _2"
                  >
                    Get in Touch
                  </div>
                </div>
                <div className="button_glow-wrap">
                  <div className="button_glow w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa"></div>
                </div>
              </div>
              <div className="button_border-wrap">
                <div className="button_border w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa"></div>
              </div>
            </a>
          </div>
          <div data-video="" className="dance">
            <video
              muted
              loop
              playsInline
              autoPlay
              aria-hidden="true"
              className="dance-vid"
            />
            <div className="custom-play">
              <button className="play-pause" type="button" aria-label="Play video">
                <span data-state="play" className="video-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="player-icon pause"
                  >
                    <path
                      d="M5 15.3333V4.66663C5 4.39048 5.22386 4.16663 5.5 4.16663H7.83333C8.10947 4.16663 8.33333 4.39048 8.33333 4.66663V15.3333C8.33333 15.6095 8.10947 15.8333 7.83333 15.8333H5.5C5.22386 15.8333 5 15.6095 5 15.3333Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M11.6667 15.3333V4.66663C11.6667 4.39048 11.8906 4.16663 12.1667 4.16663H14.5001C14.7762 4.16663 15.0001 4.39048 15.0001 4.66663V15.3333C15.0001 15.6095 14.7762 15.8333 14.5001 15.8333H12.1667C11.8906 15.8333 11.6667 15.6095 11.6667 15.3333Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
                <span data-state="pause" className="video-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="player-icon play"
                  >
                    <path
                      d="M7.80982 4.10849C7.48193 3.84963 7 4.08318 7 4.50093V14.9374C7 15.3552 7.48193 15.5887 7.80982 15.3298L14.4196 10.1116C14.6732 9.91141 14.6732 9.52691 14.4196 9.32674L7.80982 4.10849Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
