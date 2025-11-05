import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipesDetails } from '../data/recipesDetails';
import './RecipeDetailPage.css';

const RecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipesDetails[id];

  const [servings, setServings] = useState(recipe?.servings || 4);
  const [isSaved, setIsSaved] = useState(false);

  // If recipe not found, show error
  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <div className="recipe-detail-container">
          <h1>Retsept topilmadi</h1>
          <button onClick={() => navigate('/')} className="back-button">
            Bosh sahifaga qaytish
          </button>
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
    setIsSaved(!isSaved);
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
        {/* Category Badge */}
        <div className="recipe-category-badge">{recipe.category}</div>

        {/* Title */}
        <h1 className="recipe-title">{recipe.title}</h1>

        {/* Description */}
        <p className="recipe-description">{recipe.description}</p>

        {/* Author credit */}
        <p className="recipe-author">
          <em>{recipe.author}</em>{' '}
          {recipe.authorLink && (
            <a href={recipe.authorLink} target="_blank" rel="noopener noreferrer">
              {recipe.authorLink}
            </a>
          )}
        </p>

        {/* Action buttons */}
        <div className="recipe-actions">
          <button onClick={handleSave} className={`action-btn ${isSaved ? 'saved' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button onClick={handlePrint} className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
          </button>
          <button onClick={handleShare} className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
          <button onClick={() => navigate(-1)} className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        </div>

        {/* Time info */}
        <div className="recipe-time-info">
          <div className="time-item">
            <strong>Tayyorlash:</strong> {recipe.prepTime}
          </div>
          <div className="time-item">
            <strong>Pishirish:</strong> {recipe.cookTime}
          </div>
          <div className="time-item">
            <strong>Jami:</strong> {recipe.totalTime}
          </div>
        </div>

        {/* Main image */}
        <div className="recipe-main-image">
          <img src={recipe.mainImage} alt={recipe.title} />
          <div className="image-credit">PHOTO BY IZY HOSSACK 😊</div>
        </div>

        {/* Additional images */}
        {recipe.images && recipe.images.length > 0 && (
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
        )}

        {/* Recipe info bar */}
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

        {/* Two column layout */}
        <div className="recipe-two-column">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2 className="section-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7h-9M14 17H5M17 3v18M10 7v4M7 7v10"></path>
              </svg>
              TARKIBI: {recipe.ingredients.length}
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

          {/* Steps */}
          <div className="recipe-section">
            <h2 className="section-title">TAYYORLASH BOSQICHLARI</h2>
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

        {/* Nutrition */}
        {recipe.nutrition && (
          <div className="recipe-section nutrition-section">
            <h2 className="section-title">OZUQAVIY QIYMATI (1 porciya)</h2>
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
        )}

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="recipe-tags">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
