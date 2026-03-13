import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

function TerminalCard({
  title,
  showDots = false,
  className,
  headerClassName,
  contentClassName,
  children,
}) {
  return (
    <Card
      className={cn(
        'terminal-pixel relative overflow-hidden rounded-3xl border border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] text-[color:var(--terminal-text)] shadow-lg shadow-[color:var(--terminal-shadow)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-45" />
      {title ? (
        <div
          className={cn(
            'relative z-10 border-b border-[color:var(--terminal-border)] bg-[color:var(--terminal-panel)] px-5 py-3',
            showDots && 'flex items-center justify-between',
            headerClassName
          )}
        >
          {showDots ? (
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
            </div>
          ) : null}
          <p className="text-[10px] tracking-[0.16em] text-[color:var(--terminal-text-muted)]">{title}</p>
        </div>
      ) : null}
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </Card>
  )
}

export default TerminalCard
