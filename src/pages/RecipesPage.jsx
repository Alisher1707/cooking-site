import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './RecipesPage.css';

const RecipesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const recipes = [
    {
      id: 1,
      image: '/img/osh.webp',
      title: t.recipe1Title,
      description: t.recipe1Description,
      author: t.recipe1Author
    },
    {
      id: 2,
      image: '/img/milliy-taom.jpg',
      title: t.recipe2Title,
      description: t.recipe2Description,
      author: t.recipe2Author
    },
    {
      id: 3,
      image: '/img/salat.webp',
      title: t.recipe3Title,
      description: t.recipe3Description,
      author: t.recipe3Author
    },
    {
      id: 4,
      image: '/img/chicken.jpg',
      title: t.recipe4Title,
      description: t.recipe4Description,
      author: t.recipe4Author
    },
    {
      id: 5,
      image: '/img/page-1.webp',
      title: t.recipe5Title,
      description: t.recipe5Description,
      author: t.recipe5Author
    },
    {
      id: 6,
      image: '/img/page-2.webp',
      title: t.recipe6Title,
      description: t.recipe6Description,
      author: t.recipe6Author
    },
    {
      id: 7,
      image: '/img/page-3.webp',
      title: t.recipe7Title,
      description: t.recipe7Description,
      author: t.recipe7Author
    },
    {
      id: 8,
      image: '/img/page-4.webp',
      title: t.recipe8Title,
      description: t.recipe8Description,
      author: t.recipe8Author
    },
    {
      id: 9,
      image: '/img/category-1.webp',
      title: t.recipe9Title,
      description: t.recipe9Description,
      author: t.recipe9Author
    },
    {
      id: 10,
      image: '/img/category-2.webp',
      title: t.recipe10Title,
      description: t.recipe10Description,
      author: t.recipe10Author
    },
    {
      id: 11,
      image: '/img/category-3.webp',
      title: t.recipe11Title,
      description: t.recipe11Description,
      author: t.recipe11Author
    },
    {
      id: 12,
      image: '/img/category-4.webp',
      title: t.recipe12Title,
      description: t.recipe12Description,
      author: t.recipe12Author
    }
  ];

  return (
    <div className="recipes-page">
      <div className="recipes-page-container">
        <h1 className="recipes-page-title">{t.recipesPageTitle}</h1>

        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card-page">
              <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-badge">RECIPE</div>
              </div>
              <div className="recipe-content">
                <h2 className="recipe-title">{recipe.title}</h2>
                <p className="recipe-description">{recipe.description}</p>
                <p className="recipe-author">-{recipe.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
