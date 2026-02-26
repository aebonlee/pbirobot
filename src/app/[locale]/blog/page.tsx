import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BlogList } from "@/components/blog/BlogList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "블로그" : "Blog",
    description: isKo
      ? "PBI Robot의 최신 소식, 기술 인사이트, 수영장 관리 팁을 확인하세요."
      : "Latest news, tech insights, and pool care tips from PBI Robot.",
  };
}

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
