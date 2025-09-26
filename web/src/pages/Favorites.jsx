import React, { useState, useMemo } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useRecipeContext } from '../contexts/RecipeContext'

function Favorites({ onSelectRecipe }) {
  const { favorites, removeFavorite } = useAppContext()
  const { getFavoriteRecipes } = useRecipeContext()
  const [sortBy, setSortBy] = useState('name')

  const favoriteRecipes = getFavoriteRecipes(favorites)

  const sortedFavorites = useMemo(() => {
    const recipes = [...favoriteRecipes]

    switch (sortBy) {
      case 'name':
        return recipes.sort((a, b) => a.name.localeCompare(b.name))
      case 'cookTime':
        return recipes.sort((a, b) => {
          const timeA = parseInt(a.cookTime) || 0
          const timeB = parseInt(b.cookTime) || 0
          return timeA - timeB
        })
      case 'difficulty':
        const difficultyOrder = { 'Oson': 1, 'O\'rta': 2, 'Qiyin': 3 }
        return recipes.sort((a, b) => {
          return (difficultyOrder[a.difficulty] || 4) - (difficultyOrder[b.difficulty] || 4)
        })
      case 'category':
        return recipes.sort((a, b) => a.category.localeCompare(b.category))
      default:
        return recipes
    }
  }, [favoriteRecipes, sortBy])

  const clearAllFavorites = () => {
    if (window.confirm('Barcha sevimli retseptlarni o\'chirmoqchimisiz?')) {
      favorites.forEach(id => removeFavorite(id))
    }
  }

  if (favoriteRecipes.length === 0) {
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
        <p>Siz yoqtirgan {favoriteRecipes.length} ta retsept</p>
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

              <div className="recipe-category">
                {recipe.category}
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
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="favorites-stats">
        <div className="stat-item">
          <strong>Jami sevimlilar:</strong> {favoriteRecipes.length}
        </div>
        <div className="stat-item">
          <strong>O'rtacha pishirish vaqti:</strong> {
            favoriteRecipes.length > 0
              ? Math.round(
                  favoriteRecipes.reduce((sum, recipe) => {
                    const hours = recipe.cookTime.includes('soat')
                      ? parseFloat(recipe.cookTime.match(/[\d.]+/)[0])
                      : parseFloat(recipe.cookTime.match(/[\d.]+/)[0]) / 60
                    return sum + hours
                  }, 0) / favoriteRecipes.length * 10
                ) / 10
              : 0
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