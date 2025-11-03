import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CravingSection from './components/CravingSection';
import ExploreMore from './components/ExploreMore';
import MoreIdeas from './components/MoreIdeas';
import FeaturedRecipe from './components/FeaturedRecipe';
import FanFavorites from './components/FanFavorites';
import FeaturedRecipe2 from './components/FeaturedRecipe2';
import FindRecipes from './components/FindRecipes';
import Footer from './components/Footer';
import RecipesPage from './pages/RecipesPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
  return (
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
              <FindRecipes />
            </>
          } />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
