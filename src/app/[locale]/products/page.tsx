import { setRequestLocale } from "next-intl/server";
import { ProductList } from "@/components/products/ProductList";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <ProductList />
    </div>
  );
}
