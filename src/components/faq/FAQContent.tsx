"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqData, type FAQItem } from "@/data/faq";
import { cn } from "@/lib/utils";

const categories = ["product", "purchase", "warranty", "usage"] as const;

export function FAQContent() {
  const t = useTranslations("faq");
  const locale = useLocale() as "ko" | "en";
  const [activeCategory, setActiveCategory] = useState<string>("product");

  const filteredFaqs = faqData.filter((faq) => faq.category === activeCategory);

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question[locale],
    content: faq.answer[locale],
  }));

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border"
                )}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
