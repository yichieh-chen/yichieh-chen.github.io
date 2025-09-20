import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: '個人作品集網站',
      description: '使用 React + Vite 建立的響應式個人作品集網站，展示個人技能和專案經驗。',
      technologies: ['React', 'CSS3', 'Vite'],
      github: '#',
      demo: '#'
    },
    {
      title: '待開發專案 1',
      description: '這裡將展示你未來的第一個專案，可能是一個 Todo List 應用程式。',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: '待開發專案 2',
      description: '這裡將展示你未來的第二個專案，可能是一個天氣查詢應用程式。',
      technologies: ['React', 'API', 'CSS'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>我的專案</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="placeholder-project">
                  <span>專案截圖</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link demo">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects