import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { StoreContent } from "@/components/store/StoreContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "스토어" : "Store",
    description: isKo
      ? "AquaSense 로봇 수영장 청소기를 온라인으로 구매하세요."
      : "Shop AquaSense robotic pool cleaners online.",
  };
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <StoreContent />
    </div>
  );
}
