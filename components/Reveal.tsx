'use client'
import { useEffect, useRef, ElementType, ReactNode, HTMLAttributes } from 'react'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  delay?: number
  as?: ElementType
}

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

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
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
