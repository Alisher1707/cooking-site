import React, { useState } from 'react'
import { useAppContext } from '../contexts/AppContext'

function Navigation() {
  const { currentPage, setCurrentPage, favorites } = useAppContext()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: 'home', label: 'Bosh sahifa', icon: '🏠' },
    { id: 'recipes', label: 'Retseptlar', icon: '📖' },
    { id: 'favorites', label: 'Sevimlilar', icon: '❤️', badge: favorites.length },
    { id: 'contact', label: 'Aloqa', icon: '📞' }
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo va brend */}
        <div className="nav-brand">
          <button
            onClick={() => handleNavClick('home')}
            className="brand-link"
          >
            <span className="brand-icon">👨‍🍳</span>
            <span className="brand-text">Cooking Site</span>
          </button>
        </div>

        {/* Desktop menyu */}
        <div className="nav-menu">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.badge > 0 && (
                <span className="nav-badge">{item.badge}</span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile menyu tugmasi */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Menyu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile menyu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-items">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-item ${currentPage === item.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.badge > 0 && (
                <span className="nav-badge">{item.badge}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menyu background overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navigation