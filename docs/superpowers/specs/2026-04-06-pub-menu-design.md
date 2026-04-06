# Pub Menüsü — Tasarım Spesifikasyonu

## Özet

Showroom'a 3. şablon olarak Irish pub menüsü. Hybrid layout: içkilerde chalkboard text list, yemeklerde 2-col fotoğraflı grid. Koyu ahşap tonları + amber aksan.

## Kararlar

- **Stil:** Irish pub — koyu ahşap, charcoal, amber/pirinç aksan
- **Layout:** Hybrid — içkiler chalkboard dotted-line list (görselsiz), yemekler 2-col grid (fotoğraflı)
- **Kategoriler:** Draft Biralar / Şişe Biralar / Viski & Spirits / Kokteyller / Pub Yemekleri / Burgerlar / Atıştırmalıklar
- **Dil:** TR/EN toggle
- **Pub ismi:** The Black Sheep

## Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Koyu ahşap | #1c1714 | Ana arka plan |
| Charcoal | #231e1a | Kart arka planı, badge bg |
| Amber | #d4a04a | Aksan — fiyat, aktif tab, kategori başlık |
| Krem | #f2e8d5 | Ana metin (ürün isimleri) |
| Koyu kahve | #6a5a4a | Açıklama metni |
| Muted | #5a4a3a | Pasif nav, badge text |
| Border | #2a2320 | Ayırıcılar, kart border |
| Kart border | #2e2824 | Grid kart border |

## Tipografi

- **Pub ismi / Ürün isimleri (içki):** Georgia serif (mevcut, yeni font gerek yok)
- **Body / Fiyat / Nav / Badge:** Inter sans-serif
- **Kategori başlıkları:** Inter, uppercase, letter-spacing 5px

## Route & Dosya Yapısı

```
app/pub/page.tsx                         # Pub menü sayfası
lib/pub-data.ts                          # Pub menü verisi + pub bilgileri
components/pub/
├── pub-header.tsx                       # Hero — pub ambians, isim, overlay
├── pub-nav.tsx                          # Sticky nav, amber underline
├── pub-category.tsx                     # Kategori wrapper — list veya grid seçer
├── pub-drink-item.tsx                   # Chalkboard list item (içkiler)
├── pub-food-card.tsx                    # Grid card (yemekler)
└── pub-footer.tsx                       # Footer
```

## Sayfa Yapısı

### 1. Hero Header
- Pub ambians fotoğrafı, brightness 0.3, sepia 0.15, saturate 0.8
- Gradient alt: transparent → #1c1714
- "IRISH PUB & KITCHEN" (amber, uppercase, 9px)
- "The Black Sheep" (serif, 34px, krem)
- Amber dekoratif çizgi
- "KADIKÖY, ISTANBUL" (soluk, 8px)

### 2. Language Toggle
- Dark variant (mevcut shared component)

### 3. Sticky Nav
- Amber aktif tab + amber underline
- #5a4a3a pasif tabs
- #1c1714 arka plan

### 4. İçki Kategorileri — Chalkboard List

Her içki item:
- İsim (serif, 15px, krem) ...dotted line (#3a3028)... fiyat (amber, 15px, bold)
- Açıklama (10px, #6a5a4a)
- Badge'ler: hacim (ml/cl), alkol oranı (%), tip (Stout, Lager, vb.)
- Badge stil: #231e1a bg, #5a4a3a text, 8px, 3px radius

Kategoriler arası: tam genişlik fotoğraf ayırıcı (110px, karanlık overlay, ortada kategori adı)

### 5. Yemek Kategorileri — 2-Col Grid

Her yemek item:
- Fotoğraf üstte (110px)
- İsim (13px, krem, bold)
- Açıklama (9px, #6a5a4a)
- Fiyat (14px, amber, bold)
- Kart: #231e1a bg, #2e2824 border, 10px radius

### 6. Footer
- "The Black Sheep" (serif, krem)
- Lokasyon, saatler (#5a4a3a)
- "Vexloft Studio" link

## Menü Verisi

### Draft Biralar (chalkboard list)
| Ürün | Fiyat | Açıklama | Hacim | ABV | Tip |
|------|-------|----------|-------|-----|-----|
| Guinness | ₺140 | İrlanda'nın efsane draft stout'u. Koyu, kremamsı, hafif acı | 500ml | 4.2% | Stout |
| Kilkenny | ₺135 | Irish cream ale, yumuşak ve dengeli, karamel notaları | 500ml | 4.3% | Cream Ale |
| Smithwick's Red | ₺130 | 1710'dan beri. Kırmızı ale, maltlı, hafif tatlı finish | 500ml | 3.8% | Red Ale |
| Hop House 13 | ₺145 | Guinness'in lager'ı. Çiçeksi hop, ferah, altın rengi | 400ml | 5.0% | Lager |
| Efes Draft | ₺90 | Türkiye'nin klasiği. Hafif, ferah, her daim güvenilir | 500ml | 5.0% | Pilsner |
| Bomonti | ₺95 | 1890'dan beri. Dengeli, maltlı, temiz bitiş | 500ml | 5.0% | Lager |

### Şişe Biralar (chalkboard list)
| Ürün | Fiyat | Açıklama | Hacim | ABV | Tip |
|------|-------|----------|-------|-----|-----|
| Tuborg Gold | ₺80 | Danimarka lager'ı. Hafif, altın sarısı, temiz tat | 330ml | 5.0% | Lager |
| Carlsberg | ₺85 | Probably the best. Dengeli, hafif acı, ferah | 330ml | 5.0% | Pilsner |
| Corona Extra | ₺110 | Meksika'dan. Lime ile servis, hafif ve tropikal | 355ml | 4.5% | Lager |
| Hoegaarden | ₺120 | Belçika buğday birası. Portakal kabuğu, kişniş | 330ml | 4.9% | Wheat |
| Leffe Blonde | ₺130 | Belçika manastır birası. Meyvemsi, baharatlı, zengin | 330ml | 6.6% | Abbey |
| Erdinger | ₺125 | Bavyera buğday birası. Muz, karanfil notaları | 500ml | 5.3% | Weissbier |

### Viski & Spirits (chalkboard list)
| Ürün | Fiyat | Açıklama | Hacim | ABV | Tip |
|------|-------|----------|-------|-----|-----|
| Jameson | ₺120 | Triple distilled Irish whiskey. Smooth, vanilya ve çiçeksi | 4cl | 40% | Blended |
| Redbreast 12 | ₺220 | Single pot still. Meşe fıçı, baharat, kurutulmuş meyve | 4cl | 40% | Pot Still |
| Tullamore D.E.W. | ₺130 | Triple blend. Malt, pot still ve grain. Yumuşak, meyvemsi | 4cl | 40% | Triple Blend |
| Bushmills Original | ₺115 | Dünyanın en eski lisanslı damıtımevi. Hafif, tatlı, meyvemsi | 4cl | 40% | Blended |
| Jack Daniel's | ₺130 | Tennessee whiskey. Akçaağaç kömür filtre, vanilya, karamel | 4cl | 40% | Tennessee |
| Bulleit Bourbon | ₺150 | Yüksek çavdar oranı. Baharatlı, meşe, bal notaları | 4cl | 45% | Bourbon |

### Kokteyller (chalkboard list)
| Ürün | Fiyat | Açıklama | Hacim | ABV | Tip |
|------|-------|----------|-------|-----|-----|
| Irish Coffee | ₺180 | Jameson, sıcak kahve, şeker, taze krema | - | - | Sıcak |
| Whiskey Sour | ₺200 | Bourbon, taze limon suyu, şeker, yumurta akı | - | - | Klasik |
| Old Fashioned | ₺220 | Bourbon, angostura, şeker küpü, portakal kabuğu | - | - | Klasik |
| Black Velvet | ₺190 | Guinness + şampanya. İrlanda klasiği, kadifemsi | - | - | Özel |
| Dark & Stormy | ₺180 | Dark rum, ginger beer, lime. Baharatlı ve ferah | - | - | Tropikal |
| Espresso Martini | ₺210 | Vodka, Kahlúa, taze espresso. Enerjik ve zarif | - | - | Modern |

### Pub Yemekleri (2-col grid with photos)
| Ürün | Fiyat | Açıklama |
|------|-------|----------|
| Fish & Chips | ₺240 | Bira hamurlu morina, el yapımı patates, tartare sos |
| Shepherd's Pie | ₺220 | Kuzu kıyma, sebze ragu, patates püre grateni |
| Bangers & Mash | ₺200 | İrlanda sosisleri, patates püresi, soğan sosu |
| Irish Stew | ₺210 | Kuzu, patates, havuç, soğan. Geleneksel tarif |

### Burgerlar (2-col grid with photos)
| Ürün | Fiyat | Açıklama |
|------|-------|----------|
| Classic Burger | ₺220 | 200gr dana eti, cheddar, turşu, özel sos, brioche |
| BBQ Bacon | ₺250 | Çıtır bacon, BBQ sos, karamelize soğan, cheddar |
| Mushroom Swiss | ₺260 | Sote mantar, İsviçre peyniri, trüf mayo |
| Veggie Burger | ₺200 | Falafel patty, humus, taze sebzeler, tam buğday ekmeği |

### Atıştırmalıklar (2-col grid with photos)
| Ürün | Fiyat | Açıklama |
|------|-------|----------|
| Loaded Nachos | ₺180 | Cheddar, jalapeno, salsa, guacamole, ekşi krema |
| Buffalo Wings | ₺190 | 8 adet tavuk kanat, buffalo sos, ranch dip |
| Onion Rings | ₺120 | Bira hamurlu soğan halkası, chipotle mayo |
| Mozzarella Sticks | ₺140 | Çıtır mozzarella çubukları, marinara sos |

## Pub Bilgileri

- **İsim:** The Black Sheep
- **Tagline:** IRISH PUB & KITCHEN
- **Lokasyon TR:** Kadıköy, İstanbul
- **Lokasyon EN:** Kadıköy, Istanbul
- **Saatler TR:** 16:00 – 02:00 | Her gün açık
- **Saatler EN:** 16:00 – 02:00 | Open every day

## Showroom Güncellemesi

Showroom'a 3. kart eklenmeli:
- Fotoğraf: pub hero image
- "03 — PUB"
- "The Black Sheep"
- "Irish Pub & Kitchen"
- "Koyu ahşap, amber aksan"
- Link: /pub

## Desktop Responsive

- max-w-md mobil, md:max-w-2xl desktop
- Yemek grid'i desktop'ta da 2 sütun kalır (daha geniş kartlar)
- Chalkboard list desktop'ta md:px-10 padding
