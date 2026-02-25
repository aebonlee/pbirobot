import { setRequestLocale } from "next-intl/server";
import { FAQContent } from "@/components/faq/FAQContent";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <FAQContent />
    </div>
  );
}
