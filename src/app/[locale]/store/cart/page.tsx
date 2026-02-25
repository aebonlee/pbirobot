import { getTranslations } from "next-intl/server";
import { CartContent } from "@/components/store/CartContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "store.cart" });
  return {
    title: t("title"),
  };
}

export default function CartPage() {
  return (
    <div className="pt-20">
      <CartContent />
    </div>
  );
}
