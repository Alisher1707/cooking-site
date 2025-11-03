import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FeaturedRecipe.css';

const FeaturedRecipe = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const handleRecipeClick = () => {
    navigate('/recipe/1');
  };

  return (
    <section className="featured-recipe-section">
      <div className="featured-recipe-container" onClick={handleRecipeClick}>
        <div className="featured-recipe-image-wrapper">
          <img
            src="/img/osh.webp"
            alt={t.featuredTitle}
            className="featured-recipe-image"
          />
        </div>
        <div className="featured-recipe-content">
          <span className="featured-collection-label">{t.collection}</span>
          <h2 className="featured-recipe-title">{t.featuredTitle}</h2>
          <p className="featured-recipe-description">{t.featuredDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipe;
