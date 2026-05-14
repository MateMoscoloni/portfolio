'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = [
  { key: 'about' as const, href: '#about' },
  { key: 'skills' as const, href: '#skills' },
  { key: 'experience' as const, href: '#experience' },
  { key: 'services' as const, href: '#services' },
  { key: 'projects' as const, href: '#projects' },
  { key: 'contact' as const, href: '#contact' },
]

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent'
      }`}
    >
      <nav role="navigation" className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-[#f0f0f0] hover:text-[#4a9eff] transition-colors"
        >
          Mate Moscoloni
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors"
            >
              {t.nav[key]}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-xs font-medium px-3 py-1.5 rounded-md border border-[#222] text-[#888] hover:text-[#f0f0f0] hover:border-[#444] transition-all"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-medium px-3 py-1.5 rounded-md border border-[#222] text-[#888]"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="text-[#888] hover:text-[#f0f0f0] transition-colors p-1"
          >
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-px bg-current mt-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current mt-1.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-b border-[#1e1e1e] px-6 pb-4">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={handleNav}
              className="block py-2.5 text-sm text-[#888] hover:text-[#f0f0f0] transition-colors"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
