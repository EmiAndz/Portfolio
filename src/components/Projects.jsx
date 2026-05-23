import { useState } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../i18n/LangContext'

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="trabajos" className="relative px-6 md:px-10 py-28 md:py-40 border-t border-ink-700/40">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <p className="font-mono text-[11px] uppercase tracking-meta text-acid-400 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-acid-400" />
            {p.label}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-meta text-cream-400">{p.meta}</p>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-6 pb-4 border-b border-ink-700/40 font-mono text-[10px] uppercase tracking-meta text-cream-500">
          <div className="col-span-1">{p.colN}</div>
          <div className="col-span-4">{p.colProject}</div>
          <div className="col-span-4">{p.colDesc}</div>
          <div className="col-span-2">{p.colStack}</div>
          <div className="col-span-1 text-right">{p.colYear}</div>
        </div>

        <ul>
          {p.items.map((item) => (
            <ProjectRow key={item.n} project={item} />
          ))}
        </ul>

        <div className="mt-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-meta text-cream-400">
          <span className="inline-block h-px flex-1 bg-ink-700/60" />
          {p.endHint}{' '}
          <a
            href="https://github.com/EmiAndz"
            target="_blank"
            rel="noreferrer"
            className="text-cream-100 hover-link"
          >
            github.com/EmiAndz ↗
          </a>
          <span className="inline-block h-px flex-1 bg-ink-700/60" />
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-b border-ink-700/40 relative group"
    >
      <a href={project.href} className="block py-9 md:py-11 relative overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ x: '-100%' }}
          animate={{ x: hovered ? '0%' : '-100%' }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/60 to-transparent"
        />

        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-acid-400 origin-top"
        />

        <div className="relative grid grid-cols-12 gap-4 md:gap-6 items-center">
          <div className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-meta text-cream-400 group-hover:text-acid-400 transition-colors">
            {project.n}
          </div>

          <div className="col-span-10 md:col-span-4">
            <h3 className="font-display text-cream-50 text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1] tracking-tight">
              <span className="inline-block group-hover:italic transition-all duration-300">
                {project.title}
              </span>
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-meta text-cream-400 mt-2.5">
              {project.subtitle}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 text-cream-200 text-[14.5px] leading-[1.6]">
            {project.description}
          </div>

          <div className="col-span-9 md:col-span-2 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-ink-700 text-cream-300 group-hover:border-cream-400 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="col-span-3 md:col-span-1 flex flex-col items-end gap-1.5 font-mono text-[10px] uppercase tracking-meta text-cream-400">
            <span className="text-cream-100">{project.year}</span>
            <span>{project.role}</span>
            <span className="text-acid-400 text-base leading-none mt-2 transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

        <div className="relative mt-5 md:absolute md:mt-0 md:bottom-3 md:left-[8.5%] font-mono text-[9px] uppercase tracking-meta text-cream-500">
          <span className="text-acid-400">●</span> {project.status}
        </div>
      </a>
    </motion.li>
  )
}
