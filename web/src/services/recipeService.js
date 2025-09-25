import recipesData from '../data/recipes.json'

// Kelajakda API uchun asosiy xizmat
class RecipeService {
  // Barcha retseptlarni olish
  static getAllRecipes() {
    // Kelajakda bu API chaqiruv bo'ladi
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recipesData.recipes)
      }, 100) // API chaqiruvini taqlid qilish
    })
  }

  // ID bo'yicha retseptni olish
  static getRecipeById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recipe = recipesData.recipes.find(r => r.id === id)
        if (recipe) {
          resolve(recipe)
        } else {
          reject(new Error('Retsept topilmadi'))
        }
      }, 100)
    })
  }

  // Kategoriya bo'yicha retseptlarni filterlash
  static getRecipesByCategory(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category === 'Barchasi') {
          resolve(recipesData.recipes)
        } else {
          const filtered = recipesData.recipes.filter(r => r.category === category)
          resolve(filtered)
        }
      }, 100)
    })
  }

  // Qidirish
  static searchRecipes(searchTerm) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = recipesData.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        resolve(filtered)
      }, 100)
    })
  }

  // Barcha kategoriyalarni olish
  static getCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recipesData.categories)
      }, 50)
    })
  }

  // Kelajakda API uchun: yangi retsept qo'shish
  static addRecipe(recipe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bu yerda API POST so'rovi bo'ladi
        console.log('Yangi retsept qo\'shilmoqda:', recipe)
        resolve({ ...recipe, id: Date.now() })
      }, 200)
    })
  }

  // Kelajakda API uchun: retseptni yangilash
  static updateRecipe(id, recipe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bu yerda API PUT so'rovi bo'ladi
        console.log('Retsept yangilanmoqda:', id, recipe)
        resolve({ ...recipe, id })
      }, 200)
    })
  }

  // Kelajakda API uchun: retseptni o'chirish
  static deleteRecipe(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bu yerda API DELETE so'rovi bo'ladi
        console.log('Retsept o\'chirilmoqda:', id)
        resolve(true)
      }, 200)
    })
  }
}

export default RecipeService