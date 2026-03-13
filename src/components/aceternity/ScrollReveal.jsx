import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  rootMargin = '0px 0px -8% 0px',
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node || isVisible) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isVisible, rootMargin, threshold])

  return (
    <div
      ref={elementRef}
      className={cn('scroll-reveal', isVisible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal