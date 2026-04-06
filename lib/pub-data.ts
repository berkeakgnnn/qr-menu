import { LocalizedText, MenuItem, CafeInfo } from "./types";

export interface DrinkItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  volume: string;
  abv: string;
  type: string;
}

export interface PubCategory {
  id: string;
  name: LocalizedText;
  banner: string;
  layout: "chalkboard" | "grid";
  drinks?: DrinkItem[];
  foods?: MenuItem[];
}

export const pubInfo: CafeInfo = {
  name: "The Black Sheep",
  tagline: "IRISH PUB & KITCHEN",
  established: "EST. 2024",
  location: { tr: "Kadıköy, İstanbul", en: "Kadıköy, Istanbul" },
  hours: { tr: "16:00 – 02:00 | Her gün açık", en: "16:00 – 02:00 | Open every day" },
  heroImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&q=80",
};

export const pubCategories: PubCategory[] = [
  {
    id: "draft",
    name: { tr: "Draft Biralar", en: "Draft Beers" },
    banner: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1200&q=80",
    layout: "chalkboard",
    drinks: [
      { id: "guinness", name: { tr: "Guinness", en: "Guinness" }, description: { tr: "İrlanda'nın efsane draft stout'u. Koyu, kremamsı, hafif acı", en: "Ireland's legendary draft stout. Dark, creamy, slightly bitter" }, price: 140, volume: "500ml", abv: "4.2%", type: "Stout" },
      { id: "kilkenny", name: { tr: "Kilkenny", en: "Kilkenny" }, description: { tr: "Irish cream ale, yumuşak ve dengeli, karamel notaları", en: "Irish cream ale, smooth and balanced, caramel notes" }, price: 135, volume: "500ml", abv: "4.3%", type: "Cream Ale" },
      { id: "smithwicks", name: { tr: "Smithwick's Red", en: "Smithwick's Red" }, description: { tr: "1710'dan beri. Kırmızı ale, maltlı, hafif tatlı finish", en: "Since 1710. Red ale, malty, slightly sweet finish" }, price: 130, volume: "500ml", abv: "3.8%", type: "Red Ale" },
      { id: "hophous13", name: { tr: "Hop House 13", en: "Hop House 13" }, description: { tr: "Guinness'in lager'ı. Çiçeksi hop, ferah, altın rengi", en: "Guinness's lager. Floral hops, refreshing, golden" }, price: 145, volume: "400ml", abv: "5.0%", type: "Lager" },
      { id: "efes", name: { tr: "Efes Draft", en: "Efes Draft" }, description: { tr: "Türkiye'nin klasiği. Hafif, ferah, her daim güvenilir", en: "Turkey's classic. Light, refreshing, always reliable" }, price: 90, volume: "500ml", abv: "5.0%", type: "Pilsner" },
      { id: "bomonti", name: { tr: "Bomonti", en: "Bomonti" }, description: { tr: "1890'dan beri. Dengeli, maltlı, temiz bitiş", en: "Since 1890. Balanced, malty, clean finish" }, price: 95, volume: "500ml", abv: "5.0%", type: "Lager" },
    ],
  },
  {
    id: "bottle",
    name: { tr: "Şişe Biralar", en: "Bottle Beers" },
    banner: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1200&q=80",
    layout: "chalkboard",
    drinks: [
      { id: "tuborg", name: { tr: "Tuborg Gold", en: "Tuborg Gold" }, description: { tr: "Danimarka lager'ı. Hafif, altın sarısı, temiz tat", en: "Danish lager. Light, golden, clean taste" }, price: 80, volume: "330ml", abv: "5.0%", type: "Lager" },
      { id: "carlsberg", name: { tr: "Carlsberg", en: "Carlsberg" }, description: { tr: "Probably the best. Dengeli, hafif acı, ferah", en: "Probably the best. Balanced, slightly bitter, refreshing" }, price: 85, volume: "330ml", abv: "5.0%", type: "Pilsner" },
      { id: "corona", name: { tr: "Corona Extra", en: "Corona Extra" }, description: { tr: "Meksika'dan. Lime ile servis, hafif ve tropikal", en: "From Mexico. Served with lime, light and tropical" }, price: 110, volume: "355ml", abv: "4.5%", type: "Lager" },
      { id: "hoegaarden", name: { tr: "Hoegaarden", en: "Hoegaarden" }, description: { tr: "Belçika buğday birası. Portakal kabuğu, kişniş", en: "Belgian wheat beer. Orange peel, coriander" }, price: 120, volume: "330ml", abv: "4.9%", type: "Wheat" },
      { id: "leffe", name: { tr: "Leffe Blonde", en: "Leffe Blonde" }, description: { tr: "Belçika manastır birası. Meyvemsi, baharatlı, zengin", en: "Belgian abbey beer. Fruity, spicy, rich" }, price: 130, volume: "330ml", abv: "6.6%", type: "Abbey" },
      { id: "erdinger", name: { tr: "Erdinger", en: "Erdinger" }, description: { tr: "Bavyera buğday birası. Muz, karanfil notaları", en: "Bavarian wheat beer. Banana, clove notes" }, price: 125, volume: "500ml", abv: "5.3%", type: "Weissbier" },
    ],
  },
  {
    id: "whiskey",
    name: { tr: "Viski & Spirits", en: "Whiskey & Spirits" },
    banner: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=1200&q=80",
    layout: "chalkboard",
    drinks: [
      { id: "jameson", name: { tr: "Jameson", en: "Jameson" }, description: { tr: "Triple distilled Irish whiskey. Smooth, vanilya ve çiçeksi", en: "Triple distilled Irish whiskey. Smooth, vanilla and floral" }, price: 120, volume: "4cl", abv: "40%", type: "Blended" },
      { id: "redbreast", name: { tr: "Redbreast 12", en: "Redbreast 12" }, description: { tr: "Single pot still. Meşe fıçı, baharat, kurutulmuş meyve", en: "Single pot still. Oak cask, spice, dried fruit" }, price: 220, volume: "4cl", abv: "40%", type: "Pot Still" },
      { id: "tullamore", name: { tr: "Tullamore D.E.W.", en: "Tullamore D.E.W." }, description: { tr: "Triple blend. Malt, pot still ve grain. Yumuşak, meyvemsi", en: "Triple blend. Malt, pot still and grain. Smooth, fruity" }, price: 130, volume: "4cl", abv: "40%", type: "Triple Blend" },
      { id: "bushmills", name: { tr: "Bushmills Original", en: "Bushmills Original" }, description: { tr: "Dünyanın en eski lisanslı damıtımevi. Hafif, tatlı, meyvemsi", en: "World's oldest licensed distillery. Light, sweet, fruity" }, price: 115, volume: "4cl", abv: "40%", type: "Blended" },
      { id: "jackdaniels", name: { tr: "Jack Daniel's", en: "Jack Daniel's" }, description: { tr: "Tennessee whiskey. Akçaağaç kömür filtre, vanilya, karamel", en: "Tennessee whiskey. Charcoal filtered, vanilla, caramel" }, price: 130, volume: "4cl", abv: "40%", type: "Tennessee" },
      { id: "bulleit", name: { tr: "Bulleit Bourbon", en: "Bulleit Bourbon" }, description: { tr: "Yüksek çavdar oranı. Baharatlı, meşe, bal notaları", en: "High rye content. Spicy, oak, honey notes" }, price: 150, volume: "4cl", abv: "45%", type: "Bourbon" },
    ],
  },
  {
    id: "cocktails",
    name: { tr: "Kokteyller", en: "Cocktails" },
    banner: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80",
    layout: "chalkboard",
    drinks: [
      { id: "irishcoffee", name: { tr: "Irish Coffee", en: "Irish Coffee" }, description: { tr: "Jameson, sıcak kahve, şeker, taze krema", en: "Jameson, hot coffee, sugar, fresh cream" }, price: 180, volume: "", abv: "", type: "Sıcak" },
      { id: "whiskeysour", name: { tr: "Whiskey Sour", en: "Whiskey Sour" }, description: { tr: "Bourbon, taze limon suyu, şeker, yumurta akı", en: "Bourbon, fresh lemon juice, sugar, egg white" }, price: 200, volume: "", abv: "", type: "Klasik" },
      { id: "oldfashioned", name: { tr: "Old Fashioned", en: "Old Fashioned" }, description: { tr: "Bourbon, angostura, şeker küpü, portakal kabuğu", en: "Bourbon, angostura, sugar cube, orange peel" }, price: 220, volume: "", abv: "", type: "Klasik" },
      { id: "blackvelvet", name: { tr: "Black Velvet", en: "Black Velvet" }, description: { tr: "Guinness + şampanya. İrlanda klasiği, kadifemsi", en: "Guinness + champagne. Irish classic, velvety" }, price: 190, volume: "", abv: "", type: "Özel" },
      { id: "darkstormy", name: { tr: "Dark & Stormy", en: "Dark & Stormy" }, description: { tr: "Dark rum, ginger beer, lime. Baharatlı ve ferah", en: "Dark rum, ginger beer, lime. Spicy and refreshing" }, price: 180, volume: "", abv: "", type: "Tropikal" },
      { id: "espressomartini", name: { tr: "Espresso Martini", en: "Espresso Martini" }, description: { tr: "Vodka, Kahlúa, taze espresso. Enerjik ve zarif", en: "Vodka, Kahlúa, fresh espresso. Energetic and elegant" }, price: 210, volume: "", abv: "", type: "Modern" },
    ],
  },
  {
    id: "mains",
    name: { tr: "Pub Yemekleri", en: "Pub Mains" },
    banner: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80",
    layout: "grid",
    foods: [
      { id: "fishandchips", name: { tr: "Fish & Chips", en: "Fish & Chips" }, description: { tr: "Bira hamurlu morina, el yapımı patates, tartare sos", en: "Beer battered cod, hand-cut chips, tartare sauce" }, price: 240, image: "https://images.unsplash.com/photo-1644116516018-5d3e17a9e2c4?w=800&q=80" },
      { id: "shepherdspie", name: { tr: "Shepherd's Pie", en: "Shepherd's Pie" }, description: { tr: "Kuzu kıyma, sebze ragu, patates püre grateni", en: "Lamb mince, vegetable ragout, potato gratin" }, price: 220, image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=80" },
      { id: "bangersmash", name: { tr: "Bangers & Mash", en: "Bangers & Mash" }, description: { tr: "İrlanda sosisleri, patates püresi, soğan sosu", en: "Irish sausages, mashed potatoes, onion gravy" }, price: 200, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" },
      { id: "irishstew", name: { tr: "Irish Stew", en: "Irish Stew" }, description: { tr: "Kuzu, patates, havuç, soğan. Geleneksel tarif", en: "Lamb, potatoes, carrots, onions. Traditional recipe" }, price: 210, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80" },
    ],
  },
  {
    id: "burgers",
    name: { tr: "Burgerlar", en: "Burgers" },
    banner: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
    layout: "grid",
    foods: [
      { id: "classicburger", name: { tr: "Classic Burger", en: "Classic Burger" }, description: { tr: "200gr dana eti, cheddar, kornişon turşu, özel sos, brioche", en: "200g beef patty, cheddar, gherkins, special sauce, brioche" }, price: 220, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" },
      { id: "bbqbacon", name: { tr: "BBQ Bacon", en: "BBQ Bacon" }, description: { tr: "Çıtır bacon, BBQ sos, karamelize soğan, cheddar", en: "Crispy bacon, BBQ sauce, caramelized onion, cheddar" }, price: 250, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80" },
      { id: "mushroomswiss", name: { tr: "Mushroom Swiss", en: "Mushroom Swiss" }, description: { tr: "Sote mantar, İsviçre peyniri, trüf mayo", en: "Sautéed mushrooms, Swiss cheese, truffle mayo" }, price: 260, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80" },
      { id: "veggieburger", name: { tr: "Veggie Burger", en: "Veggie Burger" }, description: { tr: "Falafel patty, humus, taze sebzeler, tam buğday ekmeği", en: "Falafel patty, hummus, fresh vegetables, whole wheat bun" }, price: 200, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80" },
    ],
  },
  {
    id: "snacks",
    name: { tr: "Atıştırmalıklar", en: "Bar Snacks" },
    banner: "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?w=1200&q=80",
    layout: "grid",
    foods: [
      { id: "nachos", name: { tr: "Loaded Nachos", en: "Loaded Nachos" }, description: { tr: "Cheddar, jalapeno, salsa, guacamole, ekşi krema", en: "Cheddar, jalapeño, salsa, guacamole, sour cream" }, price: 180, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80" },
      { id: "wings", name: { tr: "Buffalo Wings", en: "Buffalo Wings" }, description: { tr: "8 adet tavuk kanat, buffalo sos, ranch dip", en: "8 chicken wings, buffalo sauce, ranch dip" }, price: 190, image: "https://images.unsplash.com/photo-1608039829572-9b0ba41a839b?w=800&q=80" },
      { id: "onionrings", name: { tr: "Onion Rings", en: "Onion Rings" }, description: { tr: "Bira hamurlu soğan halkası, chipotle mayo", en: "Beer battered onion rings, chipotle mayo" }, price: 120, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80" },
      { id: "mozzsticks", name: { tr: "Mozzarella Sticks", en: "Mozzarella Sticks" }, description: { tr: "Çıtır mozzarella çubukları, marinara sos", en: "Crispy mozzarella sticks, marinara sauce" }, price: 140, image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&q=80" },
    ],
  },
];
