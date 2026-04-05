export type Language = "tr" | "en";

export interface LocalizedText {
  tr: string;
  en: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  image: string;
}

export interface Category {
  id: string;
  name: LocalizedText;
  banner: string;
  items: MenuItem[];
}

export interface CafeInfo {
  name: string;
  tagline: string;
  established: string;
  location: LocalizedText;
  hours: LocalizedText;
  heroImage: string;
}
