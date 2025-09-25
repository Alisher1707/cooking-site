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
            <p>Toshkent, O'zbekiston</p>
          </div>

          <div className="info-item">
            <h3>📞 Telefon</h3>
            <p>+998 90 123 45 67</p>
          </div>

          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>info@cookingsite.uz</p>
          </div>

          <div className="info-item">
            <h3>⏰ Ish vaqti</h3>
            <p>Dushanba - Juma: 9:00 - 18:00</p>
            <p>Shanba: 10:00 - 16:00</p>
            <p>Yakshanba: Dam olish kuni</p>
          </div>

          <div className="social-media">
            <h3>🌐 Ijtimoiy tarmoqlar</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Telegram</a>
              <a href="#" className="social-link">YouTube</a>
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