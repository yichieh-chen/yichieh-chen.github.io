import { Code } from 'lucide-react'

import { Button } from '@/components/ui/button'

function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-0">
      <div className="terminal-pixel relative mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-3 overflow-hidden rounded-2xl border border-emerald-400/40 bg-[#091320]/92 px-4 py-3 shadow-[0_16px_35px_-26px_rgba(30,255,173,0.45)] md:px-5">
        <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-40" />
        <a href="#" className="relative z-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-emerald-100 md:text-xs">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-emerald-300/40 bg-emerald-500/20 text-emerald-100 shadow-lg shadow-emerald-500/20">
            <Code className="h-4 w-4" />
          </span>
          EJ's House
        </a>
        <nav aria-label="Primary navigation" className="relative z-10">
          <ul className="flex flex-wrap items-center gap-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button asChild variant="ghost" size="sm" className="rounded-md border border-emerald-300/35 px-3 font-semibold text-emerald-100 transition-all hover:bg-emerald-500/20 hover:text-emerald-50">
                  <a href={item.href}>{item.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header