export interface FAQItem {
  id: string;
  category: "product" | "purchase" | "warranty" | "usage";
  question: {
    ko: string;
    en: string;
  };
  answer: {
    ko: string;
    en: string;
  };
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "product",
    question: {
      ko: "AquaSense 2 Pro와 Ultra의 차이점은 무엇인가요?",
      en: "What are the differences between AquaSense 2 Pro and Ultra?",
    },
    answer: {
      ko: "Pro는 가정용 수영장(최대 150㎡)에 최적화된 모델이며, Ultra는 상업용 대형 수영장(최대 300㎡)을 위한 플래그십 모델입니다. Ultra에는 수질 모니터링 센서, LTE 연결, 멀티 풀 관리 기능이 추가로 포함되어 있습니다.",
      en: "Pro is optimized for residential pools (up to 150㎡), while Ultra is a flagship model for large commercial pools (up to 300㎡). Ultra additionally includes water quality monitoring sensors, LTE connectivity, and multi-pool management.",
    },
  },
  {
    id: "faq-2",
    category: "product",
    question: {
      ko: "수영장 크기에 따라 어떤 모델을 선택해야 하나요?",
      en: "Which model should I choose based on my pool size?",
    },
    answer: {
      ko: "150㎡ 이하의 가정용 수영장에는 AquaSense 2 Pro를, 150㎡ 이상의 상업용 수영장에는 AquaSense 2 Ultra를 추천드립니다. 정확한 추천을 위해 견적 요청을 해주시면 전문 상담원이 도움을 드립니다.",
      en: "We recommend AquaSense 2 Pro for residential pools under 150㎡ and AquaSense 2 Ultra for commercial pools over 150㎡. For an accurate recommendation, please submit a quote request and our specialist will assist you.",
    },
  },
  {
    id: "faq-3",
    category: "product",
    question: {
      ko: "로봇이 수영장 벽면도 청소하나요?",
      en: "Does the robot clean pool walls as well?",
    },
    answer: {
      ko: "네, AquaSense 시리즈는 바닥뿐만 아니라 벽면과 수면 라인까지 청소합니다. 벽면 전용 청소 모드를 사용하면 더욱 꼼꼼하게 벽면을 관리할 수 있습니다.",
      en: "Yes, the AquaSense series cleans not only the floor but also walls and waterlines. Using the dedicated wall cleaning mode allows for more thorough wall maintenance.",
    },
  },
  {
    id: "faq-4",
    category: "purchase",
    question: {
      ko: "온라인으로 구매할 수 있나요?",
      en: "Can I purchase online?",
    },
    answer: {
      ko: "네, 공식 온라인 스토어에서 직접 구매하실 수 있습니다. 신용카드, 계좌이체, 간편결제 등 다양한 결제 수단을 지원합니다.",
      en: "Yes, you can purchase directly from our official online store. We support various payment methods including credit cards, bank transfers, and digital wallets.",
    },
  },
  {
    id: "faq-5",
    category: "purchase",
    question: {
      ko: "배송은 얼마나 걸리나요?",
      en: "How long does shipping take?",
    },
    answer: {
      ko: "국내 배송은 주문 후 2~3영업일 이내에 배송됩니다. 해외 배송은 지역에 따라 5~15영업일이 소요될 수 있습니다. 배송비는 무료입니다.",
      en: "Domestic shipping takes 2-3 business days after order. International shipping may take 5-15 business days depending on the region. Shipping is free.",
    },
  },
  {
    id: "faq-6",
    category: "warranty",
    question: {
      ko: "보증 기간은 어떻게 되나요?",
      en: "What is the warranty period?",
    },
    answer: {
      ko: "AquaSense 2 Pro는 2년, AquaSense 2 Ultra는 3년의 무상 보증이 제공됩니다. 보증 기간 내 제조 결함으로 인한 고장은 무상으로 수리해드립니다.",
      en: "AquaSense 2 Pro comes with a 2-year warranty, and AquaSense 2 Ultra with a 3-year warranty. Manufacturing defects within the warranty period are repaired free of charge.",
    },
  },
  {
    id: "faq-7",
    category: "warranty",
    question: {
      ko: "AS는 어떻게 받을 수 있나요?",
      en: "How can I get after-sales service?",
    },
    answer: {
      ko: "전화(02-6949-0136) 또는 이메일(info@pbirobot.com)로 AS를 신청하실 수 있습니다. 서울 본사 방문 수리 또는 택배를 이용한 수리가 가능합니다.",
      en: "You can request service by phone (+82-2-6949-0136) or email (info@pbirobot.com). On-site repair at our Seoul headquarters or courier-based repair are available.",
    },
  },
  {
    id: "faq-8",
    category: "usage",
    question: {
      ko: "앱은 어떻게 설치하나요?",
      en: "How do I install the app?",
    },
    answer: {
      ko: "iOS App Store 또는 Google Play Store에서 'AquaSense'를 검색하여 설치할 수 있습니다. 제품 구매 시 동봉된 QR 코드로도 바로 다운로드 가능합니다.",
      en: "You can install it by searching 'AquaSense' in the iOS App Store or Google Play Store. You can also download it directly using the QR code included with your purchase.",
    },
  },
  {
    id: "faq-9",
    category: "usage",
    question: {
      ko: "필터는 얼마나 자주 교체해야 하나요?",
      en: "How often should I replace the filter?",
    },
    answer: {
      ko: "일반적으로 3~6개월마다 필터를 교체하는 것을 권장합니다. 사용 빈도와 수영장 환경에 따라 다를 수 있으며, 앱에서 필터 상태를 확인할 수 있습니다.",
      en: "We generally recommend replacing the filter every 3-6 months. This may vary depending on usage frequency and pool conditions. You can check filter status in the app.",
    },
  },
  {
    id: "faq-10",
    category: "usage",
    question: {
      ko: "겨울에도 사용할 수 있나요?",
      en: "Can I use it during winter?",
    },
    answer: {
      ko: "수온이 5°C 이상인 환경에서 사용 가능합니다. 겨울철 수영장을 운영하지 않는 경우, 로봇을 깨끗이 세척한 후 실내에 보관하는 것을 권장합니다.",
      en: "It can be used in environments where water temperature is above 5°C. If not operating the pool during winter, we recommend cleaning the robot thoroughly and storing it indoors.",
    },
  },
];
