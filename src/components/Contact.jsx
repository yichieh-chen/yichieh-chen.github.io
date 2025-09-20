import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('感謝你的訊息！目前這只是一個示範表單。')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>聯絡我</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>讓我們聊聊吧！</h3>
            <p>
              如果你對我的作品感興趣，或想要討論合作機會，
              歡迎透過以下方式與我聯絡。
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">💼</div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/yourprofile</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🐱</div>
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/yourusername</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">訊息</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                發送訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact