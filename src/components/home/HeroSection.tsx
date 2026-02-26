"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";

const heroSlides = [
  images.hero,
  images.ultra.main,
  images.pro.main,
  images.details.underwater1,
  images.ultra.aerial,
];

const SLIDE_INTERVAL = 6000;

export function HeroSection() {
  const t = useTranslations("home.hero");
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[current]}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay: white 93% opacity (~7% image visibility) */}
      <div className="absolute inset-0 bg-white/[0.93]" />

      {/* Subtle gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-white/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-primary"
                : "w-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              {t("subtitle")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-6"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline" size="lg" className="gap-2 backdrop-blur-sm">
                {t("ctaSecondary")}
              </Button>
            </Link>
          </motion.div>

          {/* Product showcase - synced with background slide */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 lg:mt-24 relative"
          >
            <div className="relative mx-auto max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroSlides[current]}
                    alt="AquaSense - AI Robotic Pool Cleaner"
                    fill
                    className="object-cover"
                    priority={current === 0}
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Glow effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-primary/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
