// Small eyebrow label above section titles
interface SectionLabelProps {
  children: string
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4a9eff] mb-3">
      {children}
    </span>
  )
}
