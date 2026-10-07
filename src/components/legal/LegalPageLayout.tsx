"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface TocItem {
  id: string;
  title: string;
  badge?: string;
  summary?: string;
  keywords?: string[];
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface LegalPageLayoutProps {
  documentTitle: string;
  documentSubtitle: string;
  documentType: "privacy" | "terms";
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  readingTime: string;
  toc: TocItem[];
  highlights: HighlightItem[];
  children: React.ReactNode;
}

export default function LegalPageLayout({
  documentTitle,
  documentSubtitle,
  documentType,
  lastUpdated,
  effectiveDate,
  version,
  readingTime,
  toc,
  highlights,
  children,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(toc[0]?.id || "");
  const [copiedLink, setCopiedLink] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [documentType]);

  useEffect(() => {
    let progressRafId: number | null = null;
    const updateProgress = () => {
      if (progressRafId !== null) return;
      progressRafId = window.requestAnimationFrame(() => {
        progressRafId = null;
        if (!progressBarRef.current) return;
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          const currentProgress = (window.scrollY / totalScroll) * 100;
          progressBarRef.current.style.width = `${Math.min(100, Math.max(0, currentProgress))}%`;
        }
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (progressRafId !== null) cancelAnimationFrame(progressRafId);
    };
  }, []);

  useEffect(() => {
    let spyRafId: number | null = null;
    const handleScrollSpy = () => {
      if (spyRafId !== null) return;
      spyRafId = window.requestAnimationFrame(() => {
        spyRafId = null;
        const offset = 130;
        let currentId = toc[0]?.id || "";

        for (let i = 0; i < toc.length; i++) {
          const el = document.getElementById(toc[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= offset) {
              currentId = toc[i].id;
            }
          }
        }

        setActiveSection((prev) => (prev !== currentId ? currentId : prev));
      });
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      if (spyRafId !== null) cancelAnimationFrame(spyRafId);
    };
  }, [toc]);

  const filteredToc = useMemo(() => {
    if (!searchQuery.trim()) return toc;
    const q = searchQuery.toLowerCase();
    return toc.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary?.toLowerCase().includes(q) ||
        item.badge?.toLowerCase().includes(q) ||
        item.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [toc, searchQuery]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -95;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopyPageLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const fontSizeClass = fontSize === "large" 
    ? "text-[16px] sm:text-[17px] leading-[1.85]" 
    : "text-[14px] sm:text-[15px] leading-[1.78]";

  return (
    <div className="bg-[#07080a] text-zinc-200 min-h-screen font-sans selection:bg-[#EE3028]/30 selection:text-white relative">
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900/90 z-[100] print:hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#EE3028] via-[#ff574d] to-[#EE3028] transition-[width] duration-75 ease-out"
          style={{ width: "0%" }}
        />
      </div>

      <Navbar />

      <main className="pt-28 pb-16 sm:pt-36 sm:pb-24 relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(238,48,40,0.12)_0%,rgba(238,48,40,0.02)_50%,transparent_80%)] opacity-80" />
          <div className="absolute top-36 -left-32 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute top-64 -right-32 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Home</span>
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">Legal</span>
              <span className="text-zinc-600">/</span>
              <span className="text-red-400 font-semibold">{documentTitle}</span>
            </nav>

            <div className="inline-flex p-1 bg-zinc-900/90 border border-white/10 rounded-xl backdrop-blur-md shadow-lg self-start md:self-auto">
              <Link
                href="/legal/privacy-policy"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                  documentType === "privacy"
                    ? "bg-[#EE3028] text-white shadow-lg shadow-red-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/legal/terms-of-use"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                  documentType === "terms"
                    ? "bg-[#EE3028] text-white shadow-lg shadow-red-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Terms of Use</span>
              </Link>
            </div>
          </div>

          <div className="mb-8 bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-9 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/30 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Official Legal Document
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-white/10">
                Version {version}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-400 border border-white/10 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {readingTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              {documentTitle}
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed mb-5">
              {documentSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-400 pt-3.5 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <strong className="text-zinc-300">Last Updated:</strong> {lastUpdated}
              </div>
              <div className="flex items-center gap-1.5">
                <strong className="text-zinc-300">Effective:</strong> {effectiveDate}
              </div>
              <div className="flex items-center gap-1.5">
                <strong className="text-zinc-300">Publisher:</strong> Uplift Bangladesh™
              </div>
              <div className="flex items-center gap-1.5">
                <strong className="text-zinc-300">Jurisdiction:</strong> Bangladesh &amp; International Law
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EE3028]" />
              Key Highlights at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/60 border border-white/10 rounded-xl p-4 hover:border-red-500/40 hover:bg-zinc-900/80 transition-all shadow-sm hover:shadow-red-500/5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:bg-[#EE3028] group-hover:text-white transition-all border border-red-500/20">
                    {hl.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-1">{hl.title}</h3>
                  <p className="text-[12px] text-zinc-400 leading-relaxed">{hl.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mb-8 p-3 bg-[#0c0d10] border border-white/10 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 sticky top-20 z-30"
            style={{ transform: "translate3d(0, 0, 0)", backfaceVisibility: "hidden" }}
          >
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search clauses (cookies, AI, drone)..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-zinc-800/80 border border-white/10 rounded-lg focus:outline-none focus:border-[#EE3028] focus:bg-zinc-800 transition-all text-zinc-100 placeholder-zinc-500"
              />
              <svg
                className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
                  title="Clear search"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
              <div className="flex items-center bg-zinc-800/80 p-0.5 rounded-lg border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setFontSize("normal")}
                  className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                    fontSize === "normal" ? "bg-white/10 text-white shadow-xs" : "text-zinc-400 hover:text-white"
                  }`}
                  title="Standard text"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize("large")}
                  className={`px-2 py-0.5 rounded-md font-semibold text-xs transition-all cursor-pointer ${
                    fontSize === "large" ? "bg-white/10 text-white shadow-xs" : "text-zinc-400 hover:text-white"
                  }`}
                  title="Large text"
                >
                  A+
                </button>
              </div>

              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1 text-xs font-semibold text-zinc-300 bg-zinc-800/80 border border-white/10 rounded-lg hover:bg-zinc-700/80 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                title="Print or export as PDF"
              >
                <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={handleCopyPageLink}
                className="px-3 py-1 text-xs font-semibold text-zinc-300 bg-zinc-800/80 border border-white/10 rounded-lg hover:bg-zinc-700/80 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                title="Copy link"
              >
                {copiedLink ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span>Share</span>
                  </>
                )}
              </button>

              <a
                href="mailto:upliftbd.media@gmail.com?subject=Legal%20Inquiry%20-%20Uplift%20Bangladesh"
                className="px-3 py-1 text-xs font-semibold text-white bg-[#EE3028] hover:bg-[#d4251e] rounded-lg transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Legal Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:hidden mb-6">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-xl text-xs font-semibold text-zinc-200 shadow-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#EE3028]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                </svg>
                Table of Contents ({filteredToc.length} Clauses)
              </span>
              <svg
                className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${mobileTocOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {mobileTocOpen && (
              <div className="mt-2 p-2.5 bg-zinc-900/98 border border-white/10 rounded-xl shadow-2xl max-h-72 overflow-y-auto space-y-1 backdrop-blur-2xl">
                {filteredToc.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between border cursor-pointer ${
                        isActive
                          ? "bg-red-500/15 text-red-400 border-red-500/30 font-semibold"
                          : "text-zinc-400 hover:text-white hover:bg-white/5 border-transparent"
                      }`}
                    >
                      <span className="truncate">{item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 ml-2 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            <aside
              className="hidden lg:block lg:col-span-4 sticky top-36 self-start z-20 will-change-transform"
              style={{ transform: "translate3d(0, 0, 0)", backfaceVisibility: "hidden" }}
            >
              <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl relative">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-200 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#EE3028]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                    </svg>
                    Table of Contents
                  </h3>
                  <span className="text-[10px] text-zinc-400 font-mono bg-zinc-800 px-2 py-0.5 rounded-full font-bold">
                    {filteredToc.length} clauses
                  </span>
                </div>

                <nav className="space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1 custom-scrollbar">
                  {filteredToc.length === 0 ? (
                    <div className="p-3 text-center text-xs text-zinc-500">
                      No matches found
                    </div>
                  ) : (
                    filteredToc.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors duration-150 relative border cursor-pointer ${
                            isActive
                              ? "bg-red-500/10 text-red-400 border-red-500/30 font-medium"
                              : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-transparent font-normal"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-150 ${
                                isActive ? "bg-[#EE3028]" : "bg-transparent group-hover:bg-zinc-600"
                              }`}
                            />
                            <span className="truncate">{item.title}</span>
                          </div>
                          {item.badge && (
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 transition-colors ${
                                isActive
                                  ? "bg-red-500/20 text-red-300 font-semibold"
                                  : "bg-zinc-800/80 text-zinc-500 group-hover:text-zinc-400"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </a>
                      );
                    })
                  )}
                </nav>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400 flex items-center justify-between">
                  <span>Need help?</span>
                  <a
                    href="mailto:upliftbd.media@gmail.com"
                    className="font-bold text-red-400 hover:underline cursor-pointer"
                  >
                    Email Legal Team &rarr;
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-6">
              <div className={`legal-prose ${fontSizeClass} text-zinc-300 space-y-8`}>
                {children}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-white/10 text-white rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Need legal clarification or licensing details?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Reach out to Uplift Bangladesh&rsquo;s legal desk for media licensing, filming clearances, or data inquiries.
                    </p>
                  </div>
                  <a
                    href="mailto:upliftbd.media@gmail.com"
                    className="shrink-0 px-4 py-2.5 rounded-xl bg-[#EE3028] hover:bg-[#d4251e] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-red-500/20 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Contact Legal Desk</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:upliftbd.media@gmail.com" className="text-zinc-300 hover:text-white underline cursor-pointer">
                      upliftbd.media@gmail.com
                    </a>
                  </div>
                  <div>
                    <strong>Tech Partner:</strong>{" "}
                    <a
                      href="https://www.softzino.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-red-400 underline cursor-pointer"
                    >
                      Softzino Technologies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
