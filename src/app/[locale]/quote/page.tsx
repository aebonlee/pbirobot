import { setRequestLocale } from "next-intl/server";
import { QuoteForm } from "@/components/quote/QuoteForm";

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
