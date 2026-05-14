'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { useState, Fragment } from 'react'

export default function Hero() {
  const { t, lang } = useLanguage()
  const [imgError, setImgError] = useState(false)

  const stats = [
    { n: '6+', l: lang === 'es' ? 'años' : 'years' },
    { n: '10+', l: lang === 'es' ? 'proyectos' : 'projects' },
    { n: '100%', l: lang === 'es' ? 'remoto' : 'remote' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Subtle dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Blue radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(74,158,255,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* ── Text ── */}
          <div className="flex-1 text-center md:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#1e1e1e] bg-[#111] text-xs text-[#666]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para proyectos · Open to work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-4"
            >
              <span className="text-[#f0f0f0]">Mate </span>
              <span className="bg-gradient-to-r from-[#4a9eff] to-[#7ab8ff] bg-clip-text text-transparent">
                Moscoloni
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#4a9eff] font-medium mb-5 tracking-wide"
            >
              {t.hero.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#999] text-base sm:text-lg max-w-lg leading-relaxed mb-7"
            >
              {t.hero.tagline}
            </motion.p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 mb-8 justify-center md:justify-start"
            >
              {stats.map((s, i) => (
                <Fragment key={i}>
                  <div>
                    <span className="text-lg font-bold text-[#e0e0e0]">{s.n}</span>
                    <span className="text-xs text-[#444] ml-1.5">{s.l}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <span className="w-px h-4 bg-[#222]" aria-hidden />
                  )}
                </Fragment>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg bg-[#4a9eff] text-[#050505] text-sm font-semibold hover:bg-[#5aaaff] transition-colors"
              >
                {t.hero.cta_projects}
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg border border-[#222] text-sm font-semibold text-[#ccc] hover:border-[#3a3a3a] hover:text-[#f0f0f0] transition-colors"
              >
                {t.hero.cta_contact}
              </a>
              {/* TODO: Reemplazar public/cv.pdf con CV real */}
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-1.5 text-sm text-[#555] hover:text-[#888] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.hero.cta_cv}
              </a>
            </motion.div>
          </div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56">
              {/* Decorative rings */}
              <div aria-hidden="true" className="absolute -inset-3 rounded-full border border-[#4a9eff]/10" />
              <div aria-hidden="true" className="absolute -inset-1 rounded-full border border-[#4a9eff]/15" />

              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#1e1e1e] bg-[#111] flex items-center justify-center">
                {imgError ? (
                  <span className="text-3xl font-bold text-[#4a9eff] select-none tracking-tight">
                    MM
                  </span>
                ) : (
                  <Image
                    src="/profile.jpg"
                    alt="Mate Moscoloni"
                    width={224}
                    height={224}
                    sizes="(max-width: 768px) 176px, 224px"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    priority
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#444]">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#444] to-transparent"
        />
      </motion.div>
    </section>
  )
}
