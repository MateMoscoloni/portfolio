'use client'

import { useLanguage } from '@/context/LanguageContext'
import FadeUp from './FadeUp'
import SectionLabel from './SectionLabel'

// Icons matched to: Web Dev, Process Automation, Data/Metrics, AI Adoption
const SERVICE_ICONS = [
  // Globe — web
  <svg key="web" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>,
  // Zap — automation
  <svg key="zap" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // Bar chart — data
  <svg key="chart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>,
  // Cpu — AI
  <svg key="cpu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>,
]

export default function Services() {
  const { t } = useLanguage()
  const { services } = t

  return (
    <section id="services" className="py-28 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <SectionLabel>{services.section_title}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0]">
              ¿En qué puedo ayudarte?
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.items.map((service, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group relative p-6 rounded-xl border border-[#1e1e1e] bg-[#111] hover:border-[#4a9eff]/30 hover:bg-[#0f1419] transition-all duration-300 h-full overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4a9eff]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 rounded-lg bg-[#4a9eff]/10 border border-[#4a9eff]/20 flex items-center justify-center text-[#4a9eff] mb-5 group-hover:bg-[#4a9eff]/18 transition-colors">
                  {SERVICE_ICONS[i]}
                </div>
                <h3 className="text-base font-semibold text-[#f0f0f0] mb-2">{service.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{service.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
