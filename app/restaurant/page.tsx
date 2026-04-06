import { LanguageProvider } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { ScrollAnimator } from "@/components/scroll-animator";
import { RestaurantHeader } from "@/components/restaurant/restaurant-header";
import { RestaurantNav } from "@/components/restaurant/restaurant-nav";
import { RestaurantCategory } from "@/components/restaurant/restaurant-category";
import { RestaurantFooter } from "@/components/restaurant/restaurant-footer";
import { restaurantCategories } from "@/lib/restaurant-data";

export default function RestaurantPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-dark-bg max-w-md md:max-w-2xl mx-auto shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        <RestaurantHeader />
        <div className="flex justify-center py-3.5 bg-[#0d0d0d] border-b border-dark-border">
          <LanguageToggle variant="dark" />
        </div>
        <RestaurantNav />
        {restaurantCategories.map((category, index) => (
          <RestaurantCategory
            key={category.id}
            category={category}
            showBanner={index > 0}
          />
        ))}
        <RestaurantFooter />
        <ScrollAnimator />
      </main>
    </LanguageProvider>
  );
}
