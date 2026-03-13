import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackgroundBeams from './components/aceternity/BackgroundBeams'

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      <Header />
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