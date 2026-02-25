import { getTranslations } from "next-intl/server";
import { Timeline } from "@/components/about/Timeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "journey" });
  return {
    title: locale === "ko" ? "연혁" : "Our Journey",
    description: t("subtitle"),
  };
}

export default function JourneyPage() {
  return (
    <div className="pt-20">
      <Timeline />
    </div>
  );
}
