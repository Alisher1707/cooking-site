import React, { createContext, useContext, useMemo } from 'react'
import recipesData from '../data/recipes.json'

const RecipeContext = createContext()

export function RecipeProvider({ children }) {
  const allRecipes = useMemo(() => recipesData.recipes, [])

  const getRecipeById = (id) => {
    return allRecipes.find(recipe => recipe.id === parseInt(id))
  }

  const getRecipesByCategory = (category) => {
    if (category === 'all') return allRecipes
    return allRecipes.filter(recipe => recipe.category === category)
  }

  const searchRecipes = (query, category = 'all') => {
    let recipes = category === 'all' ? allRecipes : getRecipesByCategory(category)

    if (!query.trim()) return recipes

    const searchTerm = query.toLowerCase().trim()

    return recipes.filter(recipe => {
      return (
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.category.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm)
        ) ||
        recipe.instructions.some(instruction =>
          instruction.toLowerCase().includes(searchTerm)
        )
      )
    })
  }

  const getFilteredRecipes = (searchQuery, selectedCategory) => {
    return searchRecipes(searchQuery, selectedCategory)
  }

  const getFavoriteRecipes = (favoriteIds) => {
    return allRecipes.filter(recipe => favoriteIds.includes(recipe.id))
  }

  const getCategories = () => {
    const categories = [...new Set(allRecipes.map(recipe => recipe.category))]
    return ['all', ...categories]
  }

  const getRecipeStats = () => {
    return {
      totalRecipes: allRecipes.length,
      categories: getCategories().length - 1, // -1 because 'all' is not a real category
      averageCookTime: Math.round(
        allRecipes.reduce((sum, recipe) => {
          const time = parseInt(recipe.cookTime)
          return sum + (isNaN(time) ? 0 : time)
        }, 0) / allRecipes.length
      )
    }
  }

  const getRandomRecipes = (count = 3) => {
    const shuffled = [...allRecipes].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const getSimilarRecipes = (currentRecipeId, count = 3) => {
    const currentRecipe = getRecipeById(currentRecipeId)
    if (!currentRecipe) return []

    const similarRecipes = allRecipes.filter(recipe => {
      return recipe.id !== currentRecipeId &&
             recipe.category === currentRecipe.category
    })

    return similarRecipes.slice(0, count)
  }

  const contextValue = {
    recipes: allRecipes,
    getRecipeById,
    getRecipesByCategory,
    searchRecipes,
    getFilteredRecipes,
    getFavoriteRecipes,
    getCategories,
    getRecipeStats,
    getRandomRecipes,
    getSimilarRecipes
  }

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipeContext() {
  const context = useContext(RecipeContext)
  if (context === undefined) {
    throw new Error('useRecipeContext must be used within a RecipeProvider')
  }
  return context
}