import { useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

function Interactive3DCard({
  children,
  className,
  innerClassName,
  intensity = 10,
}) {
  const neutralTransform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  const [transform, setTransform] = useState(neutralTransform)

  const handlers = useMemo(() => ({
    onMouseMove: (event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const rx = ((0.5 - y / rect.height) * 2 * intensity).toFixed(2)
      const ry = (((x / rect.width) - 0.5) * 2 * intensity).toFixed(2)
      const lift = Math.min(1.05, 1 + intensity / 220)
      setTransform(`rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${lift}, ${lift}, ${lift})`)
    },
    onMouseLeave: () => {
      setTransform(neutralTransform)
    },
  }), [intensity])

  return (
    <div className={cn('group/card relative [perspective:1200px]', className)} {...handlers}>
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[linear-gradient(120deg,rgba(83,214,255,0.0),rgba(83,214,255,0.34),rgba(255,141,59,0.0))] opacity-0 blur-md transition-opacity duration-500 group-hover/card:opacity-100" />
      <div
        className={cn('relative transform-gpu transition-transform duration-200 ease-out will-change-transform', innerClassName)}
        style={{ transform }}
      >
        {children}
      </div>
    </div>
  )
}

export default Interactive3DCard
