import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>我的作品集</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">關於我</a></li>
            <li><a href="#skills">技能</a></li>
            <li><a href="#projects">專案</a></li>
            <li><a href="#contact">聯絡</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header