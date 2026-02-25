"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function VisionSection() {
  const t = useTranslations("about");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Vision */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-section rounded-2xl border border-border p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
              {t("vision.title")}
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              {t("vision.description")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
