'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function CountUp({ value, duration = 1800, prefix = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const animate = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              const cur = value * eased
              setDisplay(`${prefix}${Math.round(cur).toLocaleString()}${suffix}`)
              if (t < 1) requestAnimationFrame(animate)
              else setDisplay(`${prefix}${value.toLocaleString()}${suffix}`)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration, prefix, suffix])

  return <span ref={ref}>{display}</span>
}
