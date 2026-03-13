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
      <div className="terminal-pixel relative mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-3 overflow-hidden rounded-2xl border border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] px-4 py-3 shadow-[0_16px_35px_-26px_var(--terminal-shadow)] md:px-5">
        <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-40" />
        <a href="#" className="relative z-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-[color:var(--terminal-text)] md:text-xs">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[color:var(--terminal-border-soft)] bg-[color:var(--terminal-accent-soft)] text-[color:var(--terminal-text)] shadow-lg shadow-[color:var(--terminal-shadow)]">
            <Code className="h-4 w-4" />
          </span>
          EJ's House
        </a>
        <nav aria-label="Primary navigation" className="relative z-10">
          <ul className="flex flex-wrap items-center gap-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button asChild variant="ghost" size="sm" className="rounded-md border border-[color:var(--terminal-border-soft)] px-3 font-semibold text-[color:var(--terminal-text)] transition-all hover:bg-[color:var(--terminal-accent-soft)] hover:text-[color:var(--terminal-text)]">
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