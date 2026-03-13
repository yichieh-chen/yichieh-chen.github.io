import { useEffect, useRef, useState } from 'react'

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackgroundBeams from './components/aceternity/BackgroundBeams'

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const transitionTimerRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current)
      }
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition')
    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current)
    }
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'))
    transitionTimerRef.current = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 520)
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="pb-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border/70 bg-background/75 py-8 backdrop-blur-md">
        <div className="mx-auto w-[min(1120px,92vw)] text-center text-sm font-medium text-muted-foreground">
          &copy; 2026 My Portfolio. Built with React, Vite, and shadcn/ui
        </div>
      </footer>
    </div>
  )
}

export default App