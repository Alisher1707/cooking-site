import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './MoreIdeas.css';

const MoreIdeas = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const recipes = [
    {
      id: 1,
      image: '/img/page-1.webp',
      title: t.recipeTitle1,
    },
    {
      id: 2,
      image: '/img/page-2.webp',
      title: t.recipeTitle2,
    },
    {
      id: 3,
      image: '/img/page-3.webp',
      title: t.recipeTitle3,
    },
    {
      id: 4,
      image: '/img/page-4.webp',
      title: t.recipeTitle4,
    }
  ];

  return (
    <section className="more-ideas-section">
      <div className="more-ideas-container">
        <div className="more-ideas-header">
          <h2 className="more-ideas-heading">{t.moreIdeasHeading}</h2>
          <a href="#all" className="view-all-link">{t.viewAll}</a>
        </div>

        <div className="more-ideas-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              </div>
              <h3 className="recipe-title">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreIdeas;
