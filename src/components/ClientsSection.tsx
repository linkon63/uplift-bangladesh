import React from "react";
import { CLIENT_PORTFOLIO } from "@/data";


export default function ClientsSection() {
  return (
    <>
      <section className="section_clients">
        <div className="padding-section-medium"></div>
        <div className="padding-global">
          <div className="container-large">
            <div className="clients_head">
              <div className="clients_head-wrap">
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
                <div className="max-width-small">
                  <div className="text-color-grey-400">
                    <div className="font-secondary">
                      <div className="text-size-xsmall">
                        <p className="text-weight-medium">
                          <strong>UPLIFT BANGLADESH</strong> is Bangladesh&#x27;s leading development-focused media and documentary platform, dedicated to showcasing the nation&#x27;s remarkable transformation through cinematic storytelling, world-class documentaries, and impactful digital content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clients_auth">
                <div className="bg-[#141517] bg-[radial-gradient(circle_at_10%_20%,rgba(238,48,40,0.1)_0%,rgba(255,255,255,0.02)_90%)] border border-white/10 rounded-2xl p-6 min-h-[340px] flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#EE3028] shadow-[0_0_10px_#EE3028]"></span>
                      <span className="text-[11px] tracking-[1.5px] uppercase text-white/70">
                        Organic Platform Impact
                      </span>
                    </div>
                    <div className="text-4xl font-extrabold tracking-tight leading-tight text-white">
                      1,000,000+
                    </div>
                    <div className="text-[13px] text-white/60 mt-1">
                      Combined Digital Community Across Platforms
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 my-5">
                    <div className="bg-white/[0.04] rounded-[10px] p-3 border border-white/[0.06]">
                      <div className="text-xl font-bold text-white">
                        451,000+
                      </div>
                      <div className="text-[11px] text-white/50 mt-0.5">
                        YouTube Subscribers
                      </div>
                    </div>
                    <div className="bg-white/[0.04] rounded-[10px] p-3 border border-white/[0.06]">
                      <div className="text-xl font-bold text-white">
                        681,000+
                      </div>
                      <div className="text-[11px] text-white/50 mt-0.5">
                        Facebook Followers
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/[0.08] pt-3.5">
                    <span className="text-xs text-white/75">
                      100% Organic Reach
                    </span>
                    <span className="text-[11px] text-[#EE3028] font-semibold">
                      Verified Audience ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-xlarge is-mobile-medium"></div>
          </div>
        </div>

        {/* Marquee Brand Cards (Requirement 14.1, 14.2, 14.3) */}
        <div className="clients_logos">
          <div className="brands_card-group">
            {CLIENT_PORTFOLIO.map((client) => (
              <div key={client.id} className="clients_brand-card">
                <div className="clients_card">
                  <div aria-hidden="true" className="clients_number">
                    ({client.id})
                  </div>
                  <div className="text-base font-extrabold tracking-wide text-brand-dark">
                    {client.code}
                  </div>
                </div>
                <div className="clients_texts">
                  <div className="clients_name">{client.name}</div>
                  <p className="clients_desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="brands_card-group">
            {CLIENT_PORTFOLIO.map((client) => (
              <div key={`dup-${client.id}`} className="clients_brand-card">
                <div className="clients_card">
                  <div aria-hidden="true" className="clients_number">
                    ({client.id})
                  </div>
                  <div className="text-base font-extrabold tracking-wide text-brand-dark">
                    {client.code}
                  </div>
                </div>
                <div className="clients_texts">
                  <div className="clients_name">{client.name}</div>
                  <p className="clients_desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="brands_card-group">
            {CLIENT_PORTFOLIO.map((client) => (
              <div key={`tri-${client.id}`} className="clients_brand-card">
                <div className="clients_card">
                  <div aria-hidden="true" className="clients_number">
                    ({client.id})
                  </div>
                  <div className="text-base font-extrabold tracking-wide text-brand-dark">
                    {client.code}
                  </div>
                </div>
                <div className="clients_texts">
                  <div className="clients_name">{client.name}</div>
                  <p className="clients_desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="padding-section-medium"></div>
      </section>
    </>
  );
}
