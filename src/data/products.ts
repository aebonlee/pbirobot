import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "aquasense-2-pro",
    slug: "aquasense-2-pro",
    name: {
      ko: "AquaSense 2 Pro",
      en: "AquaSense 2 Pro",
    },
    tagline: {
      ko: "스마트 수영장 청소의 새로운 기준",
      en: "A New Standard in Smart Pool Cleaning",
    },
    description: {
      ko: "AquaSense 2 Pro는 AI 기반 스마트 내비게이션과 강력한 흡입력으로 수영장 바닥, 벽면, 수면까지 완벽하게 청소하는 프리미엄 로봇 청소기입니다. 앱 제어, 예약 청소, 자동 충전 기능을 갖추고 있습니다.",
      en: "The AquaSense 2 Pro is a premium robotic cleaner that perfectly cleans pool floors, walls, and waterlines with AI-based smart navigation and powerful suction. Features app control, scheduled cleaning, and auto-charging.",
    },
    price: {
      krw: 2490000,
      usd: 1899,
    },
    images: [
      "/images/products/aquasense-2-pro-1.jpg",
      "/images/products/aquasense-2-pro-2.jpg",
      "/images/products/aquasense-2-pro-3.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/example-pro",
    features: [
      {
        icon: "Navigation",
        title: { ko: "AI 스마트 내비게이션", en: "AI Smart Navigation" },
        description: {
          ko: "3D 매핑 기술로 수영장 구조를 학습하고 최적의 청소 경로를 자동 설정합니다.",
          en: "3D mapping technology learns pool structure and automatically sets optimal cleaning paths.",
        },
      },
      {
        icon: "Zap",
        title: { ko: "강력한 흡입력", en: "Powerful Suction" },
        description: {
          ko: "듀얼 모터 시스템으로 미세 먼지부터 큰 이물질까지 효과적으로 제거합니다.",
          en: "Dual motor system effectively removes everything from fine dust to large debris.",
        },
      },
      {
        icon: "Smartphone",
        title: { ko: "앱 원격 제어", en: "App Remote Control" },
        description: {
          ko: "스마트폰 앱으로 어디서든 청소 시작, 예약, 상태 확인이 가능합니다.",
          en: "Start cleaning, schedule, and check status from anywhere with the smartphone app.",
        },
      },
      {
        icon: "Battery",
        title: { ko: "장시간 운영", en: "Extended Runtime" },
        description: {
          ko: "최대 3시간 연속 청소 가능하며, 자동으로 충전 스테이션에 복귀합니다.",
          en: "Up to 3 hours of continuous cleaning with automatic return to charging station.",
        },
      },
    ],
    specs: [
      { label: { ko: "청소 범위", en: "Coverage" }, value: { ko: "최대 150㎡", en: "Up to 150㎡" } },
      { label: { ko: "청소 시간", en: "Cleaning Time" }, value: { ko: "최대 3시간", en: "Up to 3 hours" } },
      { label: { ko: "필터 용량", en: "Filter Capacity" }, value: { ko: "5L", en: "5L" } },
      { label: { ko: "무게", en: "Weight" }, value: { ko: "9.5kg", en: "9.5kg" } },
      { label: { ko: "케이블 길이", en: "Cable Length" }, value: { ko: "18m", en: "18m" } },
      { label: { ko: "청소 모드", en: "Cleaning Modes" }, value: { ko: "자동 / 집중 / 벽면", en: "Auto / Spot / Wall" } },
      { label: { ko: "연결", en: "Connectivity" }, value: { ko: "Wi-Fi / Bluetooth", en: "Wi-Fi / Bluetooth" } },
      { label: { ko: "보증", en: "Warranty" }, value: { ko: "2년", en: "2 Years" } },
    ],
    badge: "BEST",
    inStock: true,
  },
  {
    id: "aquasense-2-ultra",
    slug: "aquasense-2-ultra",
    name: {
      ko: "AquaSense 2 Ultra",
      en: "AquaSense 2 Ultra",
    },
    tagline: {
      ko: "상업용 수영장을 위한 궁극의 솔루션",
      en: "The Ultimate Solution for Commercial Pools",
    },
    description: {
      ko: "AquaSense 2 Ultra는 대형 상업용 수영장을 위해 설계된 플래그십 모델입니다. Pro의 모든 기능에 더해 대형 필터, 확장된 청소 범위, 멀티 풀 관리, 수질 모니터링 센서를 탑재했습니다.",
      en: "The AquaSense 2 Ultra is a flagship model designed for large commercial pools. In addition to all Pro features, it includes a large filter, extended coverage, multi-pool management, and water quality monitoring sensors.",
    },
    price: {
      krw: 3990000,
      usd: 2999,
    },
    images: [
      "/images/products/aquasense-2-ultra-1.jpg",
      "/images/products/aquasense-2-ultra-2.jpg",
      "/images/products/aquasense-2-ultra-3.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/example-ultra",
    features: [
      {
        icon: "Navigation",
        title: { ko: "어드밴스드 AI 내비게이션", en: "Advanced AI Navigation" },
        description: {
          ko: "LiDAR + 카메라 듀얼 센서로 복잡한 대형 풀 구조도 완벽히 매핑합니다.",
          en: "LiDAR + camera dual sensors perfectly map complex large pool structures.",
        },
      },
      {
        icon: "Droplets",
        title: { ko: "수질 모니터링", en: "Water Quality Monitoring" },
        description: {
          ko: "pH, 염소, 탁도를 실시간으로 모니터링하고 앱으로 알림을 제공합니다.",
          en: "Real-time monitoring of pH, chlorine, and turbidity with app notifications.",
        },
      },
      {
        icon: "Building",
        title: { ko: "멀티 풀 관리", en: "Multi-Pool Management" },
        description: {
          ko: "하나의 앱으로 여러 수영장의 청소 스케줄과 상태를 통합 관리합니다.",
          en: "Manage cleaning schedules and status of multiple pools from a single app.",
        },
      },
      {
        icon: "Shield",
        title: { ko: "상업용 내구성", en: "Commercial Durability" },
        description: {
          ko: "강화된 소재와 산업용 모터로 매일 연속 운영에도 견딜 수 있는 내구성을 제공합니다.",
          en: "Reinforced materials and industrial motors provide durability for daily continuous operation.",
        },
      },
    ],
    specs: [
      { label: { ko: "청소 범위", en: "Coverage" }, value: { ko: "최대 300㎡", en: "Up to 300㎡" } },
      { label: { ko: "청소 시간", en: "Cleaning Time" }, value: { ko: "최대 5시간", en: "Up to 5 hours" } },
      { label: { ko: "필터 용량", en: "Filter Capacity" }, value: { ko: "8L", en: "8L" } },
      { label: { ko: "무게", en: "Weight" }, value: { ko: "12.5kg", en: "12.5kg" } },
      { label: { ko: "케이블 길이", en: "Cable Length" }, value: { ko: "30m", en: "30m" } },
      { label: { ko: "청소 모드", en: "Cleaning Modes" }, value: { ko: "자동 / 집중 / 벽면 / 수면", en: "Auto / Spot / Wall / Waterline" } },
      { label: { ko: "연결", en: "Connectivity" }, value: { ko: "Wi-Fi / Bluetooth / LTE", en: "Wi-Fi / Bluetooth / LTE" } },
      { label: { ko: "수질 센서", en: "Water Sensors" }, value: { ko: "pH / 염소 / 탁도", en: "pH / Chlorine / Turbidity" } },
      { label: { ko: "보증", en: "Warranty" }, value: { ko: "3년", en: "3 Years" } },
    ],
    badge: "PREMIUM",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
