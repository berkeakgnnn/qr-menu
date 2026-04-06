import Link from "next/link";

interface TemplateCardProps {
  href: string;
  name: string;
  label: string;
  description: string;
  gradient: string;
  labelColor: string;
  buttonBg: string;
  buttonText: string;
  borderColor?: string;
}

export function TemplateCard({
  href,
  name,
  label,
  description,
  gradient,
  labelColor,
  buttonBg,
  buttonText,
  borderColor,
}: TemplateCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className="rounded-2xl overflow-hidden border transition-transform hover:scale-[1.02]"
        style={{ borderColor: borderColor || "#222" }}
      >
        {/* Preview area */}
        <div
          className="h-[120px] flex items-center justify-center"
          style={{ background: gradient }}
        >
          <div className="text-center text-dark-text">
            <div className="text-[18px] font-[family-name:var(--font-cormorant)] italic">
              {name}
            </div>
            <div
              className="text-[8px] tracking-[2px] mt-1 font-[family-name:var(--font-inter)]"
              style={{ color: labelColor }}
            >
              {label}
            </div>
          </div>
        </div>

        {/* Info area */}
        <div className="p-4 bg-[#161616]">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[12px] text-dark-text font-semibold font-[family-name:var(--font-inter)]">
                {description.split(" — ")[0]}
              </div>
              <div className="text-[10px] text-dark-muted mt-0.5 font-[family-name:var(--font-inter)]">
                {description.split(" — ")[1]}
              </div>
            </div>
            <div
              className="px-4 py-1.5 rounded-full text-[9px] font-bold font-[family-name:var(--font-inter)] tracking-wide"
              style={{ background: buttonBg, color: buttonText }}
            >
              İNCELE →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
