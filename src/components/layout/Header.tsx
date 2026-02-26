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
          ? "bg-gray-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-gray-950/80 backdrop-blur-md"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={images.logo}
              alt="PBI Robot"
              width={160}
              height={56}
              className="h-10 lg:h-14 w-auto brightness-0 invert"
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
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-white bg-white/15"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <Link
              href="/store/cart"
              className="relative p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <LocaleSwitcher />
            <Link
              href="/quote"
              className="hidden sm:inline-flex px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
            >
              {t("quote")}
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
        <div className="lg:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="container-custom py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-white bg-white/15"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/quote"
              className="block px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {t("quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
