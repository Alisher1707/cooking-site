import React, { useState, useEffect } from 'react'
import FavoritesService from '../services/favoritesService'

function Favorites({ onSelectRecipe }) {
  const [favorites, setFavorites] = useState([])
  const [sortBy, setSortBy] = useState('dateAdded') // 'dateAdded', 'name', 'cookTime', 'difficulty', 'category'

  useEffect(() => {
    // localStorage dan sevimlilarni yuklash
    loadFavorites()
  }, [])

  useEffect(() => {
    // Saralash o'zgarganda ro'yxatni yangilash
    loadFavorites()
  }, [sortBy])

  const loadFavorites = () => {
    const sortedFavorites = FavoritesService.getSortedFavorites(sortBy)
    setFavorites(sortedFavorites)
  }

  const removeFavorite = (recipeId) => {
    const result = FavoritesService.removeFromFavorites(recipeId)
    if (result.success) {
      loadFavorites() // Ro'yxatni qayta yuklash
    } else {
      console.error(result.message)
    }
  }

  const clearAllFavorites = () => {
    if (window.confirm('Barcha sevimli retseptlarni o\'chirmoqchimisiz?')) {
      const result = FavoritesService.clearAllFavorites()
      if (result.success) {
        setFavorites([])
      } else {
        console.error(result.message)
      }
    }
  }

  // Saralash endi FavoritesService da amalga oshiriladi
  const sortedFavorites = favorites

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="page-header">
          <h1>Sevimli retseptlar</h1>
          <p>Sizning sevimli retseptlaringiz</p>
        </div>

        <div className="empty-favorites">
          <div className="empty-icon">💔</div>
          <h2>Sevimli retseptlar yo'q</h2>
          <p>
            Hali birorta sevimli retsept qo'shmadingiz.
            Retseptlar sahifasiga o'tib, yoqgan retseptlaringizni sevimlilar ro'yxatiga qo'shing.
          </p>
          <button
            onClick={() => window.history.back()}
            className="go-back-button"
          >
            Retseptlarga qaytish
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-page">
      <div className="page-header">
        <h1>Sevimli retseptlar</h1>
        <p>Siz yoqtirgan {favorites.length} ta retsept</p>
      </div>

      <div className="favorites-controls">
        <div className="sort-controls">
          <label htmlFor="sort-select">Saralash:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="dateAdded">Qo'shilgan sanasi bo'yicha</option>
            <option value="name">Nom bo'yicha</option>
            <option value="cookTime">Pishirish vaqti bo'yicha</option>
            <option value="difficulty">Qiyinlik darajasi bo'yicha</option>
            <option value="category">Kategoriya bo'yicha</option>
          </select>
        </div>

        <button
          onClick={clearAllFavorites}
          className="clear-all-button"
        >
          Barchasini o'chirish
        </button>
      </div>

      <div className="favorites-grid">
        {sortedFavorites.map(recipe => (
          <div key={recipe.id} className="favorite-card">
            <div className="recipe-image-placeholder"></div>

            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p className="recipe-description">{recipe.shortDescription}</p>

              <div className="recipe-meta">
                <span className="cook-time">⏱️ {recipe.cookTime}</span>
                <span className="difficulty">📊 {recipe.difficulty}</span>
              </div>

              <div className="date-added">
                Qo'shilgan: {new Date(recipe.dateAdded).toLocaleDateString('uz-UZ')}
              </div>
            </div>

            <div className="card-actions">
              <button
                onClick={() => onSelectRecipe(recipe.id)}
                className="view-recipe-button"
              >
                Ko'rish
              </button>

              <button
                onClick={() => removeFavorite(recipe.id)}
                className="remove-favorite-button"
                title="Sevimlilardan olib tashlash"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="favorites-stats">
        <div className="stat-item">
          <strong>Jami sevimlilar:</strong> {favorites.length}
        </div>
        <div className="stat-item">
          <strong>O'rtacha pishirish vaqti:</strong> {
            Math.round(
              favorites.reduce((sum, recipe) => {
                const hours = recipe.cookTime.includes('soat')
                  ? parseFloat(recipe.cookTime.match(/[\d.]+/)[0])
                  : parseFloat(recipe.cookTime.match(/[\d.]+/)[0]) / 60
                return sum + hours
              }, 0) / favorites.length * 10
            ) / 10
          } soat
        </div>
      </div>

      <div className="tips-section">
        <h3>💡 Maslahat</h3>
        <p>
          Sevimli retseptlaringizni haftalik menyu rejangiz uchun ishlatishingiz mumkin.
          Har bir retseptni alohida ko'rib chiqing va oziq-ovqat ro'yxatingizni tuzing!
        </p>
      </div>
    </div>
  )
}

export default Favorites