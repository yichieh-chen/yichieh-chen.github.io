import { useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

function TypewriterText({
  words,
  speed = 70,
  deleteSpeed = 45,
  pauseMs = 1200,
  className,
  cursorClassName,
}) {
  const safeWords = useMemo(() => (Array.isArray(words) && words.length ? words : ['']), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const activeWord = safeWords[wordIndex % safeWords.length]

    if (!isDeleting && displayText === activeWord) {
      const hold = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(hold)
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % safeWords.length)
      return undefined
    }

    const delay = isDeleting ? deleteSpeed : speed
    const timer = setTimeout(() => {
      const nextText = isDeleting
        ? activeWord.slice(0, Math.max(0, displayText.length - 1))
        : activeWord.slice(0, displayText.length + 1)
      setDisplayText(nextText)
    }, delay)

    return () => clearTimeout(timer)
  }, [deleteSpeed, displayText, isDeleting, pauseMs, safeWords, speed, wordIndex])

  return (
    <span className={cn('inline-flex items-center', className)} aria-label={safeWords[wordIndex % safeWords.length]}>
      <span>{displayText}</span>
      <span className={cn('typewriter-cursor ml-1 inline-block h-[1.08em] w-[2px] bg-current', cursorClassName)} aria-hidden="true" />
    </span>
  )
}

export default TypewriterText
