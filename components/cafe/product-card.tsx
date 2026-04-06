"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import type { MenuItem } from "@/lib/types";

export function ProductCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage();

  return (
    <div
      data-animate
      className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.08)] opacity-0"
    >
      <div className="relative h-[180px] md:h-[200px]">
        <Image
          src={item.image}
          alt={t(item.name)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="px-4 pt-3.5 pb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[17px] text-coffee-900 font-bold font-[family-name:var(--font-playfair)]">
            {t(item.name)}
          </h3>
          <span className="text-[17px] text-coffee-accent font-bold font-[family-name:var(--font-inter)]">
            ₺{item.price}
          </span>
        </div>
        <p className="text-xs text-coffee-muted mt-1.5 leading-relaxed font-[family-name:var(--font-inter)]">
          {t(item.description)}
        </p>
      </div>
    </div>
  );
}
