import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { SavedRecipesProvider } from './context/SavedRecipesContext';
import { ToastProvider } from './context/ToastContext';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <SavedRecipesProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </SavedRecipesProvider>
      </LanguageProvider>
    </AuthProvider>
  </StrictMode>,
);
