"use client";

import { useLanguage } from "@/lib/language-context";
import type { DrinkItem } from "@/lib/pub-data";

export function PubDrinkItem({ item }: { item: DrinkItem }) {
  const { t } = useLanguage();

  return (
    <div data-animate className="px-5 md:px-10 py-3.5 border-b border-pub-border opacity-0">
      <div className="flex justify-between items-baseline gap-2">
        <h3 className="text-[15px] text-pub-text font-bold font-[family-name:var(--font-playfair)]">
          {t(item.name)}
        </h3>
        <div className="flex-1 border-b border-dotted border-pub-dot min-w-[16px] translate-y-[-4px]" />
        <span className="text-[15px] text-pub-amber font-bold font-[family-name:var(--font-inter)]">
          &#8378;{item.price}
        </span>
      </div>
      <p className="text-[10px] text-pub-muted mt-1 leading-relaxed font-[family-name:var(--font-inter)]">
        {t(item.description)}
      </p>
      {(item.volume || item.abv || item.type) && (
        <div className="flex gap-1.5 mt-1.5">
          {item.volume && (
            <span className="text-[8px] text-pub-dim bg-pub-card px-1.5 py-0.5 rounded font-[family-name:var(--font-inter)]">
              {item.volume}
            </span>
          )}
          {item.abv && (
            <span className="text-[8px] text-pub-dim bg-pub-card px-1.5 py-0.5 rounded font-[family-name:var(--font-inter)]">
              {item.abv}
            </span>
          )}
          {item.type && (
            <span className="text-[8px] text-pub-dim bg-pub-card px-1.5 py-0.5 rounded font-[family-name:var(--font-inter)]">
              {item.type}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
