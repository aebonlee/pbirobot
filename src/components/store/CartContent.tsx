"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";

export function CartContent() {
  const t = useTranslations("store.cart");
  const locale = useLocale();
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <section className="py-24 lg:py-32">
        <div className="container-custom text-center">
          <ShoppingBag className="w-16 h-16 text-text-muted mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-2">{t("empty")}</h2>
          <Link href="/store">
            <Button variant="outline" className="mt-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("continueShopping")}
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <SectionTitle title={t("title")} />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex items-center gap-4 p-4 bg-section rounded-xl border border-border"
              >
                <div className="w-20 h-20 bg-card rounded-lg flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-1">
                    {formatPrice(item.price, locale)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-card hover:bg-card-hover border border-border transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-text-primary">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-card hover:bg-card-hover border border-border transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="p-2 text-text-muted hover:text-error transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-section rounded-2xl border border-border p-6">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">{t("subtotal")}</span>
                <span className="text-text-primary font-medium">
                  {formatPrice(getTotalPrice(), locale)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">{t("shipping")}</span>
                <span className="text-success font-medium">{t("shippingFree")}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="text-text-primary font-semibold">{t("total")}</span>
                <span className="text-xl font-bold text-accent">
                  {formatPrice(getTotalPrice(), locale)}
                </span>
              </div>
            </div>
            <Button size="lg" className="w-full">
              {t("checkout")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
