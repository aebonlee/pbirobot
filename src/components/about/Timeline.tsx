"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { journeyData } from "@/data/journey";
import {
  Building,
  Lightbulb,
  Rocket,
  Globe,
  Award,
  Star,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Building: <Building className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

export function Timeline() {
  const t = useTranslations("journey");
  const locale = useLocale() as "ko" | "en";

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {journeyData.map((event, index) => (
            <ScrollReveal
              key={event.year}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-6 z-10 ring-4 ring-page" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="bg-section rounded-xl border border-border p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-primary">
                        {iconMap[event.icon]}
                      </span>
                      <span className="text-2xl font-bold text-accent">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {event.title[locale]}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {event.description[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
