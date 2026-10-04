"use client";

import { useEffect } from "react";

export default function CosmosInteractions() {
  useEffect(() => {
    // ── 1. WORKS SECTION SCROLL SCALE & 3D CARD STACKING EFFECT
    const workItems = Array.from(document.querySelectorAll<HTMLElement>(".works_item"));
    let worksRafId: number | null = null;

    const handleWorksScroll = () => {
      if (window.innerWidth < 992) {
        // Tablet / Mobile: reset inline styles so cards flow naturally
        workItems.forEach((item) => {
          const wrap = item.querySelector<HTMLElement>(".works_card-wrap");
          const img = item.querySelector<HTMLElement>(".works_image");
          const infos = item.querySelector<HTMLElement>(".works_infos");
          if (wrap) {
            wrap.style.transform = "";
            wrap.style.filter = "";
          }
          if (img) {
            img.style.removeProperty("--img-scroll-scale");
          }
          if (infos) {
            infos.style.opacity = "";
          }
        });
        return;
      }

      const vh = window.innerHeight;
      const total = workItems.length;

      workItems.forEach((item, index) => {
        const wrap = item.querySelector<HTMLElement>(".works_card-wrap");
        const img = item.querySelector<HTMLElement>(".works_image");
        const infos = item.querySelector<HTMLElement>(".works_infos");
        if (!wrap) return;

        const rect = item.getBoundingClientRect();

        // Entrance animation
        const enterProgress = Math.min(1, Math.max(0, (vh - rect.top) / vh));
        const entryScale = 1.08 - 0.08 * enterProgress;
        const entryImgScale = 1.18 - 0.18 * enterProgress;

        // Multi-card deck stacking
        let exitProgress = 0;
        if (index < total - 1) {
          const nextItem = workItems[index + 1];
          const nextRect = nextItem.getBoundingClientRect();
          exitProgress = Math.min(1, Math.max(0, (vh - nextRect.top) / vh));
        }

        let finalCardScale = entryScale;
        let brightness = 1;
        let infosOpacity = 1;

        if (rect.top <= 10 && exitProgress > 0) {
          // Card is pinned at top and next card is rising to cover it
          finalCardScale = 1.0 - 0.06 * exitProgress;
          brightness = 1.0 - 0.15 * exitProgress;
          infosOpacity = Math.max(0, 1.0 - 1.25 * exitProgress);
        } else if (rect.top > 10) {
          // Entering card: fade in infos as it approaches center
          infosOpacity = Math.min(1, Math.max(0, (enterProgress - 0.35) / 0.65));
        }

        wrap.style.transform = `scale(${finalCardScale.toFixed(4)})`;
        wrap.style.filter = brightness < 0.99 ? `brightness(${brightness.toFixed(3)})` : "";

        if (img) {
          img.style.setProperty("--img-scroll-scale", entryImgScale.toFixed(4));
        }

        if (infos) {
          infos.style.opacity = infosOpacity.toFixed(3);
        }
      });
    };

    const onWorksScroll = () => {
      if (worksRafId !== null) return;
      worksRafId = window.requestAnimationFrame(() => {
        handleWorksScroll();
        worksRafId = null;
      });
    };

    if (workItems.length > 0) {
      window.addEventListener("scroll", onWorksScroll, { passive: true });
      window.addEventListener("resize", onWorksScroll, { passive: true });
      handleWorksScroll();
    }

    // ── 2. NAVBAR AUTO-HIDE ON SCROLL DOWN, REVEAL ON SCROLL UP
    let lastScrollY = window.scrollY;
    let ticking = false;
    const navbarContent = document.querySelector(".navbar_content") as HTMLElement | null;

    if (navbarContent) {
      navbarContent.style.transition = "transform 0.45s cubic-bezier(0.215, 0.61, 0.355, 1)";
    }

    const handleNavScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (navbarContent) {
            if (currentScrollY > 120 && currentScrollY > lastScrollY) {
              // Scrolling down
              navbarContent.style.transform = "translateY(-120%)";
            } else {
              // Scrolling up or at top
              navbarContent.style.transform = "translateY(0%)";
            }
          }
          lastScrollY = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleNavScroll, { passive: true });

    // ── 3. CHAT ANIMATION IN WHY CHOOSE US
    let chatObserver: IntersectionObserver | null = null;
    const chatContainer = document.querySelector(".home-grid_chat") as HTMLElement | null;
    if (chatContainer) {
      const msg1 = chatContainer.querySelector(".home-grid_chat-group._1") as HTMLElement | null;
      const msg2 = chatContainer.querySelector(".home-grid_chat-group._2") as HTMLElement | null;

      if (msg1) {
        msg1.style.opacity = "0";
        msg1.style.transform = "translateY(16px)";
        msg1.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      }
      if (msg2) {
        msg2.style.opacity = "0";
        msg2.style.transform = "translateY(16px)";
        msg2.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      }

      if ("IntersectionObserver" in window) {
        chatObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  if (msg1) {
                    msg1.style.opacity = "1";
                    msg1.style.transform = "translateY(0)";
                  }
                }, 200);
                setTimeout(() => {
                  if (msg2) {
                    msg2.style.opacity = "1";
                    msg2.style.transform = "translateY(0)";
                  }
                }, 900);
                chatObserver?.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        chatObserver.observe(chatContainer);
      }
    }

    // ── 4. LOTTIE ANIMATIONS LOADER
    const loadLotties = () => {
      const lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
      if (!lottieElements.length) return;

      interface LottieInstance {
        loadAnimation: (options: {
          container: Element;
          renderer: string;
          loop: boolean;
          autoplay: boolean;
          path: string;
        }) => void;
      }

      const runPlayer = (bodymovin: LottieInstance) => {
        lottieElements.forEach((el) => {
          if (el.querySelector("svg")) return;
          const src = el.getAttribute("data-src");
          if (!src) return;

          bodymovin.loadAnimation({
            container: el,
            renderer: el.getAttribute("data-renderer") || "svg",
            loop: el.getAttribute("data-loop") === "1",
            autoplay: el.getAttribute("data-autoplay") === "1",
            path: src,
          });
        });
      };

      const win = window as unknown as { bodymovin?: LottieInstance; lottie?: LottieInstance };
      if (win.bodymovin || win.lottie) {
        const instance = win.bodymovin || win.lottie;
        if (instance) runPlayer(instance);
      } else {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
        script.async = true;
        script.onload = () => {
          const loadedWin = window as unknown as { bodymovin?: LottieInstance; lottie?: LottieInstance };
          const bm = loadedWin.bodymovin || loadedWin.lottie;
          if (bm) runPlayer(bm);
        };
        document.head.appendChild(script);
      }
    };
    loadLotties();

    return () => {
      window.removeEventListener("scroll", onWorksScroll);
      window.removeEventListener("resize", onWorksScroll);
      if (worksRafId !== null) cancelAnimationFrame(worksRafId);
      window.removeEventListener("scroll", handleNavScroll);
      if (chatObserver) chatObserver.disconnect();
    };
  }, []);

  return null;
}
