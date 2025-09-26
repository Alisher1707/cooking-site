import React from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useRecipeContext } from '../contexts/RecipeContext'
import SearchBar from '../components/SearchBar'

function Recipes({ onSelectRecipe }) {
  const { searchQuery, selectedCategory, favorites, toggleFavorite } = useAppContext()
  const { getFilteredRecipes } = useRecipeContext()

  const filteredRecipes = getFilteredRecipes(searchQuery, selectedCategory)

  return (
    <div className="recipes-page">
      <div className="page-header">
        <h1>Retseptlar</h1>
        <p>Barcha retseptlarni ko'ring va o'zingizga yoqganini tanlang</p>
      </div>

      <div className="recipes-filters">
        <SearchBar />
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="recipe-card"
          >
            <div className="recipe-image-placeholder"></div>
            <div className="recipe-info">
              <h3 onClick={() => onSelectRecipe(recipe.id)}>{recipe.name}</h3>
              <p className="recipe-description">{recipe.shortDescription}</p>
              <div className="recipe-meta">
                <span className="cook-time">⏱️ {recipe.cookTime}</span>
                <span className="difficulty">📊 {recipe.difficulty}</span>
              </div>
              <div className="recipe-category">{recipe.category}</div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(recipe.id)
              }}
              className={`favorite-btn ${favorites.includes(recipe.id) ? 'active' : ''}`}
              aria-label={favorites.includes(recipe.id) ? 'Sevimlilardan olib tashlash' : 'Sevimlilarga qo\'shish'}
            >
              {favorites.includes(recipe.id) ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-results">
          <p>Hech qanday retsept topilmadi. Boshqa kalit so'z bilan qidiring.</p>
        </div>
      )}
    </div>
  )
}

export default Recipes