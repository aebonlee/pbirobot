import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CartContent } from "@/components/store/CartContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "장바구니" : "Cart",
    description: isKo
      ? "장바구니에 담긴 상품을 확인하고 주문하세요."
      : "Review items in your cart and proceed to checkout.",
  };
}

export default async function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <CartContent />
    </div>
  );
}
