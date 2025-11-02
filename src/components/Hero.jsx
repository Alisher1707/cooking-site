import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <button className="hero-button">{t.heroButton}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
