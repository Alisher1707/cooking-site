import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import { translations } from '../translations/translations';
import './RecipeDetailPage.css';

const KabobRecipePage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const { user } = useAuth();
  const { toggleSaveRecipe, isRecipeSaved } = useSavedRecipes();

  const [servings, setServings] = useState(4);

  // Recipe data
  const recipe = {
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
    toggleSaveRecipe(recipe.id);
  };

  const isSaved = isRecipeSaved(recipe.id);

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
      {/* Header with back button */}
      <div className="recipe-detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      <div className="recipe-detail-container">
        {/* Category */}
        <p className="recipe-category">{recipe.category}</p>

        {/* Title */}
        <h1 className="recipe-title">{recipe.title}</h1>

        {/* Description */}
        <p className="recipe-description">{recipe.description}</p>

        {/* Author credit */}
        <p className="recipe-author">
          "{recipe.author} ({recipe.authorLink})"
        </p>

        {/* Action buttons */}
        <div className="recipe-actions">
          <button className={`action-btn ${isSaved ? 'active' : ''}`} onClick={handleSave}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button className="action-btn" onClick={handlePrint}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <path d="M6 14h12v8H6z"></path>
            </svg>
          </button>
          <button className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </button>
          <button className="action-btn" onClick={handleShare}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </button>
          <button className="action-btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {t.recipeDetailMadeThisButton}
          </button>
        </div>

        {/* Main image */}
        <div className="recipe-main-image">
          <img src={recipe.mainImage} alt={recipe.title} />
          <div className="image-credit">{t.recipeDetailPhotoBy} IZY HOSSACK</div>
        </div>

        {/* Additional images */}
        <div className="recipe-images-grid">
          {recipe.images.map((img, index) => (
            <div key={index} className="recipe-image-thumb">
              <img src={img} alt={`${recipe.title} ${index + 1}`} />
            </div>
          ))}
          <div className="recipe-image-thumb view-all">
            <span>{t.recipeDetailViewAllPhotos}</span>
          </div>
        </div>

        {/* Recipe info */}
        <div className="recipe-info-bar">
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{t.recipeDetailPrepTimeLabel}: <strong>{recipe.prepTime}</strong></span>
          </div>
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
            <span>{t.recipeDetailServingsLabel}:
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
              {t.recipeDetailIngredientsLabel}: {recipe.ingredients.length}
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
            <h2 className="section-title">{t.recipeDetailStepsLabel}</h2>
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
          <h2 className="section-title">{t.recipeDetailNutritionLabel}</h2>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailCaloriesLabel}</span>
              <span className="nutrition-value">{recipe.nutrition.calories}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailProteinLabel}</span>
              <span className="nutrition-value">{recipe.nutrition.protein}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailCarbsLabel}</span>
              <span className="nutrition-value">{recipe.nutrition.carbs}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">{t.recipeDetailFatLabel}</span>
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

export default KabobRecipePage;
