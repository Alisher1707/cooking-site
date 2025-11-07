import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">{t.notFoundTitle || 'Sahifa topilmadi'}</h2>
          <p className="not-found-description">
            {t.notFoundDescription || 'Siz qidirayotgan sahifa mavjud emas yoki ko\'chirilgan.'}
          </p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-button primary">
              {t.notFoundHomeButton || 'Bosh sahifaga qaytish'}
            </Link>
            <Link to="/recipes" className="not-found-button secondary">
              {t.notFoundRecipesButton || 'Retseptlarni ko\'rish'}
            </Link>
          </div>
          <div className="not-found-illustration">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#FF6B6B" strokeWidth="4" strokeDasharray="8 8"/>
              <path d="M70 90C70 85 75 80 80 80C85 80 90 85 90 90" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
              <path d="M110 90C110 85 115 80 120 80C125 80 130 85 130 90" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
              <path d="M70 130C70 130 85 115 100 115C115 115 130 130 130 130" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
