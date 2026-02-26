"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMPANY_INFO } from "@/lib/constants";
import { images } from "@/lib/images";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#0a1a2e] text-gray-300">
      <div className="container-custom py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src={images.logo}
                alt="PBI Robot"
                width={140}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {t("common.companyFullName")}
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500/70" />
                {t("common.phone")}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500/70" />
                {t("common.email")}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-sky-500/70" />
                <span>{t("common.address")}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.aboutCompany")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/journey"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.journey")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/brand"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.brand")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
              {t("footer.products")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.store")}
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.quote")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
              {t("footer.support")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            {t("common.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/contact"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
