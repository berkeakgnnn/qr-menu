"use client";

import { useLanguage } from "@/lib/language-context";
import type { MenuItem } from "@/lib/types";

export function RestaurantItem({ item }: { item: MenuItem }) {
  const { t } = useLanguage();

  return (
    <div data-animate className="px-6 md:px-10 py-4 border-b border-[#151515] opacity-0">
      <div className="flex justify-between items-baseline gap-2">
        <h3 className="text-[17px] text-dark-text font-[family-name:var(--font-cormorant)] italic">
          {t(item.name)}
        </h3>
        <div className="flex-1 border-b border-dotted border-[#2a2a2a] min-w-[20px] translate-y-[-4px]" />
        <span className="text-[15px] text-gold font-[family-name:var(--font-inter)] font-medium">
          ₺{item.price}
        </span>
      </div>
      <p className="text-[11px] text-dark-muted mt-1.5 leading-relaxed font-[family-name:var(--font-inter)]">
        {t(item.description)}
      </p>
    </div>
  );
}
