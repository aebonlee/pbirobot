import { setRequestLocale } from "next-intl/server";
import { CartContent } from "@/components/store/CartContent";

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
