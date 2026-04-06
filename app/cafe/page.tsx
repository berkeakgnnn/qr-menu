import { LanguageProvider } from "@/lib/language-context";
import { MenuHeader } from "@/components/cafe/menu-header";
import { LanguageToggle } from "@/components/language-toggle";
import { CategoryNav } from "@/components/cafe/category-nav";
import { CategorySection } from "@/components/cafe/category-section";
import { MenuFooter } from "@/components/cafe/menu-footer";
import { categories } from "@/lib/menu-data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { LoadingScreen } from "@/components/showroom/loading-screen";

export default function CafePage() {
  return (
    <>
    <LoadingScreen bg="bg-warm-cream" textColor="text-coffee-900" accentColor="bg-coffee-accent" />
    <LanguageProvider>
      <main className="min-h-screen bg-warm-cream max-w-md md:max-w-2xl mx-auto shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        <MenuHeader />
        <LanguageToggle />
        <CategoryNav />
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <MenuFooter />
        <ScrollAnimator />
      </main>
    </LanguageProvider>
    </>
  );
}
