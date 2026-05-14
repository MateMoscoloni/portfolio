'use client'

import { useLanguage } from '@/context/LanguageContext'
import FadeUp from './FadeUp'
import SectionLabel from './SectionLabel'

// Icons for each skill category
const CATEGORY_ICONS: Record<string, JSX.Element> = {
  Frontend: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'Backend & Bases de datos': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'Backend & Databases': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Datos: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Data: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  'IA & Automatización': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6l-.7 4H9l-.7-4A7 7 0 0112 2z" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  ),
  'AI & Automation': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6l-.7 4H9l-.7-4A7 7 0 0112 2z" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  ),
  General: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
}

export default function Skills() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section id="skills" className="py-28 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <SectionLabel>{skills.section_title}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0]">
              Herramientas del oficio
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.categories.map((cat, i) => (
            <FadeUp key={cat.label} delay={i * 0.08}>
              <div className="relative p-5 rounded-xl border border-[#1e1e1e] bg-[#111] hover:border-[#2a2a2a] transition-colors group overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4a9eff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-[#4a9eff] opacity-70 group-hover:opacity-100 transition-opacity">
                    {CATEGORY_ICONS[cat.label] ?? null}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#555]">
                    {cat.label}
                  </span>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#0a0a0a] border border-[#1e1e1e] text-[#aaa]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
