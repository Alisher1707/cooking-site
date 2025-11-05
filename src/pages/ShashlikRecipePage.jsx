import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import './RecipeDetailPage.css';

const ShashlikRecipePage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { user } = useAuth();

  const [servings, setServings] = useState(4);
  const [isSaved, setIsSaved] = useState(false);

  // Recipe data
  const recipe = {
    id: 3,
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
    images: [
      "/img/kabob-2.jpg",
      "/img/kabob-3.jpg",
      "/img/kabob-4.jpg"
    ],
    ingredients: [
      { name: "Mol go'shti (yoki qo'y go'shti)", amount: "1 kg", adjustable: true },
      { name: "Piyoz", amount: "500 g", adjustable: true },
      { name: "Sirka", amount: "3 osh qoshiq", adjustable: true },
      { name: "Zira", amount: "2 choy qoshiq", adjustable: true },
      { name: "Qora murch", amount: "1 choy qoshiq", adjustable: true },
      { name: "Tuz", amount: "ta'bga ko'ra", adjustable: false },
      { name: "Yog'", amount: "100 g", adjustable: true },
      { name: "Ko'katlar (koriander, jambul)", amount: "1 bog'lam", adjustable: true }
    ],
    steps: [
      {
        number: 1,
        title: "Go'shtni tayyorlash",
        description: "Go'shtni 4-5 sm kubik shaklida to'g'rang. Piyozni mayda to'g'rang va go'shtga qo'shing."
      },
      {
        number: 2,
        title: "Marinad tayyorlash",
        description: "Sirka, zira, qora murch va tuzni qo'shib yaxshilab aralashtiring. Go'shtni kamida 2-3 soat marinadda saqlang (kechasi qoldirsangiz yaxshiroq)."
      },
      {
        number: 3,
        title: "Shampurlarga tizish",
        description: "Go'shtni shampurlarga tizing. Go'sht bo'laklarini bir-biriga yopishtirib tizish kerak."
      },
      {
        number: 4,
        title: "Pishirish",
        description: "Cho'g'lar ustida har tomondan 15-20 daqiqa pishiring. Pishayotganda vaqti-vaqti bilan aylantirib turing."
      },
      {
        number: 5,
        title: "Dasturxonga tortish",
        description: "Tayyor bo'lgach lavash, ko'katlar va piyoz bilan dasturxonga torting. Issiq holda xizmat qiling."
      }
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "35 g",
      carbs: "5 g",
      fat: "32 g"
    },
    tags: ["Shashlik", "Kabob", "Milliy taom", "Bayram", "Yozgi taom"]
  };

  const adjustIngredient = (amount, originalServings = 4) => {
    if (amount === "ta'bga ko'ra") return amount;
    const multiplier = servings / originalServings;
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return amount;
    return `${(numAmount * multiplier).toFixed(0)} ${amount.replace(numAmount.toString(), '')}`;
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Add to saved recipes in localStorage
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="recipe-detail-page">
      <div className="recipe-detail-container">
        {/* Title */}
        <h1 className="recipe-title">{recipe.title}</h1>

        {/* Description */}
        <p className="recipe-description">{recipe.description}</p>

        {/* Time info inline */}
        <p className="recipe-time-inline">
          Tayyorlash{recipe.prepTime}<br/>
          Pishirish{recipe.cookTime}<br/>
          Jami{recipe.totalTime}
        </p>

        {/* Main image */}
        <div className="recipe-main-image">
          <img src={recipe.mainImage} alt={recipe.title} />
          <div className="image-credit">PHOTO BY IZY HOSSACK 😊</div>
        </div>

        {/* Additional images */}
        <div className="recipe-images-grid">
          {recipe.images.map((img, index) => (
            <div key={index} className="recipe-image-thumb">
              <img src={img} alt={`${recipe.title} ${index + 1}`} />
            </div>
          ))}
          <div className="recipe-image-thumb view-all">
            <span>VIEW ALL</span>
          </div>
        </div>

        {/* Recipe info */}
        <div className="recipe-info-bar">
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Tayyorlanish: <strong>{recipe.prepTime}</strong></span>
          </div>
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
            <span>Porciyalar:
              <div className="servings-control">
                <button onClick={() => setServings(Math.max(1, servings - 1))}>−</button>
                <strong>{servings}</strong>
                <button onClick={() => setServings(servings + 1)}>+</button>
              </div>
            </span>
          </div>
        </div>

        {/* Ingredients and Steps - 2 Column Layout */}
        <div className="recipe-two-column">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2 className="section-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7h-9M14 17H5M17 3v18M10 7v4M7 7v10"></path>
              </svg>
              Tarkibi: {recipe.ingredients.length}
            </h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-amount">
                    {ingredient.adjustable ? adjustIngredient(ingredient.amount, recipe.servings) : ingredient.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cooking steps */}
          <div className="recipe-section">
            <h2 className="section-title">Tayyorlash bosqichlari</h2>
            <div className="steps-list">
              {recipe.steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nutrition info */}
        <div className="recipe-section nutrition-section">
          <h2 className="section-title">Ozuqaviy qiymati (1 porciya)</h2>
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

        {/* Tags */}
        <div className="recipe-tags">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShashlikRecipePage;
