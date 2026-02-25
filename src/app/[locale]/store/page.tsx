import { setRequestLocale } from "next-intl/server";
import { StoreContent } from "@/components/store/StoreContent";

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <StoreContent />
    </div>
  );
}
