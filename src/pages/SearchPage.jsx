import { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Qidiruv funksiyasi keyinchalik qo'shiladi
    console.log('Qidiruv:', searchQuery);
  };

  return (
    <div className="search-page">
      <div className="search-page-container">
        <div className="search-content">
          <div
            className="search-box"
            style={{
              border: '6px solid #ff3300',
              boxShadow: '0 5px 20px rgba(255, 51, 0, 0.5)'
            }}
          >
            <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Men xohlayman..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
            />
          </div>
          <button className="search-submit-button" onClick={handleSearch}>
            QIDIRISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
