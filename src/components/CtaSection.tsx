import React from "react";

export default function CtaSection() {
  return (
    <>
        <section className="section_cta">
            <div className="padding-global is-tiny">
                <div className="cta_component is-center" style={{ color: "#ffffff" }}>
                    <div className="cta-text">
                        <div className="text-style-label-caption" style={{ color: "#EE3028", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                            Partnership Value Proposition
                        </div>
                        <h2 className="heading-style-h1 cta" style={{ color: "#ffffff" }}>
                            Start your journey<br />with Uplift Bangladesh
                        </h2>
                        <p style={{ maxWidth: "680px", margin: "16px auto 28px auto", color: "#a1a1aa", fontSize: "17px", lineHeight: "1.6" }}>
                            &ldquo;We believe this partnership can create strong alignment between your brand and our audience, delivering both visibility and long-term positioning in national development.&rdquo;
                        </p>
                        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                            <a data-wf--button--variant="medium-dark" href="mailto:upliftbd.media@gmail.com"
                                className="button w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa w-inline-block">
                                <div className="button-in w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa">
                                    <div className="button_texts">
                                        <div className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _1">
                                            Get in Touch
                                        </div>
                                        <div aria-hidden="true"
                                            className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _2">
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
                            <a data-wf--button--variant="medium-dark" href="tel:01608427446"
                                className="button w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa w-inline-block">
                                <div className="button-in w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa">
                                    <div className="button_texts">
                                        <div className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _1">
                                            Call 01608-427446
                                        </div>
                                        <div aria-hidden="true"
                                            className="button_text w-variant-d9d324ad-6eea-9151-add1-8c3731ed28fa _2">
                                            Call 01608-427446
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
                        <div style={{ marginTop: "20px", fontSize: "14px", color: "#71717a" }}>
                            Direct email: <a href="mailto:upliftbd.media@gmail.com" style={{ color: "#EE3028", textDecoration: "underline", userSelect: "all" }}>upliftbd.media@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
