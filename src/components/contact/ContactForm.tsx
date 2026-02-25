"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `이름: ${data.name}\n이메일: ${data.email}\n연락처: ${data.phone || "-"}\n\n${data.message}`
    );
    window.open(`mailto:info@pbirobot.com?subject=${subject}&body=${body}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-section rounded-2xl border border-border p-12 text-center">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <p className="text-lg font-medium text-text-primary">{t("success")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-section rounded-2xl border border-border p-6 lg:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          id="name"
          label={t("name")}
          placeholder={t("namePlaceholder")}
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          id="phone"
          label={t("phone")}
          placeholder={t("phonePlaceholder")}
          {...register("phone")}
        />
        <Input
          id="subject"
          label={t("subject")}
          placeholder={t("subjectPlaceholder")}
          error={errors.subject?.message}
          {...register("subject")}
        />
      </div>
      <Textarea
        id="message"
        label={t("message")}
        placeholder={t("messagePlaceholder")}
        error={errors.message?.message}
        {...register("message")}
      />
      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        <Send className="w-4 h-4" />
        {t("submit")}
      </Button>
    </form>
  );
}
