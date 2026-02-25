import { getTranslations } from "next-intl/server";
import { FAQContent } from "@/components/faq/FAQContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function FAQPage() {
  return (
    <div className="pt-20">
      <FAQContent />
    </div>
  );
}
