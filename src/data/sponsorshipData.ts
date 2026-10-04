import { SponsorshipPackage, KeyBenefit, PartnershipTerm } from "@/types";

export const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    platform: "YouTube",
    badge: "Flagship Long-Form",
    deliverable: "Long-Form Sponsored Documentary Videos",
    quantity: "08 - 10 Videos / month",
    investment: "৳ 15,000",
    rateNote: "per content",
    highlight: true,
    features: [
      "In-depth cinematic feature & site walkthrough",
      "Contextual brand integration & executive interview",
      "Permanent archival on YouTube (451K+ subscribers)",
      "4K UHD mastering with professional color grade",
    ],
  },
  {
    platform: "Facebook",
    badge: "High-Engagement Viral Reach",
    deliverable: "Sponsored Short Video Reels",
    quantity: "30 - 40 Reels / month",
    investment: "৳ 5,000",
    rateNote: "per content (Min. 5 content)",
    highlight: false,
    features: [
      "Fast-paced, mobile-optimized vertical video",
      "Direct access to 681,000+ active Facebook followers",
      "High viral potential and organic shareability",
      "Brand tag, call-to-action & product highlight",
    ],
  },
  {
    platform: "Instagram",
    badge: "Complimentary Bonus",
    deliverable: "Sponsored Short Video Reels",
    quantity: "30 - 40 Reels / month",
    investment: "COMPLIMENTARY",
    rateNote: "For contracted annual partners",
    highlight: false,
    features: [
      "Cross-posted high-aesthetic visual reels",
      "Targeted at urban youth, designers & young professionals",
      "Seamless storytelling with audio trends",
      "Zero additional production surcharge",
    ],
  },
  {
    platform: "TikTok",
    badge: "Complimentary Bonus",
    deliverable: "Sponsored Short Video Reels",
    quantity: "10 - 15 Reels / month",
    investment: "COMPLIMENTARY",
    rateNote: "For contracted annual partners",
    highlight: false,
    features: [
      "Gen-Z & broad national demographic amplification",
      "Fast-cut highlight snippets of mega infrastructure",
      "Algorithm-friendly engaging formats",
      "Zero additional production surcharge",
    ],
  },
];

export const SPONSORSHIP_BENEFITS: KeyBenefit[] = [
  {
    title: "100% Organic Audience",
    desc: "A trusted community built naturally without artificial boosting, ensuring genuine engagement and authentic brand sentiment.",
  },
  {
    title: "Highly Relevant Demographics",
    desc: "Direct access to over 1,000,000+ followers actively tracking real estate, economy, engineering, and national markets.",
  },
  {
    title: "High-Trust Platform Association",
    desc: "Partnering with Bangladesh's premier nation-building media platform lends tremendous prestige, credibility, and national stature.",
  },
  {
    title: "Omni-Channel Amplification",
    desc: "Simultaneous multi-platform coverage across YouTube, Facebook, Instagram, and TikTok for maximum market penetration.",
  },
];

export const PARTNERSHIP_TERMS: PartnershipTerm[] = [
  {
    label: "Agreement Duration",
    detail: "Strategic partnership agreement spans an initial term of 1 (one) year from date of execution.",
  },
  {
    label: "Payment Terms",
    detail: "All monthly payments are strictly payable at the conclusion of each respective calendar month.",
  },
  {
    label: "Non-Cancellable Contract",
    detail: "To guarantee continuous brand presence, narrative building, and campaign continuity, the contract is non-cancellable.",
  },
  {
    label: "Content Compensation",
    detail: "Any deficit due to technical or operational factors is fully compensated in the subsequent month's schedule.",
  },
  {
    label: "Pure Organic Reach",
    detail: "All viewership and reach generated will remain strictly organic, upholding authentic brand credibility.",
  },
  {
    label: "Renewal Option",
    detail: "Preferential renewal options and legacy pricing structures are extended upon completion of the initial term.",
  },
];
