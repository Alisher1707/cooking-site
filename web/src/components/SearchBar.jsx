import React, { useState, useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useRecipeContext } from '../contexts/RecipeContext'
import { saveSearchQuery, loadSearchHistory } from '../services/storageService'

function SearchBar({ placeholder = "Retsept qidiring...", showFilters = true }) {
  const { searchQuery, selectedCategory, setSearchQuery, setSelectedCategory } = useAppContext()
  const { getCategories } = useRecipeContext()
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])

  const categories = getCategories()

  useEffect(() => {
    setSearchHistory(loadSearchHistory())
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      saveSearchQuery(searchQuery.trim())
      setSearchHistory(loadSearchHistory())
      setIsHistoryOpen(false)
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleHistoryClick = (query) => {
    setSearchQuery(query)
    setIsHistoryOpen(false)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const categoryOptions = [
    { value: 'all', label: 'Barcha kategoriyalar' },
    ...categories.slice(1).map(cat => ({ value: cat, label: cat }))
  ]

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsHistoryOpen(searchHistory.length > 0)}
            onBlur={() => setTimeout(() => setIsHistoryOpen(false), 200)}
            placeholder={placeholder}
            className="search-input"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="search-clear-btn"
              aria-label="Qidiruvni tozalash"
            >
              ✕
            </button>
          )}

          <button
            type="submit"
            className="search-submit-btn"
            aria-label="Qidirish"
          >
            🔍
          </button>

          {/* Search History Dropdown */}
          {isHistoryOpen && searchHistory.length > 0 && (
            <div className="search-history">
              <div className="search-history-header">
                <span>Oldingi qidiruvlar</span>
              </div>
              {searchHistory.map((query, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleHistoryClick(query)}
                  className="search-history-item"
                >
                  🕐 {query}
                </button>
              ))}
            </div>
          )}
        </div>

        {showFilters && (
          <div className="search-filters">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="category-filter"
            >
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>

      {/* Search Info */}
      {(searchQuery || selectedCategory !== 'all') && (
        <div className="search-info">
          {searchQuery && (
            <span className="search-term">
              "{searchQuery}" uchun qidiruv
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="search-category">
              {selectedCategory} kategoriyasida
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar