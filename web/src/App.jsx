import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigateToRecipes={() => setCurrentPage('recipes')} />
      case 'recipes':
        return <Recipes onSelectRecipe={(id) => {
          setSelectedRecipeId(id)
          setCurrentPage('recipe-detail')
        }} />
      case 'recipe-detail':
        return <RecipeDetail
          recipeId={selectedRecipeId}
          onBack={() => setCurrentPage('recipes')}
        />
      case 'contact':
        return <Contact />
      case 'favorites':
        return <Favorites onSelectRecipe={(id) => {
          setSelectedRecipeId(id)
          setCurrentPage('recipe-detail')
        }} />
      default:
        return <Home onNavigateToRecipes={() => setCurrentPage('recipes')} />
    }
  }

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App