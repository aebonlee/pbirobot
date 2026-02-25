import { getTranslations } from "next-intl/server";
import { ProductList } from "@/components/products/ProductList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductList />
    </div>
  );
}
