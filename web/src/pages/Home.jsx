import React, { useState } from 'react'

function Home({ onNavigateToRecipes }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // Qidiruv so'zi bilan retseptlar sahifasiga o'tish
      onNavigateToRecipes()
    }
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Cooking Site ga xush kelibsiz!</h1>
          <p>Eng mazali va oson retseptlarni kashf qiling</p>

          <form className="hero-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Retsept qidiring... (masalan: osh, manti)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="hero-search-input"
            />
            <button type="submit" className="hero-search-button">
              🔍 Qidirish
            </button>
          </form>

          <button
            className="cta-button"
            onClick={onNavigateToRecipes}
          >
            Barcha retseptlarni ko'rish
          </button>
        </div>
      </section>

      <section className="featured-recipes">
        <h2>Mashhur retseptlar</h2>
        <div className="recipe-carousel">
          <div className="recipe-grid">
            <div className="recipe-card" data-recipe="osh">
              <div className="recipe-image-placeholder"></div>
              <h3>Osh</h3>
              <p>An'anaviy o'zbek taomi</p>
            </div>
            <div className="recipe-card" data-recipe="manti">
              <div className="recipe-image-placeholder"></div>
              <h3>Manti</h3>
              <p>Juda mazali va to'yimli</p>
            </div>
            <div className="recipe-card" data-recipe="lagmon">
              <div className="recipe-image-placeholder"></div>
              <h3>Lag'mon</h3>
              <p>Issiq va lazzatli sho'rva</p>
            </div>
            <div className="recipe-card" data-recipe="somsa">
              <div className="recipe-image-placeholder"></div>
              <h3>Somsa</h3>
              <p>Tandırda pishirilgan nozik xamirli</p>
            </div>
            <div className="recipe-card" data-recipe="shurpa">
              <div className="recipe-image-placeholder"></div>
              <h3>Sho'rva</h3>
              <p>Go'sht va sabzavotli issiq taom</p>
            </div>
            <div className="recipe-card" data-recipe="kabob">
              <div className="recipe-image-placeholder"></div>
              <h3>Kabob</h3>
              <p>Mangalda pishirilgan go'sht</p>
            </div>
            <div className="recipe-card" data-recipe="beshbarmaq">
              <div className="recipe-image-placeholder"></div>
              <h3>Beshbarmaq</h3>
              <p>Qozoq milliy taomi</p>
            </div>
            <div className="recipe-card" data-recipe="mastava">
              <div className="recipe-image-placeholder"></div>
              <h3>Mastava</h3>
              <p>Guruchli sho'rva</p>
            </div>
            <div className="recipe-card" data-recipe="chuchvara">
              <div className="recipe-image-placeholder"></div>
              <h3>Chuchvara</h3>
              <p>Kichik mantiga o'xshash taom</p>
            </div>
            <div className="recipe-card" data-recipe="qozonkabob">
              <div className="recipe-image-placeholder"></div>
              <h3>Qozon kabob</h3>
              <p>Qozonda pishirilgan go'sht</p>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="recipe-card" data-recipe="osh">
              <div className="recipe-image-placeholder"></div>
              <h3>Osh</h3>
              <p>An'anaviy o'zbek taomi</p>
            </div>
            <div className="recipe-card" data-recipe="manti">
              <div className="recipe-image-placeholder"></div>
              <h3>Manti</h3>
              <p>Juda mazali va to'yimli</p>
            </div>
            <div className="recipe-card" data-recipe="lagmon">
              <div className="recipe-image-placeholder"></div>
              <h3>Lag'mon</h3>
              <p>Issiq va lazzatli sho'rva</p>
            </div>
            <div className="recipe-card" data-recipe="somsa">
              <div className="recipe-image-placeholder"></div>
              <h3>Somsa</h3>
              <p>Tandırda pishirilgan nozik xamirli</p>
            </div>
            <div className="recipe-card" data-recipe="shurpa">
              <div className="recipe-image-placeholder"></div>
              <h3>Sho'rva</h3>
              <p>Go'sht va sabzavotli issiq taom</p>
            </div>
            <div className="recipe-card" data-recipe="kabob">
              <div className="recipe-image-placeholder"></div>
              <h3>Kabob</h3>
              <p>Mangalda pishirilgan go'sht</p>
            </div>
            <div className="recipe-card" data-recipe="beshbarmaq">
              <div className="recipe-image-placeholder"></div>
              <h3>Beshbarmaq</h3>
              <p>Qozoq milliy taomi</p>
            </div>
            <div className="recipe-card" data-recipe="mastava">
              <div className="recipe-image-placeholder"></div>
              <h3>Mastava</h3>
              <p>Guruchli sho'rva</p>
            </div>
            <div className="recipe-card" data-recipe="chuchvara">
              <div className="recipe-image-placeholder"></div>
              <h3>Chuchvara</h3>
              <p>Kichik mantiga o'xshash taom</p>
            </div>
            <div className="recipe-card" data-recipe="qozonkabob">
              <div className="recipe-image-placeholder"></div>
              <h3>Qozon kabob</h3>
              <p>Qozonda pishirilgan go'sht</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Biz haqimizda</h2>
        <p>
          Bizning maqsadimiz - sizga eng mazali va oson o'zbek milliy taomlarining retseptlarini taqdim etish.
          Har bir retsept tajribali oshpazlar tomonidan sinab ko'rilgan va mukammal natija uchun puxta tayyorlangan.
          Oshxonadagi har bir lahza baxtli bo'lsin!
        </p>
      </section>
    </div>
  )
}

export default Home