"use client";

import { useLanguage } from "@/lib/language-context";
import { pubInfo } from "@/lib/pub-data";

export function PubFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-4 py-7 px-5 text-center border-t border-pub-border">
      <div className="text-base text-pub-text font-[family-name:var(--font-playfair)]">
        {pubInfo.name}
      </div>
      <div className="text-[8px] text-pub-dim mt-1.5 tracking-[2px] uppercase font-[family-name:var(--font-inter)]">
        {t(pubInfo.location)}
      </div>
      <div className="text-[8px] text-pub-dim mt-0.5 font-[family-name:var(--font-inter)]">
        {t(pubInfo.hours)}
      </div>
      <div className="w-5 h-px bg-pub-amber/20 mx-auto my-3" />
      <a
        href="https://vexloft.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[7px] text-pub-dot font-[family-name:var(--font-inter)] hover:text-pub-amber transition-colors"
      >
        Vexloft Studio
      </a>
    </footer>
  );
}
