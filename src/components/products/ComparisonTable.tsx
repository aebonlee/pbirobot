"use client";

import { useTranslations, useLocale } from "next-intl";
import { products } from "@/data/products";
import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const t = useTranslations("products");
  const locale = useLocale() as "ko" | "en";

  const comparisonRows = [
    { label: { ko: "가격", en: "Price" }, values: products.map((p) => locale === "ko" ? `${(p.price.krw / 10000).toFixed(0)}만원` : `$${p.price.usd}`) },
    { label: { ko: "청소 범위", en: "Coverage" }, values: ["150㎡", "300㎡"] },
    { label: { ko: "청소 시간", en: "Runtime" }, values: ["3h", "5h"] },
    { label: { ko: "필터 용량", en: "Filter" }, values: ["5L", "8L"] },
    { label: { ko: "AI 내비게이션", en: "AI Navigation" }, values: [true, true] },
    { label: { ko: "앱 제어", en: "App Control" }, values: [true, true] },
    { label: { ko: "수질 모니터링", en: "Water Quality" }, values: [false, true] },
    { label: { ko: "LTE 연결", en: "LTE" }, values: [false, true] },
    { label: { ko: "멀티 풀 관리", en: "Multi-Pool" }, values: [false, true] },
    { label: { ko: "보증", en: "Warranty" }, values: ["2Y", "3Y"] },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
        {t("compare")}
      </h3>
      <div className="bg-section rounded-2xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-left text-sm font-medium text-text-muted" />
              {products.map((product) => (
                <th key={product.id} className="p-4 text-center">
                  <span className="text-sm font-bold text-text-primary">{product.name[locale]}</span>
                  {product.badge && (
                    <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-primary/20 text-primary rounded">
                      {product.badge}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-card/50 transition-colors">
                <td className="p-4 text-sm text-text-secondary">{row.label[locale]}</td>
                {row.values.map((val, j) => (
                  <td key={j} className="p-4 text-center text-sm">
                    {typeof val === "boolean" ? (
                      val ? (
                        <Check className="w-5 h-5 text-success mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-text-muted mx-auto" />
                      )
                    ) : (
                      <span className="text-text-primary font-medium">{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
