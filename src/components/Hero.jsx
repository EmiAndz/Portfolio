import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../i18n/LangContext'
import { CV_PATH } from '../i18n/dictionary'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node', 'Tailwind',
  'PostgreSQL', 'Cloudflare', 'Vite', 'Motion', 'Figma', 'Astro',
]

const lineUp = {
  initial: { opacity: 0, y: 28 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.7, 0, 0.2, 1] },
  }),
}

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative min-h-screen px-6 md:px-10 pt-20 pb-10 flex flex-col">
      <div aria-hidden className="hidden md:block absolute top-32 right-12 font-display text-7xl italic text-acid-400/50 drift select-none">
        ✦
      </div>

      <div className="mx-auto max-w-[1480px] w-full flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 font-mono text-[10px] uppercase tracking-meta text-cream-400"
        >
          <MetaCell label={h.metaPortfolio} value="v.001 / 2026" />
          <MetaCell label={h.metaLocation} value="Posadas, AR" />
          <MetaCell label={h.metaCoords} value="−27.36° / −55.89°" />
          <MetaCell label={h.metaTime} value={<LocalTime lang={lang} />} />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-mono text-[11px] uppercase tracking-meta text-acid-400 mb-10 flex items-center gap-3"
          >
            <span className="inline-block h-px w-8 bg-acid-400" />
            {h.sectionLabel}
          </motion.p>

          <h1 key={lang} className="font-display text-cream-50 leading-[0.92] tracking-tight">
            <HeroLine i={0}>{h.line1}</HeroLine>
            <HeroLine i={1} italic accent>{h.line2}</HeroLine>
            <HeroLine i={2}>
              {h.line3a}{' '}
              <span className="text-cream-400 italic font-normal">{h.line3b}</span>
            </HeroLine>
            <HeroLine i={3} italic>{h.line4}</HeroLine>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
          >
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-cream-200 text-lg md:text-xl leading-relaxed max-w-md">
                {h.leadBefore}
                <em className="font-display not-italic text-cream-50 italic">{h.leadAccent}</em>
                {h.leadAfter}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-meta text-cream-300">
                <a href="#trabajos" className="hover-link text-cream-50">{h.ctaWork}</a>
                <span className="text-ink-600">/</span>
                <a href="#contacto" className="hover-link">{h.ctaContact}</a>
                <span className="text-ink-600">/</span>
                <a href={CV_PATH} download className="hover-link text-acid-400">{h.ctaCV}</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="relative border-y border-ink-700/60 overflow-hidden py-5 -mx-6 md:-mx-10 mt-8"
        >
          <div className="flex animate-marquee whitespace-nowrap min-w-[200%]">
            {Array.from({ length: 3 }).flatMap((_, group) =>
              skills.map((s, idx) => (
                <span
                  key={`${group}-${idx}`}
                  className="flex items-center gap-12 px-8 font-display italic text-3xl md:text-5xl text-cream-100"
                >
                  {s}
                  <span className="text-acid-400 not-italic font-sans text-2xl">✦</span>
                </span>
              ))
            )}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-6 flex justify-between items-center font-mono text-[10px] uppercase tracking-meta text-cream-400"
        >
          <span>{h.scrollHint}</span>
          <span>{skills.length} {h.countSuffix}</span>
        </motion.div>
      </div>
    </section>
  )
}

function HeroLine({ children, i, italic, accent }) {
  return (
    <motion.span
      variants={lineUp}
      initial="initial"
      animate="animate"
      custom={i}
      className={`block text-[clamp(3rem,9.5vw,9rem)] ${italic ? 'italic font-normal' : ''} ${accent ? 'text-acid-400' : ''}`}
    >
      {children}
    </motion.span>
  )
}

function MetaCell({ label, value }) {
  return (
    <div>
      <div className="text-cream-100 mb-1 flex items-center gap-2">
        <span className="inline-block h-px w-3 bg-cream-400" />
        {label}
      </div>
      <div className="text-cream-400 pl-5">{value}</div>
    </div>
  )
}

function LocalTime({ lang }) {
  const [time, setTime] = useState('--:--:--')
  useEffect(() => {
    const locale = lang === 'en' ? 'en-US' : 'es-AR'
    const fmt = new Intl.DateTimeFormat(locale, {
      timeZone: 'America/Argentina/Buenos_Aires',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [lang])
  return <span>{time} ART</span>
}
