import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 60 },
    { name: 'Node.js', level: 50 },
    { name: 'Git', level: 70 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>我的技能</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-description">
          <h3>技術學習歷程</h3>
          <p>
            我從基礎的 HTML 和 CSS 開始學習網頁開發，逐步掌握了 JavaScript 
            的核心概念。目前正在深入學習 React 框架，並且對後端技術如 Node.js 
            也有基本的了解。我相信持續學習是成為優秀開發者的關鍵。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills