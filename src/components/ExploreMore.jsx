import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './ExploreMore.css';

const ExploreMore = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    {
      id: 1,
      image: '/img/category-1.webp',
      title: t.exploreCategory1,
    },
    {
      id: 2,
      image: '/img/category-2.webp',
      title: t.exploreCategory2,
    },
    {
      id: 3,
      image: '/img/category-3.webp',
      title: t.exploreCategory3,
    },
    {
      id: 4,
      image: '/img/category-4.webp',
      title: t.exploreCategory4,
    },
    {
      id: 5,
      image: '/img/category-5.webp',
      title: t.exploreCategory5,
    },
    {
      id: 6,
      image: '/img/category-6.webp',
      title: t.exploreCategory6,
    }
  ];

  return (
    <section className="explore-section">
      <div className="explore-container">
        <h2 className="explore-heading">{t.exploreHeading}</h2>

        <div className="explore-grid">
          {categories.map((category) => (
            <div key={category.id} className="explore-card">
              <div className="explore-image-wrapper">
                <img src={category.image} alt={category.title} className="explore-image" />
              </div>
              <h3 className="explore-title">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
