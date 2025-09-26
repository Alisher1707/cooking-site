const STORAGE_KEYS = {
  FAVORITES: 'cooking_site_favorites',
  SEARCH_HISTORY: 'cooking_site_search_history',
  USER_PREFERENCES: 'cooking_site_preferences'
}

// Favorites related functions
export function loadFavorites() {
  try {
    const favorites = localStorage.getItem(STORAGE_KEYS.FAVORITES)
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    console.error('Sevimlilarni yuklashda xatolik:', error)
    return []
  }
}

export function saveFavorites(favorites) {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites))
    return true
  } catch (error) {
    console.error('Sevimlilarni saqlashda xatolik:', error)
    return false
  }
}

export function isFavorite(recipeId) {
  const favorites = loadFavorites()
  return favorites.includes(recipeId)
}

// Search history functions
export function loadSearchHistory() {
  try {
    const history = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY)
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error('Qidiruv tarixini yuklashda xatolik:', error)
    return []
  }
}

export function saveSearchQuery(query) {
  if (!query.trim()) return

  try {
    const history = loadSearchHistory()
    const updatedHistory = [query, ...history.filter(item => item !== query)].slice(0, 10)
    localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(updatedHistory))
  } catch (error) {
    console.error('Qidiruv tarixini saqlashda xatolik:', error)
  }
}

export function clearSearchHistory() {
  try {
    localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY)
    return true
  } catch (error) {
    console.error('Qidiruv tarixini tozalashda xatolik:', error)
    return false
  }
}

// User preferences functions
export function loadUserPreferences() {
  try {
    const preferences = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES)
    return preferences ? JSON.parse(preferences) : {
      theme: 'light',
      language: 'uz',
      defaultCategory: 'all'
    }
  } catch (error) {
    console.error('Foydalanuvchi sozlamalarini yuklashda xatolik:', error)
    return {
      theme: 'light',
      language: 'uz',
      defaultCategory: 'all'
    }
  }
}

export function saveUserPreferences(preferences) {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences))
    return true
  } catch (error) {
    console.error('Foydalanuvchi sozlamalarini saqlashda xatolik:', error)
    return false
  }
}

// Clear all storage
export function clearAllStorage() {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
    return true
  } catch (error) {
    console.error('Barcha ma\'lumotlarni tozalashda xatolik:', error)
    return false
  }
}