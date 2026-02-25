"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { CompanyInfoCard } from "./CompanyInfoCard";

export function ContactContent() {
  const t = useTranslations("contact");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <CompanyInfoCard />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
