import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './CravingSection.css';

const CravingSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const cravingItems = [
    {
      id: 1,
      image: '/img/chicken.jpg',
      collection: t.collection,
      count: '40',
      title: t.cravingTitle1,
    },
    {
      id: 2,
      image: '/img/milliy-taom.jpg',
      collection: t.collection,
      count: '43',
      title: t.cravingTitle2,
    },
    {
      id: 3,
      image: '/img/salat.webp',
      collection: t.collection,
      count: '13',
      title: t.cravingTitle3,
    }
  ];

  return (
    <section className="craving-section">
      <div className="craving-container">
        <h2 className="craving-heading">{t.cravingHeading}</h2>

        <div className="craving-grid">
          {cravingItems.map((item) => (
            <div key={item.id} className="craving-card">
              <div className="craving-image-wrapper">
                <img src={item.image} alt={item.title} className="craving-image" />
                <div className="craving-overlay">
                  <div className="craving-content">
                    <span className="craving-collection">{item.collection}</span>
                    <h3 className="craving-title">
                      {item.count} {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CravingSection;
