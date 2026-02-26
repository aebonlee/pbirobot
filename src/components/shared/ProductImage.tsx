"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProductImageProps {
  variant: "pro" | "ultra";
  size?: "sm" | "md" | "lg";
  className?: string;
  showBadge?: boolean;
  badge?: string;
}

export function ProductImage({
  variant,
  size = "md",
  className,
  showBadge = false,
  badge,
}: ProductImageProps) {
  const isPro = variant === "pro";

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        isPro
          ? "bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"
          : "bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50",
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`grid-${variant}`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="20"
                cy="20"
                r="1"
                fill={isPro ? "#0078d4" : "#6366f1"}
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className={cn(
          "absolute w-2/3 h-2/3 rounded-full blur-3xl opacity-20",
          isPro ? "bg-blue-400" : "bg-indigo-400"
        )}
      />

      {/* Water ripple rings */}
      <motion.div
        className={cn(
          "absolute rounded-full border opacity-10",
          isPro ? "border-blue-400" : "border-indigo-400",
          size === "lg" ? "w-72 h-72" : size === "md" ? "w-56 h-56" : "w-40 h-40"
        )}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.05, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute rounded-full border opacity-10",
          isPro ? "border-sky-400" : "border-purple-400",
          size === "lg" ? "w-48 h-48" : size === "md" ? "w-36 h-36" : "w-28 h-28"
        )}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.05, 0.15] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Robot illustration */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 200 160"
          className={cn(
            size === "lg"
              ? "w-52 h-44"
              : size === "md"
                ? "w-40 h-32"
                : "w-28 h-24"
          )}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water surface line */}
          <motion.path
            d="M10 45 Q30 38, 50 45 Q70 52, 90 45 Q110 38, 130 45 Q150 52, 170 45 Q190 38, 200 45"
            stroke={isPro ? "#93c5fd" : "#a5b4fc"}
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            animate={{ d: [
              "M10 45 Q30 38, 50 45 Q70 52, 90 45 Q110 38, 130 45 Q150 52, 170 45 Q190 38, 200 45",
              "M10 45 Q30 52, 50 45 Q70 38, 90 45 Q110 52, 130 45 Q150 38, 170 45 Q190 52, 200 45",
              "M10 45 Q30 38, 50 45 Q70 52, 90 45 Q110 38, 130 45 Q150 52, 170 45 Q190 38, 200 45",
            ] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Robot body */}
          <rect
            x="45"
            y="60"
            width="110"
            height="50"
            rx="25"
            fill={isPro ? "url(#proGrad)" : "url(#ultraGrad)"}
          />
          <rect
            x="45"
            y="60"
            width="110"
            height="50"
            rx="25"
            fill="none"
            stroke={isPro ? "#0056b3" : "#4338ca"}
            strokeWidth="1.5"
            opacity="0.3"
          />

          {/* Top sensor dome */}
          <ellipse
            cx="100"
            cy="60"
            rx="20"
            ry="10"
            fill={isPro ? "#0078d4" : "#6366f1"}
            opacity="0.9"
          />
          <ellipse
            cx="100"
            cy="58"
            rx="12"
            ry="5"
            fill="white"
            opacity="0.3"
          />

          {/* LED indicator */}
          <motion.circle
            cx="100"
            cy="57"
            r="3"
            fill={isPro ? "#00d4ff" : "#a78bfa"}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Left eye/sensor */}
          <circle
            cx="75"
            cy="80"
            r="8"
            fill={isPro ? "#1e3a5f" : "#312e81"}
          />
          <circle cx="75" cy="80" r="5" fill={isPro ? "#00d4ff" : "#818cf8"} />
          <circle cx="73" cy="78" r="2" fill="white" opacity="0.6" />

          {/* Right eye/sensor */}
          <circle
            cx="125"
            cy="80"
            r="8"
            fill={isPro ? "#1e3a5f" : "#312e81"}
          />
          <circle
            cx="125"
            cy="80"
            r="5"
            fill={isPro ? "#00d4ff" : "#818cf8"}
          />
          <circle cx="123" cy="78" r="2" fill="white" opacity="0.6" />

          {/* Bottom brush roller */}
          <rect
            x="55"
            y="108"
            width="90"
            height="8"
            rx="4"
            fill={isPro ? "#0056b3" : "#4338ca"}
            opacity="0.6"
          />
          {/* Brush stripes */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect
              key={i}
              x={60 + i * 11}
              y="109"
              width="5"
              height="6"
              rx="1"
              fill={isPro ? "#93c5fd" : "#a5b4fc"}
              opacity="0.5"
            />
          ))}

          {/* Side jets */}
          <motion.g
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <circle
              cx="40"
              cy="85"
              r="3"
              fill={isPro ? "#93c5fd" : "#c4b5fd"}
              opacity="0.5"
            />
            <circle
              cx="35"
              cy="85"
              r="2"
              fill={isPro ? "#93c5fd" : "#c4b5fd"}
              opacity="0.3"
            />
          </motion.g>
          <motion.g
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <circle
              cx="160"
              cy="85"
              r="3"
              fill={isPro ? "#93c5fd" : "#c4b5fd"}
              opacity="0.5"
            />
            <circle
              cx="165"
              cy="85"
              r="2"
              fill={isPro ? "#93c5fd" : "#c4b5fd"}
              opacity="0.3"
            />
          </motion.g>

          {/* Bubble particles */}
          <motion.circle
            cx="60"
            cy="130"
            r="3"
            fill={isPro ? "#bfdbfe" : "#c7d2fe"}
            opacity="0.6"
            animate={{ cy: [130, 50], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="140"
            cy="135"
            r="2"
            fill={isPro ? "#bfdbfe" : "#c7d2fe"}
            opacity="0.5"
            animate={{ cy: [135, 45], opacity: [0.5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="100"
            cy="140"
            r="2.5"
            fill={isPro ? "#bfdbfe" : "#c7d2fe"}
            opacity="0.4"
            animate={{ cy: [140, 40], opacity: [0.4, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="proGrad" x1="45" y1="60" x2="155" y2="110">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="50%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
            <linearGradient id="ultraGrad" x1="45" y1="60" x2="155" y2="110">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="50%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Product label */}
      <div
        className={cn(
          "absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
          isPro
            ? "bg-blue-500/10 text-blue-700 border border-blue-200/50"
            : "bg-indigo-500/10 text-indigo-700 border border-indigo-200/50"
        )}
      >
        {isPro ? "AquaSense 2 Pro" : "AquaSense 2 Ultra"}
      </div>

      {/* Badge */}
      {showBadge && badge && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-primary text-white rounded-full z-10">
          {badge}
        </span>
      )}
    </div>
  );
}
