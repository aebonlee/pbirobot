import { getTranslations } from "next-intl/server";
import { StoreContent } from "@/components/store/StoreContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "store" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function StorePage() {
  return (
    <div className="pt-20">
      <StoreContent />
    </div>
  );
}
