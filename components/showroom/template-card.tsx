import Image from "next/image";
import Link from "next/link";

interface TemplateCardProps {
  href: string;
  number: string;
  name: string;
  type: string;
  description: string;
  image: string;
  brightness?: string;
}

export function TemplateCard({
  href,
  number,
  name,
  type,
  description,
  image,
  brightness = "brightness-[0.45]",
}: TemplateCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative h-[200px] md:h-[240px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover ${brightness} group-hover:scale-105 transition-transform duration-500`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="text-[8px] tracking-[2px] text-white/40 font-[family-name:var(--font-inter)]">
            {number}
          </div>
          <div className="text-[22px] text-white font-[family-name:var(--font-cormorant)] italic mt-0.5">
            {name}
          </div>
          <div className="flex justify-between items-center mt-1.5">
            <div className="text-[10px] text-white/60 font-[family-name:var(--font-inter)]">
              {type}
            </div>
            <div className="text-[9px] text-white font-medium tracking-[1px] font-[family-name:var(--font-inter)] group-hover:tracking-[2px] transition-all">
              {"INCELE \u2192"}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-1">
        <div className="text-[10px] text-showroom-light font-[family-name:var(--font-inter)]">
          {description}
        </div>
      </div>
    </Link>
  );
}
