import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,147,71,0.16),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(88,214,255,0.16),transparent_30%)]" />
      <Header />
      <main className="pb-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border/70 bg-background/80 py-8">
        <div className="mx-auto w-[min(1120px,92vw)] text-center text-sm font-medium text-muted-foreground">
          &copy; 2026 My Portfolio. Built with React, Vite, and shadcn/ui
        </div>
      </footer>
    </div>
  )
}

export default App