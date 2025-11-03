import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { user } = useAuth();

  const [servings, setServings] = useState(6);
  const [isSaved, setIsSaved] = useState(false);

  // Recipe data
  const recipe = {
    id: 1,
    title: "O'zbekistonning Milliy Taomi - Osh",
    category: "KOLLEKSIYA",
    description: "Osh - O'zbekistonning eng mashhur va sevimli milliy taomidir. Guruch, mol go'shti, sabzi va maxsus ziravorlar bilan tayyorlanadigan bu ajoyib taom har bir bayram dasturxonining bezagidir.",
    author: "From food blog AI Dente",
    authorLink: "http://www.aldenteblog.com/flauers_martini.html",
    prepTime: "45 daqiqa",
    cookTime: "2 soat",
    totalTime: "2 soat 45 daqiqa",
    servings: 6,
    difficulty: "O'rtacha",
    mainImage: "/img/osh.webp",
    images: [
      "/img/osh-1.jpg",
      "/img/osh-2.jpg",
      "/img/osh-3.jpg",
      "/img/osh-4.jpg"
    ],
    ingredients: [
      { name: "Guruch", amount: "1 kg", adjustable: true },
      { name: "Qo'y go'shti", amount: "800 g", adjustable: true },
      { name: "Sabzi", amount: "500 g", adjustable: true },
      { name: "Piyoz", amount: "400 g", adjustable: true },
      { name: "O'simlik yog'i", amount: "300 ml", adjustable: true },
      { name: "Sarimsoqpiyoz", amount: "2 ta bosh", adjustable: true },
      { name: "Zira", amount: "2 osh qoshiq", adjustable: true },
      { name: "Barberris", amount: "1 osh qoshiq", adjustable: false },
      { name: "Tuz", amount: "ta'bga ko'ra", adjustable: false },
      { name: "Qora murch", amount: "ta'bga ko'ra", adjustable: false },
      { name: "Issiq suv", amount: "1.5 litr", adjustable: true },
      { name: "Noxat (ixtiyoriy)", amount: "100 g", adjustable: true }
    ],
    steps: [
      {
        number: 1,
        title: "Tayyorgarlik",
        description: "Guruchni yaxshilab yuving va iliq suvda 1 soat ivitib qo'ying. Go'shtni kubik shaklida to'g'rang. Sabzi va piyozni ingichka to'g'rang."
      },
      {
        number: 2,
        title: "Zirvak tayyorlash",
        description: "Qozonda yog'ni qizdiring. Piyozni oltin rangga kelguncha qovuring. Go'shtni qo'shing va 15 daqiqa qovuring."
      },
      {
        number: 3,
        title: "Sabzi qo'shish",
        description: "Sabzini qo'shing va yana 10 daqiqa qovuring. Ziravorlarni qo'shing va aralashtiring."
      },
      {
        number: 4,
        title: "Suv qo'yish",
        description: "Issiq suvni quying. Go'sht yumshoguncha 40-50 daqiqa qaynatib pishiring. Tuz qo'shing."
      },
      {
        number: 5,
        title: "Guruch qo'shish",
        description: "Ivitilgan guruchni quyib, tekis qiling. O'rtasiga sarimsoq boshlarini tiqing. Qopqog'ini yoping va kuchsiz olovda 30 daqiqa pishiring."
      },
      {
        number: 6,
        title: "Tugallash",
        description: "Oshni aralashtirmay, ochiq havoda 15-20 daqiqa dam oling. Keyin yaxshilab aralashtiring va issiq holda dasturxonga torting."
      }
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "28 g",
      carbs: "75 g",
      fat: "25 g"
    },
    tags: ["Milliy taom", "Bayram", "Asosiy taom", "O'zbek oshxonasi"]
  };

  const adjustIngredient = (amount, originalServings = 6) => {
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
            MEN BUNI TAYYORLADIM
          </button>
        </div>

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

export default RecipeDetailPage;
