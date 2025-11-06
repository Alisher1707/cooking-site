import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './RecipeDetailPage.css';

const ChickenRecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  // Determine which recipe to show based on URL
  const recipeData = {
    '/recipe/chicken': {
      title: t.searchRecipe1Title,
      quote: t.searchRecipe1Quote,
      author: t.searchRecipe1Author,
      image: '/img/chicken.jpg',
      prepTime: '30 daqiqa',
      servings: 4,
      ingredientsCount: 6,
      ingredients: [
        { name: 'Tovuq go\'shti', amount: '1 kg' },
        { name: 'Marinad', amount: '100 ml' },
        { name: 'Sarimsoq', amount: '4 bo\'lak' },
        { name: 'Limon', amount: '1 dona' },
        { name: 'Ziravorlar', amount: 'ta\'bga ko\'ra' },
        { name: 'Tuz va murch', amount: 'ta\'bga ko\'ra' }
      ],
      steps: [
        { title: 'Marinad tayyorlash', desc: 'Barcha ziravorlarni aralashtiring va marinad tayyorlang.' },
        { title: 'Go\'shtni marinlash', desc: 'Tovuq go\'shtini marinadda 2 soat ushlab turing.' },
        { title: 'Pishirish', desc: 'Grilda yoki pechda 180°C da 40 daqiqa pishiring.' },
        { title: 'Xizmat qilish', desc: 'Issiq holda yangi salat va limon bilan torting.' }
      ],
      nutrition: { calories: '420 kcal', protein: '45 g', carbs: '8 g', fat: '22 g' },
      tags: ['Tovuq', 'Grilda pishirilgan', 'Sog\'lom']
    },
    '/recipe/plov': {
      title: t.searchRecipe2Title,
      quote: t.searchRecipe2Quote,
      author: t.searchRecipe2Author,
      image: '/img/osh.webp',
      prepTime: '120 daqiqa',
      servings: 8,
      ingredientsCount: 8,
      ingredients: [
        { name: 'Guruch', amount: '1 kg' },
        { name: 'Qo\'y go\'shti', amount: '1 kg' },
        { name: 'Sabzi', amount: '500 g' },
        { name: 'Piyoz', amount: '3 dona' },
        { name: 'Sarimsoq', amount: '1 bosh' },
        { name: 'Zira', amount: '2 osh qoshiq' },
        { name: 'O\'simlik yog\'i', amount: '200 ml' },
        { name: 'Tuz', amount: 'ta\'bga ko\'ra' }
      ],
      steps: [
        { title: 'Go\'shtni qovurish', desc: 'Go\'shtni qizigan yog\'da qovuring.' },
        { title: 'Sabzi qo\'shish', desc: 'To\'g\'ralgan sabzi va piyozni qo\'shing.' },
        { title: 'Guruch qo\'yish', desc: 'Guruchni yaxshilab yuvib, ustiga qo\'ying.' },
        { title: 'Dam olish', desc: 'Pastki olovda 40 daqiqa dam tortiring.' }
      ],
      nutrition: { calories: '580 kcal', protein: '32 g', carbs: '68 g', fat: '18 g' },
      tags: ['Osh', 'Milliy taom', 'O\'zbek']
    },
    '/recipe/fajitas': {
      title: t.searchRecipe3Title,
      quote: t.searchRecipe3Quote,
      author: t.searchRecipe3Author,
      image: '/img/FAJITAS.jpg',
      prepTime: '25 daqiqa',
      servings: 4,
      ingredientsCount: 7,
      ingredients: [
        { name: 'Tovuq go\'shti', amount: '500 g' },
        { name: 'Qalampir', amount: '2 dona' },
        { name: 'Piyoz', amount: '1 dona' },
        { name: 'Tortilla', amount: '8 dona' },
        { name: 'Fajita ziravorlari', amount: '2 osh qoshiq' },
        { name: 'Limon', amount: '1 dona' },
        { name: 'O\'simlik yog\'i', amount: '2 osh qoshiq' }
      ],
      steps: [
        { title: 'Go\'shtni kesish', desc: 'Tovuq go\'shtini uzun bo\'laklarga kesing.' },
        { title: 'Sabzavotlarni tayyorlash', desc: 'Qalampir va piyozni to\'g\'rang.' },
        { title: 'Qovurish', desc: 'Hammасini yuqori olovda 10-12 daqiqa qovuring.' },
        { title: 'Tortillaga o\'rash', desc: 'Tayyorlangan aralashmani tortillaga soling.' }
      ],
      nutrition: { calories: '380 kcal', protein: '28 g', carbs: '35 g', fat: '12 g' },
      tags: ['Fajitas', 'Meksika', 'Tez tayyorlanadigan']
    },
    '/recipe/salad': {
      title: t.searchRecipe4Title,
      quote: t.searchRecipe4Quote,
      author: t.searchRecipe4Author,
      image: '/img/salat.webp',
      prepTime: '15 daqiqa',
      servings: 4,
      ingredientsCount: 6,
      ingredients: [
        { name: 'Xas salat', amount: '200 g' },
        { name: 'Pomidor', amount: '3 dona' },
        { name: 'Bodring', amount: '2 dona' },
        { name: 'Zaytun yog\'i', amount: '3 osh qoshiq' },
        { name: 'Limon sharbati', amount: '2 osh qoshiq' },
        { name: 'Tuz va murch', amount: 'ta\'bga ko\'ra' }
      ],
      steps: [
        { title: 'Sabzavotlarni yuvish', desc: 'Barcha sabzavotlarni yaxshilab yuving.' },
        { title: 'To\'g\'rash', desc: 'Sabzavotlarni mayda bo\'laklarga to\'g\'rang.' },
        { title: 'Sous tayyorlash', desc: 'Zaytun yog\'i va limonni aralashtiring.' },
        { title: 'Aralashtirish', desc: 'Barcha ingredientlarni birlashtiring.' }
      ],
      nutrition: { calories: '120 kcal', protein: '3 g', carbs: '8 g', fat: '9 g' },
      tags: ['Salat', 'Sog\'lom', 'Yangi']
    },
    '/recipe/dessert': {
      title: t.searchRecipe5Title,
      quote: t.searchRecipe5Quote,
      author: t.searchRecipe5Author,
      image: '/img/MEVALI DESERT.jpg',
      prepTime: '20 daqiqa',
      servings: 6,
      ingredientsCount: 5,
      ingredients: [
        { name: 'Aralash mevalar', amount: '500 g' },
        { name: 'Qaymoq', amount: '200 ml' },
        { name: 'Shakar', amount: '100 g' },
        { name: 'Vanil', amount: '1 choy qoshiq' },
        { name: 'Yong\'oq', amount: '50 g' }
      ],
      steps: [
        { title: 'Mevalarni tayyorlash', desc: 'Mevalarni mayda bo\'laklarga kesing.' },
        { title: 'Qaymoq tayyorlash', desc: 'Qaymoq va shakarni qorishib, ko\'pirtiring.' },
        { title: 'Aralashtirish', desc: 'Mevalar va qaymoqni aralashtiring.' },
        { title: 'Sovutish', desc: 'Muzlatgichda 30 daqiqa sovuting.' }
      ],
      nutrition: { calories: '280 kcal', protein: '4 g', carbs: '42 g', fat: '12 g' },
      tags: ['Desert', 'Mevali', 'Shirinlik']
    }
  };

  const recipe = recipeData[location.pathname] || recipeData['/recipe/chicken'];

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
        <p className="recipe-author">From food blog {recipe.author}</p>

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
          <button className="action-btn" title="Bookmark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            MEN BUNI TAYYORLADIM
          </button>
        </div>

        <div className="recipe-main-image">
          <img src={recipe.image} alt={recipe.title} />
          <span className="image-credit">PHOTO BY IZY HOSSACK</span>
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
          <div className="recipe-image-thumb view-all">VIEW ALL</div>
        </div>

        <div className="recipe-info-bar">
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <span>Tayyorlanish: <strong>{recipe.prepTime}</strong></span>
          </div>
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
            <span>Porciyalar:
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
            <span>Tarkibi: <strong>{recipe.ingredientsCount}</strong></span>
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
              TARKIBI: {recipe.ingredientsCount}
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
              TAYYORLASH BOSQICHLARI
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
          <h2 className="section-title">OZUQAVIY QIYMATI (1 PORCIYA)</h2>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span className="nutrition-label">Kaloriya</span>
              <span className="nutrition-value">{recipe.nutrition.calories}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Oqsil</span>
              <span className="nutrition-value">{recipe.nutrition.protein}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Uglevodlar</span>
              <span className="nutrition-value">{recipe.nutrition.carbs}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Yog'</span>
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
