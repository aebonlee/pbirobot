export const SITE_CONFIG = {
  name: "PBI Robot",
  url: "https://pbirobot.com",
  ogImage: "/images/og/default.png",
  description: {
    ko: "AI 기반 로봇 수영장 청소기 - AquaSense 시리즈",
    en: "AI-Powered Robotic Pool Cleaners - AquaSense Series",
  },
} as const;

export const NAV_ITEMS = [
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "store", href: "/store" },
  { key: "blog", href: "/blog" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
] as const;

export const COMPANY_INFO = {
  phone: "02-6949-0136",
  phoneIntl: "+82-2-6949-0136",
  email: "info@pbirobot.com",
  address: {
    ko: "서울특별시 금천구 가산디지털1로 168, C동 1209호",
    en: "C-1209, 168 Gasan Digital 1-ro, Geumcheon-gu, Seoul, Korea",
  },
  coordinates: {
    lat: 37.4786,
    lng: 126.8873,
  },
} as const;
