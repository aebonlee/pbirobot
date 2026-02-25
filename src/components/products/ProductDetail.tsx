"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { formatPrice } from "@/lib/utils";
import {
  ShoppingCart,
  Cpu,
  Zap,
  Smartphone,
  Battery,
  Navigation,
  Droplets,
  Building,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Navigation: <Navigation className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Battery: <Battery className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Building: <Building className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const locale = useLocale() as "ko" | "en";
  const t = useTranslations("products");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <ScrollReveal>
            <div className="aspect-square bg-section rounded-2xl border border-border flex items-center justify-center relative overflow-hidden">
              {product.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-primary text-white rounded-full z-10">
                  {product.badge}
                </span>
              )}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-primary" />
                </div>
                <p className="text-text-muted text-sm">{product.name[locale]}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
                {product.name[locale]}
              </h1>
              <p className="text-lg text-accent font-medium mb-4">
                {product.tagline[locale]}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {product.description[locale]}
              </p>

              <div className="text-3xl font-bold text-text-primary mb-6">
                {formatPrice(locale === "ko" ? product.price.krw : product.price.usd, locale)}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/store">
                  <Button size="lg" className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    {t("inquire")}
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button variant="outline" size="lg">
                    {t("inquire")}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Features */}
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
            {t("features")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-section rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-primary mb-4">
                  {iconMap[feature.icon] || <Cpu className="w-6 h-6" />}
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  {feature.title[locale]}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {feature.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Specs Table */}
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
            {t("specs")}
          </h2>
          <div className="max-w-2xl mx-auto bg-section rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="p-4 text-sm text-text-muted w-1/3">
                      {spec.label[locale]}
                    </td>
                    <td className="p-4 text-sm text-text-primary font-medium">
                      {spec.value[locale]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
