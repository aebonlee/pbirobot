import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ContactContent } from "@/components/contact/ContactContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "문의" : "Contact",
    description: isKo
      ? "PBI Robot에 문의하세요. 제품 상담, 기술 지원, 파트너십 문의를 받고 있습니다."
      : "Contact PBI Robot for product consultation, technical support, and partnership inquiries.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <ContactContent />
    </div>
  );
}
