import { setRequestLocale } from "next-intl/server";
import { BlogList } from "@/components/blog/BlogList";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <BlogList />
    </div>
  );
}
