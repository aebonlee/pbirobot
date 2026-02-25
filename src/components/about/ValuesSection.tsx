"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Zap, Globe, Lightbulb } from "lucide-react";

const values = [
  { key: "efficiency" as const, icon: <Zap className="w-10 h-10" />, color: "text-yellow-400" },
  { key: "global" as const, icon: <Globe className="w-10 h-10" />, color: "text-blue-400" },
  { key: "innovation" as const, icon: <Lightbulb className="w-10 h-10" />, color: "text-green-400" },
];

export function ValuesSection() {
  const t = useTranslations("about.values");

  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <ScrollReveal key={value.key} delay={index * 0.15}>
              <div className="text-center p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className={`mb-6 ${value.color}`}>{value.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {t(`${value.key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`${value.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
