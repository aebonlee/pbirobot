"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { images } from "@/lib/images";
import { Droplets, Bot, Lightbulb } from "lucide-react";

const brandColors = [
  {
    name: "Black",
    hex: "#111827",
    textKey: "blackDesc" as const,
    preview: "bg-gray-900",
    text: "text-white",
  },
  {
    name: "Blue",
    hex: "#0056B3",
    textKey: "blueDesc" as const,
    preview: "bg-[#0056b3]",
    text: "text-white",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    textKey: "whiteDesc" as const,
    preview: "bg-white border-2 border-gray-200",
    text: "text-gray-900",
  },
];

export function BrandContent() {
  const t = useTranslations("brand");

  return (
    <div className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        {/* Logo Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
              {t("logoTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Logo on white */}
              <div className="space-y-6">
                <div className="bg-white border border-border rounded-2xl p-12 flex items-center justify-center">
                  <Image
                    src={images.logo}
                    alt="PBI Robot Logo"
                    width={240}
                    height={80}
                    className="w-48 h-auto"
                  />
                </div>
                {/* Logo on dark */}
                <div className="bg-gray-950 rounded-2xl p-12 flex items-center justify-center">
                  <Image
                    src={images.logo}
                    alt="PBI Robot Logo (Inverted)"
                    width={240}
                    height={80}
                    className="w-48 h-auto brightness-0 invert"
                  />
                </div>
              </div>
              {/* Description */}
              <div>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t("logoDescription")}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand Meaning */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
              {t("meaningTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { key: "pure", icon: <Droplets className="w-8 h-8" />, letter: "P" },
                { key: "bot", icon: <Bot className="w-8 h-8" />, letter: "B" },
                { key: "innovation", icon: <Lightbulb className="w-8 h-8" />, letter: "I" },
              ].map((item, index) => (
                <ScrollReveal key={item.key} delay={index * 0.15}>
                  <div className="text-center p-8 bg-section rounded-2xl border border-border hover:border-gray-900/20 transition-all duration-300 group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-1">{item.letter}</div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {t(item.key)}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t(`${item.key}Desc`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Brand Colors */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
              {t("colorsTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {brandColors.map((color, index) => (
                <ScrollReveal key={color.name} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border overflow-hidden">
                    <div className={`${color.preview} h-32 flex items-end p-4`}>
                      <span className={`text-sm font-mono font-semibold ${color.text}`}>
                        {color.hex}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-text-primary mb-1">{color.name}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {t(color.textKey)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Logo Usage */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
              {t("usageTitle")}
            </h2>
            <div className="bg-section rounded-2xl border border-border p-8 lg:p-12">
              <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
                {t("usageDesc")}
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {/* Minimum size */}
                <div className="text-center">
                  <div className="bg-white rounded-xl border border-border p-6 mb-3 flex items-center justify-center h-24">
                    <Image
                      src={images.logo}
                      alt="Minimum size"
                      width={80}
                      height={28}
                      className="w-20 h-auto"
                    />
                  </div>
                  <p className="text-xs text-text-muted">Min Width: 80px</p>
                </div>
                {/* Clear space */}
                <div className="text-center">
                  <div className="bg-white rounded-xl border border-border p-6 mb-3 flex items-center justify-center h-24">
                    <div className="border-2 border-dashed border-gray-300 p-3 rounded-lg">
                      <Image
                        src={images.logo}
                        alt="Clear space"
                        width={80}
                        height={28}
                        className="w-16 h-auto"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-text-muted">Clear Space</p>
                </div>
                {/* Dark background */}
                <div className="text-center">
                  <div className="bg-gray-900 rounded-xl p-6 mb-3 flex items-center justify-center h-24">
                    <Image
                      src={images.logo}
                      alt="Dark background"
                      width={80}
                      height={28}
                      className="w-20 h-auto brightness-0 invert"
                    />
                  </div>
                  <p className="text-xs text-text-muted">Dark Background</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
