"use client";

import React, { useEffect, useRef } from "react";
import { VideoPlayer } from "@/components/common/VideoPlayer";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLAnchorElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !titleRef.current || !textContainerRef.current) return;

    gsap.registerPlugin(SplitText);

    let split: SplitText | null = null;
    let ctx: gsap.Context | null = null;
    let isCancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    // Dynamically calculate and apply exact font size so the text width precisely equals container width
    const fitText = () => {
      const container = textContainerRef.current;
      const title = titleRef.current;
      if (!container || !title) return;

      const containerWidth = container.clientWidth;
      if (containerWidth <= 0) return;

      const currentWidth = title.getBoundingClientRect().width;
      if (currentWidth <= 0) return;

      const currentFontSize = parseFloat(window.getComputedStyle(title).fontSize) || 100;
      let targetFontSize = (containerWidth / currentWidth) * currentFontSize;
      title.style.fontSize = `${targetFontSize}px`;

      // Secondary fine-tune pass for subpixel font kerning
      const updatedWidth = title.getBoundingClientRect().width;
      if (updatedWidth > 0 && Math.abs(containerWidth - updatedWidth) > 1) {
        targetFontSize = (containerWidth / updatedWidth) * targetFontSize;
        title.style.fontSize = `${targetFontSize}px`;
      }
    };

    const initAnimation = () => {
      if (isCancelled || !titleRef.current) return;

      // Clean up previous instance if re-initializing
      if (split) {
        split.revert();
      }
      if (ctx) {
        ctx.revert();
      }

      // Step 1: Pre-fit font size before splitting
      fitText();

      ctx = gsap.context(() => {
        // Step 2: Split text into words & chars with character masks
        split = new SplitText(titleRef.current!, {
          type: "words,chars",
          charsClass: "hero-split-char",
          wordsClass: "hero-split-word",
          mask: "chars",
          autoSplit: true,
        });
        splitRef.current = split;

        // Step 3: Re-fit font size so split wrappers perfectly fill the container width
        fitText();

        // Master Entrance Timeline
        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        // 1. Kinetic character rise & 3D tilt reveal
        tl.fromTo(
          split.chars,
          {
            yPercent: 125,
            opacity: 0,
            rotateX: -30,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: {
              each: 0.035,
              from: "start",
            },
            onComplete: () => {
              // Enable visible overflow so hover lift is never clipped
              split?.masks?.forEach((m) => {
                (m as HTMLElement).style.overflow = "visible";
              });
            },
          }
        );

        // 2. Synchronized reveal for hero services
        if (servicesRef.current) {
          tl.fromTo(
            servicesRef.current.children,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.7"
          );
        }

        // 3. Smooth scale-in for video preview
        if (videoRef.current) {
          tl.fromTo(
            videoRef.current,
            { opacity: 0, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.75"
          );
        }

        // 4. Interactive tactile hover physics on each character
        split.chars.forEach((char) => {
          const el = char as HTMLElement;
          el.style.display = "inline-block";
          el.style.position = "relative";

          const onMouseEnter = () => {
            gsap.to(el, {
              yPercent: -15,
              scale: 1.05,
              color: "#EE3028", // Uplift Bangladesh brand red
              duration: 0.22,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          const onMouseLeave = () => {
            gsap.to(el, {
              yPercent: 0,
              scale: 1,
              color: "#0f1011",
              duration: 0.5,
              ease: "elastic.out(1.2, 0.4)",
              overwrite: "auto",
            });
          };

          el.addEventListener("mouseenter", onMouseEnter);
          el.addEventListener("mouseleave", onMouseLeave);
        });
      }, containerRef);

      // Step 4: ResizeObserver to maintain exact full container width on resize
      if (textContainerRef.current) {
        resizeObserver = new ResizeObserver(() => {
          fitText();
        });
        resizeObserver.observe(textContainerRef.current);
      }
    };

    // Ensure fonts (Bebas Neue) are loaded before computing metrics
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        initAnimation();
      });
      const timer = setTimeout(initAnimation, 200);
      return () => {
        clearTimeout(timer);
        isCancelled = true;
        resizeObserver?.disconnect();
        ctx?.revert();
        split?.revert();
      };
    } else {
      initAnimation();
      return () => {
        isCancelled = true;
        resizeObserver?.disconnect();
        ctx?.revert();
        split?.revert();
      };
    }
  }, []);

  // Click handler to trigger center-out ripple wave across characters
  const handleTitleClick = () => {
    if (!splitRef.current?.chars?.length) return;
    gsap.fromTo(
      splitRef.current.chars,
      { yPercent: 0, color: "#0f1011" },
      {
        yPercent: -18,
        color: "#EE3028",
        duration: 0.22,
        stagger: {
          each: 0.03,
          from: "center",
        },
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      }
    );
  };

  return (
    <>
      <div id="hero" ref={containerRef} className="sticky-wr">
        <header className="section_home-header">
          <div className="home-header_content">
            <div className="padding-global is-tiny is-hero">
              <div className="home-header_headings text-[#0f1011] w-full block">
                <div
                  ref={textContainerRef}
                  className="w-full overflow-hidden flex items-center justify-center py-1 sm:py-2"
                >
                  <h1
                    ref={titleRef}
                    onClick={handleTitleClick}
                    aria-label="UPLIFT BANGLADESH"
                    title="Click to trigger wave animation"
                    className="hero_title font-display uppercase font-medium text-[#0f1011] select-none whitespace-nowrap will-change-transform tracking-[0.01em] cursor-pointer inline-block"
                    style={{
                      fontSize: "clamp(2.4rem, 16vw, 25rem)",
                      lineHeight: 0.88,
                      width: "max-content",
                    }}
                  >
                    UPLIFT BANGLADESH
                  </h1>
                </div>
              </div>
            </div>
            <div ref={servicesRef} className="home-header_services">
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
            <a
              ref={videoRef}
              href="#"
              className="home-header_component w-inline-block w-lightbox"
            >
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
