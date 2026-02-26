import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { FAQContent } from "@/components/faq/FAQContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "자주 묻는 질문" : "FAQ",
    description: isKo
      ? "AquaSense 로봇 수영장 청소기에 대해 자주 묻는 질문과 답변을 확인하세요."
      : "Find answers to frequently asked questions about AquaSense robotic pool cleaners.",
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <FAQContent />
    </div>
  );
}
