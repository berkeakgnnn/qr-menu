# QR Menü — Tasarım Spesifikasyonu

## Özet

Kafe ve restoranlar için QR kod ile erişilen mobile-first web menü uygulaması. Faz 1'de statik verili, profesyonel görselli bir kahve dükkanı menüsü. Faz 2'de admin panel ile özelleştirme.

## Kararlar

- **Stil:** Cozy / vintage kafe — sıcak tonlar, rustik, serif tipografi
- **Layout:** Full-width cards — büyük fotoğraflı tek sütun, dikey scroll
- **Ürün gösterimi:** İsim + fiyat + açıklama + profesyonel fotoğraf (Unsplash)
- **Boyut seçeneği:** Yok — tek fiyat
- **Dil:** TR/EN toggle, varsayılan TR
- **Deploy:** Vercel

## Teknik Stack

- **Framework:** Next.js 15 App Router
- **Styling:** Tailwind CSS
- **Font:** Playfair Display (serif, başlıklar) + Inter (sans-serif, body)
- **Görseller:** Unsplash profesyonel fotoğraflar, next/image ile optimize
- **Deploy:** Vercel

## Proje Yapısı

```
qr-menu/
├── app/
│   ├── layout.tsx           # Root layout, fontlar, metadata
│   ├── page.tsx             # Menü sayfası (Faz 1'de tek sayfa)
│   └── globals.css          # Tailwind + custom styles
├── components/
│   ├── menu-header.tsx      # Hero header (ambians fotoğrafı + kafe ismi)
│   ├── category-nav.tsx     # Sticky yatay kategori navigasyonu + scroll spy
│   ├── category-section.tsx # Kategori başlığı + banner görseli
│   ├── product-card.tsx     # Full-width ürün kartı (fotoğraf + bilgi)
│   ├── language-toggle.tsx  # TR/EN segmented button
│   └── menu-footer.tsx      # Kafe bilgileri, lokasyon, saatler
├── lib/
│   ├── menu-data.ts         # Statik menü verisi (TR + EN)
│   └── types.ts             # TypeScript tipleri
├── public/
│   └── images/              # Optimize edilmiş ürün fotoğrafları
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Sayfa Yapısı (Yukarıdan Aşağıya)

### 1. Hero Header
- Tam genişlik kafe ambians fotoğrafı (karanlık overlay)
- Üzerine: "EST. 2024", kafe ismi (italic serif), "SPECIALTY COFFEE & MORE"
- Yükseklik: ~220px mobilde

### 2. Language Toggle
- Segmented button: Türkçe | English
- Arka plan: sıcak bej ton (#f0e8da)
- Dil değişince tüm içerik reactively güncellenir (client state)

### 3. Sticky Kategori Navigasyonu
- Yatay scroll, scroll sırasında üstte sabit kalır
- Aktif kategori: bold + alt çizgi (#8d6346)
- Tıklayınca ilgili bölüme smooth scroll
- Scroll spy: kullanıcı scroll ederken aktif tab güncellenir

### 4. Kategori Bölümleri
Her kategori:
- Kategori başlık banner görseli (tam genişlik, kısa ~120px)
- Kategori adı (uppercase, letter-spacing, accent rengi)
- İnce dekoratif çizgi

### 5. Ürün Kartları
- Beyaz kart, rounded corners (16px), subtle shadow
- Üstte: tam genişlik fotoğraf (16:9, object-fit cover, ~180px yükseklik)
- Altta: ürün adı (sol, bold serif) + fiyat (sağ, accent rengi, sans-serif)
- Açıklama: gri tonda, sans-serif, 1-2 satır
- Kartlar arası: 8px gap

### 6. Footer
- Bej arka plan
- Kafe ismi (italic)
- Lokasyon, çalışma saatleri
- "Powered by QR Menü" branding

## Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Koyu kahve | #2c1810 | Ana metin |
| Kahverengi | #3e2723 | Header, nav text |
| Accent | #8d6346 | Fiyat, aktif tab, dekoratif çizgiler |
| Warm bej | #f0e8da | Arka plan vurgular |
| Krem | #faf6f0 | Ana arka plan |
| Beyaz | #ffffff | Kart arka planı |

## Tipografi

- **Başlıklar / Kafe ismi:** Playfair Display, italic, serif
- **Body / Fiyat / Nav:** Inter, sans-serif
- **Kategori başlıkları:** Inter, uppercase, letter-spacing: 3px

## Menü Verisi (Faz 1 — Statik)

### Espresso Bazlı
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Cappuccino | ₺85 | Espresso, kadifemsi buharlanmış süt, mikro köpük |
| Caffè Latte | ₺90 | Double shot espresso, kremamsı süt, latte art |
| Mocha | ₺95 | Espresso, belçika çikolatası, buharlanmış süt, kakao tozu |
| Flat White | ₺90 | Ristretto double shot, ipeksi mikro köpüklü süt |
| Americano | ₺70 | Double espresso, sıcak su |
| Macchiato | ₺75 | Espresso, bir dokunuş süt köpüğü |

### Filtre & Pour Over
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| V60 Pour Over | ₺110 | Tek kökenli özel çekirdek, Hario V60 ile elle demleme |
| Chemex | ₺120 | Temiz ve parlak tat profili, Chemex filtre |
| French Press | ₺95 | Tam gövdeli, zengin aroma, 4 dakika demleme |
| Filtre Kahve | ₺65 | Günlük blend, taze demlenmiş |

### Soğuk Kahveler
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Iced Latte | ₺95 | Espresso, soğuk süt, buz |
| Cold Brew | ₺100 | 18 saat soğuk demleme, yumuşak ve düşük asitli |
| Iced Mocha | ₺105 | Espresso, çikolata sosu, soğuk süt, buz |
| Frappé | ₺100 | Blended buz, espresso, süt, vanilya |

### Sıcak Çaylar
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Earl Grey | ₺60 | Bergamot aromalı siyah çay |
| Matcha Latte | ₺95 | Seramonik grade matcha, buharlanmış süt |
| Türk Çayı | ₺40 | Çaykur Rize çayı, ince belli bardakta |
| Bitki Çayı | ₺55 | Ihlamur, papatya veya ada çayı |

### Tatlılar
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| San Sebastian Cheesecake | ₺120 | Kremalı, karamelize üst, ev yapımı |
| Brownie | ₺90 | Sıcak servis, çikolata parçacıklı, dondurma ile |
| Cookie | ₺65 | Taze fırından, chocolate chip |
| Tiramisu | ₺110 | Mascarpone, espresso emdirilmiş lady finger |

### Sandviçler
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Avocado Toast | ₺130 | Ekşi maya ekmek, avokado, poşe yumurta, chili |
| Tost | ₺85 | Kaşar, domates, sucuk, taze ekmek |
| Croissant Sandviç | ₺110 | Taze kruvasan, füme hindi, cheddar, roka |
| Wrap | ₺105 | Tavuk, meksika fasulyesi, salsa, marul |

## UX Detayları

- **Sticky nav:** Scroll'da sabit, intersection observer ile scroll spy
- **Smooth scroll:** Kategori tıklayınca animasyonlu scroll
- **Fade-in:** Kartlar viewport'a girince opacity animasyonu
- **Lazy loading:** next/image ile otomatik lazy load + blur placeholder
- **Responsive:** 320px–768px optimize, 768px üstü max-width container

## Animasyonlar

- Kartlar: `opacity 0 → 1`, `translateY(20px) → 0` on scroll into view (CSS + Intersection Observer)
- Kategori tab geçişi: smooth underline transition
- Dil toggle: içerik fade geçişi
- Hero: subtle parallax veya static (performansa göre karar)

## Fotoğraf Stratejisi

Her ürün ve her kategori banner için Unsplash'ten profesyonel fotoğraf:
- Ürün fotoğrafları: warm tone, yakın çekim, yüksek kalite
- Kategori bannerları: geniş açı, atmosferik, ilgili tema
- next/image ile WebP optimize, responsive srcset

## Faz 2 (Gelecek — Bu Spec Kapsamı Dışında)

- Supabase backend (auth, DB, storage)
- Admin panel: ürün CRUD, fotoğraf upload, renk paleti seçimi
- Çoklu kafe desteği (multi-tenant)
- Özel domain desteği
- QR kod generator

## Kafe Bilgileri (Faz 1 Statik)

- **İsim:** The Cozy Bean
- **Lokasyon:** Kadıköy, İstanbul
- **Saatler:** 09:00 – 22:00, her gün açık
