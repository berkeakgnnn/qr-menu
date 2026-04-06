"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { RestaurantItem } from "./restaurant-item";
import type { Category } from "@/lib/types";

export function RestaurantCategory({
  category,
  showBanner,
}: {
  category: Category;
  showBanner: boolean;
}) {
  const { t } = useLanguage();

  return (
    <section id={`category-${category.id}`}>
      {/* Category divider photo — shown between categories */}
      {showBanner && (
        <div className="relative h-[160px] md:h-[200px] mt-6 overflow-hidden">
          <Image
            src={category.banner}
            alt={t(category.name)}
            fill
            className="object-cover brightness-[0.3]"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] tracking-[5px] text-gold font-[family-name:var(--font-inter)] uppercase">
              {t(category.name)}
            </span>
          </div>
        </div>
      )}

      {/* Category title — always shown */}
      <div className="py-6 md:py-8 text-center">
        <div className="text-[9px] tracking-[5px] text-gold font-[family-name:var(--font-inter)] uppercase">
          {t(category.name)}
        </div>
        <div className="w-6 h-px bg-gold/25 mx-auto mt-2" />
      </div>

      {/* Item list */}
      {category.items.map((item) => (
        <RestaurantItem key={item.id} item={item} />
      ))}
    </section>
  );
}
