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
        <div className="relative h-[180px] md:h-[220px] mt-10 overflow-hidden">
          <Image
            src={category.banner}
            alt={t(category.name)}
            fill
            className="object-cover brightness-[0.25] saturate-[0.7]"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm md:text-base tracking-[5px] text-pub-amber font-[family-name:var(--font-inter)] font-medium uppercase">
              {t(category.name)}
            </span>
          </div>
        </div>
      )}

      <div className="py-6 md:py-8 text-center">
        <div className="text-xs md:text-sm tracking-[5px] text-pub-amber font-[family-name:var(--font-inter)] font-medium uppercase">
          {t(category.name)}
        </div>
        <div className="w-8 h-px bg-pub-amber/25 mx-auto mt-3" />
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
