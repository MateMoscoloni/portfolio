'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const radialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    const target = { x: 0.5, y: 0.5 }
    const current = { x: 0.5, y: 0.5 }
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      current.x = lerp(current.x, target.x, 0.06)
      current.y = lerp(current.y, target.y, 0.06)
      if (radialRef.current) {
        radialRef.current.style.background = `radial-gradient(600px circle at ${current.x * 100}% ${current.y * 100}%, rgba(74,158,255,0.18), transparent 70%)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid */}
      <div className="bg-grid absolute inset-0" />

      {/* Mouse-following radial — only active on desktop via JS */}
      <div ref={radialRef} className="absolute inset-0" />

      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Bottom vignette so content doesn't fight the background */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  )
}
