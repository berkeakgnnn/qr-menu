"use client";

import Image from "next/image";
import { restaurantInfo } from "@/lib/restaurant-data";

export function RestaurantHeader() {
  return (
    <header className="relative h-[260px] overflow-hidden">
      <Image
        src={restaurantInfo.heroImage}
        alt={restaurantInfo.name}
        fill
        className="object-cover brightness-[0.25]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-dark-text text-center">
        <div className="w-10 h-px bg-gold mb-3" />
        <span className="text-[9px] tracking-[5px] text-gold font-[family-name:var(--font-inter)] font-medium">
          {restaurantInfo.tagline}
        </span>
        <h1 className="text-[34px] mt-2 mb-2 font-[family-name:var(--font-cormorant)] italic leading-tight">
          {restaurantInfo.name}
        </h1>
        <div className="w-10 h-px bg-gold mt-1" />
        <span className="text-[8px] tracking-[4px] opacity-50 mt-3 font-[family-name:var(--font-inter)]">
          ISTANBUL • {restaurantInfo.established}
        </span>
      </div>
    </header>
  );
}
