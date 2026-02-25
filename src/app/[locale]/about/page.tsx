import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { VisionSection } from "@/components/about/VisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CertificationBadges } from "@/components/about/CertificationBadges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: locale === "ko" ? "회사소개" : "About Us",
    description: t("hero.subtitle"),
  };
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <VisionSection />
      <ValuesSection />
      <CertificationBadges />
    </div>
  );
}
