import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FanFavorites.css';

const FanFavorites = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const favorites = [
    { id: 1, image: '/img/fan-1.jpg', title: t.fanRecipe1 },
    { id: 2, image: '/img/fan-2.jpg', title: t.fanRecipe2 },
    { id: 3, image: '/img/fan-3.jpg', title: t.fanRecipe3 },
    { id: 4, image: '/img/fan-4.jpg', title: t.fanRecipe4 },
    { id: 5, image: '/img/fan-5.jpg', title: t.fanRecipe5 },
    { id: 6, image: '/img/fan-6.jpg', title: t.fanRecipe6 },
    { id: 7, image: '/img/fan-7.jpg', title: t.fanRecipe7 },
    { id: 8, image: '/img/fan-8.jpg', title: t.fanRecipe8 },
    { id: 9, image: '/img/fan-9.jpg', title: t.fanRecipe9 },
    { id: 10, image: '/img/fan-10.jpg', title: t.fanRecipe10 },
    { id: 11, image: '/img/fan-11.jpg', title: t.fanRecipe11 },
    { id: 12, image: '/img/fan-12.jpg', title: t.fanRecipe12 },
  ];

  return (
    <section className="fan-favorites-section">
      <div className="fan-favorites-container">
        <div className="fan-favorites-header">
          <h2 className="fan-favorites-heading">{t.fanFavoritesHeading}</h2>
          <a href="#all-favorites" className="view-all-link">{t.viewAll}</a>
        </div>

        <div className="fan-favorites-grid">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="fan-card">
              <div className="fan-card-image-wrapper">
                <img src={recipe.image} alt={recipe.title} className="fan-card-image" />
              </div>
              <h3 className="fan-card-title">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanFavorites;
