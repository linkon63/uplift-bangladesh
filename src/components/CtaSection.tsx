import React from "react";
import { DanceVideo } from "@/components/cta/DanceVideo";

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
          <DanceVideo />
        </div>
      </div>
    </section>
  );
}
