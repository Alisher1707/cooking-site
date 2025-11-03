import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { UzbekistanFlag, RussiaFlag, UKFlag } from './Flags';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

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
    { name: t.recipes, path: '#recipes' },
    { name: t.popular, path: '#popular' },
    { name: t.meatSeafood, path: '#meat-seafood' },
    { name: t.healthyDiet, path: '#healthy-diet' },
    { name: t.holidays, path: '#holidays' },
    { name: t.cuisine, path: '#cuisine' },
    { name: t.seasonal, path: '#seasonal' }
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="navbar">
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
              <a href={item.path} className="navbar-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <button className="navbar-icon search-icon" aria-label={t.search}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button className="navbar-icon bookmark-icon" aria-label={t.bookmarks}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
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
    </nav>
  );
};

export default Navbar;
