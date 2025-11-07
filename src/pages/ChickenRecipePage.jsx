import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import { translations } from '../translations/translations';
import './RecipeDetailPage.css';

const ChickenRecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];
  const { toggleSaveRecipe, isRecipeSaved } = useSavedRecipes();

  // Determine which recipe to show based on URL
  const getRecipeIngredients = (recipeType) => {
    const ingredientsMap = {
      chicken: {
        uz: [
          { name: 'Tovuq go\'shti', amount: '1 kg' },
          { name: 'Marinad', amount: '100 ml' },
          { name: 'Sarimsoq', amount: '4 bo\'lak' },
          { name: 'Limon', amount: '1 dona' },
          { name: 'Ziravorlar', amount: 'ta\'bga ko\'ra' },
          { name: 'Tuz va murch', amount: 'ta\'bga ko\'ra' }
        ],
        ru: [
          { name: 'Курица', amount: '1 кг' },
          { name: 'Маринад', amount: '100 мл' },
          { name: 'Чеснок', amount: '4 зубчика' },
          { name: 'Лимон', amount: '1 шт' },
          { name: 'Специи', amount: 'по вкусу' },
          { name: 'Соль и перец', amount: 'по вкусу' }
        ],
        en: [
          { name: 'Chicken', amount: '1 kg' },
          { name: 'Marinade', amount: '100 ml' },
          { name: 'Garlic', amount: '4 cloves' },
          { name: 'Lemon', amount: '1 pc' },
          { name: 'Spices', amount: 'to taste' },
          { name: 'Salt and pepper', amount: 'to taste' }
        ]
      },
      plov: {
        uz: [
          { name: 'Guruch', amount: '1 kg' },
          { name: 'Qo\'y go\'shti', amount: '1 kg' },
          { name: 'Sabzi', amount: '500 g' },
          { name: 'Piyoz', amount: '3 dona' },
          { name: 'Sarimsoq', amount: '1 bosh' },
          { name: 'Zira', amount: '2 osh qoshiq' },
          { name: 'O\'simlik yog\'i', amount: '200 ml' },
          { name: 'Tuz', amount: 'ta\'bga ko\'ra' }
        ],
        ru: [
          { name: 'Рис', amount: '1 кг' },
          { name: 'Баранина', amount: '1 кг' },
          { name: 'Морковь', amount: '500 г' },
          { name: 'Лук', amount: '3 шт' },
          { name: 'Чеснок', amount: '1 головка' },
          { name: 'Зира', amount: '2 ст.л.' },
          { name: 'Растительное масло', amount: '200 мл' },
          { name: 'Соль', amount: 'по вкусу' }
        ],
        en: [
          { name: 'Rice', amount: '1 kg' },
          { name: 'Lamb', amount: '1 kg' },
          { name: 'Carrots', amount: '500 g' },
          { name: 'Onions', amount: '3 pcs' },
          { name: 'Garlic', amount: '1 head' },
          { name: 'Cumin', amount: '2 tbsp' },
          { name: 'Vegetable oil', amount: '200 ml' },
          { name: 'Salt', amount: 'to taste' }
        ]
      },
      fajitas: {
        uz: [
          { name: 'Tovuq go\'shti', amount: '500 g' },
          { name: 'Qalampir', amount: '2 dona' },
          { name: 'Piyoz', amount: '1 dona' },
          { name: 'Tortilla', amount: '8 dona' },
          { name: 'Fajita ziravorlari', amount: '2 osh qoshiq' },
          { name: 'Limon', amount: '1 dona' },
          { name: 'O\'simlik yog\'i', amount: '2 osh qoshiq' }
        ],
        ru: [
          { name: 'Курица', amount: '500 г' },
          { name: 'Перец', amount: '2 шт' },
          { name: 'Лук', amount: '1 шт' },
          { name: 'Тортилья', amount: '8 шт' },
          { name: 'Приправа для фахитас', amount: '2 ст.л.' },
          { name: 'Лимон', amount: '1 шт' },
          { name: 'Растительное масло', amount: '2 ст.л.' }
        ],
        en: [
          { name: 'Chicken', amount: '500 g' },
          { name: 'Bell peppers', amount: '2 pcs' },
          { name: 'Onion', amount: '1 pc' },
          { name: 'Tortilla', amount: '8 pcs' },
          { name: 'Fajita seasoning', amount: '2 tbsp' },
          { name: 'Lemon', amount: '1 pc' },
          { name: 'Vegetable oil', amount: '2 tbsp' }
        ]
      },
      salad: {
        uz: [
          { name: 'Xas salat', amount: '200 g' },
          { name: 'Pomidor', amount: '3 dona' },
          { name: 'Bodring', amount: '2 dona' },
          { name: 'Zaytun yog\'i', amount: '3 osh qoshiq' },
          { name: 'Limon sharbati', amount: '2 osh qoshiq' },
          { name: 'Tuz va murch', amount: 'ta\'bga ko\'ra' }
        ],
        ru: [
          { name: 'Салат', amount: '200 г' },
          { name: 'Помидоры', amount: '3 шт' },
          { name: 'Огурцы', amount: '2 шт' },
          { name: 'Оливковое масло', amount: '3 ст.л.' },
          { name: 'Лимонный сок', amount: '2 ст.л.' },
          { name: 'Соль и перец', amount: 'по вкусу' }
        ],
        en: [
          { name: 'Lettuce', amount: '200 g' },
          { name: 'Tomatoes', amount: '3 pcs' },
          { name: 'Cucumbers', amount: '2 pcs' },
          { name: 'Olive oil', amount: '3 tbsp' },
          { name: 'Lemon juice', amount: '2 tbsp' },
          { name: 'Salt and pepper', amount: 'to taste' }
        ]
      },
      dessert: {
        uz: [
          { name: 'Aralash mevalar', amount: '500 g' },
          { name: 'Qaymoq', amount: '200 ml' },
          { name: 'Shakar', amount: '100 g' },
          { name: 'Vanil', amount: '1 choy qoshiq' },
          { name: 'Yong\'oq', amount: '50 g' }
        ],
        ru: [
          { name: 'Смешанные фрукты', amount: '500 г' },
          { name: 'Сливки', amount: '200 мл' },
          { name: 'Сахар', amount: '100 г' },
          { name: 'Ваниль', amount: '1 ч.л.' },
          { name: 'Орехи', amount: '50 г' }
        ],
        en: [
          { name: 'Mixed fruits', amount: '500 g' },
          { name: 'Cream', amount: '200 ml' },
          { name: 'Sugar', amount: '100 g' },
          { name: 'Vanilla', amount: '1 tsp' },
          { name: 'Nuts', amount: '50 g' }
        ]
      }
    };
    return ingredientsMap[recipeType]?.[language] || ingredientsMap[recipeType]?.uz || [];
  };

  const getRecipeSteps = (recipeType) => {
    const stepsMap = {
      chicken: {
        uz: [
          { title: 'Marinad tayyorlash', desc: 'Barcha ziravorlarni aralashtiring va marinad tayyorlang.' },
          { title: 'Go\'shtni marinlash', desc: 'Tovuq go\'shtini marinadda 2 soat ushlab turing.' },
          { title: 'Pishirish', desc: 'Grilda yoki pechda 180°C da 40 daqiqa pishiring.' },
          { title: 'Xizmat qilish', desc: 'Issiq holda yangi salat va limon bilan torting.' }
        ],
        ru: [
          { title: 'Приготовление маринада', desc: 'Смешайте все специи и приготовьте маринад.' },
          { title: 'Маринование мяса', desc: 'Выдержите курицу в маринаде 2 часа.' },
          { title: 'Приготовление', desc: 'Готовьте на гриле или в духовке при 180°C в течение 40 минут.' },
          { title: 'Подача', desc: 'Подавайте горячим со свежим салатом и лимоном.' }
        ],
        en: [
          { title: 'Prepare marinade', desc: 'Mix all spices and prepare the marinade.' },
          { title: 'Marinate meat', desc: 'Keep chicken in marinade for 2 hours.' },
          { title: 'Cooking', desc: 'Grill or bake at 180°C for 40 minutes.' },
          { title: 'Serving', desc: 'Serve hot with fresh salad and lemon.' }
        ]
      },
      plov: {
        uz: [
          { title: 'Go\'shtni qovurish', desc: 'Go\'shtni qizigan yog\'da qovuring.' },
          { title: 'Sabzi qo\'shish', desc: 'To\'g\'ralgan sabzi va piyozni qo\'shing.' },
          { title: 'Guruch qo\'yish', desc: 'Guruchni yaxshilab yuvib, ustiga qo\'ying.' },
          { title: 'Dam olish', desc: 'Pastki olovda 40 daqiqa dam tortiring.' }
        ],
        ru: [
          { title: 'Обжарка мяса', desc: 'Обжарьте мясо в горячем масле.' },
          { title: 'Добавление моркови', desc: 'Добавьте нарезанную морковь и лук.' },
          { title: 'Добавление риса', desc: 'Хорошо промойте рис и положите сверху.' },
          { title: 'Томление', desc: 'Томите на медленном огне 40 минут.' }
        ],
        en: [
          { title: 'Fry meat', desc: 'Fry the meat in hot oil.' },
          { title: 'Add carrots', desc: 'Add sliced carrots and onions.' },
          { title: 'Add rice', desc: 'Rinse rice well and place on top.' },
          { title: 'Simmer', desc: 'Simmer on low heat for 40 minutes.' }
        ]
      },
      fajitas: {
        uz: [
          { title: 'Go\'shtni kesish', desc: 'Tovuq go\'shtini uzun bo\'laklarga kesing.' },
          { title: 'Sabzavotlarni tayyorlash', desc: 'Qalampir va piyozni to\'g\'rang.' },
          { title: 'Qovurish', desc: 'Hammasini yuqori olovda 10-12 daqiqa qovuring.' },
          { title: 'Tortillaga o\'rash', desc: 'Tayyorlangan aralashmani tortillaga soling.' }
        ],
        ru: [
          { title: 'Нарезка мяса', desc: 'Нарежьте курицу длинными кусочками.' },
          { title: 'Подготовка овощей', desc: 'Нарежьте перец и лук.' },
          { title: 'Обжарка', desc: 'Обжаривайте все на сильном огне 10-12 минут.' },
          { title: 'Заворачивание', desc: 'Положите готовую смесь в тортилью.' }
        ],
        en: [
          { title: 'Cut meat', desc: 'Cut chicken into long strips.' },
          { title: 'Prepare vegetables', desc: 'Slice peppers and onions.' },
          { title: 'Fry', desc: 'Fry everything on high heat for 10-12 minutes.' },
          { title: 'Wrap', desc: 'Place the cooked mixture in tortillas.' }
        ]
      },
      salad: {
        uz: [
          { title: 'Sabzavotlarni yuvish', desc: 'Barcha sabzavotlarni yaxshilab yuving.' },
          { title: 'To\'g\'rash', desc: 'Sabzavotlarni mayda bo\'laklarga to\'g\'rang.' },
          { title: 'Sous tayyorlash', desc: 'Zaytun yog\'i va limonni aralashtiring.' },
          { title: 'Aralashtirish', desc: 'Barcha ingredientlarni birlashtiring.' }
        ],
        ru: [
          { title: 'Мытье овощей', desc: 'Тщательно вымойте все овощи.' },
          { title: 'Нарезка', desc: 'Нарежьте овощи небольшими кусочками.' },
          { title: 'Приготовление соуса', desc: 'Смешайте оливковое масло и лимон.' },
          { title: 'Смешивание', desc: 'Соедините все ингредиенты.' }
        ],
        en: [
          { title: 'Wash vegetables', desc: 'Wash all vegetables thoroughly.' },
          { title: 'Chop', desc: 'Chop vegetables into small pieces.' },
          { title: 'Prepare dressing', desc: 'Mix olive oil and lemon.' },
          { title: 'Mix', desc: 'Combine all ingredients.' }
        ]
      },
      dessert: {
        uz: [
          { title: 'Mevalarni tayyorlash', desc: 'Mevalarni mayda bo\'laklarga kesing.' },
          { title: 'Qaymoq tayyorlash', desc: 'Qaymoq va shakarni qorishib, ko\'pirtiring.' },
          { title: 'Aralashtirish', desc: 'Mevalar va qaymoqni aralashtiring.' },
          { title: 'Sovutish', desc: 'Muzlatgichda 30 daqiqa sovuting.' }
        ],
        ru: [
          { title: 'Подготовка фруктов', desc: 'Нарежьте фрукты на мелкие кусочки.' },
          { title: 'Приготовление крема', desc: 'Взбейте сливки с сахаром.' },
          { title: 'Смешивание', desc: 'Смешайте фрукты и крем.' },
          { title: 'Охлаждение', desc: 'Охладите в холодильнике 30 минут.' }
        ],
        en: [
          { title: 'Prepare fruits', desc: 'Cut fruits into small pieces.' },
          { title: 'Prepare cream', desc: 'Whip cream with sugar.' },
          { title: 'Mix', desc: 'Mix fruits and cream.' },
          { title: 'Chill', desc: 'Chill in refrigerator for 30 minutes.' }
        ]
      }
    };
    return stepsMap[recipeType]?.[language] || stepsMap[recipeType]?.uz || [];
  };

  const getRecipeTags = (recipeType) => {
    const tagsMap = {
      chicken: {
        uz: ['Tovuq', 'Grilda pishirilgan', 'Sog\'lom'],
        ru: ['Курица', 'На гриле', 'Здоровое'],
        en: ['Chicken', 'Grilled', 'Healthy']
      },
      plov: {
        uz: ['Osh', 'Milliy taom', 'O\'zbek'],
        ru: ['Плов', 'Национальное блюдо', 'Узбекское'],
        en: ['Plov', 'National dish', 'Uzbek']
      },
      fajitas: {
        uz: ['Fajitas', 'Meksika', 'Tez tayyorlanadigan'],
        ru: ['Фахитас', 'Мексиканское', 'Быстрое'],
        en: ['Fajitas', 'Mexican', 'Quick']
      },
      salad: {
        uz: ['Salat', 'Sog\'lom', 'Yangi'],
        ru: ['Салат', 'Здоровое', 'Свежее'],
        en: ['Salad', 'Healthy', 'Fresh']
      },
      dessert: {
        uz: ['Desert', 'Mevali', 'Shirinlik'],
        ru: ['Десерт', 'Фруктовый', 'Сладкое'],
        en: ['Dessert', 'Fruity', 'Sweet']
      }
    };
    return tagsMap[recipeType]?.[language] || tagsMap[recipeType]?.uz || [];
  };

  const recipeData = {
    '/recipe/chicken': {
      id: 'chicken',
      title: t.searchRecipe1Title,
      quote: t.searchRecipe1Quote,
      author: t.searchRecipe1Author,
      image: '/img/chicken.jpg',
      prepTime: language === 'uz' ? '30 daqiqa' : language === 'ru' ? '30 минут' : '30 minutes',
      servings: 4,
      ingredientsCount: 6,
      ingredients: getRecipeIngredients('chicken'),
      steps: getRecipeSteps('chicken'),
      nutrition: { calories: '420 kcal', protein: '45 g', carbs: '8 g', fat: '22 g' },
      tags: getRecipeTags('chicken')
    },
    '/recipe/plov': {
      id: 'plov',
      title: t.searchRecipe2Title,
      quote: t.searchRecipe2Quote,
      author: t.searchRecipe2Author,
      image: '/img/osh.webp',
      prepTime: language === 'uz' ? '120 daqiqa' : language === 'ru' ? '120 минут' : '120 minutes',
      servings: 8,
      ingredientsCount: 8,
      ingredients: getRecipeIngredients('plov'),
      steps: getRecipeSteps('plov'),
      nutrition: { calories: '580 kcal', protein: '32 g', carbs: '68 g', fat: '18 g' },
      tags: getRecipeTags('plov')
    },
    '/recipe/fajitas': {
      id: 'fajitas',
      title: t.searchRecipe3Title,
      quote: t.searchRecipe3Quote,
      author: t.searchRecipe3Author,
      image: '/img/FAJITAS.jpg',
      prepTime: language === 'uz' ? '25 daqiqa' : language === 'ru' ? '25 минут' : '25 minutes',
      servings: 4,
      ingredientsCount: 7,
      ingredients: getRecipeIngredients('fajitas'),
      steps: getRecipeSteps('fajitas'),
      nutrition: { calories: '380 kcal', protein: '28 g', carbs: '35 g', fat: '12 g' },
      tags: getRecipeTags('fajitas')
    },
    '/recipe/salad': {
      id: 'salad',
      title: t.searchRecipe4Title,
      quote: t.searchRecipe4Quote,
      author: t.searchRecipe4Author,
      image: '/img/salat.webp',
      prepTime: language === 'uz' ? '15 daqiqa' : language === 'ru' ? '15 минут' : '15 minutes',
      servings: 4,
      ingredientsCount: 6,
      ingredients: getRecipeIngredients('salad'),
      steps: getRecipeSteps('salad'),
      nutrition: { calories: '120 kcal', protein: '3 g', carbs: '8 g', fat: '9 g' },
      tags: getRecipeTags('salad')
    },
    '/recipe/dessert': {
      id: 'dessert',
      title: t.searchRecipe5Title,
      quote: t.searchRecipe5Quote,
      author: t.searchRecipe5Author,
      image: '/img/MEVALI DESERT.jpg',
      prepTime: language === 'uz' ? '20 daqiqa' : language === 'ru' ? '20 минут' : '20 minutes',
      servings: 6,
      ingredientsCount: 5,
      ingredients: getRecipeIngredients('dessert'),
      steps: getRecipeSteps('dessert'),
      nutrition: { calories: '280 kcal', protein: '4 g', carbs: '42 g', fat: '12 g' },
      tags: getRecipeTags('dessert')
    }
  };

  const recipe = recipeData[location.pathname] || recipeData['/recipe/chicken'];

  const handleSave = () => {
    toggleSaveRecipe(recipe.id);
  };

  const isSaved = isRecipeSaved(recipe.id);

  return (
    <div className="recipe-detail-page">
      <div className="recipe-detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      <div className="recipe-detail-container">
        <div className="recipe-category">{t.collection}</div>
        <h1 className="recipe-title">{recipe.title}</h1>
        <p className="recipe-description">{recipe.quote}</p>
        <p className="recipe-author">{t.recipeDetailFrom} {recipe.author}</p>

        <div className="recipe-actions">
          <button className="action-btn" title="Print">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
              <path d="M6 14h12v8H6z"/>
            </svg>
          </button>
          <button className="action-btn" title="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
            </svg>
          </button>
          <button className={`action-btn ${isSaved ? 'active' : ''}`} onClick={handleSave} title="Bookmark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
            </svg>
          </button>
          <button className="action-btn" title="Link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
          </button>
          <button className="action-btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            {t.recipeDetailMadeThis}
          </button>
        </div>

        <div className="recipe-main-image">
          <img src={recipe.image} alt={recipe.title} />
          <span className="image-credit">{t.recipeDetailPhoto}</span>
        </div>

        <div className="recipe-images-grid">
          <div className="recipe-image-thumb">
            <img src={recipe.image} alt="Image 1" />
          </div>
          <div className="recipe-image-thumb">
            <img src={recipe.image} alt="Image 2" />
          </div>
          <div className="recipe-image-thumb">
            <img src={recipe.image} alt="Image 3" />
          </div>
          <div className="recipe-image-thumb">
            <img src={recipe.image} alt="Image 4" />
          </div>
          <div className="recipe-image-thumb view-all">{t.recipeDetailViewAll}</div>
        </div>

        <div className="recipe-info-bar">
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <span>{t.recipeDetailPrepTime}: <strong>{recipe.prepTime}</strong></span>
          </div>
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
            <span>{t.recipeDetailServings}:
              <span className="servings-control">
                <button>−</button>
                <strong>{recipe.servings}</strong>
                <button>+</button>
              </span>
            </span>
          </div>
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 7h-9M14 17H5"/>
              <circle cx="17" cy="17" r="3"/>
              <circle cx="7" cy="7" r="3"/>
            </svg>
            <span>{t.recipeDetailIngredients}: <strong>{recipe.ingredientsCount}</strong></span>
          </div>
        </div>

        <div className="recipe-two-column">
          <div className="recipe-section">
            <h2 className="section-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7h-9M14 17H5"/>
                <circle cx="17" cy="17" r="3"/>
                <circle cx="7" cy="7" r="3"/>
              </svg>
              {t.recipeDetailIngredientsTitle}: {recipe.ingredientsCount}
            </h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-amount">{ingredient.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h2 className="section-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20v-6M6 20V10M18 20V4"/>
              </svg>
              {t.recipeDetailStepsTitle}
            </h2>
            <div className="steps-list">
              {recipe.steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="nutrition-section">
          <h2 className="section-title">{t.recipeDetailNutritionTitle}</h2>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailCalories}</span>
              <span className="nutrition-value">{recipe.nutrition.calories}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailProtein}</span>
              <span className="nutrition-value">{recipe.nutrition.protein}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailCarbs}</span>
              <span className="nutrition-value">{recipe.nutrition.carbs}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailFat}</span>
              <span className="nutrition-value">{recipe.nutrition.fat}</span>
            </div>
          </div>
        </div>

        <div className="recipe-tags">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChickenRecipePage;
