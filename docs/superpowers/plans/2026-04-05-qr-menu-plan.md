# QR Menü Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mobile-first QR menü web uygulaması — cozy vintage kafe temalı, profesyonel Unsplash fotoğraflarıyla, TR/EN dil desteğiyle.

**Architecture:** Next.js 15 App Router, statik veri, client-side dil toggle. Tek sayfa uygulaması (page.tsx), bileşenler modüler. Sticky kategori nav + scroll spy ile UX. Vercel deploy.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, Playfair Display + Inter fonts, next/image, Vercel

---

## File Structure

```
qr-menu/
├── app/
│   ├── layout.tsx           # Root layout — fonts, metadata, viewport
│   ├── page.tsx             # Ana sayfa — tüm bileşenleri compose eder
│   └── globals.css          # Tailwind imports + custom animations
├── components/
│   ├── menu-header.tsx      # Hero header — ambians foto, kafe ismi, overlay
│   ├── language-toggle.tsx  # TR/EN segmented button, context provider
│   ├── category-nav.tsx     # Sticky horizontal nav + scroll spy
│   ├── category-section.tsx # Kategori banner + başlık + ürün kartları
│   ├── product-card.tsx     # Full-width kart — foto + isim + fiyat + açıklama
│   └── menu-footer.tsx      # Kafe bilgileri, lokasyon, saatler
├── lib/
│   ├── types.ts             # MenuItem, Category, CafeInfo tipleri
│   ├── menu-data.ts         # Tüm menü verisi (TR + EN), Unsplash URL'leri
│   └── language-context.tsx # React context — dil state yönetimi
├── public/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/Users/berkeakgun/Desktop/Kişisel/qr-menu"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack --use-npm
```

Select defaults when prompted. This creates the full Next.js 15 skeleton with Tailwind v4.

- [ ] **Step 2: Install Google Fonts**

No extra install needed — Next.js has `next/font/google` built in.

- [ ] **Step 3: Configure next.config.ts for Unsplash images**

Replace `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Set up layout.tsx with fonts and metadata**

Replace `app/layout.tsx`:

```tsx
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cozy Bean — Menü",
  description: "Specialty coffee & more — Kadıköy, İstanbul",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#3e2723",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#faf6f0]`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Set up globals.css with Tailwind and custom animations**

Replace `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-coffee-900: #2c1810;
  --color-coffee-800: #3e2723;
  --color-coffee-600: #5d4037;
  --color-coffee-accent: #8d6346;
  --color-coffee-muted: #8d7b6a;
  --color-warm-beige: #f0e8da;
  --color-warm-cream: #faf6f0;

  --font-playfair: var(--font-playfair);
  --font-inter: var(--font-inter);
}

@utility fade-in {
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hide scrollbar on category nav */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

- [ ] **Step 6: Create placeholder page.tsx**

Replace `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-warm-cream">
      <p className="p-8 text-coffee-900 font-[family-name:var(--font-playfair)] text-2xl italic">
        The Cozy Bean — Coming Soon
      </p>
    </main>
  );
}
```

- [ ] **Step 7: Verify dev server runs**

```bash
cd "/Users/berkeakgun/Desktop/Kişisel/qr-menu"
npm run dev
```

Open http://localhost:3000 — should see "The Cozy Bean — Coming Soon" in Playfair Display italic, dark brown text on cream background.

- [ ] **Step 8: Init git and commit**

```bash
cd "/Users/berkeakgun/Desktop/Kişisel/qr-menu"
git init
echo "node_modules/\n.next/\n.superpowers/" > .gitignore
git add -A
git commit -m "chore: scaffold Next.js 15 project with Tailwind and fonts"
```

---

### Task 2: Types and Menu Data

**Files:**
- Create: `lib/types.ts`, `lib/menu-data.ts`

- [ ] **Step 1: Define TypeScript types**

Create `lib/types.ts`:

```ts
export type Language = "tr" | "en";

export interface LocalizedText {
  tr: string;
  en: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  image: string; // Unsplash URL
}

export interface Category {
  id: string;
  name: LocalizedText;
  banner: string; // Unsplash URL for category banner
  items: MenuItem[];
}

export interface CafeInfo {
  name: string;
  tagline: string;
  established: string;
  location: LocalizedText;
  hours: LocalizedText;
  heroImage: string;
}
```

- [ ] **Step 2: Create complete menu data with Unsplash URLs**

Create `lib/menu-data.ts`:

```ts
import { Category, CafeInfo } from "./types";

export const cafeInfo: CafeInfo = {
  name: "The Cozy Bean",
  tagline: "SPECIALTY COFFEE & MORE",
  established: "EST. 2024",
  location: {
    tr: "Kadıköy, İstanbul",
    en: "Kadıköy, Istanbul",
  },
  hours: {
    tr: "09:00 – 22:00 | Her gün açık",
    en: "09:00 – 22:00 | Open every day",
  },
  heroImage:
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80",
};

export const categories: Category[] = [
  {
    id: "espresso",
    name: { tr: "Espresso Bazlı", en: "Espresso Based" },
    banner:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=1200&q=80",
    items: [
      {
        id: "cappuccino",
        name: { tr: "Cappuccino", en: "Cappuccino" },
        description: {
          tr: "Özenle çekilmiş espresso, kadifemsi buharlanmış süt ve ince mikro köpük katmanı",
          en: "Carefully pulled espresso, velvety steamed milk and a thin layer of microfoam",
        },
        price: 85,
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
      },
      {
        id: "latte",
        name: { tr: "Caffè Latte", en: "Caffè Latte" },
        description: {
          tr: "Double shot espresso ile kremamsı süt, latte art ile servis edilir",
          en: "Double shot espresso with creamy milk, served with latte art",
        },
        price: 90,
        image:
          "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80",
      },
      {
        id: "mocha",
        name: { tr: "Mocha", en: "Mocha" },
        description: {
          tr: "Espresso, belçika çikolatası ve buharlanmış süt, üzerine kakao tozu",
          en: "Espresso, Belgian chocolate and steamed milk, topped with cocoa powder",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80",
      },
      {
        id: "flat-white",
        name: { tr: "Flat White", en: "Flat White" },
        description: {
          tr: "Ristretto double shot, ipeksi mikro köpüklü süt, yoğun kahve aroması",
          en: "Ristretto double shot, silky microfoam milk, intense coffee aroma",
        },
        price: 90,
        image:
          "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=800&q=80",
      },
      {
        id: "americano",
        name: { tr: "Americano", en: "Americano" },
        description: {
          tr: "Double espresso, sıcak su ile uzatılmış, saf kahve lezzeti",
          en: "Double espresso extended with hot water, pure coffee flavor",
        },
        price: 70,
        image:
          "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=800&q=80",
      },
      {
        id: "macchiato",
        name: { tr: "Macchiato", en: "Macchiato" },
        description: {
          tr: "Espresso, bir dokunuş süt köpüğü ile taçlandırılmış",
          en: "Espresso crowned with a touch of milk foam",
        },
        price: 75,
        image:
          "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
      },
    ],
  },
  {
    id: "filter",
    name: { tr: "Filtre & Pour Over", en: "Filter & Pour Over" },
    banner:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    items: [
      {
        id: "v60",
        name: { tr: "V60 Pour Over", en: "V60 Pour Over" },
        description: {
          tr: "Tek kökenli özel çekirdek, Hario V60 ile elle demleme, günün çekirdeği",
          en: "Single origin specialty beans, hand brewed with Hario V60, bean of the day",
        },
        price: 110,
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
      },
      {
        id: "chemex",
        name: { tr: "Chemex", en: "Chemex" },
        description: {
          tr: "Temiz ve parlak tat profili, Chemex filtre ile demleme",
          en: "Clean and bright flavor profile, brewed with Chemex filter",
        },
        price: 120,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80",
      },
      {
        id: "french-press",
        name: { tr: "French Press", en: "French Press" },
        description: {
          tr: "Tam gövdeli, zengin aroma, 4 dakika demleme",
          en: "Full bodied, rich aroma, 4 minute brew",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      },
      {
        id: "filtre",
        name: { tr: "Filtre Kahve", en: "Filter Coffee" },
        description: {
          tr: "Günlük blend, taze demlenmiş, klasik lezzet",
          en: "Daily blend, freshly brewed, classic flavor",
        },
        price: 65,
        image:
          "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&q=80",
      },
    ],
  },
  {
    id: "cold",
    name: { tr: "Soğuk Kahveler", en: "Cold Coffees" },
    banner:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=80",
    items: [
      {
        id: "iced-latte",
        name: { tr: "Iced Latte", en: "Iced Latte" },
        description: {
          tr: "Espresso, soğuk süt ve buz, serinletici klasik",
          en: "Espresso, cold milk and ice, a refreshing classic",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80",
      },
      {
        id: "cold-brew",
        name: { tr: "Cold Brew", en: "Cold Brew" },
        description: {
          tr: "18 saat soğuk demleme, yumuşak ve düşük asitli",
          en: "18-hour cold extraction, smooth and low acidity",
        },
        price: 100,
        image:
          "https://images.unsplash.com/photo-1461162480545-8c996cc8f25e?w=800&q=80",
      },
      {
        id: "iced-mocha",
        name: { tr: "Iced Mocha", en: "Iced Mocha" },
        description: {
          tr: "Espresso, çikolata sosu, soğuk süt ve buz",
          en: "Espresso, chocolate sauce, cold milk and ice",
        },
        price: 105,
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
      },
      {
        id: "frappe",
        name: { tr: "Frappé", en: "Frappé" },
        description: {
          tr: "Blended buz, espresso, süt ve vanilya, ferahlatıcı",
          en: "Blended ice, espresso, milk and vanilla, refreshing",
        },
        price: 100,
        image:
          "https://images.unsplash.com/photo-1553909489-ec2175ef3f52?w=800&q=80",
      },
    ],
  },
  {
    id: "tea",
    name: { tr: "Sıcak Çaylar", en: "Hot Teas" },
    banner:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&q=80",
    items: [
      {
        id: "earl-grey",
        name: { tr: "Earl Grey", en: "Earl Grey" },
        description: {
          tr: "Bergamot aromalı siyah çay, zarif ve ferahlatıcı",
          en: "Bergamot-infused black tea, elegant and refreshing",
        },
        price: 60,
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
      },
      {
        id: "matcha",
        name: { tr: "Matcha Latte", en: "Matcha Latte" },
        description: {
          tr: "Seremonik grade matcha, buharlanmış süt ile",
          en: "Ceremonial grade matcha with steamed milk",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
      },
      {
        id: "turk-cayi",
        name: { tr: "Türk Çayı", en: "Turkish Tea" },
        description: {
          tr: "Çaykur Rize çayı, ince belli bardakta servis",
          en: "Çaykur Rize tea, served in traditional tulip glass",
        },
        price: 40,
        image:
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80",
      },
      {
        id: "bitki-cayi",
        name: { tr: "Bitki Çayı", en: "Herbal Tea" },
        description: {
          tr: "Ihlamur, papatya veya ada çayı, doğal ve rahatlatıcı",
          en: "Linden, chamomile or sage tea, natural and soothing",
        },
        price: 55,
        image:
          "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: { tr: "Tatlılar", en: "Desserts" },
    banner:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80",
    items: [
      {
        id: "cheesecake",
        name: {
          tr: "San Sebastian Cheesecake",
          en: "San Sebastián Cheesecake",
        },
        description: {
          tr: "Kremalı, karamelize üst, ev yapımı özel tarif",
          en: "Creamy, caramelized top, homemade special recipe",
        },
        price: 120,
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
      },
      {
        id: "brownie",
        name: { tr: "Brownie", en: "Brownie" },
        description: {
          tr: "Sıcak servis, çikolata parçacıklı, dondurma eşliğinde",
          en: "Served warm, chocolate chip, accompanied with ice cream",
        },
        price: 90,
        image:
          "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&q=80",
      },
      {
        id: "cookie",
        name: { tr: "Cookie", en: "Cookie" },
        description: {
          tr: "Taze fırından, chocolate chip, yumuşak dokulu",
          en: "Fresh from the oven, chocolate chip, soft textured",
        },
        price: 65,
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
      },
      {
        id: "tiramisu",
        name: { tr: "Tiramisu", en: "Tiramisu" },
        description: {
          tr: "Mascarpone, espresso emdirilmiş lady finger, kakao tozu",
          en: "Mascarpone, espresso-soaked lady fingers, cocoa powder",
        },
        price: 110,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      },
    ],
  },
  {
    id: "sandwiches",
    name: { tr: "Sandviçler", en: "Sandwiches" },
    banner:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1200&q=80",
    items: [
      {
        id: "avocado-toast",
        name: { tr: "Avocado Toast", en: "Avocado Toast" },
        description: {
          tr: "Ekşi maya ekmek, avokado, poşe yumurta, chili pul biber",
          en: "Sourdough bread, avocado, poached egg, chili flakes",
        },
        price: 130,
        image:
          "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
      },
      {
        id: "tost",
        name: { tr: "Tost", en: "Grilled Toast" },
        description: {
          tr: "Kaşar, domates, sucuk, taze ekmek üzerinde",
          en: "Cheese, tomato, Turkish sausage on fresh bread",
        },
        price: 85,
        image:
          "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
      },
      {
        id: "croissant",
        name: { tr: "Croissant Sandviç", en: "Croissant Sandwich" },
        description: {
          tr: "Taze kruvasan, füme hindi, cheddar peyniri, roka",
          en: "Fresh croissant, smoked turkey, cheddar cheese, arugula",
        },
        price: 110,
        image:
          "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&q=80",
      },
      {
        id: "wrap",
        name: { tr: "Wrap", en: "Wrap" },
        description: {
          tr: "Tavuk, meksika fasulyesi, salsa, marul, lavaş sarma",
          en: "Chicken, black beans, salsa, lettuce, wrapped in lavash",
        },
        price: 105,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
      },
    ],
  },
];
```

- [ ] **Step 3: Commit**

```bash
git add lib/types.ts lib/menu-data.ts
git commit -m "feat: add menu types and complete static data with Unsplash images"
```

---

### Task 3: Language Context

**Files:**
- Create: `lib/language-context.tsx`

- [ ] **Step 1: Create language context provider**

Create `lib/language-context.tsx`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add lib/language-context.tsx
git commit -m "feat: add language context provider with TR/EN toggle"
```

---

### Task 4: Menu Header Component

**Files:**
- Create: `components/menu-header.tsx`

- [ ] **Step 1: Build hero header with Unsplash background**

Create `components/menu-header.tsx`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/menu-header.tsx
git commit -m "feat: add hero header component with Unsplash background"
```

---

### Task 5: Language Toggle Component

**Files:**
- Create: `components/language-toggle.tsx`

- [ ] **Step 1: Build segmented language toggle**

Create `components/language-toggle.tsx`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/language-toggle.tsx
git commit -m "feat: add TR/EN language toggle component"
```

---

### Task 6: Category Navigation with Scroll Spy

**Files:**
- Create: `components/category-nav.tsx`

- [ ] **Step 1: Build sticky horizontal nav with scroll spy**

Create `components/category-nav.tsx`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/category-nav.tsx
git commit -m "feat: add sticky category nav with scroll spy"
```

---

### Task 7: Product Card Component

**Files:**
- Create: `components/product-card.tsx`

- [ ] **Step 1: Build full-width product card with image**

Create `components/product-card.tsx`:

```tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import type { MenuItem } from "@/lib/types";

export function ProductCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.08)]">
      <div className="relative h-[180px]">
        <Image
          src={item.image}
          alt={t(item.name)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="px-4 pt-3.5 pb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[17px] text-coffee-900 font-bold font-[family-name:var(--font-playfair)]">
            {t(item.name)}
          </h3>
          <span className="text-[17px] text-coffee-accent font-bold font-[family-name:var(--font-inter)]">
            ₺{item.price}
          </span>
        </div>
        <p className="text-xs text-coffee-muted mt-1.5 leading-relaxed font-[family-name:var(--font-inter)]">
          {t(item.description)}
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/product-card.tsx
git commit -m "feat: add full-width product card with Unsplash image"
```

---

### Task 8: Category Section Component

**Files:**
- Create: `components/category-section.tsx`

- [ ] **Step 1: Build category section with banner and product cards**

Create `components/category-section.tsx`:

```tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { ProductCard } from "./product-card";
import type { Category } from "@/lib/types";

export function CategorySection({ category }: { category: Category }) {
  const { t } = useLanguage();

  return (
    <section id={`category-${category.id}`} className="pt-4">
      {/* Category Banner */}
      <div className="relative h-[120px] mx-5 rounded-2xl overflow-hidden">
        <Image
          src={category.banner}
          alt={t(category.name)}
          fill
          className="object-cover brightness-[0.45]"
          sizes="(max-width: 768px) calc(100vw - 40px), 400px"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-lg tracking-[3px] uppercase font-[family-name:var(--font-inter)] font-semibold">
            {t(category.name)}
          </h2>
        </div>
      </div>

      {/* Category Label */}
      <div className="px-5 pt-5 pb-2">
        <div className="text-[10px] tracking-[3px] text-coffee-accent font-semibold font-[family-name:var(--font-inter)] uppercase">
          {t(category.name)}
        </div>
        <div className="w-6 h-0.5 bg-coffee-accent mt-1.5" />
      </div>

      {/* Product Cards */}
      <div className="px-5 space-y-2">
        {category.items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/category-section.tsx
git commit -m "feat: add category section with banner image and product list"
```

---

### Task 9: Menu Footer Component

**Files:**
- Create: `components/menu-footer.tsx`

- [ ] **Step 1: Build footer with cafe info**

Create `components/menu-footer.tsx`:

```tsx
"use client";

import { useLanguage } from "@/lib/language-context";
import { cafeInfo } from "@/lib/menu-data";

export function MenuFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-6 py-8 px-5 text-center bg-[#f0e8da]">
      <div className="text-lg text-coffee-800 font-[family-name:var(--font-playfair)] italic">
        {cafeInfo.name}
      </div>
      <div className="text-[10px] text-coffee-muted mt-1.5 tracking-wide font-[family-name:var(--font-inter)]">
        {t(cafeInfo.location)}
      </div>
      <div className="text-[10px] text-coffee-muted mt-0.5 font-[family-name:var(--font-inter)]">
        {t(cafeInfo.hours)}
      </div>
      <div className="w-8 h-px bg-coffee-accent mx-auto my-3" />
      <div className="text-[9px] text-[#b0a090] font-[family-name:var(--font-inter)]">
        Powered by QR Menü
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/menu-footer.tsx
git commit -m "feat: add menu footer with cafe info"
```

---

### Task 10: Compose Page + Scroll Animations

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Compose all components in page.tsx**

Replace `app/page.tsx`:

```tsx
import { LanguageProvider } from "@/lib/language-context";
import { MenuHeader } from "@/components/menu-header";
import { LanguageToggle } from "@/components/language-toggle";
import { CategoryNav } from "@/components/category-nav";
import { CategorySection } from "@/components/category-section";
import { MenuFooter } from "@/components/menu-footer";
import { categories } from "@/lib/menu-data";
import { ScrollAnimator } from "@/components/scroll-animator";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-warm-cream max-w-md mx-auto shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        <MenuHeader />
        <LanguageToggle />
        <CategoryNav />
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <MenuFooter />
        <ScrollAnimator />
      </main>
    </LanguageProvider>
  );
}
```

- [ ] **Step 2: Create ScrollAnimator component for fade-in animations**

Create `components/scroll-animator.tsx`:

```tsx
"use client";

import { useEffect } from "react";

export function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all product cards and category sections
    const targets = document.querySelectorAll(
      "[data-animate]"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
```

- [ ] **Step 3: Add data-animate attribute to product card**

Update `components/product-card.tsx` — change the outer div:

```tsx
    <div
      data-animate
      className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.08)] opacity-0"
    >
```

- [ ] **Step 4: Verify dev server — full menu renders**

```bash
cd "/Users/berkeakgun/Desktop/Kişisel/qr-menu"
npm run dev
```

Open http://localhost:3000 — verify:
- Hero header with cafe ambiance photo
- TR/EN language toggle works
- Sticky category nav scrolls horizontally
- Category banners with images
- Product cards with Unsplash photos, names, prices, descriptions
- Footer with cafe info
- Cards fade in on scroll

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/scroll-animator.tsx components/product-card.tsx
git commit -m "feat: compose full menu page with scroll animations"
```

---

### Task 11: Build, Verify & Deploy

**Files:**
- No new files

- [ ] **Step 1: Run production build**

```bash
cd "/Users/berkeakgun/Desktop/Kişisel/qr-menu"
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Test production build locally**

```bash
npm start
```

Open http://localhost:3000 — verify all images load, scroll spy works, language toggle works.

- [ ] **Step 3: Deploy to Vercel**

```bash
cd "/Users/berkeakgun/Desktop/Kişisel/qr-menu"
npx vercel --yes
```

This will create the project on Vercel and deploy. Copy the production URL.

- [ ] **Step 4: Promote to production**

```bash
npx vercel --prod --yes
```

- [ ] **Step 5: Final commit with Vercel config**

```bash
git add -A
git commit -m "chore: add Vercel deployment config"
```

- [ ] **Step 6: Test on phone**

Open the Vercel production URL on your phone. Verify:
- Hero image loads quickly
- Language toggle switches all content
- Category nav is sticky and scrollable
- Scroll spy highlights correct category
- All product images load
- Cards animate on scroll
- Footer shows correctly
