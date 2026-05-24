import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'

const linesFor = (msg) => [
  { p: '$', t: 'nvim handshake.ts' },
  { p: '',  t: 'async function handshake(client: Client) {' },
  { p: '',  t: '  const channel = await open(client)' },
  { p: '',  t: '' },
  { p: '',  t: '  channel.on("message", (m) => log(m))' },
  { p: '',  t: '  channel.on("close",   () => retry())' },
  { p: '',  t: '' },
  { p: '',  t: '  await channel.send({' },
  { p: '',  t: '    type: "hello",' },
  { p: '',  t: '    from: "@EmiAndz",' },
  { p: '',  t: `    msg:  "${msg}"` },
  { p: '',  t: '  })' },
  { p: '',  t: '}' },
  { p: '$', t: ':wq' },
]

const LINES_ES = linesFor('construyamos algo.')
const LINES_EN = linesFor("let's build something.")

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
      }, 4500)
      return () => clearTimeout(t)
    }

    const current = LINES[lineIdx].t
    if (charIdx < current.length) {
      const delay = 18 + Math.random() * 32
      const t = setTimeout(() => setCharIdx((c) => c + 1), delay)
      return () => clearTimeout(t)
    } else {
      const pause = LINES[lineIdx].p === '$' ? 420 : current === '' ? 60 : 110
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
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-ink-700/70">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-meta text-cream-400">
          <span className="text-acid-400">●</span>
          ~/handshake.ts
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink-700" />
        </div>
      </div>

      <div className="px-3.5 py-4 font-mono text-[10.5px] md:text-[11.5px] leading-[1.85] text-cream-200 min-h-[340px] md:min-h-[380px] overflow-x-auto">
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
    <div className="whitespace-pre min-h-[1.4em]">
      <span className={`${promptColor} mr-2 select-none`}>{prompt || ' '}</span>
      <span className="text-cream-200">{text}</span>
      {cursor && (
        <span className="inline-block w-[6px] h-[1em] align-middle bg-acid-400 ml-0.5 cursor-blink translate-y-[-1px]" />
      )}
    </div>
  )
}
