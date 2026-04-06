import { ShowroomHeader } from "@/components/showroom/showroom-header";
import { TemplateCard } from "@/components/showroom/template-card";
import { LoadingScreen } from "@/components/showroom/loading-screen";
import { cafeInfo } from "@/lib/menu-data";
import { restaurantInfo } from "@/lib/restaurant-data";
import { pubInfo } from "@/lib/pub-data";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-showroom-bg max-w-md mx-auto md:max-w-none">
        <ShowroomHeader />

        <div className="px-5 md:px-12 lg:px-20 space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 pb-6">
          <TemplateCard
            href="/cafe"
            number="01 — CAFE"
            name="The Cozy Bean"
            type="Kafe & Kahve Dükkanı"
            description="Sıcak tonlar, vintage atmosfer"
            image={cafeInfo.heroImage}
            brightness="brightness-[0.5]"
          />
          <TemplateCard
            href="/restaurant"
            number="02 — RESTORAN"
            name="Maison Élégante"
            type="Fine Dining Restoran"
            description="Koyu tema, altın aksentler"
            image={restaurantInfo.heroImage}
            brightness="brightness-[0.35]"
          />
          <TemplateCard
            href="/pub"
            number="03 — PUB"
            name="The Black Sheep"
            type="Irish Pub & Kitchen"
            description="Koyu ahşap, amber aksan"
            image={pubInfo.heroImage}
            brightness="brightness-[0.3]"
          />
        </div>

        {/* Features */}
        <div className="mx-5 md:mx-12 lg:mx-20 pt-5 pb-2 border-t border-showroom-border">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
            <div>
              <div className="text-[11px] text-showroom-black font-semibold font-[family-name:var(--font-inter)]">
                Mobil Uyumlu
              </div>
              <div className="text-[9px] text-showroom-light mt-0.5 font-[family-name:var(--font-inter)]">
                Tüm cihazlarda kusursuz
              </div>
            </div>
            <div>
              <div className="text-[11px] text-showroom-black font-semibold font-[family-name:var(--font-inter)]">
                Çoklu Dil
              </div>
              <div className="text-[9px] text-showroom-light mt-0.5 font-[family-name:var(--font-inter)]">
                TR / EN dil desteği
              </div>
            </div>
            <div>
              <div className="text-[11px] text-showroom-black font-semibold font-[family-name:var(--font-inter)]">
                Anında Güncelleme
              </div>
              <div className="text-[9px] text-showroom-light mt-0.5 font-[family-name:var(--font-inter)]">
                Gerçek zamanlı düzenleme
              </div>
            </div>
            <div>
              <div className="text-[11px] text-showroom-black font-semibold font-[family-name:var(--font-inter)]">
                QR ile Erişim
              </div>
              <div className="text-[9px] text-showroom-light mt-0.5 font-[family-name:var(--font-inter)]">
                Tek tarama ile ulaşım
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 px-5 text-center">
          <a
            href="https://vexloft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] text-[#bbb] tracking-[1px] font-[family-name:var(--font-inter)] hover:text-showroom-black transition-colors"
          >
            VEXLOFT STUDIO
          </a>
        </footer>
      </main>
    </>
  );
}
