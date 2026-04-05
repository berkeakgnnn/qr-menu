"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Language, LocalizedText } from "./types";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  }, []);

  const t = useCallback(
    (text: LocalizedText) => text[language],
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
