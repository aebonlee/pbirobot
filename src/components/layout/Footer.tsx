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
    <footer className="bg-section border-t border-border">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={images.logo}
                alt="PBI Robot"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-text-muted mb-4 leading-relaxed">
              {t("common.companyFullName")}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t("common.phone")}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t("common.email")}
              </a>
              <div className="flex items-start gap-2 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{t("common.address")}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.aboutCompany")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/journey"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.journey")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              {t("footer.products")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.store")}
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.quote")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              {t("footer.support")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            {t("common.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/contact"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
