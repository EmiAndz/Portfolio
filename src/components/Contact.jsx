import { motion } from 'motion/react'
import { useLang } from '../i18n/LangContext'
import { socials, EMAIL } from '../i18n/dictionary'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section
      id="contacto"
      className="relative px-6 md:px-10 py-28 md:py-44 border-t border-ink-700/40 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-6 md:-right-16 font-display italic text-[14vw] leading-[0.8] text-ink-800 select-none"
      >
        {c.decoWord}
      </div>

      <div className="mx-auto max-w-[1480px] relative">
        <p className="font-mono text-[11px] uppercase tracking-meta text-acid-400 flex items-center gap-3 mb-14">
          <span className="inline-block h-px w-8 bg-acid-400" />
          {c.label}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8"
          >
            <h2 className="font-display text-cream-50 text-[clamp(2.5rem,7vw,6.75rem)] leading-[0.95] tracking-tight">
              {c.headlineA}
              <br />
              <span className="italic text-cream-300">{c.headlineB}</span>
            </h2>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 mt-12 align-baseline"
            >
              <span className="font-display italic text-cream-50 text-xl md:text-[2.4rem] border-b border-cream-50 leading-tight group-hover:text-acid-400 group-hover:border-acid-400 transition-colors duration-300 break-all">
                {EMAIL}
              </span>
              <span className="text-acid-400 text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1 shrink-0">
                ↗
              </span>
            </a>

            <p className="mt-10 max-w-lg text-cream-200 leading-[1.7] text-[16px]">{c.lead}</p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-meta text-cream-400">
              <Datum k={c.datumTz} v="GMT−3 (ART)" />
              <Datum k={c.datumLang} v="ES / EN" />
              <Datum k={c.datumStatus} v={<span className="text-acid-400">{c.statusValue}</span>} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-meta text-cream-400 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-cream-400" />
              {c.socialsLabel}
            </p>
            <ul className="border-t border-ink-700/60">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex justify-between items-baseline py-4 border-b border-ink-700/60 hover:border-acid-400 transition-colors"
                  >
                    <span className="font-display text-xl text-cream-100 group-hover:italic group-hover:text-acid-400 transition-all">
                      {s.label}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-meta text-cream-400 group-hover:text-cream-100 transition-colors">
                      {s.handle} ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Datum({ k, v }) {
  return (
    <div>
      <div className="text-cream-200">{k}</div>
      <div className="text-cream-400 mt-1">{v}</div>
    </div>
  )
}
