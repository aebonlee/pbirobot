import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors",
        "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
      )}
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "ko" ? "EN" : "KO"}</span>
    </button>
  );
}
