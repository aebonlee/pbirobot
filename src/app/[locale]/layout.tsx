import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";

  return {
    title: {
      default: isKo
        ? "PBI Robot - AI 로봇 수영장 청소기"
        : "PBI Robot - AI Robotic Pool Cleaner",
      template: isKo ? "%s | PBI Robot" : "%s | PBI Robot",
    },
    description: isKo
      ? "AquaSense 시리즈 - 스마트한 수영장 관리의 시작. AI 기반 로봇 수영장 청소기."
      : "AquaSense Series - Smart pool management starts here. AI-powered robotic pool cleaners.",
    metadataBase: new URL("https://pbirobot.com"),
    openGraph: {
      type: "website",
      locale: isKo ? "ko_KR" : "en_US",
      siteName: "PBI Robot",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-page text-text-secondary font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
