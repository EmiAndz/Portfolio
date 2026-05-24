import { motion } from 'motion/react'
import { useLang } from '../i18n/LangContext'
import { CV_PATH } from '../i18n/dictionary'

const techItems = [
  ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion', 'Astro'],
  ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST', 'GraphQL'],
  ['Cloudflare', 'Vercel', 'Docker', 'Git', 'Figma', 'Linear'],
]

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="sobre" className="relative px-6 md:px-10 py-28 md:py-40 border-t border-ink-700/40">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-meta text-acid-400 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-acid-400" />
            {a.label}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-meta text-cream-400">
            {a.labelMeta}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-cream-50 text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.04] tracking-tight">
              {a.headlineA}
              <span className="italic text-cream-300">{a.headlineB}</span>
              {a.headlineC}
            </h2>

            <div className="mt-10 space-y-5 text-cream-200 text-[17px] leading-[1.7] max-w-xl">
              <p>{a.bio1}</p>
              <p>{a.bio2}</p>
            </div>

            <blockquote className="mt-10 pl-6 border-l border-acid-400 max-w-xl">
              <p className="font-display italic text-cream-100 text-2xl md:text-[28px] leading-snug">
                {a.quote}
              </p>
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-meta text-cream-400">
                {a.quoteFooter}
              </footer>
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={CV_PATH}
                download
                className="group inline-flex items-center gap-3 px-5 py-3 border border-cream-100 text-cream-50 hover:bg-acid-400 hover:text-ink-950 hover:border-acid-400 transition-colors font-mono text-[11px] uppercase tracking-meta"
              >
                {a.cvButton}
                <span className="text-acid-400 group-hover:text-ink-950 transition-colors text-base leading-none">↓</span>
              </a>
              <span className="font-mono text-[10px] uppercase tracking-meta text-cream-400">
                {a.cvMeta}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 md:col-start-8"
          >
            <div className="aspect-[3/4] border border-ink-700 relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-850 group">
              {/* Monograma fallback (visible si no hay foto) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display text-[12rem] italic leading-none text-ink-700 select-none">
                  EA
                </div>
              </div>

              {/* Foto personal — drop en public/portrait.jpg */}
              <img
                src="/portrait.jpg"
                alt="Emiliano Andrusyszyn"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover scale-[1.4] translate-y-[6%] origin-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Vignette inferior para blendear con el tema oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent pointer-events-none" />

              <Corner pos="top-left" />
              <Corner pos="top-right" />
              <Corner pos="bottom-left" />
              <Corner pos="bottom-right" />

              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-meta text-cream-400 z-10">
                <span>{a.portraitImg}</span>
                <span>{a.portraitLabel}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-meta text-cream-400 z-10">
                <span>Posadas, AR</span>
                <span className="text-acid-400">{a.portraitLive}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-700/60 pt-6">
              {a.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[2.6rem] leading-none text-cream-50">{s.num}</div>
                  <div className="font-mono text-[9px] uppercase tracking-meta text-cream-400 mt-2 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-ink-700 p-5 bg-ink-900/60">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-meta text-cream-400">
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid-400 pulse-acid" />
                {a.currentlyLabel}
              </div>
              <p className="mt-3 text-cream-100">
                {a.currentlyA}
                <span className="font-display italic text-acid-400">{a.currentlyProj}</span>
                <span className="text-cream-400">{a.currentlyB}</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 border-t border-ink-700/40 pt-12"
        >
          <p className="font-mono text-[10px] uppercase tracking-meta text-cream-400 mb-10 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-cream-400" />
            {a.toolsLabel}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {a.categories.map((cat, i) => (
              <div key={cat}>
                <h3 className="font-display italic text-2xl text-cream-100 mb-5 flex items-baseline gap-3">
                  {cat}
                  <span className="font-mono not-italic text-[10px] uppercase tracking-meta text-cream-400">
                    / {techItems[i].length}
                  </span>
                </h3>
                <ul className="space-y-2.5">
                  {techItems[i].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-mono text-[13px] text-cream-200 group cursor-default"
                    >
                      <span className="text-acid-400 transition-transform group-hover:translate-x-1">→</span>
                      <span className="group-hover:text-cream-50 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Corner({ pos }) {
  const map = {
    'top-left':     'top-2 left-2 border-t border-l',
    'top-right':    'top-2 right-2 border-t border-r',
    'bottom-left':  'bottom-2 left-2 border-b border-l',
    'bottom-right': 'bottom-2 right-2 border-b border-r',
  }
  return <span className={`absolute h-3 w-3 border-cream-300/60 ${map[pos]}`} />
}
