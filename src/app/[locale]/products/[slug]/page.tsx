import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { products, getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/products/ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name[locale as "ko" | "en"],
    description: product.tagline[locale as "ko" | "en"],
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
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
