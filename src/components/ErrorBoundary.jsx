import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} resetError={() => this.setState({ hasError: false, error: null, errorInfo: null })} />;
    }

    return this.props.children;
  }
}

function ErrorFallback({ error, resetError }) {
  const { language } = useLanguage();

  const translations = {
    uz: {
      title: 'Xatolik yuz berdi!',
      description: 'Kechirasiz, kutilmagan xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.',
      homeButton: 'Bosh sahifaga qaytish',
      retryButton: 'Qaytadan urinish',
      errorDetails: 'Xatolik tafsilotlari:'
    },
    ru: {
      title: 'Произошла ошибка!',
      description: 'Извините, произошла непредвиденная ошибка. Пожалуйста, попробуйте снова.',
      homeButton: 'Вернуться на главную',
      retryButton: 'Попробовать снова',
      errorDetails: 'Детали ошибки:'
    },
    en: {
      title: 'Something went wrong!',
      description: 'Sorry, an unexpected error occurred. Please try again.',
      homeButton: 'Back to Home',
      retryButton: 'Try Again',
      errorDetails: 'Error Details:'
    }
  };

  const t = translations[language] || translations.en;

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleRetry = () => {
    resetError();
    window.location.reload();
  };

  return (
    <div className="error-boundary">
      <div className="error-boundary-content">
        <div className="error-boundary-icon">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="error-boundary-title">{t.title}</h1>
        <p className="error-boundary-description">{t.description}</p>

        {error && (
          <details className="error-boundary-details">
            <summary>{t.errorDetails}</summary>
            <pre className="error-boundary-stack">
              {error.toString()}
              {error.stack}
            </pre>
          </details>
        )}

        <div className="error-boundary-actions">
          <button onClick={handleRetry} className="error-boundary-btn error-boundary-btn-primary">
            {t.retryButton}
          </button>
          <button onClick={handleGoHome} className="error-boundary-btn error-boundary-btn-secondary">
            {t.homeButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
