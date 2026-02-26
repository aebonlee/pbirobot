import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ProductList } from "@/components/products/ProductList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "제품" : "Products",
    description: isKo
      ? "AquaSense 2 Pro & Ultra - AI 기반 로봇 수영장 청소기 라인업. 제품 비교 및 사양을 확인하세요."
      : "AquaSense 2 Pro & Ultra - AI-powered robotic pool cleaner lineup. Compare products and specs.",
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <ProductList />
    </div>
  );
}
