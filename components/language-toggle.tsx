"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { language, toggleLanguage } = useLanguage();

  if (variant === "dark") {
    return (
      <div className="flex">
        <button
          onClick={language === "en" ? toggleLanguage : undefined}
          className={`px-5 py-1.5 text-[10px] font-semibold tracking-[2px] rounded-l transition-colors font-[family-name:var(--font-inter)] ${
            language === "tr"
              ? "bg-gold text-dark-bg"
              : "border border-dark-dim text-dark-muted"
          }`}
        >
          TR
        </button>
        <button
          onClick={language === "tr" ? toggleLanguage : undefined}
          className={`px-5 py-1.5 text-[10px] tracking-[2px] rounded-r transition-colors font-[family-name:var(--font-inter)] ${
            language === "en"
              ? "bg-gold text-dark-bg font-semibold"
              : "border border-dark-dim border-l-0 text-dark-muted"
          }`}
        >
          EN
        </button>
      </div>
    );
  }

  // Light variant wraps itself in the beige background strip (cafe page relies on this)
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
