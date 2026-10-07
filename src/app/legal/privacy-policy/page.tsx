import React from "react";
import type { Metadata } from "next";
import LegalPageLayout, { TocItem, HighlightItem } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Uplift Bangladesh — Official Legal Document",
  description:
    "Read the official Privacy Policy of Uplift Bangladesh. Learn how we collect, use, protect, and handle personal data, media participant releases, cookies, and production data.",
  openGraph: {
    title: "Privacy Policy | Uplift Bangladesh",
    description:
      "Official Privacy Policy of Uplift Bangladesh. Transparent guidelines on data privacy, video filming consent, cookies, and user rights.",
    url: "https://upliftbangladesh.com/legal/privacy-policy",
    siteName: "Uplift Bangladesh",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://upliftbangladesh.com/legal/privacy-policy",
  },
};

const TOC: TocItem[] = [
  { id: "overview", title: "1. Overview & Data Controller", badge: "Scope", summary: "Our core privacy commitments, entity details, and platform scope", keywords: ["overview", "controller", "softzino", "headquarters", "dhaka"] },
  { id: "data-collected", title: "2. Information We Collect", badge: "Data", summary: "Contact inquiries, filming releases, and technical telemetry", keywords: ["collect", "form", "phone", "email", "drone", "filming"] },
  { id: "data-usage-security", title: "3. Usage, Security & Zero-Sale Policy", badge: "Protection", summary: "No data sale, TLS 1.3 encryption, and lawful basis", keywords: ["usage", "security", "no sale", "encryption", "legal basis"] },
  { id: "filming-releases", title: "4. Filming & CAAB Drone Clearances", badge: "Filming", summary: "On-camera contributor consent, CAAB drone rules, and infrastructure safety", keywords: ["filming", "drone", "caab", "infrastructure", "release", "padma bridge"] },
  { id: "cookies-analytics", title: "5. Cookies & YouTube Embeds", badge: "Cookies", summary: "Functional cookies, Vercel analytics, and embedded video players", keywords: ["cookies", "youtube", "analytics", "tracking", "google"] },
  { id: "your-rights-contact", title: "6. Your Rights & Legal Helpdesk", badge: "Your Rights", summary: "Right to access, rectify, delete, and email support", keywords: ["rights", "access", "erasure", "rectify", "contact", "support"] },
];

const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Zero Data Sale",
    description: "We never monetize, rent, or sell your personal information or business inquiries to any third party.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Filming & Drone Consents",
    description: "All on-camera interviews and aerial drone videography are executed with official clearances under CAAB regulations.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "TLS 1.3 Encryption",
    description: "All web interactions, contact payloads, and data transfers are protected by modern 256-bit SSL/TLS encryption.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Full Rights Autonomy",
    description: "Easily inspect, rectify, or request permanent deletion of your data at any time via a quick email.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
      </svg>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      documentTitle="Privacy Policy"
      documentSubtitle="This official Privacy Policy outlines how Uplift Bangladesh collects, safeguards, and respects your data across our documentary filmmaking platform, sponsorship portal, and digital media channels."
      documentType="privacy"
      lastUpdated="October 7, 2026"
      effectiveDate="January 1, 2026"
      version="2.4"
      readingTime="3 min read"
      toc={TOC}
      highlights={HIGHLIGHTS}
    >
      <section id="overview" className="scroll-mt-28 space-y-3.5 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            1. Overview &amp; Data Controller Details
          </h2>
        </div>
        <p className="leading-relaxed">
          <strong className="text-white">Uplift Bangladesh™</strong> is Bangladesh&rsquo;s leading development documentary and narrative media platform, dedicated to documenting national mega-infrastructure, engineering milestones, industrial zones, and technological modernization. This Privacy Policy governs your use of <a href="https://upliftbangladesh.com" className="text-red-400 hover:text-red-300 underline font-semibold cursor-pointer">upliftbangladesh.com</a> in compliance with Bangladesh&rsquo;s <em>Information and Communication Technology (ICT) Act 2006</em>, <em>Cyber Security Act 2023</em>, and international data protection benchmarks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1.5">
            <strong className="text-white text-xs sm:text-sm font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" /> Entity &amp; Editorial Secretariat
            </strong>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Uplift Bangladesh™ &bull; Bashundhara R/A, Dhaka-1229 &bull; Email: <a href="mailto:upliftbd.media@gmail.com" className="text-red-400 underline cursor-pointer">upliftbd.media@gmail.com</a> &bull; Hotline: 01608-427446
            </p>
          </div>
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1.5">
            <strong className="text-white text-xs sm:text-sm font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> Platform Technical Partner
            </strong>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Softzino Technologies &bull; Platform Architecture &amp; Cloud Maintenance &bull; <a href="https://www.softzino.com" target="_blank" rel="noopener noreferrer" className="text-red-400 underline cursor-pointer">www.softzino.com</a>
            </p>
          </div>
        </div>
      </section>

      <section id="data-collected" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            2. Information We Collect
          </h2>
        </div>
        <p className="leading-relaxed">
          We collect personal and technical information strictly to evaluate documentary requests, manage commercial sponsorships, and serve digital video media:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>📩</span> Inquiries &amp; Contacts
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Full name, company/agency name, work email, phone number, and documentary brief submitted via our forms.</p>
          </div>
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>🎬</span> Contributor Releases
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Signed on-camera appearance releases, interview audio-video recordings, and professional credentials of featured subject experts.</p>
          </div>
          <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-xl space-y-1">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>🌐</span> Technical Telemetry
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Anonymized IP addresses, browser specifications, operating system, and basic analytics metrics (zero advertising trackers).</p>
          </div>
        </div>
      </section>

      <section id="data-usage-security" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            3. Usage, Security &amp; Zero-Sale Guarantee
          </h2>
        </div>
        <div className="p-4 bg-zinc-900/80 border-l-4 border-[#EE3028] border-y border-r border-white/10 rounded-r-xl">
          <strong className="text-white block text-xs sm:text-sm mb-1">Our Core Privacy Commitment:</strong>
          <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            We never sell, rent, license, or trade your personal information or submitted business inquiries to any third-party marketing broker or ad exchange.
          </span>
        </div>
        <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <li><strong className="text-white">Purposeful Operational Use:</strong> Information is used solely to respond to documentary inquiries, schedule film shoots, process corporate sponsorships, and deliver media deliverables.</li>
          <li><strong className="text-white">Enterprise Security:</strong> All client data is encrypted in transit using 256-bit TLS 1.3 protocol. Form endpoints are protected against cross-site scripting (XSS), SQL injections, and DDoS attacks.</li>
          <li><strong className="text-white">Retention Schedules:</strong> General inquiries are kept for up to 24 months; tax and sponsorship contracts are archived for 7 years; diagnostic server logs are purged every 90 days.</li>
        </ul>
      </section>

      <section id="filming-releases" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            04
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            4. Filming Protocols, Site Safety &amp; CAAB Drone Clearances
          </h2>
        </div>
        <p className="leading-relaxed">
          As a specialized development documentary production house covering heavy national infrastructure (Padma Bridge, Dhaka Metro Rail, Bangabandhu Tunnel, Rooppur Nuclear Power Plant, Terminal 3, and deep-sea ports), we uphold strict ethical and regulatory standards:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <li><strong className="text-white">Civil Aviation Drone Regulations:</strong> All UAV and aerial drone flights strictly adhere to Civil Aviation Authority of Bangladesh (CAAB) flight zoning authorizations and clearances.</li>
          <li><strong className="text-white">On-Site Safety &amp; PPE:</strong> Film crews follow international Occupational Health and Safety (OHS) standards, including mandatory PPE gear and escorted security access.</li>
          <li><strong className="text-white">Sensitive Information Redaction:</strong> Any classified architectural blueprints, tactical security layouts, or proprietary industrial secrets are proactively redacted prior to documentary broadcast.</li>
        </ul>
      </section>

      <section id="cookies-analytics" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            05
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            5. Cookies, Analytics &amp; YouTube Video Embeds
          </h2>
        </div>
        <p className="leading-relaxed text-xs sm:text-sm text-zinc-300">
          We deploy minimal functional cookies essential for site navigation, tab state persistence, and form CSRF token validation. We use privacy-friendly aggregated analytics (Vercel Web Analytics) that do not track personal identities. Documentaries streamed through embedded YouTube players operate under Google and YouTube&rsquo;s privacy terms. You can disable cookies at any time via your browser settings.
        </p>
      </section>

      <section id="your-rights-contact" className="scroll-mt-28 space-y-3.5 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
            06
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            6. Your Data Rights &amp; Legal Helpdesk
          </h2>
        </div>
        <p className="leading-relaxed text-xs sm:text-sm text-zinc-300">
          You possess full legal rights to request access to any personal data we hold about you, request rectification of inaccurate contact details, or request permanent deletion of your inquiry records (&ldquo;Right to be Forgotten&rdquo;).
        </p>

        <div className="p-4 bg-zinc-900/80 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div>
            <strong className="text-white block font-bold mb-0.5">Submit a Data Subject Request:</strong>
            <span className="text-zinc-400">
              Email our legal desk at <a href="mailto:upliftbd.media@gmail.com" className="text-red-400 hover:text-red-300 underline font-semibold cursor-pointer">upliftbd.media@gmail.com</a> with subject <em>&ldquo;Data Subject Request&rdquo;</em> (turnaround within 14 business days).
            </span>
          </div>
          <a
            href="mailto:upliftbd.media@gmail.com?subject=Data%20Subject%20Request"
            className="shrink-0 px-3.5 py-1.5 bg-[#EE3028] hover:bg-[#d4251e] text-white font-bold rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
          >
            Email Legal Desk
          </a>
        </div>
      </section>
    </LegalPageLayout>
  );
}
