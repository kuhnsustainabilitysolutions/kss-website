'use client'
import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface ImageRevealProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function ImageReveal({ children, className = '', style }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`image-reveal reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
