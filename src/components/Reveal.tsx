import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 32, className = '' }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ kicker, title, sub, align = 'left' }: { kicker: string; title: ReactNode; sub?: string; align?: 'left' | 'center' }) {
  return (
    <Reveal className={`mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="kicker mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-racing" /> {kicker}
      </p>
      <h2 className="h2">{title}</h2>
      {sub && <p className="mt-5 text-lg text-slate-600">{sub}</p>}
    </Reveal>
  )
}
