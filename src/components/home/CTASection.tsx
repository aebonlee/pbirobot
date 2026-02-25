"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container-custom">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-white to-accent/5 border border-border p-12 lg:p-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                {t("description")}
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  {t("button")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
