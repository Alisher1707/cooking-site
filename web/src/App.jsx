import React from 'react'
import { AppProvider, useAppContext } from './contexts/AppContext'
import { RecipeProvider } from './contexts/RecipeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import './App.css'

function AppContent() {
  const { currentPage, selectedRecipeId, navigateToRecipes, navigateToRecipe } = useAppContext()

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigateToRecipes={navigateToRecipes} />
      case 'recipes':
        return <Recipes onSelectRecipe={navigateToRecipe} />
      case 'recipe-detail':
        return <RecipeDetail
          recipeId={selectedRecipeId}
          onBack={navigateToRecipes}
        />
      case 'contact':
        return <Contact />
      case 'favorites':
        return <Favorites onSelectRecipe={navigateToRecipe} />
      default:
        return <Home onNavigateToRecipes={navigateToRecipes} />
    }
  }

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <RecipeProvider>
        <AppContent />
      </RecipeProvider>
    </AppProvider>
  )
}

export default App