import React, { useState, useEffect } from 'react'
import recipesData from '../data/recipes.json'

function Recipes({ onSelectRecipe }) {
  const [selectedCategory, setSelectedCategory] = useState('Barchasi')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRecipes = recipesData.recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'Barchasi' || recipe.category === selectedCategory
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="recipes-page">
      <div className="page-header">
        <h1>Retseptlar</h1>
        <p>Barcha retseptlarni ko'ring va o'zingizga yoqganini tanlang</p>
      </div>

      <div className="recipes-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Retsept qidiring..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {recipesData.categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => onSelectRecipe(recipe.id)}
          >
            <div className="recipe-image-placeholder"></div>
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p className="recipe-description">{recipe.shortDescription}</p>
              <div className="recipe-meta">
                <span className="cook-time">⏱️ {recipe.cookTime}</span>
                <span className="difficulty">📊 {recipe.difficulty}</span>
              </div>
              <div className="recipe-category">{recipe.category}</div>
            </div>
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