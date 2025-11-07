import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const [settings, setSettings] = useState(() => {
    // Load settings from localStorage on initial render
    const savedSettings = localStorage.getItem('userSettings');
    return savedSettings ? JSON.parse(savedSettings) : {
      notifications: true,
      emailUpdates: true,
      privateProfile: false,
      showEmail: false
    };
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <button className="back-button" onClick={handleBack}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="settings-title">{t.settingsPageTitle}</h1>
        </div>

        <div className="settings-content">
          {/* Language Settings */}
          <div className="settings-section">
            <h2 className="section-title">{t.settingsLanguage || 'TIL'}</h2>
            <div className="settings-group">
              <div className="language-options">
                <button
                  className={`language-option ${language === 'uz' ? 'active' : ''}`}
                  onClick={() => changeLanguage('uz')}
                >
                  <div className="lang-code">UZ</div>
                  <span className="lang-name">O'zbek</span>
                </button>
                <button
                  className={`language-option ${language === 'ru' ? 'active' : ''}`}
                  onClick={() => changeLanguage('ru')}
                >
                  <div className="lang-code">RU</div>
                  <span className="lang-name">Русский</span>
                </button>
                <button
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  <div className="lang-code">GB</div>
                  <span className="lang-name">English</span>
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-section">
            <h2 className="section-title">{t.settingsNotifications}</h2>
            <div className="settings-group">
              <div className="setting-item">
                <div className="setting-info">
                  <h3 className="setting-name">{t.settingsPushNotifications}</h3>
                  <p className="setting-desc">{t.settingsPushNotificationsDesc}</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={() => handleToggle('notifications')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3 className="setting-name">{t.settingsEmailUpdates}</h3>
                  <p className="setting-desc">{t.settingsEmailUpdatesDesc}</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.emailUpdates}
                    onChange={() => handleToggle('emailUpdates')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="settings-section">
            <h2 className="section-title">{t.settingsPrivacy}</h2>
            <div className="settings-group">
              <div className="setting-item">
                <div className="setting-info">
                  <h3 className="setting-name">{t.settingsPrivateProfile}</h3>
                  <p className="setting-desc">{t.settingsPrivateProfileDesc}</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.privateProfile}
                    onChange={() => handleToggle('privateProfile')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3 className="setting-name">{t.settingsShowEmail}</h3>
                  <p className="setting-desc">{t.settingsShowEmailDesc}</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.showEmail}
                    onChange={() => handleToggle('showEmail')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="settings-section">
            <h2 className="section-title">{t.settingsAccount}</h2>
            <div className="settings-group">
              <button className="settings-action-btn">
                {t.settingsChangePassword}
              </button>
              <button className="settings-action-btn danger">
                {t.settingsDeleteAccount}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
