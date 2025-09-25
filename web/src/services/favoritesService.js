import recipesData from '../data/recipes.json'

const FAVORITES_KEY = 'cooking_site_favorites'

class FavoritesService {
  // localStorage dan sevimlilarni olish
  static getFavorites() {
    try {
      const favorites = localStorage.getItem(FAVORITES_KEY)
      return favorites ? JSON.parse(favorites) : []
    } catch (error) {
      console.error('Sevimlilarni yuklashda xatolik:', error)
      return []
    }
  }

  // Sevimlilar ro'yxatini saqlash
  static saveFavorites(favorites) {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
      return true
    } catch (error) {
      console.error('Sevimlilarni saqlashda xatolik:', error)
      return false
    }
  }

  // Retsept sevimlilarmi tekshirish
  static isFavorite(recipeId) {
    const favorites = this.getFavorites()
    return favorites.some(fav => fav.id === recipeId)
  }

  // Sevimli qo'shish
  static addToFavorites(recipeId) {
    try {
      const recipe = recipesData.recipes.find(r => r.id === recipeId)
      if (!recipe) {
        throw new Error('Retsept topilmadi')
      }

      const favorites = this.getFavorites()

      // Agar allaqachon sevimlida bo'lsa
      if (favorites.some(fav => fav.id === recipeId)) {
        return { success: false, message: 'Bu retsept allaqachon sevimlilarda' }
      }

      // Sevimlilar uchun kerakli ma'lumotlar
      const favoriteRecipe = {
        id: recipe.id,
        name: recipe.name,
        shortDescription: recipe.shortDescription,
        image: recipe.image,
        cookTime: recipe.cookTime,
        difficulty: recipe.difficulty,
        category: recipe.category,
        dateAdded: new Date().toISOString()
      }

      favorites.push(favoriteRecipe)
      this.saveFavorites(favorites)

      return { success: true, message: 'Retsept sevimlilarga qo\'shildi' }
    } catch (error) {
      console.error('Sevimlilarfga qo\'shishda xatolik:', error)
      return { success: false, message: 'Xatolik yuz berdi' }
    }
  }

  // Sevimlilardan olib tashlash
  static removeFromFavorites(recipeId) {
    try {
      const favorites = this.getFavorites()
      const filteredFavorites = favorites.filter(fav => fav.id !== recipeId)

      if (favorites.length === filteredFavorites.length) {
        return { success: false, message: 'Bu retsept sevimlilarda yo\'q' }
      }

      this.saveFavorites(filteredFavorites)
      return { success: true, message: 'Retsept sevimlilardan olib tashlandi' }
    } catch (error) {
      console.error('Sevimlilardan olib tashlashda xatolik:', error)
      return { success: false, message: 'Xatolik yuz berdi' }
    }
  }

  // Sevimlilarni toggle qilish (qo'shish/olib tashlash)
  static toggleFavorite(recipeId) {
    if (this.isFavorite(recipeId)) {
      return this.removeFromFavorites(recipeId)
    } else {
      return this.addToFavorites(recipeId)
    }
  }

  // Barcha sevimlilarni tozalash
  static clearAllFavorites() {
    try {
      localStorage.removeItem(FAVORITES_KEY)
      return { success: true, message: 'Barcha sevimlilar tozalandi' }
    } catch (error) {
      console.error('Sevimlilarni tozalashda xatolik:', error)
      return { success: false, message: 'Xatolik yuz berdi' }
    }
  }

  // Sevimlilar sonini olish
  static getFavoritesCount() {
    return this.getFavorites().length
  }

  // Sevimlilarni saralash
  static getSortedFavorites(sortBy = 'dateAdded') {
    const favorites = this.getFavorites()

    return favorites.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name, 'uz')
        case 'cookTime':
          // Vaqtni soatlarga aylantirish
          const getHours = (timeStr) => {
            const match = timeStr.match(/(\d+(?:\.\d+)?)\s*(soat|daqiqa)/)
            if (!match) return 0
            const value = parseFloat(match[1])
            const unit = match[2]
            return unit === 'soat' ? value : value / 60
          }
          return getHours(a.cookTime) - getHours(b.cookTime)
        case 'difficulty':
          const difficultyOrder = { 'Oson': 1, 'O\'rta': 2, 'Qiyin': 3 }
          return (difficultyOrder[a.difficulty] || 0) - (difficultyOrder[b.difficulty] || 0)
        case 'category':
          return a.category.localeCompare(b.category, 'uz')
        case 'dateAdded':
        default:
          return new Date(b.dateAdded) - new Date(a.dateAdded) // Yangi qo'shilganlar birinchi
      }
    })
  }

  // Sevimli retseptlarning to'liq ma'lumotlarini olish
  static getFavoriteRecipeDetails(recipeId) {
    return recipesData.recipes.find(r => r.id === recipeId)
  }
}

export default FavoritesService