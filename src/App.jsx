import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CravingSection from './components/CravingSection';
import ExploreMore from './components/ExploreMore';
import MoreIdeas from './components/MoreIdeas';
import FeaturedRecipe from './components/FeaturedRecipe';
import FanFavorites from './components/FanFavorites';
import FeaturedRecipe2 from './components/FeaturedRecipe2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CravingSection />
      <ExploreMore />
      <MoreIdeas />
      <FeaturedRecipe />
      <FanFavorites />
      <FeaturedRecipe2 />
    </div>
  );
}

export default App;
