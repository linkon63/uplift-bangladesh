export interface SponsorshipPackage {
  platform: string;
  badge: string;
  deliverable: string;
  quantity: string;
  investment: string;
  rateNote: string;
  highlight: boolean;
  features: string[];
}

export interface KeyBenefit {
  title: string;
  desc: string;
}

export interface PartnershipTerm {
  label: string;
  detail: string;
}
