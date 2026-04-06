"use client";

import Image from "next/image";
import { pubInfo } from "@/lib/pub-data";

export function PubHeader() {
  return (
    <header className="relative h-[220px] overflow-hidden">
      <Image
        src={pubInfo.heroImage}
        alt={pubInfo.name}
        fill
        className="object-cover brightness-[0.3] saturate-[0.8] sepia-[0.15]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pub-bg" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[9px] tracking-[4px] text-pub-amber font-[family-name:var(--font-inter)] font-medium">
          {pubInfo.tagline}
        </span>
        <h1 className="text-[34px] mt-1.5 mb-1 text-pub-text font-[family-name:var(--font-playfair)]">
          {pubInfo.name}
        </h1>
        <div className="w-12 h-px bg-pub-amber/25 my-1" />
        <span className="text-[8px] tracking-[3px] text-pub-text/35 font-[family-name:var(--font-inter)]">
          KADIKÖY, ISTANBUL
        </span>
      </div>
    </header>
  );
}
