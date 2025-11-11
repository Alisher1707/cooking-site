import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import CravingSection from './components/CravingSection';
import ExploreMore from './components/ExploreMore';
import MoreIdeas from './components/MoreIdeas';
import FeaturedRecipe from './components/FeaturedRecipe';
import FanFavorites from './components/FanFavorites';
import FeaturedRecipe2 from './components/FeaturedRecipe2';
import Footer from './components/Footer';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import KabobRecipePage from './pages/KabobRecipePage';
import ShashlikRecipePage from './pages/ShashlikRecipePage';
import FanRecipePage from './pages/FanRecipePage';
import AllRecipePage from './pages/AllRecipePage';
import CategoryPage from './pages/CategoryPage';
import CategoryRecipePage from './pages/CategoryRecipePage';
import SearchPage from './pages/SearchPage';
import ChickenRecipePage from './pages/ChickenRecipePage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CravingSection />
                <ExploreMore />
                <MoreIdeas />
                <FeaturedRecipe />
                <FanFavorites />
                <FeaturedRecipe2 />
              </>
            } />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/1" element={<RecipeDetailPage />} />
            <Route path="/recipe/2" element={<KabobRecipePage />} />
            <Route path="/recipe/3" element={<ShashlikRecipePage />} />
            <Route path="/recipe/fan/:id" element={<FanRecipePage />} />
            <Route path="/recipe/all/:id" element={<AllRecipePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/recipe/category/:id" element={<CategoryRecipePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/recipe/chicken" element={<ChickenRecipePage />} />
            <Route path="/recipe/plov" element={<ChickenRecipePage />} />
            <Route path="/recipe/fajitas" element={<ChickenRecipePage />} />
            <Route path="/recipe/salad" element={<ChickenRecipePage />} />
            <Route path="/recipe/dessert" element={<ChickenRecipePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/edit-profile" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
