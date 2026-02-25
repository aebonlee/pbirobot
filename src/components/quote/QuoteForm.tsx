"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Send, CheckCircle } from "lucide-react";

const quoteSchema = z.object({
  companyName: z.string().optional(),
  contactName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  poolType: z.string().optional(),
  poolSize: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const t = useTranslations("quote");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    const subject = encodeURIComponent(`[견적요청] ${data.companyName || data.contactName}`);
    const body = encodeURIComponent(
      `회사명: ${data.companyName || "-"}\n담당자: ${data.contactName}\n이메일: ${data.email}\n연락처: ${data.phone}\n수영장 유형: ${data.poolType || "-"}\n수영장 크기: ${data.poolSize || "-"}\n수량: ${data.quantity || "-"}\n\n${data.message || ""}`
    );
    window.open(`mailto:info@pbirobot.com?subject=${subject}&body=${body}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-xl mx-auto bg-section rounded-2xl border border-border p-12 text-center">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h2 className="text-xl font-bold text-text-primary mb-2">{t("form.success")}</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto bg-section rounded-2xl border border-border p-6 lg:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                id="companyName"
                label={t("form.companyName")}
                {...register("companyName")}
              />
              <Input
                id="contactName"
                label={t("form.contactName")}
                error={errors.contactName?.message}
                {...register("contactName")}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                id="email"
                type="email"
                label={t("form.email")}
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                id="phone"
                label={t("form.phone")}
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <Input
                id="poolType"
                label={t("form.poolType")}
                {...register("poolType")}
              />
              <Input
                id="poolSize"
                label={t("form.poolSize")}
                {...register("poolSize")}
              />
              <Input
                id="quantity"
                label={t("form.quantity")}
                type="number"
                {...register("quantity")}
              />
            </div>
            <Textarea
              id="message"
              label={t("form.message")}
              {...register("message")}
            />
            <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
              <Send className="w-4 h-4" />
              {t("form.submit")}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
