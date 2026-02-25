import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { products, getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/products/ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="pt-20">
      <ProductDetail product={product} />
    </div>
  );
}
