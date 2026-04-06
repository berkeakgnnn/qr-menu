import { Category, CafeInfo } from "./types";

export const restaurantInfo: CafeInfo = {
  name: "Maison Élégante",
  tagline: "FINE DINING",
  established: "EST. 2024",
  location: {
    tr: "Nişantaşı, İstanbul",
    en: "Nişantaşı, Istanbul",
  },
  hours: {
    tr: "18:00 – 00:00 | Pazartesi kapalı",
    en: "18:00 – 00:00 | Closed on Mondays",
  },
  heroImage:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80",
};

export const restaurantCategories: Category[] = [
  {
    id: "starters",
    name: { tr: "Başlangıçlar", en: "Starters" },
    banner:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    items: [
      {
        id: "carpaccio",
        name: { tr: "Dana Carpaccio", en: "Beef Carpaccio" },
        description: {
          tr: "İnce dilimlenmiş dana fileto, trüf yağı, parmesan talaşı, roka ve kapari",
          en: "Thinly sliced beef tenderloin, truffle oil, parmesan shavings, arugula and capers",
        },
        price: 320,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      },
      {
        id: "octopus",
        name: { tr: "Izgara Ahtapot", en: "Grilled Octopus" },
        description: {
          tr: "Yumuşacık pişirilmiş ahtapot, chorizo, patates püresi, paprika yağı",
          en: "Tender grilled octopus, chorizo, mashed potatoes, paprika oil",
        },
        price: 380,
        image:
          "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
      },
      {
        id: "burrata",
        name: { tr: "Burrata", en: "Burrata" },
        description: {
          tr: "Taze burrata, heirloom domates, fesleğen pesto, balzamik redüksiyon",
          en: "Fresh burrata, heirloom tomatoes, basil pesto, balsamic reduction",
        },
        price: 290,
        image:
          "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&q=80",
      },
      {
        id: "goat-cheese",
        name: { tr: "Keçi Peyniri Salatası", en: "Goat Cheese Salad" },
        description: {
          tr: "Karamelize keçi peyniri, ceviz, nar, bal-hardal sos",
          en: "Caramelized goat cheese, walnuts, pomegranate, honey-mustard dressing",
        },
        price: 260,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      },
    ],
  },
  {
    id: "mains",
    name: { tr: "Ana Yemekler", en: "Main Courses" },
    banner:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80",
    items: [
      {
        id: "wagyu",
        name: { tr: "Wagyu Bonfile", en: "Wagyu Tenderloin" },
        description: {
          tr: "A5 Wagyu, trüf jus, mevsim sebzeleri, fondant patates",
          en: "A5 Wagyu, truffle jus, seasonal vegetables, fondant potato",
        },
        price: 950,
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      },
      {
        id: "lamb",
        name: { tr: "Kuzu Pirzola", en: "Lamb Chops" },
        description: {
          tr: "Yeni Zelanda kuzu, biberiye jus, patlıcan beğendi",
          en: "New Zealand lamb, rosemary jus, smoked eggplant purée",
        },
        price: 680,
        image:
          "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=800&q=80",
      },
      {
        id: "duck",
        name: { tr: "Ördek Confit", en: "Duck Confit" },
        description: {
          tr: "12 saat pişirilmiş ördek but, kiraz sosu, püre",
          en: "12-hour slow cooked duck leg, cherry sauce, purée",
        },
        price: 580,
        image:
          "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=80",
      },
      {
        id: "risotto",
        name: { tr: "Risotto ai Funghi", en: "Mushroom Risotto" },
        description: {
          tr: "Porcini mantarı, parmesan, trüf yağı, taze kekik",
          en: "Porcini mushroom, parmesan, truffle oil, fresh thyme",
        },
        price: 420,
        image:
          "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
      },
    ],
  },
  {
    id: "seafood",
    name: { tr: "Deniz Ürünleri", en: "Seafood" },
    banner:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1200&q=80",
    items: [
      {
        id: "seabass",
        name: { tr: "Levrek", en: "Sea Bass" },
        description: {
          tr: "Tuzda pişirilmiş levrek, enginar, kapari-tereyağı sos",
          en: "Salt-baked sea bass, artichoke, caper-butter sauce",
        },
        price: 520,
        image:
          "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80",
      },
      {
        id: "shrimp-linguine",
        name: { tr: "Karides Linguine", en: "Shrimp Linguine" },
        description: {
          tr: "Jumbo karides, sarımsak, beyaz şarap, cherry domates",
          en: "Jumbo shrimp, garlic, white wine, cherry tomatoes",
        },
        price: 460,
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
      },
      {
        id: "salmon",
        name: { tr: "Somon", en: "Salmon" },
        description: {
          tr: "Teriyaki glazed somon, avokado, wasabi mayo, mikro yeşillik",
          en: "Teriyaki glazed salmon, avocado, wasabi mayo, micro greens",
        },
        price: 490,
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      },
      {
        id: "lobster",
        name: { tr: "Istakoz", en: "Lobster" },
        description: {
          tr: "Yarım ıstakoz, tereyağı sosu, haşlanmış patates, limon",
          en: "Half lobster, butter sauce, boiled potatoes, lemon",
        },
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1553247407-23251ce81f59?w=800&q=80",
      },
    ],
  },
  {
    id: "grill",
    name: { tr: "Izgara", en: "From the Grill" },
    banner:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    items: [
      {
        id: "tbone",
        name: { tr: "T-Bone Steak", en: "T-Bone Steak" },
        description: {
          tr: "500gr T-bone, kekik tereyağı, közlenmiş sebze",
          en: "500g T-bone, thyme butter, chargrilled vegetables",
        },
        price: 750,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      },
      {
        id: "ribs",
        name: { tr: "Dana Kaburga", en: "Beef Ribs" },
        description: {
          tr: "8 saat slow-cook, BBQ glaze, coleslaw",
          en: "8-hour slow cooked, BBQ glaze, coleslaw",
        },
        price: 620,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      },
      {
        id: "chicken-skewer",
        name: { tr: "Tavuk Şiş", en: "Chicken Skewers" },
        description: {
          tr: "Marine edilmiş tavuk, sumak-soğan salatası, lavaş",
          en: "Marinated chicken, sumac-onion salad, lavash bread",
        },
        price: 380,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
      },
      {
        id: "kofte",
        name: { tr: "Köfte", en: "Meatballs" },
        description: {
          tr: "El yapımı dana köfte, közlenmiş biber, yoğurt",
          en: "Handmade beef meatballs, charred peppers, yogurt",
        },
        price: 360,
        image:
          "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: { tr: "Tatlılar", en: "Desserts" },
    banner:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80",
    items: [
      {
        id: "fondant",
        name: { tr: "Çikolata Fondü", en: "Chocolate Fondant" },
        description: {
          tr: "Sıcak çikolata lav, vanilya dondurma, taze meyve",
          en: "Warm chocolate lava, vanilla ice cream, fresh fruit",
        },
        price: 280,
        image:
          "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
      },
      {
        id: "creme-brulee",
        name: { tr: "Crème Brûlée", en: "Crème Brûlée" },
        description: {
          tr: "Klasik Fransız tarif, karamelize şeker kabuğu",
          en: "Classic French recipe, caramelized sugar crust",
        },
        price: 240,
        image:
          "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
      },
      {
        id: "panna-cotta",
        name: { tr: "Panna Cotta", en: "Panna Cotta" },
        description: {
          tr: "Vanilya panna cotta, çilek coulis, bademli crumble",
          en: "Vanilla panna cotta, strawberry coulis, almond crumble",
        },
        price: 220,
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      },
      {
        id: "souffle",
        name: { tr: "Soufflé", en: "Soufflé" },
        description: {
          tr: "Sıcak çikolata soufflé, crème anglaise (20 dk bekleme)",
          en: "Warm chocolate soufflé, crème anglaise (20 min wait)",
        },
        price: 320,
        image:
          "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&q=80",
      },
    ],
  },
  {
    id: "drinks",
    name: { tr: "İçecekler", en: "Drinks" },
    banner:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80",
    items: [
      {
        id: "old-fashioned",
        name: { tr: "Old Fashioned", en: "Old Fashioned" },
        description: {
          tr: "Bourbon, angostura, şeker, portakal kabuğu",
          en: "Bourbon, angostura, sugar, orange peel",
        },
        price: 280,
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      },
      {
        id: "negroni",
        name: { tr: "Negroni", en: "Negroni" },
        description: {
          tr: "Gin, Campari, tatlı vermut, portakal dilimi",
          en: "Gin, Campari, sweet vermouth, orange slice",
        },
        price: 260,
        image:
          "https://images.unsplash.com/photo-1551751299-1b51cab2694c?w=800&q=80",
      },
      {
        id: "espresso-martini",
        name: { tr: "Espresso Martini", en: "Espresso Martini" },
        description: {
          tr: "Vodka, Kahlúa, taze espresso, kahve çekirdeği",
          en: "Vodka, Kahlúa, fresh espresso, coffee beans",
        },
        price: 290,
        image:
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
      },
      {
        id: "mocktail-sunset",
        name: { tr: "Mocktail — Sunset", en: "Mocktail — Sunset" },
        description: {
          tr: "Mango, passion fruit, limon, soda, buz",
          en: "Mango, passion fruit, lemon, soda, ice",
        },
        price: 160,
        image:
          "https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?w=800&q=80",
      },
      {
        id: "lemonade",
        name: { tr: "Ev Yapımı Limonata", en: "Homemade Lemonade" },
        description: {
          tr: "Taze sıkılmış limon, nane, bal",
          en: "Freshly squeezed lemon, mint, honey",
        },
        price: 120,
        image:
          "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=800&q=80",
      },
      {
        id: "wine",
        name: { tr: "Şarap (Kadeh)", en: "Wine (Glass)" },
        description: {
          tr: "Günün kırmızı veya beyaz şarabı",
          en: "Red or white wine of the day",
        },
        price: 180,
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
    ],
  },
];
