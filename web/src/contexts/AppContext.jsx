import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { loadFavorites, saveFavorites } from '../services/storageService'

const AppContext = createContext()

const initialState = {
  favorites: [],
  searchQuery: '',
  selectedCategory: 'all',
  currentPage: 'home',
  selectedRecipeId: null
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload }

    case 'ADD_FAVORITE':
      const newFavorites = [...state.favorites, action.payload]
      saveFavorites(newFavorites)
      return { ...state, favorites: newFavorites }

    case 'REMOVE_FAVORITE':
      const filteredFavorites = state.favorites.filter(id => id !== action.payload)
      saveFavorites(filteredFavorites)
      return { ...state, favorites: filteredFavorites }

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }

    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload }

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }

    case 'SET_SELECTED_RECIPE_ID':
      return { ...state, selectedRecipeId: action.payload }

    case 'NAVIGATE_TO_RECIPE':
      return {
        ...state,
        selectedRecipeId: action.payload,
        currentPage: 'recipe-detail'
      }

    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const savedFavorites = loadFavorites()
    dispatch({ type: 'SET_FAVORITES', payload: savedFavorites })
  }, [])

  const actions = {
    addFavorite: (recipeId) => dispatch({ type: 'ADD_FAVORITE', payload: recipeId }),
    removeFavorite: (recipeId) => dispatch({ type: 'REMOVE_FAVORITE', payload: recipeId }),
    toggleFavorite: (recipeId) => {
      if (state.favorites.includes(recipeId)) {
        dispatch({ type: 'REMOVE_FAVORITE', payload: recipeId })
      } else {
        dispatch({ type: 'ADD_FAVORITE', payload: recipeId })
      }
    },
    setSearchQuery: (query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query }),
    setSelectedCategory: (category) => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category }),
    setCurrentPage: (page) => dispatch({ type: 'SET_CURRENT_PAGE', payload: page }),
    setSelectedRecipeId: (id) => dispatch({ type: 'SET_SELECTED_RECIPE_ID', payload: id }),
    navigateToRecipe: (recipeId) => dispatch({ type: 'NAVIGATE_TO_RECIPE', payload: recipeId }),
    navigateToRecipes: () => dispatch({ type: 'SET_CURRENT_PAGE', payload: 'recipes' }),
    navigateBack: () => dispatch({ type: 'SET_CURRENT_PAGE', payload: 'recipes' })
  }

  return (
    <AppContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}