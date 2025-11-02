import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FeaturedRecipe2.css';

const FeaturedRecipe2 = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="featured-recipe2-section">
      <div className="featured-recipe2-container">
        <div className="featured-recipe2-content">
          <span className="featured-collection2-label">{t.collection}</span>
          <h2 className="featured-recipe2-title">{t.featured2Title}</h2>
          <p className="featured-recipe2-description">{t.featured2Description}</p>
        </div>
        <div className="featured-recipe2-image-wrapper">
          <img
            src="/img/milliy-taom.jpg"
            alt={t.featured2Title}
            className="featured-recipe2-image"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipe2;
