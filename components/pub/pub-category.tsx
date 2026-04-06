"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { PubDrinkItem } from "./pub-drink-item";
import { PubFoodCard } from "./pub-food-card";
import type { PubCategory } from "@/lib/pub-data";

export function PubCategorySection({
  category,
  showBanner,
}: {
  category: PubCategory;
  showBanner: boolean;
}) {
  const { t } = useLanguage();

  return (
    <section id={`category-${category.id}`}>
      {showBanner && (
        <div className="relative h-[140px] mt-6 overflow-hidden">
          <Image
            src={category.banner}
            alt={t(category.name)}
            fill
            className="object-cover brightness-[0.2] saturate-[0.7]"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] tracking-[5px] text-pub-amber font-[family-name:var(--font-inter)] font-medium uppercase">
              {t(category.name)}
            </span>
          </div>
        </div>
      )}

      <div className="py-5 text-center">
        <div className="text-[9px] tracking-[5px] text-pub-amber font-[family-name:var(--font-inter)] font-medium uppercase">
          {t(category.name)}
        </div>
        <div className="w-6 h-px bg-pub-amber/20 mx-auto mt-2" />
      </div>

      {category.layout === "chalkboard" && category.drinks && (
        <div>
          {category.drinks.map((drink) => (
            <PubDrinkItem key={drink.id} item={drink} />
          ))}
        </div>
      )}

      {category.layout === "grid" && category.foods && (
        <div className="px-4 grid grid-cols-2 gap-2.5">
          {category.foods.map((food) => (
            <PubFoodCard key={food.id} item={food} />
          ))}
        </div>
      )}
    </section>
  );
}
