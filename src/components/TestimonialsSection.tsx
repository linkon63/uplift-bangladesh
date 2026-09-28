"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  trigger: boolean;
}

function AnimatedCounter({
  target,
  duration = 2200,
  suffix = "+",
  trigger,
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    // Check for reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timer = setTimeout(() => setDisplayValue(target), 0);
      return () => clearTimeout(timer);
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic Ease-Out: 1 - (1 - progress)^4
      // Delivers energetic start and silky-smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(easeOut * target);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, trigger]);

  return (
    <span className="tabular-nums inline-block font-sans">
      {displayValue.toLocaleString("en-US")}
      <span className="text-[#EE3028] ml-0.5 font-extrabold">
        {suffix}
      </span>
    </span>
  );
}

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

  const targetProfiles = [
    {
      role: "Decision-Makers & Corporate Leaders",
      desc: "C-suite executives, corporate leaders, and industrialists tracking economic growth, market dynamics, and infrastructure expansion.",
      tag: "C-Suite & Board Level",
    },
    {
      role: "Government Officials & Policymakers",
      desc: "Administrative leaders, foreign investors, and international policy stakeholders engaged with national transformation initiatives.",
      tag: "Public Governance",
    },
    {
      role: "Engineers, Architects & Planners",
      desc: "Technical professionals passionate about cutting-edge structural engineering, sustainable design, and smart city infrastructure.",
      tag: "Technical Experts",
    },
    {
      role: "Industrialists & Factory Owners",
      desc: "Plant owners, manufacturing giants, and export leaders driving national GDP output and local/global supply chains.",
      tag: "Industrial Sector",
    },
    {
      role: "Real Estate Developers & Investors",
      desc: "Property developers and high-net-worth investors monitoring prime commercial zones, modern townships, and real estate assets.",
      tag: "High-Net-Worth",
    },
    {
      role: "Educated Professionals & Global Diaspora",
      desc: "Career-driven professionals and non-resident Bangladeshis actively following national progress, trade, and economic milestones.",
      tag: "Global Audience",
    },
  ];

  return (
    <>
      <section id="audience" ref={sectionRef} className="section_testimonials">
        <div className="padding-section-medium"></div>
        <div className="padding-global">
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
                    <h2 className="heading-style-h3 display-inline text-[#0f1011]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                  {targetProfiles.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-black/10 rounded-2xl p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:border-[#EE3028]/30"
                    >
                      <div>
                        <div className="inline-block bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full text-xs font-semibold text-[#EE3028] uppercase tracking-wider mb-4">
                          {item.tag}
                        </div>
                        <h3 className="text-[19px] font-bold text-[#0f1011] mb-3 leading-snug">
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
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-[#0f1011] whitespace-nowrap">
                    <AnimatedCounter
                      target={451000}
                      duration={2200}
                      suffix="+"
                      trigger={isIntersecting}
                    />
                  </div>
                  <p className="number_desc text-gray-600 m-0 text-[15px] font-medium">
                    YouTube Subscribers
                  </p>
                </div>

                {/* Stat 2: 681,000+ */}
                <div className="number_block flex flex-col gap-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-[#0f1011] whitespace-nowrap">
                    <AnimatedCounter
                      target={681000}
                      duration={2400}
                      suffix="+"
                      trigger={isIntersecting}
                    />
                  </div>
                  <p className="number_desc text-gray-600 m-0 text-[15px] font-medium">
                    Facebook Followers
                  </p>
                </div>

                {/* Stat 3: 30+ */}
                <div className="number_block flex flex-col gap-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-[#0f1011] whitespace-nowrap">
                    <AnimatedCounter
                      target={30}
                      duration={1600}
                      suffix="+"
                      trigger={isIntersecting}
                    />
                  </div>
                  <p className="number_desc text-gray-600 m-0 text-[15px] font-medium">
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
