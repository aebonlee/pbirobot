"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useCartStore } from "@/store/cart-store";
import { productImages } from "@/lib/images";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

export function StoreContent() {
  const t = useTranslations("store");
  const tc = useTranslations("common");
  const locale = useLocale() as "ko" | "en";
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name[locale],
      price: locale === "ko" ? product.price.krw : product.price.usd,
      image: product.images[0] || "",
    });
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">
                        {product.name[locale]}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {product.tagline[locale]}
                      </p>
                    </div>
                    <div className="text-xl font-bold text-accent">
                      {formatPrice(locale === "ko" ? product.price.krw : product.price.usd, locale)}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button
                        onClick={() => handleAddToCart(product.id)}
                        className="flex-1 gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {tc("addToCart")}
                      </Button>
                      <Link href={`/products/${product.slug}`}>
                        <Button variant="outline">{tc("learnMore")}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
