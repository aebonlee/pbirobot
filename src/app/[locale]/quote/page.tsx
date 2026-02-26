import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { QuoteForm } from "@/components/quote/QuoteForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "견적 요청" : "Request a Quote",
    description: isKo
      ? "AquaSense 로봇 수영장 청소기의 견적을 요청하세요. 맞춤 상담을 제공합니다."
      : "Request a quote for AquaSense robotic pool cleaners. We provide customized consultation.",
  };
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <QuoteForm />
    </div>
  );
}
