# Showroom + Restoran Menüsü — Tasarım Spesifikasyonu

## Özet

Mevcut QR menü projesini çoklu şablon showroom'a dönüştürme. Dark premium ana sayfa + fine dining restoran menüsü şablonu ekleme. Mevcut kafe menüsü korunacak, route yapısı değişecek.

## Kararlar

- **Showroom:** Dark premium ana sayfa (#0a0a0a), altın aksentler, şablon kartları
- **Restoran stili:** Fine dining — koyu tema, altın aksan, lüks tipografi
- **Restoran layout:** Elegant List — dotted-line fiyat listesi, fotoğraflar sadece kategori ayırıcıları
- **Dil:** TR/EN toggle (kafedeki gibi)
- **Route yapısı:** `/` showroom, `/cafe` kafe menüsü, `/restaurant` restoran menüsü

## Route Yapısı

```
app/
├── page.tsx                    # Showroom ana sayfa
├── cafe/
│   └── page.tsx                # Kafe menüsü (mevcut, taşınacak)
├── restaurant/
│   └── page.tsx                # Restoran menüsü (yeni)
├── layout.tsx                  # Root layout (tüm fontlar)
└── globals.css                 # Tailwind + tüm tema renkleri
```

## Component Yapısı

```
components/
├── cafe/                        # Mevcut component'lar taşınacak
│   ├── menu-header.tsx
│   ├── category-nav.tsx
│   ├── category-section.tsx
│   ├── product-card.tsx
│   └── menu-footer.tsx
├── restaurant/                  # Yeni — tamamen farklı layout
│   ├── restaurant-header.tsx    # Dark hero, altın aksan, restoran ismi
│   ├── restaurant-nav.tsx       # Dark sticky nav, uppercase, altın underline
│   ├── restaurant-category.tsx  # Tam genişlik foto ayırıcı + ürün listesi
│   ├── restaurant-item.tsx      # İsim...dotted line...fiyat satırı
│   └── restaurant-footer.tsx    # Dark footer, altın aksan
├── showroom/                    # Yeni — ana sayfa
│   ├── showroom-header.tsx      # Branding + başlık
│   └── template-card.tsx        # Şablon preview kartı (link ile)
├── language-toggle.tsx          # Paylaşılan — her iki menüde kullanılır
└── scroll-animator.tsx          # Paylaşılan — her iki menüde kullanılır
```

## Showroom Ana Sayfa

### Tasarım
- **Arka plan:** #0a0a0a (koyu siyah)
- **Header:** "QR MENÜ" (altın, uppercase, letter-spacing), "Şablonlarımız" (serif, italic, beyaz)
- **Alt açıklama:** "İşletmenize özel QR menü çözümleri" (gri, küçük)

### Şablon Kartları
Her şablon kartı:
- Büyük preview alanı (~100-120px) — şablonun temasını yansıtan gradient/görsel
- Şablon adı (kafe ismi veya restoran ismi)
- Şablon tipi etiketi (CAFE ŞABLONU, RESTORAN ŞABLONU)
- Kısa açıklama
- "İNCELE →" butonu (şablonun accent rengiyle)
- Tıklanınca ilgili route'a Next.js Link ile yönlendirme

**Kafe kartı:**
- Warm brown gradient (#3e2723 → #6d4c41)
- "The Cozy Bean" + "CAFE ŞABLONU"
- "Kafe & Kahve Dükkanı — Sıcak, vintage, cozy tema"
- Buton: kahverengi accent

**Restoran kartı:**
- Siyah gradient + altın border (#c9a96e)
- "Maison Élégante" + "RESTORAN ŞABLONU"
- "Fine Dining Restoran — Lüks, koyu tema, altın aksan"
- Buton: altın accent

### Footer
- İnce üst çizgi (#1a1a1a)
- "Beğendiğiniz şablonu seçin" (gri)
- "İletişime geçin →" (altın accent)

## Restoran Menüsü — "Maison Élégante"

### Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Siyah | #0a0a0a | Ana arka plan |
| Koyu gri | #111111 | Kart/alan arka planı |
| Altın | #c9a96e | Accent — fiyat, kategori, çizgiler, butonlar |
| Krem beyaz | #f5f0eb | Ana metin (ürün isimleri) |
| Gri | #555555 | Açıklama metni |
| Koyu border | #1a1a1a | Ayırıcı çizgiler |

### Tipografi

- **Başlıklar / Restoran ismi / Ürün isimleri:** Cormorant Garamond (serif, italic)
- **Body / Fiyat / Nav:** Inter (sans-serif)
- **Kategori başlıkları:** Inter, uppercase, letter-spacing: 5px, altın renk

### Sayfa Yapısı (Yukarıdan Aşağıya)

#### 1. Hero Header
- Tam genişlik restoran ambians fotoğrafı (çok karanlık overlay, brightness 0.25)
- Üstte ve altta altın dekoratif çizgiler
- "FINE DINING" (altın, uppercase, tiny)
- Restoran ismi: "Maison Élégante" (büyük, italic serif)
- "ISTANBUL • EST. 2024" (çok küçük, soluk)
- Yükseklik: ~260px

#### 2. Language Toggle
- Koyu arka plan (#0d0d0d)
- Altın aktif buton, koyu border'lı pasif
- Minimal, köşeli stil (rounded değil, 4px radius)

#### 3. Sticky Kategori Nav
- Siyah arka plan, alt border (#1a1a1a)
- Uppercase, geniş letter-spacing, küçük font
- Aktif: altın renk + altın alt çizgi
- Pasif: koyu gri (#444)

#### 4. Kategori Bölümleri
Her kategori:
- **Kategori başlığı:** Ortada, altın renk, uppercase, letter-spacing 5px, altında ince altın çizgi
- **Ürün listesi:** Her ürün bir satır:
  - Sol: ürün adı (italic serif, krem beyaz)
  - Orta: noktalı çizgi (dotted, #2a2a2a)
  - Sağ: fiyat (altın, sans-serif)
  - Alt: açıklama (küçük, gri, sans-serif)
  - Satırlar arası: ince border (#151515)
- **Kategori arası fotoğraf:** Tam genişlik, ~140px yükseklik, karanlık overlay, ortada sonraki kategori adı

#### 5. Footer
- Koyu arka plan (#0d0d0d), üst border
- Altın dekoratif çizgi
- Restoran ismi (italic serif)
- Lokasyon: "NİŞANTAŞI, İSTANBUL" (uppercase, gri)
- Çalışma saatleri
- "Powered by QR Menü" (çok soluk)

### Menü Verisi

#### Başlangıçlar
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Dana Carpaccio | ₺320 | İnce dilimlenmiş dana fileto, trüf yağı, parmesan talaşı, roka ve kapari |
| Izgara Ahtapot | ₺380 | Yumuşacık pişirilmiş ahtapot, chorizo, patates püresi, paprika yağı |
| Burrata | ₺290 | Taze burrata, heirloom domates, fesleğen pesto, balzamik redüksiyon |
| Keçi Peyniri Salatası | ₺260 | Karamelize keçi peyniri, ceviz, nar, bal-hardal sos |

#### Ana Yemekler
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Wagyu Bonfile | ₺950 | A5 Wagyu, trüf jus, mevsim sebzeleri, fondant patates |
| Kuzu Pirzola | ₺680 | Yeni Zelanda kuzu, biberiye jus, patlıcan beğendi |
| Ördek Confit | ₺580 | 12 saat pişirilmiş ördek but, kiraz sosu, püre |
| Risotto ai Funghi | ₺420 | Porcini mantarı, parmesan, trüf yağı, taze kekik |

#### Deniz Ürünleri
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Levrek | ₺520 | Tuzda pişirilmiş levrek, enginar, kapari-tereyağı sos |
| Karides Linguine | ₺460 | Jumbo karides, sarımsak, beyaz şarap, cherry domates |
| Somon | ₺490 | Teriyaki glazed somon, avokado, wasabi mayo, mikro yeşillik |
| Istakoz | ₺1200 | Yarım ıstakoz, tereyağı sosu, haşlanmış patates, limon |

#### Izgara
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| T-Bone Steak | ₺750 | 500gr T-bone, kekik tereyağı, közlenmiş sebze |
| Dana Kaburga | ₺620 | 8 saat slow-cook, BBQ glaze, coleslaw |
| Tavuk Şiş | ₺380 | Marine edilmiş tavuk, sumak-soğan salatası, lavaş |
| Köfte | ₺360 | El yapımı dana köfte, közlenmiş biber, yoğurt |

#### Tatlılar
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Çikolata Fondü | ₺280 | Sıcak çikolata lav, vanilya dondurma, taze meyve |
| Crème Brûlée | ₺240 | Klasik Fransız tarif, karamelize şeker kabuğu |
| Panna Cotta | ₺220 | Vanilya panna cotta, çilek coulis, bademli crumble |
| Soufflé | ₺320 | Sıcak çikolata soufflé, crème anglaise (20 dk bekleme) |

#### İçecekler
| Ürün | Fiyat | Açıklama (TR) |
|------|-------|---------------|
| Old Fashioned | ₺280 | Bourbon, angostura, şeker, portakal kabuğu |
| Negroni | ₺260 | Gin, Campari, tatlı vermut, portakal dilimi |
| Espresso Martini | ₺290 | Vodka, Kahlúa, taze espresso, kahve çekirdeği |
| Mocktail — Sunset | ₺160 | Mango, passion fruit, limon, soda, buz |
| Ev Yapımı Limonata | ₺120 | Taze sıkılmış limon, nane, bal |
| Şarap (Kadeh) | ₺180 | Günün kırmızı veya beyaz şarabı |

### Restoran Bilgileri (Statik)

- **İsim:** Maison Élégante
- **Lokasyon TR:** Nişantaşı, İstanbul
- **Lokasyon EN:** Nişantaşı, Istanbul
- **Saatler TR:** 18:00 – 00:00 | Pazartesi kapalı
- **Saatler EN:** 18:00 – 00:00 | Closed on Mondays

### Kategori Arası Fotoğraflar (Unsplash)

Her kategori geçişinde tam genişlik atmosferik fotoğraf:
- Başlangıçlar → Ana Yemekler: Et/steak temalı
- Ana Yemekler → Deniz Ürünleri: Deniz/balık temalı
- Deniz Ürünleri → Izgara: Ateş/mangal temalı
- Izgara → Tatlılar: Tatlı/çikolata temalı
- Tatlılar → İçecekler: Bar/kokteyl temalı

## UX Detayları

- **Sticky nav:** Kafedekiyle aynı mantık (intersection observer + scroll spy) ama farklı stil
- **Smooth scroll:** Kategori tıklayınca animasyonlu scroll
- **Fade-in:** Ürün satırları ve foto ayırıcılar fade-in (paylaşılan ScrollAnimator)
- **Language toggle:** Paylaşılan context, her iki menüde çalışır

## Mevcut Kodda Değişiklikler

1. `app/page.tsx` → `app/cafe/page.tsx`'e taşınacak (aynı içerik)
2. Mevcut component'lar `components/` → `components/cafe/` altına taşınacak
3. Import path'leri güncellenecek
4. `app/layout.tsx`'e Cormorant Garamond fontu eklenecek
5. `app/globals.css`'e restoran + showroom tema renkleri eklenecek
6. `lib/types.ts` korunacak — restoran da aynı tipleri kullanır (MenuItem, Category, CafeInfo)
7. Yeni `lib/restaurant-data.ts` oluşturulacak
8. Yeni `lib/showroom-data.ts` oluşturulacak (şablon kartları verisi)

## Fontlar (Güncel Tam Liste)

- **Playfair Display:** Kafe başlıkları (mevcut)
- **Cormorant Garamond:** Restoran başlıkları (yeni)
- **Inter:** Body metni, fiyatlar, nav (her yerde)
