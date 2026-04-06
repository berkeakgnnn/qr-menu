"use client";

import { useLanguage } from "@/lib/language-context";
import { cafeInfo } from "@/lib/menu-data";

export function MenuFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-6 py-8 px-5 text-center bg-[#f0e8da]">
      <div className="text-lg text-coffee-800 font-[family-name:var(--font-playfair)] italic">
        {cafeInfo.name}
      </div>
      <div className="text-[10px] text-coffee-muted mt-1.5 tracking-wide font-[family-name:var(--font-inter)]">
        {t(cafeInfo.location)}
      </div>
      <div className="text-[10px] text-coffee-muted mt-0.5 font-[family-name:var(--font-inter)]">
        {t(cafeInfo.hours)}
      </div>
      <div className="w-8 h-px bg-coffee-accent mx-auto my-3" />
      <div className="text-[9px] text-[#b0a090] font-[family-name:var(--font-inter)]">
        Powered by QR Menü
      </div>
    </footer>
  );
}
