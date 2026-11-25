export type ClientCategory =
  | "infrastructure"
  | "industry"
  | "realestate"
  | "tech"
  | "media";

export interface ClientItem {
  id: string;
  code: string;
  name: string;
  desc: string;
  category: ClientCategory;
  featured?: boolean;
  image?: string;
  darkBg?: boolean;
}
