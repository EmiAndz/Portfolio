import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import { CV_PATH } from '../i18n/dictionary'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, t, setLang } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/75 backdrop-blur-md border-b border-ink-700/40'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-2 group shrink-0">
          <span className="font-display text-2xl italic text-cream-50 leading-none">Emi</span>
          <span className="font-mono text-[10px] uppercase tracking-meta text-cream-400 group-hover:text-acid-400 transition-colors">
            / Andz
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 font-mono text-[11px] uppercase tracking-meta text-cream-200">
          <li><a href="#sobre" className="hover-link">{t.nav.sobre}</a></li>
          <li><a href="#trabajos" className="hover-link">{t.nav.trabajos}</a></li>
          <li><a href="#contacto" className="hover-link">{t.nav.contacto}</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={CV_PATH}
            download
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-meta text-cream-200 hover:text-acid-400 transition-colors"
          >
            {t.nav.cv} <span className="text-acid-400">↓</span>
          </a>

          <div className="flex items-center font-mono text-[10px] uppercase tracking-meta">
            <button
              onClick={() => setLang('es')}
              className={`transition-colors ${lang === 'es' ? 'text-acid-400' : 'text-cream-400 hover:text-cream-100'}`}
              aria-pressed={lang === 'es'}
              aria-label="Español"
            >
              ES
            </button>
            <span className="mx-1.5 text-ink-600">/</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${lang === 'en' ? 'text-acid-400' : 'text-cream-400 hover:text-cream-100'}`}
              aria-pressed={lang === 'en'}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-meta text-cream-200">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid-400 pulse-acid" />
            <span>{t.nav.disponible} <span className="text-cream-400">— 2026</span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
