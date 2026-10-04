"use client";

import React, { useState, useEffect, useRef } from "react";
import { TARGET_PROFILES } from "@/data";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="audience" ref={sectionRef} className="section_testimonials">
        <div className="padding-section-medium"></div>
        <div className="padding-global is-tiny">
          <div className="container-large">
            <div className="testimonials_component">
              <div className="testimonials_head">
                <div className="text-color-grey-300">
                  <div className="clutch-heading w-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#00D26A"
                      className="inline-block mr-2 align-middle"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-size-small tracking-wider uppercase font-semibold text-zinc-900">
                      100% Organic Reach • Zero Artificial Boosting
                    </span>
                  </div>
                </div>
                <div className="spacer-custom-2"></div>
                <div className="testimonials_heading-wrap">
                  <div className="text-align-center">
                    <h2 className="heading-style-h3 is-mobile-h4 display-inline text-[#0f1011]">
                      Trusted by brands and organisations across Bangladesh
                    </h2>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <p className="text-center text-zinc-600 max-w-[780px] mx-auto text-base leading-relaxed m-0">
                  Target Audience Profile &amp; National Demographic Influence: Direct access to
                  high-intent decision-makers, government leaders, industrialists, and educated
                  professionals across Bangladesh and the global diaspora.
                </p>
              </div>
              <div className="spacer-large"></div>
              <div className="reviews-wr">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
                  {TARGET_PROFILES.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-black/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:border-[#EE3028]/30"
                    >
                      <div>
                        <div className="inline-block bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full text-xs font-semibold text-[#EE3028] uppercase tracking-wider mb-4">
                          {item.tag}
                        </div>
                        <h3 className="text-lg sm:text-[19px] font-bold text-[#0f1011] mb-2.5 leading-snug">
                          {item.role}
                        </h3>
                        <p className="text-sm text-zinc-600 leading-relaxed m-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="spacer-xlarge is-mobile-large"></div>
            <div className="testimonials_numbers w-full">
              <div className="testimonials_numbers-main grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start w-full pt-3">
                {/* Stat 1: 451,000+ */}
                <div className="number_block flex flex-col gap-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-[#0f1011] whitespace-nowrap">
                    <AnimatedCounter
                      target={451000}
                      duration={2200}
                      suffix="+"
                      trigger={isIntersecting}
                    />
                  </div>
                  <p className="number_desc text-zinc-600 m-0 text-sm sm:text-[15px] font-medium">
                    YouTube Subscribers
                  </p>
                </div>

                {/* Stat 2: 681,000+ */}
                <div className="number_block flex flex-col gap-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-[#0f1011] whitespace-nowrap">
                    <AnimatedCounter
                      target={681000}
                      duration={2400}
                      suffix="+"
                      trigger={isIntersecting}
                    />
                  </div>
                  <p className="number_desc text-zinc-600 m-0 text-sm sm:text-[15px] font-medium">
                    Facebook Followers
                  </p>
                </div>

                {/* Stat 3: 30+ */}
                <div className="number_block flex flex-col gap-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-[#0f1011] whitespace-nowrap">
                    <AnimatedCounter
                      target={30}
                      duration={1600}
                      suffix="+"
                      trigger={isIntersecting}
                    />
                  </div>
                  <p className="number_desc text-zinc-600 m-0 text-sm sm:text-[15px] font-medium">
                    National &amp; International Brand Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-section-medium"></div>
      </section>
    </>
  );
}
