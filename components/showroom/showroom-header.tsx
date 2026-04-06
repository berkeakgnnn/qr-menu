export function ShowroomHeader() {
  return (
    <header className="pt-12 pb-7 px-7 md:pt-16 md:pb-10 md:text-center">
      <div className="text-[9px] tracking-[4px] text-showroom-light font-[family-name:var(--font-inter)] font-medium">
        VEXLOFT STUDIO
      </div>
      <h1 className="text-[32px] md:text-[40px] text-showroom-black mt-3 font-[family-name:var(--font-cormorant)] font-normal leading-tight">
        Digital<br className="md:hidden" /> Menu Solutions
      </h1>
      <div className="w-7 h-0.5 bg-showroom-black mt-4 mb-4 md:mx-auto" />
      <p className="text-[12px] text-showroom-gray leading-relaxed max-w-[280px] font-[family-name:var(--font-inter)] md:mx-auto">
        İşletmenize özel tasarlanmış QR menü şablonları. Aşağıdan canlı inceleyin.
      </p>
    </header>
  );
}
