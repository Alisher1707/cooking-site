import { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Qidiruv funksiyasi keyinchalik qo'shiladi
    console.log('Qidiruv:', searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="search-page">
    </div>
  );
};

export default SearchPage;
