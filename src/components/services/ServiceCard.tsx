import React from "react";
import { ServiceItem } from "@/types";

interface ServiceCardProps {
  item: ServiceItem;
}

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div role="listitem" className="service-sticky w-dyn-item">
      <div
        data-wf--home-services_item--variant={item.variant}
        className="home-services_item"
      >
        <div className="line-2 is-darker"></div>
        <div className="home-services_item-in">
          <div className="home-services_examples">
            <div className="home-services_item-head">
              <div className="home-services_number">
                <div>{item.number}</div>
              </div>
              <h2 className="home-services_title">{item.title}</h2>
            </div>
            <div className="home-services_services">
              <div className="tag-text w-richtext">
                {item.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            </div>
            <div className="service-button_desktop">
              <a
                data-wf--button--variant="small-light"
                href={item.cta}
                className="button w-inline-block"
              >
                <div className="button-in">
                  <div className="button_texts">
                    <div className="button_text _1">{item.ctaLabel}</div>
                    <div aria-hidden="true" className="button_text _2">
                      {item.ctaLabel}
                    </div>
                  </div>
                  <div className="button_glow-wrap">
                    <div className="button_glow"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="home-services_desc">
            <div className="home-services_img-wrap">
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="home-services_img"
              />
            </div>
            <div className="home-services_text-wrap">
              <p className="text-color-grey-300-2">{item.description}</p>
            </div>
          </div>
          <div className="service-button_mobile">
            <a
              data-wf--button--variant="medium-light"
              href={item.cta}
              className="button w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 w-inline-block w-full text-center"
            >
              <div className="button-in w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 justify-center">
                <div className="button_texts w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57">
                  <div className="button_text w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 _1">
                    {item.ctaLabel}
                  </div>
                  <div
                    aria-hidden="true"
                    className="button_text w-variant-9cb96ae5-a355-784d-c2ef-0196f705ac57 _2"
                  >
                    {item.ctaLabel}
                  </div>
                </div>
                <div className="button_glow-wrap">
                  <div className="button_glow"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
