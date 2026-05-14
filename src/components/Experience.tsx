'use client'

import { useLanguage } from '@/context/LanguageContext'
import FadeUp from './FadeUp'
import SectionLabel from './SectionLabel'

export default function Experience() {
  const { t } = useLanguage()
  const { experience } = t

  return (
    <section id="experience" className="py-28 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <SectionLabel>{experience.section_title}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0]">
              Trayectoria
            </h2>
          </div>
        </FadeUp>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1e1e1e] hidden md:block" />

          <div className="space-y-6">
            {experience.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="md:pl-10 relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#4a9eff] -translate-x-[3px] hidden md:block ring-4 ring-[#0a0a0a]" />

                  <div className="p-6 rounded-xl border border-[#1e1e1e] bg-[#111] hover:border-[#2a2a2a] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-[#f0f0f0]">{item.role}</h3>
                        <p className="text-sm text-[#4a9eff] font-medium mt-0.5">{item.company}</p>
                      </div>
                      <span className="text-xs font-mono text-[#444] shrink-0">{item.period}</span>
                    </div>

                    <p className="text-sm text-[#777] leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#0a0a0a] border border-[#1e1e1e] text-[#555] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
