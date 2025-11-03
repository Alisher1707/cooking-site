import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaBookmark, FaPrint, FaLink, FaArrowLeft } from 'react-icons/fa';
import './RecipeDetailPage.css';

const KabobRecipePage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [servings, setServings] = useState(4);

  const baseServings = 4;
  const ratio = servings / baseServings;

  const recipeData = {
    uz: {
      title: "SHASHLIK - O'ZBEK KABOBLARI",
      description: "Shashlik - O'zbekistonda juda mashhur bo'lgan kabob turi. Mol go'shti yoki qo'y go'shtidan tayyorlanadigan, olovda pishiriladigan bu mazali taom har qanday ziyofatning bezagidir.",
      prepTime: "30 daqiqa",
      cookTime: "20 daqiqa",
      totalTime: "50 daqiqa",
      ingredients: [
        { name: "Mol go'shti (yoki qo'y go'shti)", amount: 1 * ratio, unit: "kg" },
        { name: "Piyoz", amount: 500 * ratio, unit: "g" },
        { name: "Sirka", amount: 3 * ratio, unit: "osh qoshiq" },
        { name: "Zira", amount: 2 * ratio, unit: "choy qoshiq" },
        { name: "Qora murch", amount: 1 * ratio, unit: "choy qoshiq" },
        { name: "Tuz", amount: 1 * ratio, unit: "osh qoshiq" },
        { name: "Yog'", amount: 100 * ratio, unit: "g" },
        { name: "Ko'katlar (koriander, jambul)", amount: 1 * ratio, unit: "bog'lam" }
      ],
      steps: [
        "Go'shtni 4-5 sm kubik shaklida to'g'rang",
        "Piyozni mayda to'g'rang va go'shtga qo'shing",
        "Sirka, zira, qora murch va tuzni qo'shib yaxshilab aralashtiring",
        "Go'shtni kamida 2-3 soat marinadda saqlang (kechasi qoldirsangiz yaxshiroq)",
        "Go'shtni shampurlarga tizing",
        "Cho'g'lar ustida har tomondan 15-20 daqiqa pishiring",
        "Pishayotganda vaqti-vaqti bilan aylantirib turing",
        "Tayyor bo'lgach lavash, ko'katlar va piyoz bilan dasturxonga torting"
      ],
      tips: [
        "Go'shtni kattaroq bo'laklarda to'g'rash yaxshiroq - nam qoladi",
        "Marinaddagi sirka go'shtni yumshatadi",
        "Cho'g'lar yaxshi yonib, olov tushganda pishirish boshlang",
        "Go'shtni ko'p burab turmaslik kerak - qotadi"
      ]
    },
    ru: {
      title: "ШАШЛЫК - УЗБЕКСКИЕ КАБОБЫ",
      description: "Шашлык - очень популярный вид кабоба в Узбекистане. Приготовленный из говядины или баранины, этот вкусный жареный на углях деликатес украсит любой праздничный стол.",
      prepTime: "30 минут",
      cookTime: "20 минут",
      totalTime: "50 минут",
      ingredients: [
        { name: "Говядина (или баранина)", amount: 1 * ratio, unit: "кг" },
        { name: "Лук", amount: 500 * ratio, unit: "г" },
        { name: "Уксус", amount: 3 * ratio, unit: "ст. ложки" },
        { name: "Зира", amount: 2 * ratio, unit: "ч. ложки" },
        { name: "Черный перец", amount: 1 * ratio, unit: "ч. ложки" },
        { name: "Соль", amount: 1 * ratio, unit: "ст. ложка" },
        { name: "Жир", amount: 100 * ratio, unit: "г" },
        { name: "Зелень (кинза, укроп)", amount: 1 * ratio, unit: "пучок" }
      ],
      steps: [
        "Нарежьте мясо кубиками по 4-5 см",
        "Мелко нарежьте лук и добавьте к мясу",
        "Добавьте уксус, зиру, черный перец и соль, хорошо перемешайте",
        "Маринуйте мясо минимум 2-3 часа (лучше оставить на ночь)",
        "Нанижите мясо на шампуры",
        "Жарьте на углях с каждой стороны 15-20 минут",
        "Периодически переворачивайте во время жарки",
        "Готовый шашлык подавайте с лавашом, зеленью и луком"
      ],
      tips: [
        "Лучше нарезать мясо крупнее - останется сочнее",
        "Уксус в маринаде размягчает мясо",
        "Начинайте готовить когда угли хорошо прогорят",
        "Не переворачивайте мясо слишком часто - подгорит"
      ]
    },
    en: {
      title: "SHASHLIK - UZBEK KABOBS",
      description: "Shashlik is a very popular type of kabob in Uzbekistan. Made from beef or lamb, this delicious charcoal-grilled delicacy is the highlight of any celebration.",
      prepTime: "30 minutes",
      cookTime: "20 minutes",
      totalTime: "50 minutes",
      ingredients: [
        { name: "Beef (or lamb)", amount: 1 * ratio, unit: "kg" },
        { name: "Onion", amount: 500 * ratio, unit: "g" },
        { name: "Vinegar", amount: 3 * ratio, unit: "tbsp" },
        { name: "Cumin", amount: 2 * ratio, unit: "tsp" },
        { name: "Black pepper", amount: 1 * ratio, unit: "tsp" },
        { name: "Salt", amount: 1 * ratio, unit: "tbsp" },
        { name: "Fat", amount: 100 * ratio, unit: "g" },
        { name: "Herbs (cilantro, dill)", amount: 1 * ratio, unit: "bunch" }
      ],
      steps: [
        "Cut the meat into 4-5 cm cubes",
        "Finely chop the onion and add to the meat",
        "Add vinegar, cumin, black pepper and salt, mix well",
        "Marinate the meat for at least 2-3 hours (overnight is better)",
        "Thread the meat onto skewers",
        "Grill over charcoal for 15-20 minutes on each side",
        "Turn occasionally while grilling",
        "Serve with lavash, herbs and onions"
      ],
      tips: [
        "Better to cut meat into larger pieces - it stays juicier",
        "Vinegar in marinade tenderizes the meat",
        "Start cooking when coals are well-burned",
        "Don't turn meat too often - it will burn"
      ]
    }
  };

  const recipe = recipeData[language];

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'uz' ? 'Link nusxalandi!' : language === 'ru' ? 'Ссылка скопирована!' : 'Link copied!');
    }
  };

  const adjustServings = (amount) => {
    const newServings = servings + amount;
    if (newServings >= 1 && newServings <= 20) {
      setServings(newServings);
    }
  };

  return (
    <div className="recipe-detail-page">
      <div className="recipe-detail-container">
        {/* Header */}
        <div className="recipe-header">
          <button className="back-button" onClick={handleBack}>
            <FaArrowLeft /> {language === 'uz' ? 'Orqaga' : language === 'ru' ? 'Назад' : 'Back'}
          </button>
          <div className="recipe-actions">
            <button className="action-button" onClick={handleShare}>
              <FaLink />
            </button>
            <button className="action-button" onClick={handlePrint}>
              <FaPrint />
            </button>
            <button className="action-button">
              <FaBookmark />
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="recipe-title">{recipe.title}</h1>
        <p className="recipe-description">{recipe.description}</p>

        {/* Time Info */}
        <div className="recipe-time-info">
          <div className="time-item">
            <span className="time-label">{language === 'uz' ? 'Tayyorlash' : language === 'ru' ? 'Подготовка' : 'Prep Time'}</span>
            <span className="time-value">{recipe.prepTime}</span>
          </div>
          <div className="time-item">
            <span className="time-label">{language === 'uz' ? 'Pishirish' : language === 'ru' ? 'Готовка' : 'Cook Time'}</span>
            <span className="time-value">{recipe.cookTime}</span>
          </div>
          <div className="time-item">
            <span className="time-label">{language === 'uz' ? 'Jami' : language === 'ru' ? 'Всего' : 'Total'}</span>
            <span className="time-value">{recipe.totalTime}</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="recipe-main-image">
          <img src="/img/kabob-1.jpg" alt={recipe.title} />
        </div>

        {/* Gallery */}
        <div className="recipe-gallery">
          <img src="/img/kabob-2.jpg" alt="Kabob 2" />
          <img src="/img/kabob-3.jpg" alt="Kabob 3" />
          <img src="/img/kabob-4.jpg" alt="Kabob 4" />
        </div>

        {/* Servings */}
        <div className="servings-control">
          <span className="servings-label">{language === 'uz' ? 'Porsiyalar' : language === 'ru' ? 'Порции' : 'Servings'}</span>
          <div className="servings-buttons">
            <button onClick={() => adjustServings(-1)}>-</button>
            <span>{servings}</span>
            <button onClick={() => adjustServings(1)}>+</button>
          </div>
        </div>

        {/* Ingredients & Steps - Two Column Layout */}
        <div className="recipe-two-column">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2 className="section-title">{language === 'uz' ? 'Kerakli masalliqlar' : language === 'ru' ? 'Необходимые ингредиенты' : 'Required Ingredients'}</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-amount">
                    {ingredient.amount % 1 === 0 ? ingredient.amount : ingredient.amount.toFixed(1)} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="recipe-section">
            <h2 className="section-title">{language === 'uz' ? 'Tayyorlash bosqichlari' : language === 'ru' ? 'Этапы приготовления' : 'Preparation Steps'}</h2>
            <ol className="steps-list">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div className="recipe-tips">
          <h2 className="section-title">{language === 'uz' ? 'Foydali maslahatlar' : language === 'ru' ? 'Полезные советы' : 'Helpful Tips'}</h2>
          <ul className="tips-list">
            {recipe.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KabobRecipePage;
