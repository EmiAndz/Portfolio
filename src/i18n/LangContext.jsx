import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { dict } from './dictionary'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    if (saved === 'es' || saved === 'en') setLang(saved)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])

  return (
    <LangContext.Provider value={{ lang, t: dict[lang], setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
