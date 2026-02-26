import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Timeline } from "@/components/about/Timeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "연혁" : "Our Journey",
    description: isKo
      ? "PBI Robot의 설립부터 현재까지의 기업 연혁을 확인하세요."
      : "Explore PBI Robot's journey from founding to the present.",
  };
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <Timeline />
    </div>
  );
}
