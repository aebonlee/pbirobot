import { setRequestLocale } from "next-intl/server";
import { Timeline } from "@/components/about/Timeline";

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <Timeline />
    </div>
  );
}
