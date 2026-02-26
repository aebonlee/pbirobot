"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Clock, Newspaper, Cpu, Lightbulb, CalendarDays } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  news: <Newspaper className="w-5 h-5" />,
  tech: <Cpu className="w-5 h-5" />,
  tips: <Lightbulb className="w-5 h-5" />,
  events: <CalendarDays className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  news: "bg-blue-50 text-blue-700 border-blue-200/50",
  tech: "bg-purple-50 text-purple-700 border-purple-200/50",
  tips: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
  events: "bg-amber-50 text-amber-700 border-amber-200/50",
};

const blogPosts = [
  {
    slug: "aquasense-2-launch",
    title: {
      ko: "AquaSense 2 시리즈 출시 - 수영장 청소의 새로운 시대",
      en: "AquaSense 2 Series Launch - A New Era of Pool Cleaning",
    },
    excerpt: {
      ko: "AI 기반 스마트 내비게이션과 수질 모니터링 기능을 탑재한 차세대 로봇 수영장 청소기 AquaSense 2 Pro와 Ultra를 소개합니다. 3D 매핑 기술로 수영장 구조를 학습하고, 앱으로 어디서든 원격 제어가 가능합니다.",
      en: "Introducing the next-generation robotic pool cleaners AquaSense 2 Pro and Ultra with AI-based smart navigation and water quality monitoring. 3D mapping technology learns your pool structure, with remote control available from anywhere via the app.",
    },
    date: "2025-03-15",
    readTime: 5,
    category: "news",
  },
  {
    slug: "ai-navigation-technology",
    title: {
      ko: "AI 내비게이션 기술의 비밀 - AquaSense는 어떻게 수영장을 학습할까?",
      en: "Secrets of AI Navigation - How Does AquaSense Learn Your Pool?",
    },
    excerpt: {
      ko: "LiDAR 센서와 딥러닝 알고리즘을 결합한 AquaSense의 3D 매핑 기술을 심층 분석합니다. 복잡한 형태의 수영장도 한 번의 학습으로 최적의 청소 경로를 자동 설정하는 원리를 알아보세요.",
      en: "Deep dive into AquaSense's 3D mapping technology combining LiDAR sensors with deep learning algorithms. Learn how even complex pool shapes are mapped for optimal cleaning paths in a single learning session.",
    },
    date: "2025-02-28",
    readTime: 8,
    category: "tech",
  },
  {
    slug: "pool-maintenance-tips",
    title: {
      ko: "수영장 유지보수 가이드: 로봇 청소기 200% 활용법",
      en: "Pool Maintenance Guide: Getting 200% from Your Robotic Cleaner",
    },
    excerpt: {
      ko: "로봇 수영장 청소기의 성능을 극대화하는 7가지 팁. 필터 관리부터 계절별 청소 스케줄, 수질 관리까지 전문가가 알려주는 실전 가이드입니다.",
      en: "7 tips to maximize your robotic pool cleaner's performance. Expert guide covering filter maintenance, seasonal cleaning schedules, and water quality management.",
    },
    date: "2025-02-10",
    readTime: 7,
    category: "tips",
  },
  {
    slug: "ces-2025-exhibition",
    title: {
      ko: "CES 2025 참가 후기 - PBI Robot의 글로벌 도전",
      en: "CES 2025 Review - PBI Robot's Global Challenge",
    },
    excerpt: {
      ko: "세계 최대 가전 박람회 CES 2025에서 AquaSense 2 Ultra를 선보이며 글로벌 시장에서의 입지를 확인한 PBI Robot. 현장 반응과 해외 파트너사와의 미팅 후기를 공유합니다.",
      en: "PBI Robot showcased the AquaSense 2 Ultra at CES 2025, the world's largest consumer electronics show. Read about on-site reactions and meetings with global partners.",
    },
    date: "2025-01-20",
    readTime: 4,
    category: "events",
  },
  {
    slug: "water-quality-monitoring",
    title: {
      ko: "수질 모니터링의 중요성 - Ultra의 센서 기술 해부",
      en: "The Importance of Water Quality Monitoring - Ultra's Sensor Technology",
    },
    excerpt: {
      ko: "AquaSense 2 Ultra에 탑재된 pH, 염소, 탁도 센서가 실시간으로 수질을 분석하는 원리와 건강한 수영장 환경을 유지하는 방법을 소개합니다.",
      en: "Learn how pH, chlorine, and turbidity sensors in the AquaSense 2 Ultra analyze water quality in real-time and help maintain a healthy pool environment.",
    },
    date: "2024-12-15",
    readTime: 6,
    category: "tech",
  },
  {
    slug: "commercial-pool-solutions",
    title: {
      ko: "상업용 수영장 관리 솔루션 - Ultra로 운영비 절감하기",
      en: "Commercial Pool Management - Reducing Operating Costs with Ultra",
    },
    excerpt: {
      ko: "호텔, 리조트, 피트니스 센터의 수영장 관리 비용을 최대 40%까지 절감하는 AquaSense 2 Ultra의 멀티 풀 관리 시스템과 자동 스케줄링 기능을 소개합니다.",
      en: "Discover how AquaSense 2 Ultra's multi-pool management and auto-scheduling can reduce pool maintenance costs by up to 40% for hotels, resorts, and fitness centers.",
    },
    date: "2024-11-28",
    readTime: 5,
    category: "tips",
  },
];

export function BlogList() {
  const t = useTranslations("blog");
  const locale = useLocale() as "ko" | "en";

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.08}>
              <Card hover className="h-full flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-section to-border/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`blog-${post.slug}`} width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#blog-${post.slug})`} />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border ${categoryColors[post.category]}`}>
                      {categoryIcons[post.category]}
                      {t(`categories.${post.category}`)}
                    </span>
                  </div>
                </div>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-text-primary line-clamp-2">
                    {post.title[locale]}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-3 flex-1">
                    {post.excerpt[locale]}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-muted pt-2 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}{locale === "ko" ? "분" : " min"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
