import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>關於我</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image">
              <span>你的照片</span>
            </div>
          </div>
          <div className="about-text">
            <h3>哈囉！我是一位充滿熱忱的開發者</h3>
            <p>
              歡迎來到我的個人作品集！我專注於前端開發，熱愛學習新技術，
              並且享受將創意想法轉化為實際的網頁應用程式。
            </p>
            <p>
              我目前正在學習 React，並且對於建立用戶友善的介面充滿興趣。
              透過不斷的學習和實作，我希望能夠成為一位出色的全端開發者。
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <h4>🎯 專注領域</h4>
                <p>前端開發、UI/UX 設計</p>
              </div>
              <div className="highlight">
                <h4>💡 興趣愛好</h4>
                <p>程式設計、新技術探索</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About