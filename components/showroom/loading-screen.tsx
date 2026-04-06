"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  bg?: string;
  textColor?: string;
  accentColor?: string;
}

export function LoadingScreen({
  bg = "bg-showroom-bg",
  textColor = "text-showroom-black",
  accentColor = "bg-showroom-black",
}: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${bg}`}
      style={{ animation: "loadingFadeOut 0.3s ease-out 1.2s forwards" }}
    >
      <div
        className="text-center"
        style={{ animation: "loadingFadeIn 0.8s ease-out forwards" }}
      >
        <div className="text-[9px] tracking-[5px] text-showroom-light font-[family-name:var(--font-inter)] font-medium">
          VEXLOFT
        </div>
        <div className={`text-[28px] mt-3 font-[family-name:var(--font-cormorant)] italic ${textColor}`}>
          QR Menü
        </div>
        <div className={`w-7 h-0.5 mx-auto mt-4 ${accentColor}`} />
      </div>
    </div>
  );
}
