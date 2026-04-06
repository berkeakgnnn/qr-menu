"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { ProductCard } from "./product-card";
import type { Category } from "@/lib/types";

export function CategorySection({ category }: { category: Category }) {
  const { t } = useLanguage();

  return (
    <section id={`category-${category.id}`} className="pt-4">
      {/* Category Banner */}
      <div className="relative h-[120px] mx-5 rounded-2xl overflow-hidden">
        <Image
          src={category.banner}
          alt={t(category.name)}
          fill
          className="object-cover brightness-[0.45]"
          sizes="(max-width: 768px) calc(100vw - 40px), 400px"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-lg tracking-[3px] uppercase font-[family-name:var(--font-inter)] font-semibold">
            {t(category.name)}
          </h2>
        </div>
      </div>

      {/* Category Label */}
      <div className="px-5 pt-5 pb-2">
        <div className="text-[10px] tracking-[3px] text-coffee-accent font-semibold font-[family-name:var(--font-inter)] uppercase">
          {t(category.name)}
        </div>
        <div className="w-6 h-0.5 bg-coffee-accent mt-1.5" />
      </div>

      {/* Product Cards */}
      <div className="px-5 space-y-2 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
        {category.items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
