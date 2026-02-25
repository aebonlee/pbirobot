"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "aquasense-2-launch",
    title: {
      ko: "AquaSense 2 시리즈 출시 - 수영장 청소의 새로운 시대",
      en: "AquaSense 2 Series Launch - A New Era of Pool Cleaning",
    },
    excerpt: {
      ko: "AI 기반 스마트 내비게이션과 수질 모니터링 기능을 탑재한 차세대 로봇 수영장 청소기를 소개합니다.",
      en: "Introducing the next-generation robotic pool cleaner with AI-based smart navigation and water quality monitoring.",
    },
    date: "2025-03-15",
    readTime: 5,
    category: "news",
  },
  {
    slug: "pool-maintenance-tips",
    title: {
      ko: "수영장 유지보수 가이드: 로봇 청소기 활용법",
      en: "Pool Maintenance Guide: How to Use Robotic Cleaners",
    },
    excerpt: {
      ko: "로봇 수영장 청소기를 효과적으로 활용하여 수영장을 최적의 상태로 유지하는 방법을 알아보세요.",
      en: "Learn how to effectively use robotic pool cleaners to maintain your pool in optimal condition.",
    },
    date: "2025-02-20",
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
      ko: "세계 최대 가전 박람회 CES 2025에서 PBI Robot이 선보인 혁신적인 수영장 로봇 기술을 소개합니다.",
      en: "Discover the innovative pool robotics technology PBI Robot showcased at CES 2025.",
    },
    date: "2025-01-15",
    readTime: 4,
    category: "events",
  },
  {
    slug: "ai-navigation-technology",
    title: {
      ko: "AI 내비게이션 기술의 비밀 - AquaSense는 어떻게 수영장을 학습할까?",
      en: "Secrets of AI Navigation - How Does AquaSense Learn Your Pool?",
    },
    excerpt: {
      ko: "3D 매핑과 머신러닝을 활용한 AquaSense의 스마트 내비게이션 기술을 심층 분석합니다.",
      en: "Deep dive into AquaSense's smart navigation technology utilizing 3D mapping and machine learning.",
    },
    date: "2024-12-10",
    readTime: 8,
    category: "tech",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Card hover className="h-full">
                <div className="aspect-[16/9] bg-section flex items-center justify-center">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                    {t(`categories.${post.category}`)}
                  </span>
                </div>
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-bold text-text-primary line-clamp-2">
                    {post.title[locale]}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {post.excerpt[locale]}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-muted pt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}{t("readTime")}
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
