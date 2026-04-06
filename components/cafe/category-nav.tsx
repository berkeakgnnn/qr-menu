"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { categories } from "@/lib/menu-data";

export function CategoryNav() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(categories[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((category) => {
      const el = document.getElementById(`category-${category.id}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(category.id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-id="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 flex bg-warm-cream border-b border-[#e8dcc8] overflow-x-auto scrollbar-hide"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          data-id={category.id}
          onClick={() => scrollToCategory(category.id)}
          className={`px-4 py-3 text-[11px] whitespace-nowrap tracking-[0.5px] font-[family-name:var(--font-inter)] transition-colors shrink-0 ${
            activeId === category.id
              ? "text-coffee-800 font-bold border-b-[2.5px] border-coffee-accent"
              : "text-coffee-muted"
          }`}
        >
          {t(category.name)}
        </button>
      ))}
    </nav>
  );
}
