import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { recipesDetails } from '../data/recipesDetails';
import './RecipesPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  // Category mapping
  const categoryRecipes = {
    recipes: [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14],
    popular: [1, 2, 4, 8, 9, 12],
    'meat-seafood': [1, 2, 4, 8, 15],
    'healthy-diet': [6, 11, 12, 14, 19],
    holidays: [1, 2, 4],
    cuisine: [1, 2, 7, 9, 17],
    seasonal: [11, 12, 13, 14, 19]
  };

  const categoryTitles = {
    recipes: t.recipes,
    popular: t.popular,
    'meat-seafood': t.meatSeafood,
    'healthy-diet': t.healthyDiet,
    holidays: t.holidays,
    cuisine: t.cuisine,
    seasonal: t.seasonal
  };

  const recipeIds = categoryRecipes[category] || [];
  const recipes = recipeIds.map(id => recipesDetails[id]).filter(Boolean);

  return (
    <div className="recipes-page">
      <div className="recipes-page-container">
        <h1 className="recipes-page-title">{categoryTitles[category] || 'RETSEPTLAR'}</h1>

        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/category/${recipe.id}`} className="recipe-card-page">
              <div className="recipe-image-wrapper">
                <img src={recipe.mainImage} alt={recipe.title} className="recipe-image" />
                <div className="recipe-badge">{recipe.category}</div>
              </div>
              <div className="recipe-content">
                <h2 className="recipe-title">{recipe.title}</h2>
                <p className="recipe-description">{recipe.description}</p>
                <p className="recipe-author">-{recipe.author}</p>
              </div>
            </Link>
          ))}
        </div>

        {recipes.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h2 style={{ color: '#666' }}>{t.categoryNoRecipes}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
