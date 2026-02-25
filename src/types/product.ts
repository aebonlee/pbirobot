export interface Product {
  id: string;
  slug: string;
  name: {
    ko: string;
    en: string;
  };
  tagline: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  price: {
    krw: number;
    usd: number;
  };
  images: string[];
  videoUrl?: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  badge?: string;
  inStock: boolean;
}

export interface ProductFeature {
  icon: string;
  title: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
}

export interface ProductSpec {
  label: {
    ko: string;
    en: string;
  };
  value: {
    ko: string;
    en: string;
  };
}
