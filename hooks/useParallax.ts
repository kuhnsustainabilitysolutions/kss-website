'use client'
import { useEffect, RefObject } from 'react'

export function useParallax(ref: RefObject<HTMLElement | null>, intensity = 0.25) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const progress = (center - window.innerHeight / 2) / window.innerHeight
      el.style.transform = `translate3d(0, ${progress * intensity * 100}px, 0)`
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref, intensity])
}
