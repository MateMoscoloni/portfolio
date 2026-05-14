'use client'

import { useLanguage } from '@/context/LanguageContext'
import FadeUp from './FadeUp'
import SectionLabel from './SectionLabel'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          {/* Left: label + title */}
          <FadeUp>
            <SectionLabel>{about.section_title}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0] leading-tight">
              Desarrollador.<br />
              <span className="text-[#4a9eff]">Automatizador.</span><br />
              Consultor.
            </h2>
          </FadeUp>

          {/* Right: paragraphs */}
          <div className="space-y-5">
            {[about.p1, about.p2, about.p3].map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <p className="text-[#aaa] leading-relaxed text-base md:text-[15px]">{p}</p>
              </FadeUp>
            ))}
            <FadeUp delay={0.3}>
              <p className="text-[#4a9eff] text-sm font-medium flex items-center gap-2 mt-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {about.p4}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
