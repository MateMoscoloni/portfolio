'use client'

import { useLanguage } from '@/context/LanguageContext'
import FadeUp from './FadeUp'
import SectionLabel from './SectionLabel'

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t

  const links = [
    {
      label: contact.email_label,
      display: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: contact.linkedin_label,
      display: 'linkedin.com/in/mateomoscoloni',
      href: contact.linkedin_url,
      external: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: contact.github_label,
      display: 'github.com/MateMoscoloni',
      href: contact.github_url,
      external: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-28 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">
          <FadeUp>
            <SectionLabel>{t.nav.contact}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0] mb-4">
              {contact.section_title}
            </h2>
            <p className="text-[#999] text-base leading-relaxed mb-10">
              {contact.tagline}
            </p>
          </FadeUp>

          <div className="flex flex-col gap-3">
            {links.map((link, i) => (
              <FadeUp key={link.label} delay={0.08 + i * 0.08}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={`${link.label}: ${link.display}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e1e] bg-[#111] hover:border-[#4a9eff]/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#4a9eff]/10 border border-[#4a9eff]/20 flex items-center justify-center text-[#4a9eff] shrink-0 group-hover:bg-[#4a9eff]/15 transition-colors">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#444] uppercase tracking-wider mb-0.5">{link.label}</p>
                    <p className="text-sm text-[#888] group-hover:text-[#f0f0f0] transition-colors truncate">
                      {link.display}
                    </p>
                  </div>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    className="ml-auto shrink-0 text-[#2a2a2a] group-hover:text-[#4a9eff] transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
