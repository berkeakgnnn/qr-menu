"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex justify-center py-3.5 bg-[#f0e8da]">
      <div className="flex">
        <button
          onClick={language === "en" ? toggleLanguage : undefined}
          className={`px-5 py-1.5 text-xs font-semibold tracking-wide rounded-l-full transition-colors font-[family-name:var(--font-inter)] ${
            language === "tr"
              ? "bg-coffee-800 text-[#faf6f0]"
              : "border border-coffee-800 border-r-0 text-coffee-800 opacity-60"
          }`}
        >
          Türkçe
        </button>
        <button
          onClick={language === "tr" ? toggleLanguage : undefined}
          className={`px-5 py-1.5 text-xs tracking-wide rounded-r-full transition-colors font-[family-name:var(--font-inter)] ${
            language === "en"
              ? "bg-coffee-800 text-[#faf6f0] font-semibold"
              : "border border-coffee-800 border-l-0 text-coffee-800 opacity-60"
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
}
