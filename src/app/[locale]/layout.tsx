import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
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

  const baseUrl = "https://pbirobot.dreamitbiz.com";
  const title = isKo
    ? "PBI Robot - AI 로봇 수영장 청소기"
    : "PBI Robot - AI Robotic Pool Cleaner";
  const description = isKo
    ? "AquaSense 시리즈 - 스마트한 수영장 관리의 시작. AI 기반 로봇 수영장 청소기."
    : "AquaSense Series - Smart pool management starts here. AI-powered robotic pool cleaners.";

  return {
    title: {
      default: title,
      template: isKo ? "%s | PBI Robot" : "%s | PBI Robot",
    },
    description,
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ko: `${baseUrl}/ko`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName: "PBI Robot",
      locale: isKo ? "ko_KR" : "en_US",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "PBI Robot - AquaSense AI Robotic Pool Cleaner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
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

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
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
          <AuthProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
