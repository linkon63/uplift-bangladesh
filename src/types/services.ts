export type ServicesTabType = "Tab 1" | "Tab 2";

export interface ServiceItem {
  id: number;
  number: string;
  title: string;
  variant: string;
  tags: string[];
  description: string;
  image: string;
  cta: string;
  ctaLabel: string;
}
