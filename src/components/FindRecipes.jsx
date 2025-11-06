import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { recipesData } from '../data/recipes';
import './FindRecipes.css';

const FindRecipes = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const performSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const results = recipesData.filter(recipe => {
      const keywords = recipe.keywords[language] || recipe.keywords.uz;
      return keywords.some(keyword =>
        keyword.toLowerCase().includes(lowerQuery)
      );
    });
    setSearchResults(results);
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 2) {
      performSearch(value);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const handleBlur = () => {
    // Delay to allow click on result
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  return (
    <section className="find-recipes-section">
      <div className="find-recipes-container">
        <h2 className="find-recipes-heading">{t.findRecipesHeading}</h2>

        <form className="search-form" onSubmit={handleSearch}>
          <div
            className="search-input-wrapper"
            style={{
              border: '3px solid #ff8c61',
              boxShadow: '0 3px 10px rgba(255, 140, 97, 0.25)',
              borderRadius: '60px'
            }}
          >
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={() => searchQuery.trim().length > 2 && setShowResults(true)}
            />

            {showResults && searchResults.length > 0 && (
              <div className="search-results-dropdown">
                {searchResults.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="search-result-item"
                    onClick={() => handleResultClick(recipe)}
                  >
                    <img src={recipe.image} alt="" className="search-result-image" />
                    <div className="search-result-info">
                      <span className="search-result-title">
                        {t[`recipe${recipe.id}Title`] || recipe.slug}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showResults && searchResults.length === 0 && searchQuery.trim().length > 2 && (
              <div className="search-results-dropdown">
                <div className="search-no-results">
                  {language === 'uz' && 'Hech narsa topilmadi'}
                  {language === 'ru' && 'Ничего не найдено'}
                  {language === 'en' && 'No results found'}
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="search-button">
            {t.searchButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FindRecipes;
