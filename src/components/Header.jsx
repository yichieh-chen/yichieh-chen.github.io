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
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/65 px-4 py-3 shadow-[0_14px_32px_-24px_rgba(14,30,37,0.55)] backdrop-blur-xl md:px-5">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-foreground md:text-base">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/35">
            <Code className="h-4 w-4" />
          </span>
          EJ's House
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button asChild variant="ghost" size="sm" className="rounded-full px-4 font-semibold transition-all hover:bg-primary/10 hover:shadow-md">
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