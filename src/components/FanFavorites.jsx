import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FanFavorites.css';

const FanFavorites = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const favorites = [
    { id: 1, image: '/img/pechda pishirilgan gosht.jpg', titleKey: 'fanRecipe1' },
    { id: 2, image: '/img/MOZZARELLA TAYOQCHALARI.jpg', titleKey: 'fanRecipe2' },
    { id: 3, image: '/img/page-1.webp', titleKey: 'fanRecipe3' },
    { id: 4, image: '/img/page-2.webp', titleKey: 'fanRecipe4' },
    { id: 5, image: '/img/kabob-2.jpg', titleKey: 'fanRecipe5' },
    { id: 6, image: "/img/GO'SHT VA BROCCOLI QOVURMA.jpg", titleKey: 'fanRecipe6' },
    { id: 7, image: '/img/FAJITAS.jpg', titleKey: 'fanRecipe7' },
    { id: 8, image: '/img/category-3.webp', titleKey: 'fanRecipe8' },
    { id: 9, image: '/img/SABZAVOTLI QOVURMA.jpg', titleKey: 'fanRecipe9' },
    { id: 10, image: '/img/osh.webp', titleKey: 'fanRecipe10' },
    { id: 11, image: '/img/salat.webp', titleKey: 'fanRecipe11' },
    { id: 12, image: '/img/MEVALI DESERT.jpg', titleKey: 'fanRecipe12' },
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
            <Link key={recipe.id} to={`/recipe/fan/${recipe.id}`} className="fan-card">
              <div className="fan-card-image-wrapper">
                <img src={recipe.image} alt={t[recipe.titleKey]} className="fan-card-image" />
              </div>
              <h3 className="fan-card-title">{t[recipe.titleKey]}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanFavorites;
