import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FindRecipes.css';

const FindRecipes = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality will be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="find-recipes-section">
      <div className="find-recipes-container">
        <h2 className="find-recipes-heading">{t.findRecipesHeading}</h2>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
