"use client";

import Image from "next/image";
import { cafeInfo } from "@/lib/menu-data";

export function MenuHeader() {
  return (
    <header className="relative h-[220px] overflow-hidden">
      <Image
        src={cafeInfo.heroImage}
        alt={cafeInfo.name}
        fill
        className="object-cover brightness-[0.35]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#faf6f0] text-center">
        <span className="text-[11px] tracking-[4px] opacity-70 font-[family-name:var(--font-inter)]">
          {cafeInfo.established}
        </span>
        <h1 className="text-[32px] mt-1.5 mb-1 font-[family-name:var(--font-playfair)] italic">
          {cafeInfo.name}
        </h1>
        <div className="w-10 h-px bg-[#d4a574] my-1" />
        <span className="text-[10px] tracking-[3px] opacity-60 font-[family-name:var(--font-inter)]">
          {cafeInfo.tagline}
        </span>
      </div>
    </header>
  );
}
