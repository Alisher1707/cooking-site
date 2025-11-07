import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import { translations } from '../translations/translations';
import { recipesDetails } from '../data/recipesDetails';
import './RecipeDetailPage.css';

const AllRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const { user } = useAuth();
  const { toggleSaveRecipe, isRecipeSaved } = useSavedRecipes();

  // Map RecipesPage IDs to recipesDetails IDs
  const recipeIdMap = {
    1: 1,   // Osh
    2: 2,   // Shashlik
    3: 14,  // Achik-chuchuk salat
    4: 15,  // Tovuqli kechki ovqat
    5: 1,   // Tovuq tikka masala (Osh ishlatamiz vaqtincha)
    6: 6,   // Vegan bekon (Vegan pancake)
    7: 2,   // Big Mac sousi (Shashlik vaqtincha)
    8: 4,   // Sekin pishirilgan go'sht (Qovurg'a)
    9: 16,  // Qulay taomlar klassikasi
    10: 17, // Xalqaro taomlar
    11: 18, // Nonushta va brunch
    12: 19  // Tezkor va oson taomlar
  };

  const recipeId = recipeIdMap[parseInt(id)];
  const recipe = recipesDetails[recipeId];

  const [servings, setServings] = useState(recipe?.servings || 6);

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <div className="recipe-detail-container">
          <h1>Retsept topilmadi</h1>
          <button onClick={() => navigate(-1)}>Orqaga qaytish</button>
        </div>
      </div>
    );
  }

  const adjustIngredient = (amount, originalServings) => {
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
          {recipe.author} ({recipe.authorLink})
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

export default AllRecipePage;
