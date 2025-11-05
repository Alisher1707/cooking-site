export const recipesDetails = {
  1: {
    // Osh
    id: 1,
    title: "OSH - O'ZBEKISTONNING MILLIY TAOMI",
    category: "KOLLEKSIYA",
    description: "Osh - O'zbekistonning eng mashhur va sevimli milliy taomidir. Guruch, mol go'shti, sabzi va maxsus ziravorlar bilan tayyorlanadigan bu ajoyib taom har bir bayram dasturxonining bezagidir.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/osh.html",
    prepTime: "30 daqiqa",
    cookTime: "1.5 soat",
    totalTime: "2 soat",
    servings: 6,
    difficulty: "O'rta",
    mainImage: "/img/osh.webp",
    images: [
      "/img/osh-1.jpg",
      "/img/osh-2.jpg",
      "/img/osh-3.jpg"
    ],
    ingredients: [
      { name: "Guruch", amount: "1 kg", adjustable: true },
      { name: "Mol go'shti", amount: "800 g", adjustable: true },
      { name: "Sabzi", amount: "500 g", adjustable: true },
      { name: "Piyoz", amount: "300 g", adjustable: true },
      { name: "Yog'", amount: "300 ml", adjustable: true },
      { name: "Zira", amount: "2 osh qoshiq", adjustable: true },
      { name: "Sarimsoq", amount: "1 bosh", adjustable: true },
      { name: "Tuz", amount: "ta'bga ko'ra", adjustable: false }
    ],
    steps: [
      { number: 1, title: "Go'shtni qovurish", description: "Qozonda yog'ni qizdirib, go'shtni qovuring." },
      { number: 2, title: "Piyoz va sabzini qo'shish", description: "Piyoz va sabzini qo'shib, qizarguncha qovuring." },
      { number: 3, title: "Guruchni qo'shish", description: "Guruchni yuvib, ustiga quying va suv qo'shing." },
      { number: 4, title: "Pishirish", description: "Qopqog'ini yopib, olov ustida 40-50 daqiqa pishiring." },
      { number: 5, title: "Tayyor", description: "Tayyor oshni aralashtiring va dasturxonga torting." }
    ],
    nutrition: { calories: "550 kcal", protein: "25 g", carbs: "75 g", fat: "18 g" },
    tags: ["Osh", "Milliy taom", "Bayram", "Guruch"]
  },

  2: {
    // Kabob
    id: 2,
    title: "SHASHLIK - O'ZBEK KABOBLARI",
    category: "KOLLEKSIYA",
    description: "Shashlik - O'zbekistonda juda mashhur bo'lgan kabob turi. Mol go'shti yoki qo'y go'shtidan tayyorlanadigan, olovda pishiriladigan bu mazali taom har qanday ziyofatning bezagidir.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/shashlik.html",
    prepTime: "30 daqiqa",
    cookTime: "20 daqiqa",
    totalTime: "50 daqiqa",
    servings: 4,
    difficulty: "Oson",
    mainImage: "/img/kabob-1.jpg",
    images: ["/img/kabob-2.jpg", "/img/kabob-3.jpg", "/img/kabob-4.jpg"],
    ingredients: [
      { name: "Mol go'shti", amount: "1 kg", adjustable: true },
      { name: "Piyoz", amount: "500 g", adjustable: true },
      { name: "Sirka", amount: "3 osh qoshiq", adjustable: true },
      { name: "Zira", amount: "2 choy qoshiq", adjustable: true },
      { name: "Qora murch", amount: "1 choy qoshiq", adjustable: true },
      { name: "Tuz", amount: "ta'bga ko'ra", adjustable: false }
    ],
    steps: [
      { number: 1, title: "Go'shtni tayyorlash", description: "Go'shtni kubik shaklida to'g'rang." },
      { number: 2, title: "Marinadlash", description: "Piyoz, sirka va ziravorlar bilan 2-3 soat marinadlang." },
      { number: 3, title: "Pishirish", description: "Shampurlarga tizing va cho'g'da 20 daqiqa pishiring." }
    ],
    nutrition: { calories: "450 kcal", protein: "35 g", carbs: "5 g", fat: "32 g" },
    tags: ["Shashlik", "Kabob", "Mangal"]
  },

  4: {
    // Pechda pishirilgan qovurg'alar
    id: 4,
    title: "PECHDA PISHIRILGAN QOVURG'ALAR",
    category: "KOLLEKSIYA",
    description: "Yumshoq va mazali pechda pishirilgan qovurg'alar - oila kechki ovqatlari uchun mukammal tanlov.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/ribs.html",
    prepTime: "20 daqiqa",
    cookTime: "2 soat",
    totalTime: "2 soat 20 daqiqa",
    servings: 4,
    difficulty: "O'rta",
    mainImage: "/img/pechda pishirilgan gosht.jpg",
    images: ["/img/kabob-1.jpg", "/img/chicken.jpg", "/img/kabob-2.jpg"],
    ingredients: [
      { name: "Qovurg'a go'shti", amount: "1.5 kg", adjustable: true },
      { name: "BBQ sous", amount: "200 ml", adjustable: true },
      { name: "Asal", amount: "3 osh qoshiq", adjustable: true },
      { name: "Sarimsoq", amount: "4 bo'lak", adjustable: true },
      { name: "Paprika", amount: "2 choy qoshiq", adjustable: true },
      { name: "Tuz va qora murch", amount: "ta'bga ko'ra", adjustable: false }
    ],
    steps: [
      { number: 1, title: "Sous tayyorlash", description: "BBQ sous, asal va ziravorlarni aralashtiring." },
      { number: 2, title: "Go'shtni yog'lash", description: "Qovurg'alarni sous bilan yaxshilab yog'lang." },
      { number: 3, title: "Pechda pishirish", description: "180°C da 2 soat pishiring, har 30 daqiqada sous surting." },
      { number: 4, title: "Xizmat qilish", description: "Issiq holda yangi ko'katlar bilan torting." }
    ],
    nutrition: { calories: "620 kcal", protein: "42 g", carbs: "25 g", fat: "38 g" },
    tags: ["Qovurg'a", "Pechda pishirilgan", "BBQ"]
  },

  5: {
    // Mozzarella tayoqchalari
    id: 5,
    title: "MOZZARELLA TAYOQCHALARI",
    category: "APERITIV",
    description: "Qovurilgan mozzarella tayoqchalari - ajoyib aperitiv yoki snack.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/mozzarella.html",
    prepTime: "15 daqiqa",
    cookTime: "10 daqiqa",
    totalTime: "25 daqiqa",
    servings: 4,
    difficulty: "Oson",
    mainImage: "/img/MOZZARELLA TAYOQCHALARI.jpg",
    images: ["/img/category-1.webp", "/img/category-2.webp", "/img/category-3.webp"],
    ingredients: [
      { name: "Mozzarella pishlog'i", amount: "400 g", adjustable: true },
      { name: "Un", amount: "100 g", adjustable: true },
      { name: "Tuxum", amount: "2 dona", adjustable: true },
      { name: "Panirovka", amount: "150 g", adjustable: true },
      { name: "Yog' (qovurish uchun)", amount: "500 ml", adjustable: false }
    ],
    steps: [
      { number: 1, title: "Pishloqni tayyorlash", description: "Mozzarellani tayoqcha shaklida kesing." },
      { number: 2, title: "Panirovka qilish", description: "Unda, tuxumda va panirovkada aylantirib o'ting." },
      { number: 3, title: "Qovurish", description: "Qizigan yog'da oltin rangga kirguncha qovuring." },
      { number: 4, title: "Xizmat qilish", description: "Marinara sous bilan issiq holda torting." }
    ],
    nutrition: { calories: "380 kcal", protein: "18 g", carbs: "28 g", fat: "22 g" },
    tags: ["Pishloq", "Aperitiv", "Qovurilgan"]
  },

  6: {
    // Vegan pancake
    id: 6,
    title: "5 DAQIQALIK VEGAN PANCAKE",
    category: "NONUSHTA",
    description: "Tez va oson tayyorlanadigan vegan pancake - sog'lom va mazali nonushta.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/pancake.html",
    prepTime: "5 daqiqa",
    cookTime: "10 daqiqa",
    totalTime: "15 daqiqa",
    servings: 2,
    difficulty: "Oson",
    mainImage: "/img/page-1.webp",
    images: ["/img/page-2.webp", "/img/page-3.webp", "/img/page-4.webp"],
    ingredients: [
      { name: "Un", amount: "200 g", adjustable: true },
      { name: "O'simlik suti", amount: "250 ml", adjustable: true },
      { name: "Banan", amount: "1 dona", adjustable: true },
      { name: "Qand", amount: "2 osh qoshiq", adjustable: true },
      { name: "Razryxlituvchi", amount: "1 choy qoshiq", adjustable: true }
    ],
    steps: [
      { number: 1, title: "Xamir tayyorlash", description: "Barcha ingredientlarni blenderda aralashtiring." },
      { number: 2, title: "Pishirish", description: "Tosda har bir pancake'ni 2-3 daqiqa pishiring." },
      { number: 3, title: "Xizmat qilish", description: "Asal, meva yoki sirop bilan torting." }
    ],
    nutrition: { calories: "280 kcal", protein: "8 g", carbs: "52 g", fat: "4 g" },
    tags: ["Vegan", "Nonushta", "Tezkor"]
  },

  7: {
    // Shakshuka
    id: 7,
    title: "SHAKSHUKA",
    category: "NONUSHTA",
    description: "Yaqin Sharq oshxonasidan kelgan, tuxum va pomidorli mazali taom.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/shakshuka.html",
    prepTime: "10 daqiqa",
    cookTime: "20 daqiqa",
    totalTime: "30 daqiqa",
    servings: 2,
    difficulty: "Oson",
    mainImage: "/img/page-2.webp",
    images: ["/img/page-1.webp", "/img/page-3.webp", "/img/page-4.webp"],
    ingredients: [
      { name: "Tuxum", amount: "4 dona", adjustable: true },
      { name: "Pomidor", amount: "400 g", adjustable: true },
      { name: "Qalampir", amount: "2 dona", adjustable: true },
      { name: "Piyoz", amount: "1 dona", adjustable: true },
      { name: "Sarimsoq", amount: "3 bo'lak", adjustable: true },
      { name: "Ziravorlar", amount: "ta'bga ko'ra", adjustable: false }
    ],
    steps: [
      { number: 1, title: "Sabzavotlarni qovurish", description: "Piyoz, sarimsoq va qalampirni qovuring." },
      { number: 2, title: "Pomidor qo'shish", description: "Pomidor va ziravorlarni qo'shib, 10 daqiqa pishiring." },
      { number: 3, title: "Tuxum qo'shish", description: "Tuxumlarni ustiga sindirib, pishguncha kuting." },
      { number: 4, title: "Xizmat qilish", description: "Non bilan issiq holda torting." }
    ],
    nutrition: { calories: "220 kcal", protein: "14 g", carbs: "18 g", fat: "11 g" },
    tags: ["Shakshuka", "Nonushta", "Yaqin Sharq"]
  },

  8: {
    // Go'sht va broccoli
    id: 8,
    title: "GO'SHT VA BROCCOLI QOVURMA",
    category: "KECHKI OVQAT",
    description: "Xitoy uslubidagi tez va mazali qovurma taom.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/beef-broccoli.html",
    prepTime: "15 daqiqa",
    cookTime: "15 daqiqa",
    totalTime: "30 daqiqa",
    servings: 4,
    difficulty: "Oson",
    mainImage: "/img/GO'SHT VA BROCCOLI QOVURMA.jpg",
    images: ["/img/chicken.jpg", "/img/kabob-1.jpg", "/img/SABZAVOTLI QOVURMA.jpg"],
    ingredients: [
      { name: "Mol go'shti", amount: "500 g", adjustable: true },
      { name: "Broccoli", amount: "400 g", adjustable: true },
      { name: "Soya sousi", amount: "4 osh qoshiq", adjustable: true },
      { name: "Sarimsoq", amount: "3 bo'lak", adjustable: true },
      { name: "Zanjabil", amount: "2 sm", adjustable: true },
      { name: "Yog'", amount: "3 osh qoshiq", adjustable: true }
    ],
    steps: [
      { number: 1, title: "Go'shtni tayyorlash", description: "Go'shtni yupqa bo'laklarga kesing." },
      { number: 2, title: "Qovurish", description: "Yuqori olovda go'sht va broccolini tez qovuring." },
      { number: 3, title: "Sous qo'shish", description: "Soya sousi va ziravorlarni qo'shib, aralashtiring." },
      { number: 4, title: "Tayyor", description: "Guruch bilan issiq holda torting." }
    ],
    nutrition: { calories: "380 kcal", protein: "32 g", carbs: "12 g", fat: "24 g" },
    tags: ["Xitoy", "Qovurma", "Sog'lom"]
  },

  9: {
    // Fajitas
    id: 9,
    title: "FAJITAS",
    category: "MEKSIKA",
    description: "Meksika oshxonasining mashhur taomi - tovuq yoki go'shtli fajitas.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/fajitas.html",
    prepTime: "20 daqiqa",
    cookTime: "15 daqiqa",
    totalTime: "35 daqiqa",
    servings: 4,
    difficulty: "Oson",
    mainImage: "/img/FAJITAS.jpg",
    images: ["/img/category-2.webp", "/img/chicken.jpg", "/img/category-3.webp"],
    ingredients: [
      { name: "Tovuq filesi", amount: "600 g", adjustable: true },
      { name: "Qalampir", amount: "3 dona", adjustable: true },
      { name: "Piyoz", amount: "2 dona", adjustable: true },
      { name: "Fajitas ziravorlari", amount: "3 osh qoshiq", adjustable: true },
      { name: "Tortilla", amount: "8 dona", adjustable: true },
      { name: "Limon", amount: "1 dona", adjustable: false }
    ],
    steps: [
      { number: 1, title: "Tovuqni marinadlash", description: "Tovuqni ziravorlar bilan aralashtiring." },
      { number: 2, title: "Qovurish", description: "Tovuq, qalampir va piyozni qovuring." },
      { number: 3, title: "Tortillaga o'rash", description: "Issiq tortillaga soling va o'rang." },
      { number: 4, title: "Xizmat qilish", description: "Guacamole va smetana bilan torting." }
    ],
    nutrition: { calories: "420 kcal", protein: "35 g", carbs: "38 g", fat: "15 g" },
    tags: ["Fajitas", "Meksika", "Tovuq"]
  },

  10: {
    // Qaymoqli krem
    id: 10,
    title: "QAYMOQLI KREM",
    category: "DESERT",
    description: "Tortlar va desertlar uchun ajoyib qaymoqli krem.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/cream.html",
    prepTime: "10 daqiqa",
    cookTime: "0 daqiqa",
    totalTime: "10 daqiqa",
    servings: 8,
    difficulty: "Oson",
    mainImage: "/img/category-3.webp",
    images: ["/img/page-4.webp", "/img/MEVALI DESERT.jpg", "/img/page-1.webp"],
    ingredients: [
      { name: "Qaymoq (33%)", amount: "500 ml", adjustable: true },
      { name: "Shakar kukuni", amount: "100 g", adjustable: true },
      { name: "Vanil", amount: "1 choy qoshiq", adjustable: true }
    ],
    steps: [
      { number: 1, title: "Qaymoqni urish", description: "Sovuq qaymoqni mikserda uring." },
      { number: 2, title: "Shakar qo'shish", description: "Shakar kukuni va vanilni asta-sekin qo'shing." },
      { number: 3, title: "Urish", description: "Qotib, yumshoq hosil bo'lgunga qadar uring." },
      { number: 4, title: "Xizmat qilish", description: "Darhol ishlating yoki sovutgichda saqlang." }
    ],
    nutrition: { calories: "180 kcal", protein: "2 g", carbs: "12 g", fat: "15 g" },
    tags: ["Krem", "Desert", "Qaymog'"]
  },

  11: {
    // Sabzavotli qovurma
    id: 11,
    title: "SABZAVOTLI QOVURMA",
    category: "VEGAN",
    description: "Sog'lom va mazali vegan sabzavotli qovurma - tez tayyorlanadi.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/veggie-stirfry.html",
    prepTime: "15 daqiqa",
    cookTime: "10 daqiqa",
    totalTime: "25 daqiqa",
    servings: 4,
    difficulty: "Oson",
    mainImage: "/img/SABZAVOTLI QOVURMA.jpg",
    images: ["/img/GO'SHT VA BROCCOLI QOVURMA.jpg", "/img/salat.webp", "/img/category-1.webp"],
    ingredients: [
      { name: "Broccoli", amount: "200 g", adjustable: true },
      { name: "Qalampir", amount: "2 dona", adjustable: true },
      { name: "Sabzi", amount: "2 dona", adjustable: true },
      { name: "Qovoq", amount: "1 dona", adjustable: true },
      { name: "Soya sousi", amount: "3 osh qoshiq", adjustable: true },
      { name: "Sarimsoq", amount: "3 bo'lak", adjustable: true }
    ],
    steps: [
      { number: 1, title: "Sabzavotlarni tayyorlash", description: "Barcha sabzavotlarni yupqa to'g'rang." },
      { number: 2, title: "Qovurish", description: "Yuqori olovda tez qovuring." },
      { number: 3, title: "Sous qo'shish", description: "Soya sousi va sarimsoq qo'shib aralashtiring." },
      { number: 4, title: "Xizmat qilish", description: "Guruch yoki noodles bilan torting." }
    ],
    nutrition: { calories: "120 kcal", protein: "5 g", carbs: "22 g", fat: "2 g" },
    tags: ["Vegan", "Sabzavot", "Sog'lom"]
  },

  12: {
    // Tovuqli salat
    id: 12,
    title: "TOVUQLI SALAT",
    category: "SALAT",
    description: "Yangi va to'yimli tovuqli salat - yengil kechki ovqat uchun.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/chicken-salad.html",
    prepTime: "20 daqiqa",
    cookTime: "15 daqiqa",
    totalTime: "35 daqiqa",
    servings: 4,
    difficulty: "Oson",
    mainImage: "/img/salat.webp",
    images: ["/img/SABZAVOTLI QOVURMA.jpg", "/img/chicken.jpg", "/img/page-3.webp"],
    ingredients: [
      { name: "Tovuq filesi", amount: "400 g", adjustable: true },
      { name: "Salat barglari", amount: "200 g", adjustable: true },
      { name: "Bodring", amount: "2 dona", adjustable: true },
      { name: "Pomidor", amount: "3 dona", adjustable: true },
      { name: "Parmesan", amount: "50 g", adjustable: true },
      { name: "Sezar dressing", amount: "100 ml", adjustable: true }
    ],
    steps: [
      { number: 1, title: "Tovuqni pishirish", description: "Tovuqni grilda yoki tosda pishiring." },
      { number: 2, title: "Salat tayyorlash", description: "Barcha sabzavotlarni yuvib, to'g'rang." },
      { number: 3, title: "Aralashtirish", description: "Tovuq, sabzavot va pishloqni aralashtiring." },
      { number: 4, title: "Dressing", description: "Ustiga dressing quying va aralashtiring." }
    ],
    nutrition: { calories: "320 kcal", protein: "32 g", carbs: "12 g", fat: "16 g" },
    tags: ["Salat", "Tovuq", "Sog'lom"]
  },

  13: {
    // Mevali desert
    id: 13,
    title: "MEVALI DESERT",
    category: "DESERT",
    description: "Yangi mevalar bilan sog'lom va yengil desert.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/fruit-dessert.html",
    prepTime: "15 daqiqa",
    cookTime: "0 daqiqa",
    totalTime: "15 daqiqa",
    servings: 6,
    difficulty: "Oson",
    mainImage: "/img/MEVALI DESERT.jpg",
    images: ["/img/page-4.webp", "/img/page-1.webp", "/img/category-3.webp"],
    ingredients: [
      { name: "Qulupnay", amount: "200 g", adjustable: true },
      { name: "Banan", amount: "3 dona", adjustable: true },
      { name: "Uzum", amount: "150 g", adjustable: true },
      { name: "Apelsin", amount: "2 dona", adjustable: true },
      { name: "Asal", amount: "3 osh qoshiq", adjustable: true },
      { name: "Limon sharbati", amount: "2 osh qoshiq", adjustable: true }
    ],
    steps: [
      { number: 1, title: "Mevalarni tayyorlash", description: "Barcha mevalarni yuvib, to'g'rang." },
      { number: 2, title: "Aralashtirish", description: "Mevalarni katta idishda aralashtiring." },
      { number: 3, title: "Dressing tayyorlash", description: "Asal va limon sharbatini aralashtiring." },
      { number: 4, title: "Xizmat qilish", description: "Dressing bilan mevalarni aralashtiring va sovutib torting." }
    ],
    nutrition: { calories: "150 kcal", protein: "2 g", carbs: "36 g", fat: "0.5 g" },
    tags: ["Meva", "Desert", "Sog'lom"]
  }
};
