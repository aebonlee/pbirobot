import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BrandContent } from "@/components/about/BrandContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "브랜드 스토리" : "Brand Story",
    description: isKo
      ? "PBI Robot의 브랜드 아이덴티티, 로고, 브랜드 컬러를 소개합니다."
      : "Discover PBI Robot's brand identity, logo, and brand colors.",
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <BrandContent />
    </div>
  );
}
