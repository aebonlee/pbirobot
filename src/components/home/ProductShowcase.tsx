"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProductImage } from "@/components/shared/ProductImage";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Cpu, Droplets, Shield, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Navigation: <Cpu className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
};

export function ProductShowcase() {
  const t = useTranslations("home.showcase");
  const locale = useLocale() as "ko" | "en";

  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            title={t("title")}
            subtitle={t("description")}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <Card hover className="h-full">
                <ProductImage
                  variant={product.slug === "aquasense-2-pro" ? "pro" : "ultra"}
                  size="md"
                  className="aspect-[4/3]"
                  showBadge
                  badge={product.badge}
                />
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {product.name[locale]}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {product.tagline[locale]}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-text-secondary"
                      >
                        <span className="text-primary shrink-0">
                          {iconMap[feature.icon] || <Zap className="w-4 h-4" />}
                        </span>
                        <span>{feature.title[locale]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xl font-bold text-accent">
                      {formatPrice(
                        locale === "ko" ? product.price.krw : product.price.usd,
                        locale
                      )}
                    </span>
                    <Link href={`/products/${product.slug}`}>
                      <Button size="sm" className="gap-1.5">
                        {t("subtitle")}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
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
