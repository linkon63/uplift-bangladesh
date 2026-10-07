import React from "react";
import type { Metadata } from "next";
import LegalPageLayout, { TocItem, HighlightItem } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use | Uplift Bangladesh — Official Legal Terms & Conditions",
  description:
    "Read the official Terms of Use for Uplift Bangladesh. Review copyright rules, documentary video licensing, sponsorship agreements, intellectual property guidelines, and governing law.",
  openGraph: {
    title: "Terms of Use | Uplift Bangladesh",
    description:
      "Official Terms of Use and Licensing Policy of Uplift Bangladesh. Intellectual property, brand sponsorship terms, documentary rights, and acceptable use.",
    url: "https://upliftbangladesh.com/legal/terms-of-use",
    siteName: "Uplift Bangladesh",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://upliftbangladesh.com/legal/terms-of-use",
  },
};

const TOC: TocItem[] = [
  { id: "agreement-mission", title: "1. Agreement & Platform Mission", badge: "Agreement", summary: "Binding contractual relationship and platform scope", keywords: ["accept", "terms", "agreement", "binding", "contract", "mission"] },
  { id: "intellectual-property", title: "2. Copyright & AI Training Ban", badge: "IP Rights", summary: "Proprietary 4K/8K footage, drone master reels, and AI model training ban", keywords: ["copyright", "ai", "drone", "footage", "scraping", "video", "intellectual property"] },
  { id: "permitted-use", title: "3. Permitted Social & Press Use", badge: "Licensing", summary: "Social embeds, educational screenings, and press citations", keywords: ["fair use", "attribution", "social", "embed", "education", "press"] },
  { id: "sponsorship-rules", title: "4. Brand Sponsorships & Commercials", badge: "Commercial", summary: "Corporate partnerships, invoices, VAT/tax, and editorial integrity", keywords: ["sponsorship", "commercial", "invoicing", "vat", "tax", "partner"] },
  { id: "filming-conduct", title: "5. Filming Protocols & Conduct", badge: "Rules", summary: "CAAB drone rules, on-site safety, and anti-scraping bans", keywords: ["safety", "ohs", "drone", "caab", "prohibited", "ddos"] },
  { id: "governing-law-contact", title: "6. Governing Law & Legal Desk", badge: "Jurisdiction", summary: "Bangladesh law, Dhaka jurisdiction, Softzino credits, and contact", keywords: ["governing law", "bangladesh", "dhaka", "softzino", "contact"] },
];

const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Proprietary Copyright",
    description: "All documentaries, 4K/8K master footage, aerial drone reels, sound designs, and brand marks are copyrighted by Uplift Bangladesh™.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
      </svg>
    ),
  },
  {
    title: "AI & Scraping Ban",
    description: "Automated scraping and using our footage or transcripts to train AI/ML models is strictly prohibited without written consent.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    title: "Editorial Independence",
    description: "Brand sponsors receive premium storytelling while our factual documentary narratives maintain strict journalistic truth.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Bangladesh Jurisdiction",
    description: "All agreements, production contracts, and platform usage are governed under the laws of the People's Republic of Bangladesh.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout
      documentTitle="Terms of Use"
      documentSubtitle="These official Terms of Use constitute a binding agreement between you and Uplift Bangladesh governing your access to our documentary media, video broadcasts, and commercial services."
      documentType="terms"
      lastUpdated="October 7, 2026"
      effectiveDate="January 1, 2026"
      version="2.4"
      readingTime="3 min read"
      toc={TOC}
      highlights={HIGHLIGHTS}
    >
      <section id="agreement-mission" className="scroll-mt-28 space-y-3.5 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            1. Agreement to Terms &amp; Platform Mission
          </h2>
        </div>
        <p className="leading-relaxed">
          By accessing <a href="https://upliftbangladesh.com" className="text-red-400 hover:text-red-300 underline font-semibold cursor-pointer">upliftbangladesh.com</a>, submitting production inquiries, or streaming our media, you enter into a legally binding agreement with <strong className="text-white">Uplift Bangladesh™</strong>. Our platform chronicles Bangladesh&rsquo;s defining nation-building projects (Padma Bridge, Dhaka Metro Rail, Bangabandhu Tunnel, Deep Sea Ports, Rooppur Nuclear Plant, and Aviation Terminal 3). If you do not agree with these terms, please discontinue use immediately.
        </p>
      </section>

      <section id="intellectual-property" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            2. Proprietary Copyright &amp; AI Scraping Ban
          </h2>
        </div>
        <p className="leading-relaxed">
          All documentary films, raw master footage (4K/6K/8K Cinema RAW), aerial drone cinematography, original sound design, scores, articles, and trademarks are the exclusive intellectual property of <strong className="text-white">Uplift Bangladesh™</strong>, protected under the <em>Copyright Act 2000 (Bangladesh)</em>, the <em>Trademarks Act 2009</em>, and international copyright conventions (Berne Convention):
        </p>

        <div className="p-4 bg-zinc-900/80 border border-red-500/30 rounded-xl space-y-2">
          <div className="font-bold text-red-400 flex items-center gap-2 uppercase text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500" /> Strictly Prohibited Infringements:
          </div>
          <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <li>No unauthorized ripping, downloading, re-uploading, mirroring, or TV broadcasting of our video productions.</li>
            <li>No scraping, web-crawling, or utilizing our video frames, audio tracks, or transcripts to train Artificial Intelligence (AI) or Large Language Models (LLMs) without written contractual licensing.</li>
            <li>No commercial reselling, syndication, or sublicensing of raw clips, soundscapes, or still frames.</li>
          </ul>
        </div>
      </section>

      <section id="permitted-use" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            3. Permitted Personal, Social &amp; Press Use
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <li><strong className="text-white">Social Sharing:</strong> You are welcome to embed official YouTube links and share our URLs across social media, provided clear credit to &ldquo;Uplift Bangladesh&rdquo; and direct source links are preserved.</li>
          <li><strong className="text-white">Educational Screenings:</strong> Non-commercial screening in university lectures, classrooms, or diplomatic forums is permitted with verbal and visual attribution.</li>
          <li><strong className="text-white">Press Excerpts:</strong> Journalists and media houses may quote brief clips (up to 15 seconds) or transcript excerpts under fair-dealing doctrines with proper citation.</li>
        </ul>
      </section>

      <section id="sponsorship-rules" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            04
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            4. Brand Sponsorships &amp; Commercial Terms
          </h2>
        </div>
        <p className="leading-relaxed">
          Corporate entities collaborating with Uplift Bangladesh (Title Sponsors, Series Underwriters, Segment Partners, Commissioned Documentary Clients) enter into bilateral Master Services Agreements (MSA):
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>💼</span> Deliverables
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Shooting milestones, delivery schedules, brand integration placements, and revisions are governed by the executed agreement.</p>
          </div>
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>🧾</span> Invoicing &amp; Tax
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Invoices in BDT or USD, subject to statutory Value Added Tax (VAT) and Tax Deducted at Source (TDS) under NBR guidelines.</p>
          </div>
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>🎯</span> Editorial Truth
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Sponsorships elevate brand visibility while our storytelling maintains uncompromising journalistic accuracy and engineering facts.</p>
          </div>
        </div>
      </section>

      <section id="filming-conduct" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            05
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            5. Filming Protocols &amp; Acceptable User Conduct
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <li><strong className="text-white">Safety &amp; CAAB Drone Authorizations:</strong> Film crews operate in compliance with CAAB aerial drone authorizations, bilateral NDAs, and full Occupational Health and Safety (OHS) PPE requirements.</li>
          <li><strong className="text-white">Platform Security &amp; Anti-Abuse:</strong> Users agree not to launch DDoS attacks, inject malicious scripts, scrape form endpoints, or falsely claim affiliation with Uplift Bangladesh crews.</li>
          <li><strong className="text-white">Project Disclaimers:</strong> Budget figures and project completion milestones reflect publicly verified data released by responsible government agencies at the time of filming.</li>
        </ul>
      </section>

      <section id="governing-law-contact" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            06
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            6. Governing Law, Technical Platform &amp; Legal Desk
          </h2>
        </div>
        <p className="leading-relaxed text-xs sm:text-sm text-zinc-300">
          These Terms of Use shall be governed by and construed in accordance with the substantive laws of the <strong className="text-white">People&rsquo;s Republic of Bangladesh</strong>. Any disputes shall be settled via binding arbitration in Dhaka under the <em>Arbitration Act 2001</em>. Technical architecture, interactive software, and web development are powered by <a href="https://www.softzino.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline font-semibold cursor-pointer">Softzino Technologies</a>.
        </p>

        <div className="p-4 bg-zinc-900/80 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div>
            <strong className="text-white block font-bold mb-0.5">Licensing &amp; Legal Notices:</strong>
            <span className="text-zinc-400">
              Email: <a href="mailto:upliftbd.media@gmail.com" className="text-red-400 hover:text-red-300 underline font-semibold cursor-pointer">upliftbd.media@gmail.com</a> &bull; Bashundhara R/A, Dhaka-1229
            </span>
          </div>
          <a
            href="mailto:upliftbd.media@gmail.com?subject=Licensing%20Inquiry"
            className="shrink-0 px-3.5 py-1.5 bg-[#EE3028] hover:bg-[#d4251e] text-white font-bold rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
          >
            Email Legal Secretariat
          </a>
        </div>
      </section>
    </LegalPageLayout>
  );
}
