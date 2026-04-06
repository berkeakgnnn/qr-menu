# Showroom Refactor — Tasarım Spesifikasyonu

## Özet

Showroom ana sayfasını editorial minimal tema ile yeniden tasarlama, loading ekranı ekleme, tüm sayfaları desktop responsive yapma. WhatsApp butonu ve özellik section'ı ekleme.

## Kararlar

- **Showroom teması:** Editorial minimal — beyaz arka plan, siyah tipografi, gerçek fotoğraflı kartlar
- **Loading:** "VEXLOFT" + "QR Menü" logo reveal, fade-in, 1.5s, CSS-only
- **Desktop:** Tüm sayfalar (showroom + cafe + restaurant) responsive
- **Yeni özellikler:** WhatsApp floating button, özellik grid section
- **Emoji:** Hiçbir yerde emoji kullanılmayacak

## 1. Loading Ekranı

### Tasarım
- Beyaz arka plan (#fafafa)
- Ortada dikey hizalı:
  - "VEXLOFT" — 9px, letter-spacing 5px, #999, uppercase, sans-serif
  - "QR Menü" — 28px, serif italic, #111
  - İnce dekoratif çizgi — 28px genişlik, #111
- Animasyon: 0s→0.8s fade-in (text), 1.2s→1.5s fade-out (tüm ekran)
- CSS-only — @keyframes, no JavaScript timer

### Uygulama
- `components/showroom/loading-screen.tsx` — client component
- useState ile `visible` state, 1.5s sonra gizle
- position: fixed, z-50, tüm ekranı kaplar
- Sayfa arkada zaten yüklenmiş olur, loading kalktığında anında görünür

## 2. Showroom Ana Sayfa — Editorial Minimal

### Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Arka plan | #fafafa | Ana arka plan |
| Siyah | #111111 | Başlıklar, buton text |
| Koyu gri | #555555 | Secondary text |
| Gri | #777777 | Açıklama metni |
| Açık gri | #999999 | Labels, numbering |
| Border | #eeeeee | Ayırıcı çizgiler |

### Header
- Padding: üst 48px, alt 28px
- "VEXLOFT STUDIO" — 9px, letter-spacing 4px, #999, uppercase, Inter
- "Digital Menu Solutions" — 32px, serif (Cormorant Garamond), #111, normal weight
- Dekoratif çizgi: 28px genişlik, 2px yükseklik, #111
- Alt açıklama: 12px, #777, max-width 280px, Inter

### Şablon Kartları
Her kart tek bir Link bileşeni, tıklanabilir:
- Rounded corners (12px), overflow hidden
- **Fotoğraf alanı:** 200px yükseklik, gerçek mekan fotoğrafı (Unsplash), brightness 0.45-0.5
- **Fotoğraf üstünde (altta, gradient overlay ile):**
  - Numara: "01" — 8px, letter-spacing 2px, beyaz %40 opacity
  - İsim: "The Cozy Bean" — 22px, serif italic, beyaz
  - Tip: "Kafe & Kahve Dükkanı" — 10px, beyaz %60 opacity
  - "INCELE →" butonu: sağ alt, 9px, beyaz, font-weight 500, letter-spacing 1px
- Gradient overlay: transparent %40 → rgba(0,0,0,0.7) altta

**Kafe kartı:**
- Fotoğraf: cafeInfo.heroImage (cozy kafe ambians)
- brightness: 0.5

**Restoran kartı:**
- Fotoğraf: restaurantInfo.heroImage (fine dining ambians)  
- brightness: 0.35

### Özellik Grid
- Kartlardan sonra, üstte ince border (#eee)
- 2x2 grid layout
- Her özellik: başlık (11px, #111, font-weight 600) + açıklama (9px, #999)
- Özellikler:
  1. "Mobil Uyumlu" — "Tüm cihazlarda kusursuz"
  2. "Çoklu Dil" — "TR / EN dil desteği"
  3. "Anında Güncelleme" — "Menünüzü gerçek zamanlı düzenleyin"
  4. "QR ile Erişim" — "Tek tarama ile menüye ulaşın"

### Footer
- Ortada "VEXLOFT STUDIO" — 9px, #bbb, letter-spacing 1px
- Tıklanabilir → vexloft.com

## 3. Desktop Responsive

### Showroom (app/page.tsx)
- Mobile: max-w-md, tek sütun kartlar
- md (768px+): max-w-4xl, kartlar 2 sütun grid (grid-cols-2), header daha geniş
- lg (1024px+): daha fazla padding

### Kafe Menüsü (app/cafe/page.tsx)
- Mobile: max-w-md (mevcut)
- md (768px+): max-w-2xl
- lg: Ürün kartları 2 sütun grid (grid-cols-2)

### Restoran Menüs�� (app/restaurant/page.tsx)
- Mobile: max-w-md (mevcut)
- md (768px+): max-w-2xl
- lg: Ürün listesi daha geniş padding, kategori fotoğrafları daha yüksek

## 4. Dosya Değişiklikleri

### Yeni dosyalar
- `components/showroom/loading-screen.tsx` — loading animasyonu
- `lib/showroom-data.ts` — özellik listesi

### Değişecek dosyalar
- `app/page.tsx` — tamamen yeniden yazılacak (editorial tema)
- `components/showroom/showroom-header.tsx` — yeni editorial header
- `components/showroom/template-card.tsx` — fotoğraflı kart, incele butonu içinde
- `app/globals.css` — showroom renkleri, loading animasyon keyframes
- `app/cafe/page.tsx` ��� max-w responsive classes
- `app/restaurant/page.tsx` �� max-w responsive classes
- `components/cafe/category-section.tsx` — desktop grid
- `components/cafe/product-card.tsx` — desktop boyut

### Silinecek/kaldırılacak
- Mevcut showroom renkleri (dark-bg kullanımı showroom'dan kalkacak, restoranda kalacak)

## 5. Font Kullanımı

- **Showroom başlık:** Cormorant Garamond (zaten yüklü)
- **Showroom body:** Inter (zaten yüklü)
- Yeni font eklenmeyecek
