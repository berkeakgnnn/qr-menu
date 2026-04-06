"use client";

import { useLanguage } from "@/lib/language-context";
import { restaurantInfo } from "@/lib/restaurant-data";

export function RestaurantFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-5 py-8 px-6 text-center bg-[#0d0d0d] border-t border-dark-border">
      <div className="w-8 h-px bg-gold mx-auto mb-3" />
      <div className="text-xl text-dark-text font-[family-name:var(--font-cormorant)] italic">
        {restaurantInfo.name}
      </div>
      <div className="text-[9px] text-dark-subtle mt-2 tracking-[2px] uppercase font-[family-name:var(--font-inter)]">
        {t(restaurantInfo.location)}
      </div>
      <div className="text-[9px] text-dark-subtle mt-1 font-[family-name:var(--font-inter)]">
        {t(restaurantInfo.hours)}
      </div>
      <div className="w-5 h-px bg-gold/25 mx-auto my-4" />
      <div className="text-[8px] text-dark-dim font-[family-name:var(--font-inter)]">
        Powered by QR Menü
      </div>
    </footer>
  );
}
