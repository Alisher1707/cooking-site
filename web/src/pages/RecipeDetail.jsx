import React, { useState } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useRecipeContext } from '../contexts/RecipeContext'
import '../styles/recipe-detail.css'

function RecipeDetail({ recipeId, onBack }) {
  const [activeTab, setActiveTab] = useState('ingredients')
  const { favorites, toggleFavorite } = useAppContext()
  const { getRecipeById } = useRecipeContext()

  const recipe = getRecipeById(recipeId)
  const isFavorite = favorites.includes(recipeId)

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <button onClick={onBack} className="back-button">
          ← Orqaga
        </button>
        <div className="not-found">
          <h2>Retsept topilmadi</h2>
          <p>Kechirasiz, bu retsept mavjud emas.</p>
        </div>
      </div>
    )
  }

  const handleToggleFavorite = () => {
    toggleFavorite(recipeId)
  }

  return (
    <div className="recipe-detail-page">
      <button onClick={onBack} className="back-button">
        ← Orqaga
      </button>

      <div className="recipe-header">
        <div
          className="recipe-image-large"
          style={{
            backgroundImage: recipe.image ? `url(${recipe.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        ></div>
        <div className="recipe-main-info">
          <h1>{recipe.name}</h1>
          <p className="recipe-description">{recipe.description}</p>

          <div className="recipe-stats">
            <div className="stat">
              <strong>Tayyorlanish vaqti:</strong>
              <span>{recipe.prepTime}</span>
            </div>
            <div className="stat">
              <strong>Pishirish vaqti:</strong>
              <span>{recipe.cookTime}</span>
            </div>
            <div className="stat">
              <strong>Miqdor:</strong>
              <span>{recipe.servings} kishi</span>
            </div>
            <div className="stat">
              <strong>Qiyinlik:</strong>
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <button
            onClick={handleToggleFavorite}
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
          >
            {isFavorite ? '❤️ Sevimlilardan olib tashlash' : '🤍 Sevimlilarga qo\'shish'}
          </button>
        </div>
      </div>

      <div className="recipe-tabs">
        <button
          className={`tab ${activeTab === 'ingredients' ? 'active' : ''}`}
          onClick={() => setActiveTab('ingredients')}
        >
          Masalliqlar
        </button>
        <button
          className={`tab ${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => setActiveTab('instructions')}
        >
          Tayyorlash bosqichlari
        </button>
        <button
          className={`tab ${activeTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          Maslahatlar
        </button>
      </div>

      <div className="recipe-content">
        {activeTab === 'ingredients' && (
          <div className="ingredients-section">
            <h3>Kerakli masalliqlar:</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'instructions' && (
          <div className="instructions-section">
            <h3>Tayyorlash bosqichlari:</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="tips-section">
            <h3>Foydali maslahatlar:</h3>
            {recipe.tips && recipe.tips.length > 0 ? (
              <ul className="tips-list">
                {recipe.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>Bu retsept uchun qo'shimcha maslahatlar yo'q.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeDetail