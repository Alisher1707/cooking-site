import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './EditProfilePage.css';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { user, updateProfile, updateProfileImage, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    location: ''
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Load user data
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        bio: user.bio || '',
        location: user.location || ''
      });

      // Load profile image if exists
      if (user.profileImage) {
        setImagePreview(user.profileImage);
      }
    }
  }, [user, isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Rasm hajmi 5MB dan oshmasligi kerak!' });
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        setMessage({ type: 'error', text: 'Faqat rasm fayllari yuklanadi!' });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(file);
        setImagePreview(reader.result);

        // Save image immediately
        const result = updateProfileImage(reader.result);
        if (result.success) {
          setMessage({ type: 'success', text: result.message });
          setTimeout(() => setMessage({ type: '', text: '' }), 2000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('profile-image-input').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const result = updateProfile(formData);

    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setTimeout(() => {
        navigate('/profile');
      }, 1000);
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <button className="back-button" onClick={handleCancel}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="edit-profile-title">{t.editProfilePageTitle || 'Profilni tahrirlash'}</h1>
        </div>

        {message.text && (
          <div className={`edit-profile-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="edit-profile-content">
          {/* Avatar Section */}
          <div className="avatar-section">
            <div className="avatar-preview" onClick={handleImageClick}>
              {imagePreview ? (
                <img src={imagePreview} alt="Profile" className="profile-image" />
              ) : (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              )}
            </div>
            <input
              type="file"
              id="profile-image-input"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <button
              type="button"
              className="change-avatar-btn"
              onClick={handleImageClick}
            >
              {t.editProfileChangeAvatar || 'Rasmni o\'zgartirish'}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="edit-profile-form">
            <div className="form-group">
              <label htmlFor="name">{t.editProfileName}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.editProfileEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t.editProfilePhone}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">{t.editProfileLocation}</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">{t.editProfileBio}</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                {t.editProfileCancel}
              </button>
              <button type="submit" className="save-btn">
                {t.editProfileSave}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
