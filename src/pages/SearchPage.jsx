import { useSearchParams } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const recipes = [
    {
      id: 1,
      image: '/img/chicken.jpg',
      title: 'JUICY GRILLED CHICKEN',
      quote: '"This chicken recipe is perfect for family dinners. The marinade makes it so tender and flavorful. My kids love it!"',
      author: '-chefmama',
      category: 'RECIPE'
    },
    {
      id: 2,
      image: '/img/osh.webp',
      title: 'TRADITIONAL UZBEK PLOV',
      quote: '"Authentic plov recipe passed down from my grandmother. The rice comes out perfectly fluffy and the meat is so tender. A true masterpiece!"',
      author: '-plovmaster',
      category: 'RECIPE'
    },
    {
      id: 3,
      image: '/img/FAJITAS.jpg',
      title: 'SIZZLING CHICKEN FAJITAS',
      quote: '"These fajitas are restaurant quality! The peppers and onions give it amazing flavor. Perfect for taco Tuesday!"',
      author: '-mexicanfoodlover',
      category: 'RECIPE'
    },
    {
      id: 4,
      image: '/img/salat.webp',
      title: 'FRESH GARDEN SALAD',
      quote: '"Light, crispy and so refreshing! Perfect side dish for any meal. The homemade dressing takes it to the next level."',
      author: '-healthyeats',
      category: 'RECIPE'
    },
    {
      id: 5,
      image: '/img/MEVALI DESERT.jpg',
      title: 'FRUITY SUMMER DESSERT',
      quote: '"Sweet, colorful and absolutely delicious! Kids and adults both love this refreshing treat. Perfect for hot summer days!"',
      author: '-dessertqueen',
      category: 'RECIPE'
    }
  ];

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
            <h2>No recipes found for "{searchQuery}"</h2>
            <p>Try searching for something else.</p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
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
