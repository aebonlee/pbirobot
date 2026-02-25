export interface JourneyEvent {
  year: string;
  title: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  icon: string;
}

export const journeyData: JourneyEvent[] = [
  {
    year: "2019",
    title: { ko: "회사 설립", en: "Company Founded" },
    description: {
      ko: "주식회사 피비아이 설립. 수영장 로봇 청소기 시장 진출을 위한 초기 R&D 시작.",
      en: "PBI Co., Ltd. founded. Began initial R&D for entry into the robotic pool cleaner market.",
    },
    icon: "Building",
  },
  {
    year: "2020",
    title: { ko: "1세대 프로토타입 개발", en: "1st Gen Prototype Development" },
    description: {
      ko: "첫 번째 로봇 수영장 청소기 프로토타입 개발 완료. 핵심 특허 기술 출원.",
      en: "Completed first robotic pool cleaner prototype. Filed core patent technologies.",
    },
    icon: "Lightbulb",
  },
  {
    year: "2021",
    title: { ko: "AquaSense 1.0 출시", en: "AquaSense 1.0 Launch" },
    description: {
      ko: "첫 번째 상용 제품 AquaSense 1.0 출시. 국내 시장에서 호평 획득.",
      en: "Launched first commercial product AquaSense 1.0. Received positive reviews in domestic market.",
    },
    icon: "Rocket",
  },
  {
    year: "2022",
    title: { ko: "글로벌 시장 진출", en: "Global Market Entry" },
    description: {
      ko: "미국, 호주 수출 시작. 국제 수영장 박람회 참가. CE, FCC 인증 취득.",
      en: "Started exports to US and Australia. Participated in international pool expos. Obtained CE, FCC certifications.",
    },
    icon: "Globe",
  },
  {
    year: "2023",
    title: { ko: "AI 내비게이션 기술 특허", en: "AI Navigation Patent" },
    description: {
      ko: "AI 기반 3D 매핑 내비게이션 기술 특허 등록. 기술혁신형 중소기업(Inno-Biz) 인증 획득.",
      en: "Registered AI-based 3D mapping navigation technology patent. Obtained Inno-Biz certification.",
    },
    icon: "Award",
  },
  {
    year: "2024",
    title: { ko: "AquaSense 2 시리즈 출시", en: "AquaSense 2 Series Launch" },
    description: {
      ko: "차세대 AquaSense 2 Pro/Ultra 출시. 수질 모니터링, 멀티 풀 관리 기능 탑재.",
      en: "Launched next-gen AquaSense 2 Pro/Ultra. Features water quality monitoring and multi-pool management.",
    },
    icon: "Star",
  },
  {
    year: "2025",
    title: { ko: "15개국 수출 달성", en: "Exports to 15+ Countries" },
    description: {
      ko: "글로벌 파트너 네트워크 확장으로 15개국 이상 수출 달성. 연매출 100억원 돌파.",
      en: "Expanded global partner network to export to 15+ countries. Annual revenue exceeds 10 billion KRW.",
    },
    icon: "TrendingUp",
  },
];
