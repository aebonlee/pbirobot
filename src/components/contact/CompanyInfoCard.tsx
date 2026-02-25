"use client";

import { useTranslations } from "next-intl";
import { COMPANY_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function CompanyInfoCard() {
  const t = useTranslations("contact.info");

  const items = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("address"),
      value: COMPANY_INFO.address.ko,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("phone"),
      value: COMPANY_INFO.phone,
      href: `tel:${COMPANY_INFO.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("email"),
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: t("hours"),
      value: t("hoursValue"),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-section rounded-2xl border border-border p-6 lg:p-8">
        <h3 className="text-lg font-semibold text-text-primary mb-6">{t("title")}</h3>
        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-primary mt-0.5 shrink-0">{item.icon}</div>
              <div>
                <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-text-primary hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-text-primary">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-section rounded-2xl border border-border overflow-hidden">
        <div className="aspect-[4/3] flex items-center justify-center bg-card">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-text-muted">Kakao Map</p>
          </div>
        </div>
      </div>
    </div>
  );
}
