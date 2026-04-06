import { LanguageProvider } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { ScrollAnimator } from "@/components/scroll-animator";
import { LoadingScreen } from "@/components/showroom/loading-screen";
import { PubHeader } from "@/components/pub/pub-header";
import { PubNav } from "@/components/pub/pub-nav";
import { PubCategorySection } from "@/components/pub/pub-category";
import { PubFooter } from "@/components/pub/pub-footer";
import { pubCategories } from "@/lib/pub-data";

export default function PubPage() {
  return (
    <>
      <LoadingScreen bg="bg-pub-bg" textColor="text-pub-amber" accentColor="bg-pub-amber" />
      <LanguageProvider>
        <main className="min-h-screen bg-pub-bg max-w-md md:max-w-2xl mx-auto shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <PubHeader />
          <div className="flex justify-center py-2.5 bg-[#171210] border-b border-pub-border">
            <LanguageToggle variant="dark" />
          </div>
          <PubNav />
          {pubCategories.map((category, index) => (
            <PubCategorySection key={category.id} category={category} showBanner={index > 0} />
          ))}
          <PubFooter />
          <ScrollAnimator />
        </main>
      </LanguageProvider>
    </>
  );
}
