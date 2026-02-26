"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart } from "lucide-react";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-24">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={images.logo}
              alt="PBI Robot"
              width={160}
              height={56}
              className="h-10 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "px-5 py-2.5 text-xl font-bold rounded-lg transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/store/cart"
              className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <LocaleSwitcher />
            <Link
              href="/quote"
              className="hidden sm:inline-flex px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-base lg:text-lg font-bold rounded-lg transition-colors"
            >
              {t("quote")}
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60">
          <div className="container-custom py-3 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "block px-4 py-3.5 text-base font-semibold rounded-xl transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary bg-primary/8"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/quote"
              className="block mx-4 mt-2 py-3 text-center text-base font-bold text-white bg-primary hover:bg-primary-hover rounded-xl transition-colors"
            >
              {t("quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
