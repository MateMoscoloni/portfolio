'use client'

import { useLanguage } from '@/context/LanguageContext'
import FadeUp from './FadeUp'
import SectionLabel from './SectionLabel'

export default function Projects() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <section id="projects" className="py-28 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <SectionLabel>{projects.section_title}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0f0f0]">
              Trabajo reciente
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.items.map((project, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <article className="group relative flex flex-col h-full p-6 rounded-xl border border-[#1e1e1e] bg-[#111] hover:border-[#2a2a2a] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4a9eff]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-xs font-mono text-[#333] mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="text-lg font-semibold text-[#f0f0f0] mb-3 group-hover:text-[#4a9eff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#777] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#1e1e1e] text-[#555] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="inline-flex items-center gap-1.5 text-sm text-[#4a9eff] font-medium hover:gap-3 transition-all group/link w-fit"
                >
                  {project.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover/link:translate-x-0.5 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
