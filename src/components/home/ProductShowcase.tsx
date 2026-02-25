"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Cpu, Droplets, Shield, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Navigation: <Cpu className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
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
                {/* Product image placeholder */}
                <div className="aspect-[4/3] bg-page flex items-center justify-center relative overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-primary text-white rounded-full z-10">
                      {product.badge}
                    </span>
                  )}
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-text-muted text-sm">{product.name[locale]}</p>
                  </div>
                </div>
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
                        <span className="text-primary mt-0.5">
                          {iconMap[feature.icon] || <Zap className="w-3.5 h-3.5" />}
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
