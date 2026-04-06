"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { restaurantCategories } from "@/lib/restaurant-data";

export function RestaurantNav() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(restaurantCategories[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    restaurantCategories.forEach((category) => {
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
      className="sticky top-0 z-50 flex bg-dark-bg border-b border-dark-border overflow-x-auto scrollbar-hide"
    >
      {restaurantCategories.map((category) => (
        <button
          key={category.id}
          data-id={category.id}
          onClick={() => scrollToCategory(category.id)}
          className={`px-4 py-3.5 text-[10px] whitespace-nowrap tracking-[1.5px] uppercase font-[family-name:var(--font-inter)] transition-colors shrink-0 ${
            activeId === category.id
              ? "text-gold border-b border-gold"
              : "text-dark-subtle"
          }`}
        >
          {t(category.name)}
        </button>
      ))}
    </nav>
  );
}
