import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import koMessages from '../../messages/ko.json';
import enMessages from '../../messages/en.json';

type Locale = 'ko' | 'en';
type Messages = Record<string, unknown>;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const allMessages: Record<Locale, Messages> = {
  ko: koMessages as unknown as Messages,
  en: enMessages as unknown as Messages,
};

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pbi-locale');
      if (saved === 'en') return 'en';
    }
    return 'ko';
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('pbi-locale', newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko';
      localStorage.setItem('pbi-locale', next);
      return next;
    });
  }, []);

  const messages = allMessages[locale];

  const value = useMemo(() => ({
    locale,
    setLocale,
    toggleLocale,
    messages,
  }), [locale, setLocale, toggleLocale, messages]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale(): Locale {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLocale must be used within LanguageProvider');
  return context.locale;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

export function useTranslations(namespace?: string) {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslations must be used within LanguageProvider');

  const t = useCallback((key: string): string => {
    const fullPath = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(context.messages, fullPath);
  }, [context.messages, namespace]);

  return t;
}
