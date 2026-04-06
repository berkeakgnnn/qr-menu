import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl text-white font-[family-name:var(--font-playfair)] italic">
          QR Menü — Showroom
        </h1>
        <div className="mt-8 space-y-4">
          <Link href="/cafe" className="block text-[#8a7560] hover:text-[#c9a96e] transition-colors">
            Kafe Şablonu →
          </Link>
          <Link href="/restaurant" className="block text-[#8a7560] hover:text-[#c9a96e] transition-colors">
            Restoran Şablonu →
          </Link>
        </div>
      </div>
    </main>
  );
}
