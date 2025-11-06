import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './SearchPage.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const recipes = [
    {
      id: 1,
      image: '/img/chicken.jpg',
      title: t.searchRecipe1Title,
      quote: t.searchRecipe1Quote,
      author: t.searchRecipe1Author,
      category: t.searchRecipeCategory,
      route: '/recipe/chicken'
    },
    {
      id: 2,
      image: '/img/osh.webp',
      title: t.searchRecipe2Title,
      quote: t.searchRecipe2Quote,
      author: t.searchRecipe2Author,
      category: t.searchRecipeCategory,
      route: '/recipe/plov'
    },
    {
      id: 3,
      image: '/img/FAJITAS.jpg',
      title: t.searchRecipe3Title,
      quote: t.searchRecipe3Quote,
      author: t.searchRecipe3Author,
      category: t.searchRecipeCategory,
      route: '/recipe/fajitas'
    },
    {
      id: 4,
      image: '/img/salat.webp',
      title: t.searchRecipe4Title,
      quote: t.searchRecipe4Quote,
      author: t.searchRecipe4Author,
      category: t.searchRecipeCategory,
      route: '/recipe/salad'
    },
    {
      id: 5,
      image: '/img/MEVALI DESERT.jpg',
      title: t.searchRecipe5Title,
      quote: t.searchRecipe5Quote,
      author: t.searchRecipe5Author,
      category: t.searchRecipeCategory,
      route: '/recipe/dessert'
    }
  ];

  const handleRecipeClick = (route) => {
    navigate(route);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter(recipe => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(query) ||
      recipe.quote.toLowerCase().includes(query) ||
      recipe.author.toLowerCase().includes(query)
    );
  });

  return (
    <div className="search-page">
      <div className="search-results-container">
        {filteredRecipes.length === 0 ? (
          <div className="no-results">
            <h2>{t.searchNoResultsFor.replace('{query}', searchQuery)}</h2>
            <p>{t.searchTryAgain}</p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe.route)} style={{ cursor: 'pointer' }}>
              <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              </div>
              <div className="recipe-content">
                <span className="recipe-category">{recipe.category}</span>
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-quote">{recipe.quote}</p>
                <p className="recipe-author">{recipe.author}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
