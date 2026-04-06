"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-showroom-bg"
      style={{ animation: "loadingFadeOut 0.3s ease-out 1.2s forwards" }}
    >
      <div
        className="text-center"
        style={{ animation: "loadingFadeIn 0.8s ease-out forwards" }}
      >
        <div className="text-[9px] tracking-[5px] text-showroom-light font-[family-name:var(--font-inter)] font-medium">
          VEXLOFT
        </div>
        <div className="text-[28px] text-showroom-black mt-3 font-[family-name:var(--font-cormorant)] italic">
          QR Menü
        </div>
        <div className="w-7 h-0.5 bg-showroom-black mx-auto mt-4" />
      </div>
    </div>
  );
}
