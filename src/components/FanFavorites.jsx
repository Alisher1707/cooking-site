import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FanFavorites.css';

const FanFavorites = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const favorites = [
    { id: 1, image: '/img/kabob-1.jpg', title: "PECHDA PISHIRILGAN QOVURG'ALAR" },
    { id: 2, image: '/img/category-1.webp', title: 'MOZZARELLA TAYOQCHALARI' },
    { id: 3, image: '/img/page-1.webp', title: '5 DAQIQALIK VEGAN PANCAKE' },
    { id: 4, image: '/img/page-2.webp', title: 'SHAKSHUKA' },
    { id: 5, image: '/img/kabob-2.jpg', title: 'ODDIY PECHDA PISHIRILGAN DENGIZ BASS' },
    { id: 6, image: '/img/chicken.jpg', title: "GO'SHT VA BROCCOLI QOVURMA" },
    { id: 7, image: '/img/category-2.webp', title: 'FAJITAS' },
    { id: 8, image: '/img/category-3.webp', title: 'QAYMOGʻLI KREM' },
    { id: 9, image: '/img/kabob-3.jpg', title: 'SABZAVOTLI QOVURMA' },
    { id: 10, image: '/img/osh.webp', title: "O'ZBEK OSHI" },
    { id: 11, image: '/img/salat.webp', title: 'TOVUQLI SALAT' },
    { id: 12, image: '/img/page-4.webp', title: 'MEVALI DESERT' },
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
