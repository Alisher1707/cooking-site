import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.profileImage ? (
              <img src={user.profileImage} alt={user.name} className="profile-avatar-img" />
            ) : (
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </div>
          <h1 className="profile-name">{user?.name || 'Foydalanuvchi'}</h1>
          <p className="profile-email">{user?.email || 'email@example.com'}</p>
          <button className="profile-edit-btn" onClick={handleEditProfile}>{t.profileEditButton || 'Profilni tahrirlash'}</button>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="stat-info">
              <h3 className="stat-number">24</h3>
              <p className="stat-label">{t.profileSavedRecipes}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
            <div className="stat-info">
              <h3 className="stat-number">12</h3>
              <p className="stat-label">{t.profileMyRecipes}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="stat-info">
              <h3 className="stat-number">156</h3>
              <p className="stat-label">{t.profileLikes}</p>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="profile-content">
          {/* My Recipes */}
          <div className="profile-section">
            <h2 className="section-title">{t.profileMyRecipesTitle}</h2>
            <div className="recipes-grid-small">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="recipe-card-small">
                  <div className="recipe-image-small">
                    <img src={`/img/page-${item}.webp`} alt={`Recipe ${item}`} />
                  </div>
                  <div className="recipe-info-small">
                    <h3>{t.recipeTitle1}</h3>
                    <p className="recipe-date">{t.profilePostedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Recipes */}
          <div className="profile-section">
            <h2 className="section-title">{t.profileSavedRecipesTitle}</h2>
            <div className="recipes-grid-small">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="recipe-card-small">
                  <div className="recipe-image-small">
                    <img src={`/img/category-${item}.webp`} alt={`Recipe ${item}`} />
                  </div>
                  <div className="recipe-info-small">
                    <h3>{t.recipeTitle2}</h3>
                    <p className="recipe-date">{t.profileSavedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings */}
          <div className="profile-section">
            <h2 className="section-title">{t.profileSettingsTitle}</h2>
            <div className="settings-list">
              <button className="settings-item" onClick={handleEditProfile}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{t.profileEditProfile || 'Profilni tahrirlash'}</span>
              </button>
              <button className="settings-item" onClick={() => navigate('/settings')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m6-10.5-3 3m-6 0-3-3m13.5 6h-6m-6 0H1"></path>
                </svg>
                <span>{t.profileSettings || 'Sozlamalar'}</span>
              </button>
              <button className="settings-item logout-btn" onClick={handleLogout}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>{t.profileLogout || 'Chiqish'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
