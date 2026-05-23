import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="relative px-6 md:px-10 py-10 border-t border-ink-700/60">
      <div className="mx-auto max-w-[1480px] flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-meta text-cream-400">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-cream-100">© 2026 EmiAndz</span>
          <span className="text-ink-600">/</span>
          <span>
            {f.builtWith} <span className="text-acid-400">◊</span> {f.builtIn}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span>React · Vite · Tailwind · Motion</span>
          <span className="text-ink-600">/</span>
          <span className="text-cream-100">v.001</span>
        </div>
      </div>
    </footer>
  )
}
