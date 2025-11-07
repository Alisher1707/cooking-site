import { createContext, useState, useContext, useEffect } from 'react';

const SavedRecipesContext = createContext();

export const useSavedRecipes = () => {
  const context = useContext(SavedRecipesContext);
  if (!context) {
    throw new Error('useSavedRecipes must be used within a SavedRecipesProvider');
  }
  return context;
};

export const SavedRecipesProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    // Load saved recipes from localStorage on initial render
    const saved = localStorage.getItem('savedRecipes');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever savedRecipes changes
  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const toggleSaveRecipe = (recipeId) => {
    setSavedRecipes(prev => {
      if (prev.includes(recipeId)) {
        // Remove from saved
        return prev.filter(id => id !== recipeId);
      } else {
        // Add to saved
        return [...prev, recipeId];
      }
    });
  };

  const isRecipeSaved = (recipeId) => {
    return savedRecipes.includes(recipeId);
  };

  const getSavedRecipes = () => {
    return savedRecipes;
  };

  return (
    <SavedRecipesContext.Provider value={{
      savedRecipes,
      toggleSaveRecipe,
      isRecipeSaved,
      getSavedRecipes
    }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};
