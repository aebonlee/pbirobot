import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { VisionSection } from "@/components/about/VisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CertificationBadges } from "@/components/about/CertificationBadges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "회사소개" : "About Us",
    description: isKo
      ? "PBI Robot - AI 로봇 수영장 청소기 전문 기업. 비전, 핵심가치, 인증 정보를 확인하세요."
      : "PBI Robot - AI robotic pool cleaner specialists. Discover our vision, values, and certifications.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <VisionSection />
      <ValuesSection />
      <CertificationBadges />
    </div>
  );
}
