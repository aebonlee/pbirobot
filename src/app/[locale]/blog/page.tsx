import { getTranslations } from "next-intl/server";
import { BlogList } from "@/components/blog/BlogList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <BlogList />
    </div>
  );
}
