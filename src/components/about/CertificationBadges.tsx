"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

const certifications = [
  { name: "CE", icon: <Shield className="w-8 h-8" />, year: "2022" },
  { name: "FCC", icon: <CheckCircle className="w-8 h-8" />, year: "2022" },
  { name: "KC", icon: <Award className="w-8 h-8" />, year: "2021" },
  { name: "Inno-Biz", icon: <Star className="w-8 h-8" />, year: "2023" },
  { name: "ISO 9001", icon: <Shield className="w-8 h-8" />, year: "2023" },
  { name: "IP68", icon: <CheckCircle className="w-8 h-8" />, year: "2024" },
];

export function CertificationBadges() {
  const t = useTranslations("about.certifications");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("description")} />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.1}>
              <div className="flex flex-col items-center p-6 bg-section rounded-xl border border-border hover:border-primary/30 transition-colors text-center">
                <div className="text-primary mb-3">{cert.icon}</div>
                <span className="text-sm font-bold text-text-primary">{cert.name}</span>
                <span className="text-xs text-text-muted mt-1">{cert.year}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
