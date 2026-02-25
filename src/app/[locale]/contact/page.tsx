import { setRequestLocale } from "next-intl/server";
import { ContactContent } from "@/components/contact/ContactContent";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <ContactContent />
    </div>
  );
}
