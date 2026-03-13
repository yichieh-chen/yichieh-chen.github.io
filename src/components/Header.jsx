import { Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-3 py-4">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-foreground md:text-base">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          YI CHIEH CHEN
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button asChild variant="ghost" size="sm" className="rounded-full px-4 font-semibold">
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