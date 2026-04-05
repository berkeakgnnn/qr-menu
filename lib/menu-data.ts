import { Category, CafeInfo } from "./types";

export const cafeInfo: CafeInfo = {
  name: "The Cozy Bean",
  tagline: "SPECIALTY COFFEE & MORE",
  established: "EST. 2024",
  location: {
    tr: "Kadıköy, İstanbul",
    en: "Kadıköy, Istanbul",
  },
  hours: {
    tr: "09:00 – 22:00 | Her gün açık",
    en: "09:00 – 22:00 | Open every day",
  },
  heroImage:
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80",
};

export const categories: Category[] = [
  {
    id: "espresso",
    name: { tr: "Espresso Bazlı", en: "Espresso Based" },
    banner:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=1200&q=80",
    items: [
      {
        id: "cappuccino",
        name: { tr: "Cappuccino", en: "Cappuccino" },
        description: {
          tr: "Özenle çekilmiş espresso, kadifemsi buharlanmış süt ve ince mikro köpük katmanı",
          en: "Carefully pulled espresso, velvety steamed milk and a thin layer of microfoam",
        },
        price: 85,
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
      },
      {
        id: "latte",
        name: { tr: "Caffè Latte", en: "Caffè Latte" },
        description: {
          tr: "Double shot espresso ile kremamsı süt, latte art ile servis edilir",
          en: "Double shot espresso with creamy milk, served with latte art",
        },
        price: 90,
        image:
          "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80",
      },
      {
        id: "mocha",
        name: { tr: "Mocha", en: "Mocha" },
        description: {
          tr: "Espresso, belçika çikolatası ve buharlanmış süt, üzerine kakao tozu",
          en: "Espresso, Belgian chocolate and steamed milk, topped with cocoa powder",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80",
      },
      {
        id: "flat-white",
        name: { tr: "Flat White", en: "Flat White" },
        description: {
          tr: "Ristretto double shot, ipeksi mikro köpüklü süt, yoğun kahve aroması",
          en: "Ristretto double shot, silky microfoam milk, intense coffee aroma",
        },
        price: 90,
        image:
          "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=800&q=80",
      },
      {
        id: "americano",
        name: { tr: "Americano", en: "Americano" },
        description: {
          tr: "Double espresso, sıcak su ile uzatılmış, saf kahve lezzeti",
          en: "Double espresso extended with hot water, pure coffee flavor",
        },
        price: 70,
        image:
          "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=800&q=80",
      },
      {
        id: "macchiato",
        name: { tr: "Macchiato", en: "Macchiato" },
        description: {
          tr: "Espresso, bir dokunuş süt köpüğü ile taçlandırılmış",
          en: "Espresso crowned with a touch of milk foam",
        },
        price: 75,
        image:
          "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
      },
    ],
  },
  {
    id: "filter",
    name: { tr: "Filtre & Pour Over", en: "Filter & Pour Over" },
    banner:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    items: [
      {
        id: "v60",
        name: { tr: "V60 Pour Over", en: "V60 Pour Over" },
        description: {
          tr: "Tek kökenli özel çekirdek, Hario V60 ile elle demleme, günün çekirdeği",
          en: "Single origin specialty beans, hand brewed with Hario V60, bean of the day",
        },
        price: 110,
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
      },
      {
        id: "chemex",
        name: { tr: "Chemex", en: "Chemex" },
        description: {
          tr: "Temiz ve parlak tat profili, Chemex filtre ile demleme",
          en: "Clean and bright flavor profile, brewed with Chemex filter",
        },
        price: 120,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80",
      },
      {
        id: "french-press",
        name: { tr: "French Press", en: "French Press" },
        description: {
          tr: "Tam gövdeli, zengin aroma, 4 dakika demleme",
          en: "Full bodied, rich aroma, 4 minute brew",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      },
      {
        id: "filtre",
        name: { tr: "Filtre Kahve", en: "Filter Coffee" },
        description: {
          tr: "Günlük blend, taze demlenmiş, klasik lezzet",
          en: "Daily blend, freshly brewed, classic flavor",
        },
        price: 65,
        image:
          "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&q=80",
      },
    ],
  },
  {
    id: "cold",
    name: { tr: "Soğuk Kahveler", en: "Cold Coffees" },
    banner:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=80",
    items: [
      {
        id: "iced-latte",
        name: { tr: "Iced Latte", en: "Iced Latte" },
        description: {
          tr: "Espresso, soğuk süt ve buz, serinletici klasik",
          en: "Espresso, cold milk and ice, a refreshing classic",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80",
      },
      {
        id: "cold-brew",
        name: { tr: "Cold Brew", en: "Cold Brew" },
        description: {
          tr: "18 saat soğuk demleme, yumuşak ve düşük asitli",
          en: "18-hour cold extraction, smooth and low acidity",
        },
        price: 100,
        image:
          "https://images.unsplash.com/photo-1461162480545-8c996cc8f25e?w=800&q=80",
      },
      {
        id: "iced-mocha",
        name: { tr: "Iced Mocha", en: "Iced Mocha" },
        description: {
          tr: "Espresso, çikolata sosu, soğuk süt ve buz",
          en: "Espresso, chocolate sauce, cold milk and ice",
        },
        price: 105,
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
      },
      {
        id: "frappe",
        name: { tr: "Frappé", en: "Frappé" },
        description: {
          tr: "Blended buz, espresso, süt ve vanilya, ferahlatıcı",
          en: "Blended ice, espresso, milk and vanilla, refreshing",
        },
        price: 100,
        image:
          "https://images.unsplash.com/photo-1553909489-ec2175ef3f52?w=800&q=80",
      },
    ],
  },
  {
    id: "tea",
    name: { tr: "Sıcak Çaylar", en: "Hot Teas" },
    banner:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&q=80",
    items: [
      {
        id: "earl-grey",
        name: { tr: "Earl Grey", en: "Earl Grey" },
        description: {
          tr: "Bergamot aromalı siyah çay, zarif ve ferahlatıcı",
          en: "Bergamot-infused black tea, elegant and refreshing",
        },
        price: 60,
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
      },
      {
        id: "matcha",
        name: { tr: "Matcha Latte", en: "Matcha Latte" },
        description: {
          tr: "Seremonik grade matcha, buharlanmış süt ile",
          en: "Ceremonial grade matcha with steamed milk",
        },
        price: 95,
        image:
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
      },
      {
        id: "turk-cayi",
        name: { tr: "Türk Çayı", en: "Turkish Tea" },
        description: {
          tr: "Çaykur Rize çayı, ince belli bardakta servis",
          en: "Çaykur Rize tea, served in traditional tulip glass",
        },
        price: 40,
        image:
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80",
      },
      {
        id: "bitki-cayi",
        name: { tr: "Bitki Çayı", en: "Herbal Tea" },
        description: {
          tr: "Ihlamur, papatya veya ada çayı, doğal ve rahatlatıcı",
          en: "Linden, chamomile or sage tea, natural and soothing",
        },
        price: 55,
        image:
          "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
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
        id: "cheesecake",
        name: {
          tr: "San Sebastian Cheesecake",
          en: "San Sebastián Cheesecake",
        },
        description: {
          tr: "Kremalı, karamelize üst, ev yapımı özel tarif",
          en: "Creamy, caramelized top, homemade special recipe",
        },
        price: 120,
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
      },
      {
        id: "brownie",
        name: { tr: "Brownie", en: "Brownie" },
        description: {
          tr: "Sıcak servis, çikolata parçacıklı, dondurma eşliğinde",
          en: "Served warm, chocolate chip, accompanied with ice cream",
        },
        price: 90,
        image:
          "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&q=80",
      },
      {
        id: "cookie",
        name: { tr: "Cookie", en: "Cookie" },
        description: {
          tr: "Taze fırından, chocolate chip, yumuşak dokulu",
          en: "Fresh from the oven, chocolate chip, soft textured",
        },
        price: 65,
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
      },
      {
        id: "tiramisu",
        name: { tr: "Tiramisu", en: "Tiramisu" },
        description: {
          tr: "Mascarpone, espresso emdirilmiş lady finger, kakao tozu",
          en: "Mascarpone, espresso-soaked lady fingers, cocoa powder",
        },
        price: 110,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      },
    ],
  },
  {
    id: "sandwiches",
    name: { tr: "Sandviçler", en: "Sandwiches" },
    banner:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1200&q=80",
    items: [
      {
        id: "avocado-toast",
        name: { tr: "Avocado Toast", en: "Avocado Toast" },
        description: {
          tr: "Ekşi maya ekmek, avokado, poşe yumurta, chili pul biber",
          en: "Sourdough bread, avocado, poached egg, chili flakes",
        },
        price: 130,
        image:
          "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
      },
      {
        id: "tost",
        name: { tr: "Tost", en: "Grilled Toast" },
        description: {
          tr: "Kaşar, domates, sucuk, taze ekmek üzerinde",
          en: "Cheese, tomato, Turkish sausage on fresh bread",
        },
        price: 85,
        image:
          "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
      },
      {
        id: "croissant",
        name: { tr: "Croissant Sandviç", en: "Croissant Sandwich" },
        description: {
          tr: "Taze kruvasan, füme hindi, cheddar peyniri, roka",
          en: "Fresh croissant, smoked turkey, cheddar cheese, arugula",
        },
        price: 110,
        image:
          "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&q=80",
      },
      {
        id: "wrap",
        name: { tr: "Wrap", en: "Wrap" },
        description: {
          tr: "Tavuk, meksika fasulyesi, salsa, marul, lavaş sarma",
          en: "Chicken, black beans, salsa, lettuce, wrapped in lavash",
        },
        price: 105,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
      },
    ],
  },
];
