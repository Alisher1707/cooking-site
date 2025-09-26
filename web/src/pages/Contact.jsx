import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Bu yerda forma ma'lumotlarini yuborish logikasi bo'ladi
    console.log('Form submitted:', formData)
    setIsSubmitted(true)

    // Formani tozalash
    setFormData({
      name: '',
      email: '',
      message: ''
    })

    // 3 sekund keyin xabarni yashirish
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Biz bilan bog'lanish</h1>
        <p>Savollaringiz, takliflaringiz yoki fikr-mulohazalaringiz bo'lsa, biz bilan bog'laning</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Aloqa ma'lumotlari</h2>

          <div className="info-item">
            <h3>📍 Manzil</h3>
            <p>
              <a
                href="https://maps.google.com/?q=Tashkent,Uzbekistan"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                Toshkent, O'zbekiston
              </a>
            </p>
          </div>

          <div className="info-item">
            <h3>📞 Telefon</h3>
            <p>
              <a href="tel:+998904003990" className="phone-link">
                +998 90 400 39 90
              </a>
            </p>
          </div>

          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>
              <a href="mailto:halolfood@cookingsite.uz" className="email-link">
                halolfood@cookingsite.uz
              </a>
            </p>
          </div>

          <div className="info-item">
            <h3>⏰ Ish vaqti</h3>
            <p className="working-hours weekdays">Dushanba - Juma: 9:00 - 18:00</p>
            <p className="working-hours weekend">Shanba: 10:00 - 16:00</p>
            <p className="working-hours closed">Yakshanba: Dam olish kuni</p>
          </div>

          <div className="social-media">
            <h3>🌐 Ijtimoiy tarmoqlar</h3>
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

        <div className="contact-form-section">
          <h2>Xabar yuborish</h2>

          {isSubmitted && (
            <div className="success-message">
              ✅ Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ism *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ismingizni kiriting"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Xabar *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Xabaringizni yozing..."
              />
            </div>

            <button type="submit" className="submit-button">
              Xabar yuborish
            </button>
          </form>
        </div>
      </div>

      <div className="faq-section">
        <h2>Ko'p so'raladigan savollar</h2>

        <div className="faq-item">
          <h3>❓ Qanday qilib yangi retsept qo'shish mumkin?</h3>
          <p>Hozircha faqat admin orqali retsept qo'shish mumkin. Lekin tez orada foydalanuvchilar ham o'z retseptlarini yuborish imkoniyatiga ega bo'lishadi.</p>
        </div>

        <div className="faq-item">
          <h3>❓ Retseptlar bepulmi?</h3>
          <p>Ha, barcha retseptlar mutlaqo bepul va hamma uchun ochiq.</p>
        </div>

        <div className="faq-item">
          <h3>❓ Yangi retseptlar qachon qo'shiladi?</h3>
          <p>Har hafta yangi retseptlar qo'shamiz. Eng so'nggi yangilanishlar uchun bizni kuzatib boring.</p>
        </div>

        <div className="faq-item">
          <h3>❓ Mobile ilovangiz bormi?</h3>
          <p>Hozircha yo'q, lekin sayti mobil qurilmalarda ham qulay ishlaydi. Mobile ilova rejalarimizda bor.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact