"use client";

import { useEffect } from "react";

export default function CosmosInteractions() {
  useEffect(() => {
    // 0. INITIALIZE WEBFLOW RUNTIME IF AVAILABLE
    const tryInitWebflow = () => {
      const w = window as any;
      if (w.Webflow) {
        try {
          w.Webflow.destroy?.();
          w.Webflow.ready?.();
          w.Webflow.require?.("ix2")?.init();
          const wfIx = w.Webflow.require?.("ix3");
          if (wfIx) wfIx.emit("tabs");
        } catch (e) {
          // ignore webflow reinit errors
        }
      }
    };
    tryInitWebflow();
    window.addEventListener("load", tryInitWebflow);

    // 1. SERVICES TAB SWITCHER (Services <-> Industries)
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

    // 2. WORKS CARDS SCROLL PARALLAX & STACKING — NEW STRUCTURE
    const stackCards = document.querySelectorAll(".works-stack__item");
    const projects = [
      { milestone: "National Pride", sector: "Mega Infrastructure & Engineering" },
      { milestone: "Smart Urban Transit", sector: "Urban Planning & Modern Mobility" },
      { milestone: "Global Aviation Gateway", sector: "Aviation, Tourism & Global Logistics" },
      { milestone: "South Asia's 1st Underwater Tunnel", sector: "Engineering Innovation & Connectivity" },
      { milestone: "Nuclear Energy Era", sector: "Clean Energy & Sustainable Power" },
      { milestone: "Maritime Economic Engine", sector: "Deep Sea Port & Export Logistics" },
    ];

    const milestoneEl = document.querySelector('[data-works-meta="milestone"]') as HTMLElement | null;
    const sectorEl = document.querySelector('[data-works-meta="sector"]') as HTMLElement | null;
    let currentActiveIdx = 0;

    const updateMeta = (idx: number) => {
      if (idx === currentActiveIdx || idx < 0 || idx >= projects.length) return;
      currentActiveIdx = idx;

      const data = projects[idx];
      if (milestoneEl) {
        milestoneEl.classList.add("is-leaving");
        setTimeout(() => {
          milestoneEl.textContent = data.milestone;
          milestoneEl.classList.remove("is-leaving");
          milestoneEl.classList.add("is-entering");
          setTimeout(() => milestoneEl.classList.remove("is-entering"), 50);
        }, 200);
      }
      if (sectorEl) {
        sectorEl.classList.add("is-leaving");
        setTimeout(() => {
          sectorEl.textContent = data.sector;
          sectorEl.classList.remove("is-leaving");
          sectorEl.classList.add("is-entering");
          setTimeout(() => sectorEl.classList.remove("is-entering"), 50);
        }, 200);
      }
    };

    const handleScroll = () => {
      stackCards.forEach((item, idx) => {
        const cardEl = item.querySelector(".works-card") as HTMLElement | null;
        if (!cardEl) return;

        const rect = item.getBoundingClientRect();
        const vh = window.innerHeight;
        const cardTop = rect.top;

        // Determine active card for meta update
        if (cardTop < vh * 0.5 && cardTop > -rect.height * 0.3) {
          updateMeta(idx);
        }

        // Scale & brightness effect as next card scrolls in
        if (idx < stackCards.length - 1) {
          const nextCard = stackCards[idx + 1];
          const nextRect = nextCard.getBoundingClientRect();

          if (nextRect.top < vh && nextRect.top > 0) {
            const progress = 1 - nextRect.top / vh;
            const scale = 1 - progress * 0.05;
            const brightness = 1 - progress * 0.12;
            cardEl.style.transform = `scale(${scale})`;
            cardEl.style.filter = `brightness(${brightness})`;
          } else if (nextRect.top <= 0) {
            cardEl.style.transform = "scale(0.95)";
            cardEl.style.filter = "brightness(0.88)";
          } else {
            cardEl.style.transform = "scale(1)";
            cardEl.style.filter = "brightness(1)";
          }
        } else {
          cardEl.style.transform = "scale(1)";
          cardEl.style.filter = "brightness(1)";
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 3. STARFIELD CANVAS ANIMATION (#space)
    let rafId: number | null = null;
    const cv = document.getElementById("space") as HTMLCanvasElement | null;

    if (cv && typeof cv.getContext === "function") {
      const x = cv.getContext("2d");
      if (x) {
        const SPEED = 0.00005;
        const r = (a: number, b: number) => a + Math.random() * (b - a);

        let W = 0,
          H = 0,
          cx = 0,
          cy = 0,
          D = 1,
          F = 0,
          N = 0,
          last = performance.now();

        interface Star {
          x: number;
          y: number;
          z: number;
          px: number;
          py: number;
          fresh: boolean;
        }

        let stars: Star[] = [];

        const resetStar = (s: Star) => {
          s.x = r(-1, 1);
          s.y = r(-1, 1);
          s.z = 1;
          s.fresh = true;
        };

        const projectStar = (s: Star) => {
          const k = F / s.z;
          s.px = cx + s.x * k;
          s.py = cy + s.y * k;
        };

        const build = () => {
          D = Math.min(window.devicePixelRatio || 1, 2);
          W = cv.clientWidth || window.innerWidth;
          H = cv.clientHeight || window.innerHeight;
          cx = W / 2;
          cy = H / 2;
          F = cx * 0.7;
          cv.width = W * D;
          cv.height = H * D;
          x.setTransform(D, 0, 0, D, 0, 0);
          N = Math.min(Math.round(W * H * 0.0004), 700);
          stars = [];
          for (let i = 0; i < N; i++) {
            const s: Star = { x: 0, y: 0, z: 0, px: 0, py: 0, fresh: true };
            resetStar(s);
            s.z = r(0.05, 1);
            projectStar(s);
            stars.push(s);
          }
        };

        const frame = (t: number) => {
          const dt = Math.min(t - last, 50);
          last = t;
          x.clearRect(0, 0, W, H);
          x.fillStyle = "#fff";
          x.strokeStyle = "#fff";

          for (let i = 0; i < N; i++) {
            const s = stars[i];
            s.z -= dt * SPEED;
            if (s.z < 0.02) {
              resetStar(s);
              projectStar(s);
              continue;
            }
            const ox = s.px,
              oy = s.py;
            projectStar(s);
            if (s.px < -50 || s.px > W + 50 || s.py < -50 || s.py > H + 50) {
              resetStar(s);
              projectStar(s);
              continue;
            }
            const d = 1 - s.z;
            const a = Math.min(d * 1.1, 1);
            const w = 0.4 + d * 1.8;
            x.globalAlpha = a;
            if (s.fresh) {
              s.fresh = false;
            } else if (d > 0.55) {
              x.lineWidth = w;
              x.beginPath();
              x.moveTo(ox, oy);
              x.lineTo(s.px, s.py);
              x.stroke();
            }
            x.beginPath();
            x.arc(s.px, s.py, w * 0.6, 0, 6.2832);
            x.fill();
          }
          rafId = requestAnimationFrame(frame);
        };

        build();
        last = performance.now();
        rafId = requestAnimationFrame(frame);

        const handleResize = () => build();
        const handleVisibility = () => {
          if (document.hidden) {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
          } else {
            if (!rafId) {
              last = performance.now();
              rafId = requestAnimationFrame(frame);
            }
          }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);
      }
    }

    // 4. LIVE WORLD CLOCKS (Dhaka, Kyiv, London, New York, Dubai)
    const cities: Record<string, string> = {
      dhaka: "Asia/Dhaka",
      london: "Europe/London",
      newyork: "America/New_York",
      kyiv: "Europe/Kyiv",
      dubai: "Asia/Dubai",
    };

    const updateClocks = () => {
      const now = new Date();
      for (const [city, timeZone] of Object.entries(cities)) {
        const cards = document.querySelectorAll(`[data-time="${city}"]`);
        cards.forEach((card) => {
          try {
            const parts = new Intl.DateTimeFormat("en-US", {
              timeZone,
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }).formatToParts(now);

            const hour = parts.find((p) => p.type === "hour")?.value || "";
            const minute = parts.find((p) => p.type === "minute")?.value || "";
            const period = parts.find((p) => p.type === "dayPeriod")?.value || "";

            const timeEl = card.querySelector(".time");
            const timePmEl = card.querySelector(".time-pm");
            const dateEl = card.querySelector(".date");

            if (timeEl) timeEl.textContent = `${hour}:${minute}`;
            if (timePmEl) timePmEl.textContent = period.toLowerCase();
            if (dateEl) {
              dateEl.textContent = new Intl.DateTimeFormat("en-US", {
                timeZone,
                weekday: "long",
                month: "long",
                day: "numeric",
              }).format(now);
            }
          } catch (e) {
            // ignore
          }
        });
      }
    };
    updateClocks();
    const clockInterval = setInterval(updateClocks, 1000);

    // 5. SERVICES COUNTER
    document.querySelectorAll("[data-count]").forEach((countEl) => {
      const key = countEl.getAttribute("data-count");
      if (!key) return;
      const list = document.querySelector(`[data-items="${key}"]`);
      if (list) {
        countEl.textContent = `(${list.children.length})`;
      }
    });

    // 6. RANDOM DANCING COSMONAUT VIDEO
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
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startDance();
              danceVideo.play().catch(() => {});
            } else if (started) {
              danceVideo.pause();
            }
          });
        }, { rootMargin: "200px 0px" });
        io.observe(danceVideo);
      } else {
        startDance();
      }
    }

    // 7. HERO & CUSTOM VIDEO CONTROLS
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

    // 8. BACKGROUND VIDEO TOGGLE BUTTONS
    document.querySelectorAll("[data-w-bg-video-control]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.getAttribute("aria-controls");
        if (!id) return;
        const video = document.getElementById(id) as HTMLVideoElement | null;
        if (!video) return;
        const spans = btn.querySelectorAll("span");
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
        if (spans[0]) spans[0].hidden = video.paused;
        if (spans[1]) spans[1].hidden = !video.paused;
      });
    });

    // 9. MOBILE NAVBAR TOGGLE & CLOSE
    const menuToggle = document.querySelector(".navbar_menu-open") as HTMLElement | null;
    const menuDrawer = document.getElementById("mobile-menu");
    const menuBg = document.querySelector(".menu_bg") as HTMLElement | null;
    const menuCloseBtn = document.querySelector(".menu_close") as HTMLElement | null;

    const setMenuOpen = (open: boolean) => {
      if (menuToggle) {
        menuToggle.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      }
      if (menuDrawer) {
        menuDrawer.classList.toggle("is-open", open);
      }
      if (menuBg) {
        menuBg.classList.toggle("is-open", open);
      }
      document.body.style.overflow = open ? "hidden" : "";
    };

    if (menuToggle) {
      menuToggle.onclick = (e) => {
        e.preventDefault();
        const willOpen = !menuDrawer?.classList.contains("is-open");
        setMenuOpen(willOpen);
      };
    }

    if (menuCloseBtn) {
      menuCloseBtn.onclick = (e) => {
        e.preventDefault();
        setMenuOpen(false);
      };
    }

    if (menuBg) {
      menuBg.onclick = () => {
        setMenuOpen(false);
      };
    }

    // Auto close mobile menu when clicking any nav link
    if (menuDrawer) {
      menuDrawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          setMenuOpen(false);
        });
      });
    }

    // Dropdown toggle on click for mobile and touch devices
    document.querySelectorAll(".w-dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        const parent = toggle.closest(".w-dropdown");
        if (parent) {
          parent.classList.toggle("w--open");
        }
      });
    });

    // 10. NAVBAR ROTATING LOGO TEXT
    const animTexts = document.querySelectorAll(".navbar_logo-anim_text");
    let currentTextIdx = 0;
    let textInterval: any = null;
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

    // 11. SCROLL TO TOP
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // 12. SERVICES SECTION TAB SWITCHER (new structure)
    const serviceTabs = document.querySelectorAll("[data-services-tab]");
    const servicePanes = document.querySelectorAll("[data-services-pane]");

    serviceTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const paneId = tab.getAttribute("data-services-tab");
        if (!paneId) return;

        // Update tabs
        serviceTabs.forEach((t) => {
          t.classList.remove("services-tab--active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("services-tab--active");
        tab.setAttribute("aria-selected", "true");

        // Update panes
        servicePanes.forEach((pane) => {
          const pid = pane.getAttribute("data-services-pane");
          if (pid === paneId) {
            pane.classList.add("services-pane--active");
          } else {
            pane.classList.remove("services-pane--active");
          }
        });
      });
    });


    return () => {
      clearInterval(clockInterval);
      if (textInterval) clearInterval(textInterval);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
