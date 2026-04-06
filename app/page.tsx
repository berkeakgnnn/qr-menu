import { ShowroomHeader } from "@/components/showroom/showroom-header";
import { TemplateCard } from "@/components/showroom/template-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg max-w-md mx-auto">
      <ShowroomHeader />

      <div className="px-4 space-y-4 pb-6">
        {/* Cafe Template */}
        <TemplateCard
          href="/cafe"
          name="The Cozy Bean"
          label="CAFE ŞABLONU"
          description="Kafe & Kahve Dükkanı — Sıcak, vintage, cozy tema"
          gradient="linear-gradient(135deg, #3e2723, #6d4c41)"
          labelColor="#d4a574"
          buttonBg="#8a7560"
          buttonText="#0f0f0f"
        />

        {/* Restaurant Template */}
        <TemplateCard
          href="/restaurant"
          name="Maison Élégante"
          label="RESTORAN ŞABLONU"
          description="Fine Dining Restoran — Lüks, koyu tema, altın aksan"
          gradient="linear-gradient(135deg, #0d0d0d, #1a1a1a)"
          labelColor="#c9a96e"
          buttonBg="#c9a96e"
          buttonText="#0d0d0d"
          borderColor="#c9a96e33"
        />
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-dark-border">
        <div className="text-[11px] text-dark-muted font-[family-name:var(--font-inter)]">
          Beğendiğiniz şablonu seçin
        </div>
        <a
          href="https://vexloft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-gold mt-2 font-[family-name:var(--font-inter)] hover:text-dark-text transition-colors inline-block"
        >
          Vexloft Studio →
        </a>
      </footer>
    </main>
  );
}
