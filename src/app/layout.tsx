import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PBI Robot - AI 로봇 수영장 청소기",
  description: "AquaSense 시리즈 - 스마트한 수영장 관리의 시작",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
