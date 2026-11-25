"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLIENT_PORTFOLIO } from "@/data";
import { ClientItem } from "@/types";

const TOP_RIBBON_CLIENTS = CLIENT_PORTFOLIO.filter(
  (c) =>
    c.category === "infrastructure" ||
    c.category === "media" ||
    c.category === "tech"
);

const BOTTOM_RIBBON_CLIENTS = CLIENT_PORTFOLIO.filter(
  (c) => c.category === "industry" || c.category === "realestate"
);

function RibbonTrack({
  clients,
  direction,
  failedImages,
  onImageError,
}: {
  clients: ClientItem[];
  direction: "ltr" | "rtl";
  failedImages: Record<string, boolean>;
  onImageError: (id: string) => void;
}) {
  return (
    <div className="roster-marquee py-4 sm:py-5">
      {(["primary", "dup"] as const).map((groupKey) => (
        <div
          key={groupKey}
          aria-hidden={groupKey !== "primary" ? true : undefined}
          className={`roster-track ${
            direction === "ltr" ? "roster-track--ltr" : "roster-track--rtl"
          }`}
        >
          {clients.map((client) => (
            <div
              key={`${groupKey}-${client.id}`}
              title={`${client.name} — ${client.desc}`}
              className="mx-5 sm:mx-8 shrink-0 flex items-center justify-center"
            >
              <div
                className={`group flex items-center justify-center h-11 transition-all duration-300 ${
                  client.darkBg
                    ? "bg-[#141517] px-3.5 rounded-lg shadow-sm hover:ring-1 hover:ring-[#EE3028]/50"
                    : "px-1"
                }`}
              >
                {client.image && !failedImages[client.id] ? (
                  <Image
                    src={client.image}
                    alt={`${client.name} logo`}
                    width={136}
                    height={44}
                    className="max-h-[40px] sm:max-h-[44px] w-auto max-w-[130px] object-contain opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    onError={() => onImageError(client.id)}
                  />
                ) : (
                  <span
                    className={`text-xs font-extrabold tracking-wide ${
                      client.darkBg ? "text-white" : "text-[#0f1011]"
                    }`}
                  >
                    {client.code}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ClientsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (clientId: string) => {
    setFailedImages((current) => ({ ...current, [clientId]: true }));
  };

  return (
    <section className="section_clients">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
              <div className="text-color-grey-300">
                <div className="text-style-label-caption">WE ARE</div>
              </div>
              <div className="spacer-custom-2"></div>
              <div>
                <h1 className="heading-style-h1">
                  Documenting Progress. Building Trust. Inspiring a Nation.
                </h1>
              </div>
              <div className="spacer-medium is-tablet-small"></div>
              <div className="max-w-xl">
                <div className="text-color-grey-400">
                  <div className="font-secondary">
                    <div className="text-size-xsmall">
                      <p className="text-weight-medium m-0">
                        <strong>UPLIFT BANGLADESH</strong> is Bangladesh&#x27;s leading development-focused media and documentary platform, dedicated to showcasing the nation&#x27;s remarkable transformation through cinematic storytelling, world-class documentaries, and impactful digital content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 xl:col-span-4 w-full flex lg:justify-end">
              <div className="w-full lg:max-w-[420px] bg-[#141517] bg-[radial-gradient(circle_at_10%_20%,rgba(238,48,40,0.1)_0%,rgba(255,255,255,0.02)_90%)] border border-white/10 rounded-2xl p-6 sm:p-7 min-h-[340px] flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(15,16,17,0.12)]">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#EE3028] shadow-[0_0_10px_#EE3028]"></span>
                    <span className="text-[11px] tracking-[1.5px] uppercase text-white/70">
                      Organic Platform Impact
                    </span>
                  </div>
                  <div className="text-4xl font-extrabold tracking-tight leading-tight text-white">
                    1,150,000+
                  </div>
                  <div className="text-[13px] text-white/60 mt-1">
                    Combined Digital Community Across Platforms
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 my-5">
                  <div className="bg-white/[0.04] rounded-[10px] p-3 border border-white/[0.06]">
                    <div className="text-xl font-bold text-white">452,000+</div>
                    <div className="text-[11px] text-white/50 mt-0.5">
                      YouTube Subscribers
                    </div>
                  </div>
                  <div className="bg-white/[0.04] rounded-[10px] p-3 border border-white/[0.06]">
                    <div className="text-xl font-bold text-white">706,000+</div>
                    <div className="text-[11px] text-white/50 mt-0.5">
                      Facebook Followers
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-white/[0.08] pt-3.5">
                  <span className="text-xs text-white/75">100% Organic Reach</span>
                  <span className="text-[11px] text-[#EE3028] font-semibold">
                    Verified Audience ✓
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-xlarge is-mobile-medium"></div>

          {/* Minimal Editorial Eyebrow (synced with WE ARE caption typography) */}
          <div className="mt-10 sm:mt-14 mb-4">
            <div className="text-color-grey-300">
              <div className="text-style-label-caption">
                Trusted by {CLIENT_PORTFOLIO.length}+ Authorities, Global Brands &amp; Enterprises
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Idea #1: Dual-Track Broadcast Logo Ribbon (Monochrome-to-Color) */}
      <div className="border-y border-black/[0.08] bg-white/75 backdrop-blur-sm">
        <RibbonTrack
          clients={TOP_RIBBON_CLIENTS}
          direction="ltr"
          failedImages={failedImages}
          onImageError={handleImageError}
        />
        <div className="h-px w-full bg-black/[0.06]" />
        <RibbonTrack
          clients={BOTTOM_RIBBON_CLIENTS}
          direction="rtl"
          failedImages={failedImages}
          onImageError={handleImageError}
        />
      </div>

      <div className="padding-section-medium"></div>
    </section>
  );
}
