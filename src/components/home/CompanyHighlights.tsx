"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Zap, Globe, Lightbulb } from "lucide-react";

const highlights = [
  {
    key: "efficiency" as const,
    icon: <Zap className="w-8 h-8" />,
    stat: "40%",
    statLabel: { ko: "에너지 절감", en: "Energy Savings" },
  },
  {
    key: "global" as const,
    icon: <Globe className="w-8 h-8" />,
    stat: "15+",
    statLabel: { ko: "수출 국가", en: "Countries" },
  },
  {
    key: "innovation" as const,
    icon: <Lightbulb className="w-8 h-8" />,
    stat: "15%",
    statLabel: { ko: "R&D 투자", en: "R&D Investment" },
  },
];

export function CompanyHighlights() {
  const t = useTranslations("home.highlights");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.key} delay={index * 0.15}>
              <div className="text-center p-8 rounded-2xl bg-section border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-accent mb-1">{item.stat}</div>
                <div className="text-xs text-text-muted mb-4 uppercase tracking-wider">
                  {item.statLabel.ko}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`${item.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
