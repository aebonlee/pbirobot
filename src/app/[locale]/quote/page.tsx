import { getTranslations } from "next-intl/server";
import { QuoteForm } from "@/components/quote/QuoteForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function QuotePage() {
  return (
    <div className="pt-20">
      <QuoteForm />
    </div>
  );
}
