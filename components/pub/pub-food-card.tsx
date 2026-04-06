"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import type { MenuItem } from "@/lib/types";

export function PubFoodCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage();

  return (
    <div data-animate className="bg-pub-card rounded-[10px] overflow-hidden border border-pub-card-border opacity-0">
      <div className="relative h-[110px]">
        <Image
          src={item.image}
          alt={t(item.name)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
      <div className="p-3">
        <h3 className="text-[13px] text-pub-text font-bold font-[family-name:var(--font-inter)]">
          {t(item.name)}
        </h3>
        <p className="text-[9px] text-pub-muted mt-1 leading-relaxed font-[family-name:var(--font-inter)]">
          {t(item.description)}
        </p>
        <div className="text-[14px] text-pub-amber font-bold mt-2 font-[family-name:var(--font-inter)]">
          &#8378;{item.price}
        </div>
      </div>
    </div>
  );
}
