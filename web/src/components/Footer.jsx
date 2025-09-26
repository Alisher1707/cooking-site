import React from 'react'
import { useAppContext } from '../contexts/AppContext'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { navigateToRecipesWithCategory } = useAppContext()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo va tavsif */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">👨‍🍳</span>
            <span className="footer-logo-text">Cooking Site</span>
          </div>
          <p className="footer-description">
            O'zbekiston milliy taomlarining eng yaxshi retseptlari bilan tanishing.
            Har bir retsept sevgi va e'tibor bilan tayyorlangan.
          </p>

          {/* Kategoriyalar */}
          <div className="footer-categories">
            <div className="category-links">
              <button
                onClick={() => navigateToRecipesWithCategory('Asosiy taomlar')}
                className="category-link"
              >
                <span className="category-icon">🍛</span>
                <span>Asosiy taomlar</span>
              </button>
              <button
                onClick={() => navigateToRecipesWithCategory('Sho\'rvalar')}
                className="category-link"
              >
                <span className="category-icon">🍲</span>
                <span>Sho'rvalar</span>
              </button>
              <button
                onClick={() => navigateToRecipesWithCategory('Pishiriqlar')}
                className="category-link"
              >
                <span className="category-icon">🥟</span>
                <span>Pishiriqlar</span>
              </button>
              <button
                onClick={() => navigateToRecipesWithCategory('Shirinliklar')}
                className="category-link"
              >
                <span className="category-icon">🍰</span>
                <span>Shirinliklar</span>
              </button>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="social-media">
            <div className="social-links">
              <a
                href="https://t.me/halolsffood"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link telegram"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.18 1.896-.962 6.502-1.358 8.627-.168.9-.499 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/p/DC4LIeANEDC/?igsh=dG5kcXZhemczdnF6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/watch?v=6C1nbmc3jlA"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright">
            <p>&copy; {currentYear} Cooking Site. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer