"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { productImages } from "@/lib/images";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ComparisonTable } from "./ComparisonTable";

export function ProductList() {
  const t = useTranslations("products");
  const locale = useLocale() as "ko" | "en";

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => {
            const imgs = productImages[product.slug as keyof typeof productImages];
            return (
              <ScrollReveal key={product.id} delay={index * 0.15}>
                <Card hover className="h-full">
                  <div className="aspect-[4/3] relative overflow-hidden bg-section">
                    <Image
                      src={imgs[0]}
                      alt={product.name[locale]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {product.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-primary text-white rounded-full z-10">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-text-secondary">{product.tagline[locale]}</p>
                    <p className="text-sm text-text-muted line-clamp-2">{product.description[locale]}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xl font-bold text-accent">
                        {formatPrice(locale === "ko" ? product.price.krw : product.price.usd, locale)}
                      </span>
                      <Link href={`/products/${product.slug}`}>
                        <Button size="sm" className="gap-1.5">
                          {t("specs")}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Comparison Table */}
        <ScrollReveal>
          <ComparisonTable />
        </ScrollReveal>
      </div>
    </section>
  );
}
