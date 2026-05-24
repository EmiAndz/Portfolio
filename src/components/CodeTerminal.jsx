import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'

const LINES_ES = [
  { p: '$', t: 'contact --whoami' },
  { p: '>', t: 'emiliano andrusyszyn  ·  @EmiAndz' },
  { p: '$', t: 'cat ./redes.json' },
  { p: '',  t: '{' },
  { p: '',  t: '  "email":     "emilianoandrusyszyn@gmail.com",' },
  { p: '',  t: '  "github":    "github.com/EmiAndz",' },
  { p: '',  t: '  "instagram": "@emiandz",' },
  { p: '',  t: '  "ubicacion": "Posadas, Misiones, AR",' },
  { p: '',  t: '  "horario":   "GMT−3",' },
  { p: '',  t: '  "respuesta": "<24h",' },
  { p: '',  t: '  "estado":    "aceptando proyectos"' },
  { p: '',  t: '}' },
  { p: '$', t: 'echo "construyamos algo."' },
  { p: '>', t: 'construyamos algo.' },
]

const LINES_EN = [
  { p: '$', t: 'contact --whoami' },
  { p: '>', t: 'emiliano andrusyszyn  ·  @EmiAndz' },
  { p: '$', t: 'cat ./socials.json' },
  { p: '',  t: '{' },
  { p: '',  t: '  "email":     "emilianoandrusyszyn@gmail.com",' },
  { p: '',  t: '  "github":    "github.com/EmiAndz",' },
  { p: '',  t: '  "instagram": "@emiandz",' },
  { p: '',  t: '  "location":  "Posadas, Misiones, AR",' },
  { p: '',  t: '  "timezone":  "GMT−3",' },
  { p: '',  t: '  "response":  "<24h",' },
  { p: '',  t: '  "status":    "open to projects"' },
  { p: '',  t: '}' },
  { p: '$', t: 'echo "let\'s build something."' },
  { p: '>', t: "let's build something." },
]

export default function CodeTerminal() {
  const { lang } = useLang()
  const LINES = lang === 'en' ? LINES_EN : LINES_ES
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    setLineIdx(0)
    setCharIdx(0)
  }, [lang])

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      const t = setTimeout(() => {
        setLineIdx(0)
        setCharIdx(0)
      }, 5000)
      return () => clearTimeout(t)
    }

    const current = LINES[lineIdx].t
    if (charIdx < current.length) {
      const delay = 15 + Math.random() * 28
      const t = setTimeout(() => setCharIdx((c) => c + 1), delay)
      return () => clearTimeout(t)
    } else {
      const pause = LINES[lineIdx].p === '$' ? 380 : 90
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1)
        setCharIdx(0)
      }, pause)
      return () => clearTimeout(t)
    }
  }, [lineIdx, charIdx, LINES])

  const currentLine = lineIdx < LINES.length ? LINES[lineIdx] : null

  return (
    <div className="border border-ink-700 bg-ink-900/60 backdrop-blur-sm shadow-2xl shadow-black/40">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-700/70">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-meta text-cream-400">
          <span className="text-acid-400">●</span>
          ~/contact
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-ink-700" />
          <span className="w-2 h-2 rounded-full bg-ink-700" />
          <span className="w-2 h-2 rounded-full bg-ink-700" />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 md:px-6 md:py-5 font-mono text-[10.5px] md:text-[13px] leading-[1.85] text-cream-200 min-h-[400px] md:min-h-[480px] overflow-x-auto">
        {LINES.slice(0, lineIdx).map((line, i) => (
          <Line key={i} prompt={line.p} text={line.t} />
        ))}
        {currentLine && (
          <Line
            prompt={currentLine.p}
            text={currentLine.t.slice(0, charIdx)}
            cursor
          />
        )}
      </div>
    </div>
  )
}

function Line({ prompt, text, cursor }) {
  const promptColor =
    prompt === '$' ? 'text-acid-400' :
    prompt === '>' ? 'text-cream-300' : 'text-transparent'

  return (
    <div className="whitespace-pre">
      <span className={`${promptColor} mr-2 select-none`}>{prompt || ' '}</span>
      <span className="text-cream-200">{text}</span>
      {cursor && (
        <span className="inline-block w-[7px] h-[1.05em] align-middle bg-acid-400 ml-0.5 cursor-blink translate-y-[-1px]" />
      )}
    </div>
  )
}
