import { setRequestLocale } from "next-intl/server";
import { VisionSection } from "@/components/about/VisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CertificationBadges } from "@/components/about/CertificationBadges";

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
