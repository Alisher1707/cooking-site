import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import { translations } from '../translations/translations';
import { UzbekistanFlag, RussiaFlag, UKFlag } from './Flags';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language, changeLanguage } = useLanguage();
  const { savedRecipes } = useSavedRecipes();
  const t = translations[language];

  const isSearchPage = location.pathname === '/search';

  const languages = [
    { code: 'uz', name: "O'ZB", flag: <UzbekistanFlag /> },
    { code: 'ru', name: 'РУС', flag: <RussiaFlag /> },
    { code: 'en', name: 'ENG', flag: <UKFlag /> }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsLangOpen(false);
  };

  const menuItems = [
    { name: t.recipes, path: '/category/recipes' },
    { name: t.popular, path: '/category/popular' },
    { name: t.meatSeafood, path: '/category/meat-seafood' },
    { name: t.healthyDiet, path: '/category/healthy-diet' },
    { name: t.holidays, path: '/category/holidays' },
    { name: t.cuisine, path: '/category/cuisine' },
    { name: t.seasonal, path: '/category/seasonal' }
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/search');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/search');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    navigate('/search');
  };

  return (
    <nav className={`navbar ${isSearchPage ? 'navbar-with-search' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleLogoClick(); }}>Food.</a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <Link to={item.path} className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <button
            className="navbar-icon bookmark-icon"
            aria-label={t.bookmarks}
            onClick={() => navigate('/profile')}
            style={{ position: 'relative' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            {savedRecipes.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ff6b6b',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {savedRecipes.length}
              </span>
            )}
          </button>
          <button className="navbar-icon search-icon-special" aria-label={t.search || "Qidiruv"} onClick={handleSearchClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button className="navbar-icon user-icon" aria-label={t.userProfile} onClick={handleProfileClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          {/* Language Dropdown */}
          <div className="language-dropdown">
            <button
              className="language-trigger"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <div className="flag-icon">{currentLang.flag}</div>
              <svg
                className={`dropdown-arrow ${isLangOpen ? 'open' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isLangOpen && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <div className="flag-icon">{lang.flag}</div>
                    <span className="lang-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isSearchPage && (
        <div className="navbar-search-row">
          <div className="navbar-search-container">
            <form onSubmit={handleSearchSubmit}>
              <div className="navbar-search-box">
                <span className="navbar-search-label">{t.searchBoxLabel}</span>
                <svg className="navbar-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  className="navbar-search-input"
                  placeholder=""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" className="navbar-clear-button" onClick={handleClearSearch}>
                  {t.searchClearButton}
                </button>
              </div>
              <div className="navbar-search-underline"></div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
