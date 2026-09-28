"use client";

import { useEffect } from "react";

export default function CosmosInteractions() {
  useEffect(() => {
    // ── 0. INITIALIZE WEBFLOW RUNTIME IF AVAILABLE
    const tryInitWebflow = () => {
      const w = window as unknown as {
        Webflow?: {
          destroy?: () => void;
          ready?: () => void;
          require?: (name: string) => { init?: () => void; emit?: (evt: string) => void } | undefined;
        };
      };
      if (w.Webflow) {
        try {
          w.Webflow.destroy?.();
          w.Webflow.ready?.();
          w.Webflow.require?.("ix2")?.init?.();
          const wfIx = w.Webflow.require?.("ix3");
          if (wfIx?.emit) wfIx.emit("tabs");
        } catch {
          // ignore webflow reinit errors
        }
      }
    };
    tryInitWebflow();
    window.addEventListener("load", tryInitWebflow);

    // ── 1. SERVICES TAB SWITCHER (Tab 1 <-> Tab 2)
    const initTabs = () => {
      document.querySelectorAll(".w-tabs").forEach((tabGroup) => {
        const links = tabGroup.querySelectorAll(".w-tab-link");
        const panes = tabGroup.querySelectorAll(".w-tab-pane");

        links.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.getAttribute("data-w-tab");
            if (!tabId) return;

            links.forEach((l) => l.classList.remove("w--current"));
            link.classList.add("w--current");

            panes.forEach((pane) => {
              const p = pane as HTMLElement;
              if (p.getAttribute("data-w-tab") === tabId) {
                p.classList.add("w--tab-active");
                p.style.display = "block";
                p.style.opacity = "1";
              } else {
                p.classList.remove("w--tab-active");
                p.style.display = "none";
                p.style.opacity = "0";
              }
            });
          });
        });
      });
    };
    initTabs();

    // ── 2. WORKS SECTION SCROLL SCALE & 3D CARD STACKING EFFECT (cosmos.studio continuous interaction)
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

        // 1. Entrance animation (Webflow a-5 "Works item scale"):
        // rect.top starts at vh (bottom of viewport) and decreases to 0 (top of viewport where it sticks)
        const enterProgress = Math.min(1, Math.max(0, (vh - rect.top) / vh));
        const entryScale = 1.08 - 0.08 * enterProgress;
        const entryImgScale = 1.18 - 0.18 * enterProgress;

        // 2. Multi-card deck stacking (as subsequent cards scroll up over this pinned card):
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

    window.addEventListener("scroll", onWorksScroll, { passive: true });
    window.addEventListener("resize", onWorksScroll, { passive: true });
    handleWorksScroll();

    // ── 3. NAVBAR AUTO-HIDE ON SCROLL DOWN, REVEAL ON SCROLL UP
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

    // ── 4. CHAT ANIMATION IN WHY CHOOSE US (.home-grid_chat)
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
        const chatObserver = new IntersectionObserver(
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
                chatObserver.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        chatObserver.observe(chatContainer);
      }
    }

    // ── 5. LOTTIE ANIMATIONS LOADER
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
          if (el.querySelector("svg")) return; // already loaded
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

      const w = window as unknown as { bodymovin?: LottieInstance; lottie?: LottieInstance };
      if (w.bodymovin || w.lottie) {
        const instance = w.bodymovin || w.lottie;
        if (instance) runPlayer(instance);
      } else {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
        script.async = true;
        script.onload = () => {
          const win = window as unknown as { bodymovin?: LottieInstance; lottie?: LottieInstance };
          const bm = win.bodymovin || win.lottie;
          if (bm) runPlayer(bm);
        };
        document.head.appendChild(script);
      }
    };
    loadLotties();

    // ── 6. DANCING COSMONAUT VIDEO (.dance-vid in CtaSection)
    const danceVideo = document.querySelector(".dance-vid") as HTMLVideoElement | null;
    if (danceVideo) {
      const dances = [
        "cosmonaut-dance_Silly-Dance-2",
        "cosmonaut-dance_Silly-Dance",
        "cosmonaut-dance_Rumba",
        "cosmonaut-dance_Chicken-Dance",
      ];
      const dance = dances[Math.floor(Math.random() * dances.length)];
      const base = `https://video.cosmos.studio/${dance}`;
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      danceVideo.preload = "none";
      danceVideo.muted = true;
      danceVideo.playsInline = true;
      danceVideo.loop = true;

      let started = false;
      const startDance = () => {
        if (started) return;
        started = true;
        danceVideo.innerHTML = "";

        const webm = document.createElement("source");
        webm.src = `${base}.webm`;
        webm.type = "video/webm";

        const mov = document.createElement("source");
        mov.src = `${base}.mov`;
        mov.type = "video/quicktime";

        danceVideo.append(isSafari ? mov : webm, isSafari ? webm : mov);
        danceVideo.load();
        danceVideo.play().catch(() => {});
      };

      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                startDance();
                danceVideo.play().catch(() => {});
              } else if (started) {
                danceVideo.pause();
              }
            });
          },
          { rootMargin: "200px 0px" }
        );
        io.observe(danceVideo);
      } else {
        startDance();
      }
    }

    // ── 7. HERO & LAZYLOAD VIDEO CONTROLS
    document.querySelectorAll("[data-video]").forEach((wrap) => {
      const video = wrap.querySelector("video");
      const btn = wrap.querySelector(".play-pause") as HTMLButtonElement | null;
      if (!video || !btn) return;

      const pauseIcon = btn.querySelector('[data-state="play"]') as HTMLElement | null;
      const playIcon = btn.querySelector('[data-state="pause"]') as HTMLElement | null;
      btn.type = "button";

      const sync = () => {
        const playing = !video.paused && !video.ended;
        if (pauseIcon) pauseIcon.style.display = playing ? "" : "none";
        if (playIcon) playIcon.style.display = playing ? "none" : "";
        btn.setAttribute("aria-label", playing ? "Pause video" : "Play video");
        btn.setAttribute("aria-pressed", playing ? "false" : "true");
        wrap.setAttribute("data-video", playing ? "playing" : "paused");
      };

      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (video.paused || video.ended) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      };

      video.addEventListener("play", sync);
      video.addEventListener("pause", sync);
      video.addEventListener("ended", sync);
      sync();
    });

    // ── 8. MOBILE NAVBAR IS HANDLED NATIVELY WITH REACT STATE IN Navbar.tsx

    // ── 9. NAVBAR ROTATING LOGO TEXT
    const animTexts = document.querySelectorAll(".navbar_logo-anim_text");
    let currentTextIdx = 0;
    let textInterval: ReturnType<typeof setInterval> | null = null;
    if (animTexts.length > 1) {
      animTexts.forEach((el, i) => {
        const h = el as HTMLElement;
        h.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        if (i === 0) {
          h.style.opacity = "1";
          h.style.transform = "translateY(0)";
        } else {
          h.style.opacity = "0";
          h.style.transform = "translateY(100%)";
        }
      });

      textInterval = setInterval(() => {
        const prev = animTexts[currentTextIdx] as HTMLElement;
        currentTextIdx = (currentTextIdx + 1) % animTexts.length;
        const next = animTexts[currentTextIdx] as HTMLElement;

        if (prev) {
          prev.style.opacity = "0";
          prev.style.transform = "translateY(-100%)";
        }
        if (next) {
          next.style.transform = "translateY(100%)";
          setTimeout(() => {
            next.style.opacity = "1";
            next.style.transform = "translateY(0)";
          }, 50);
        }
      }, 3000);
    }

    // ── 10. SCROLL TO TOP BUTTON
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    return () => {
      window.removeEventListener("scroll", onWorksScroll);
      window.removeEventListener("resize", onWorksScroll);
      if (worksRafId !== null) cancelAnimationFrame(worksRafId);
      window.removeEventListener("scroll", handleNavScroll);
      if (textInterval) clearInterval(textInterval);
    };
  }, []);

  return null;
}
