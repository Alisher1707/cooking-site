import { useSearchParams } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const recipes = [
    {
      id: 1,
      image: '/img/chicken.jpg',
      title: 'QUICK & EASY CHICKEN ENCHILADAS',
      quote: '"I made these using up some sliced cheese from my fridge. My family loved the chicken with the green sauce. I will make again. It\'s easy, cheap and great."',
      author: '-mommyoffour',
      category: 'RECIPE'
    },
    {
      id: 2,
      image: '/img/osh.webp',
      title: '30-MINUTE CHICKEN AND DUMPLINGS',
      quote: '"I have made this recipe several times and it always turns out delicious!"',
      author: '-hungrybri',
      category: 'RECIPE'
    },
    {
      id: 3,
      image: '/img/FAJITAS.jpg',
      title: 'CREAMY GARLIC PASTA',
      quote: '"This pasta is absolutely amazing! So creamy and full of flavor."',
      author: '-chefmike',
      category: 'RECIPE'
    },
    {
      id: 4,
      image: '/img/salat.webp',
      title: 'FRESH SUMMER SALAD',
      quote: '"Perfect for hot summer days. Light, refreshing and healthy!"',
      author: '-healthyfoodie',
      category: 'RECIPE'
    },
    {
      id: 5,
      image: '/img/MEVALI DESERT.jpg',
      title: 'HOMEMADE TOMATO SOUP',
      quote: '"Better than any canned soup. My kids ask for this every week!"',
      author: '-souperlady',
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
