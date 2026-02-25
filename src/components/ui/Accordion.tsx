"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-card-hover transition-colors"
            aria-expanded={openId === item.id}
          >
            <span className="text-sm font-medium text-text-primary pr-4">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-text-muted shrink-0 transition-transform duration-200",
                openId === item.id && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openId === item.id ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
