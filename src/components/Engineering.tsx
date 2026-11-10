import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { BODY_PATH, GLASS_PATH, WHEELS } from './Suv'
import { SectionHead } from './Reveal'
import { HOTSPOTS } from '../data'

export default function Engineering({ onBook }: { onBook: (p: { service: string }) => void }) {
  const [id, setId] = useState('engine')
  const h = HOTSPOTS.find((x) => x.id === id)!

  return (
    <section id="engineering" className="section">
      <SectionHead kicker="Interactive Engineering" title={<>Inside the <span className="text-racing">machine</span></>} sub="Tap a hotspot to see what we inspect on each system." />
      <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="relative overflow-hidden border border-white/10 bg-charcoal p-4 sm:p-8">
          <div className="grid-bg absolute inset-0 opacity-70" />
          <div className="relative mx-auto aspect-[800/330] w-full">
            <svg viewBox="0 0 800 330" className="absolute inset-0 h-full w-full" fill="none" stroke="#C4C8CF" strokeOpacity=".55" strokeWidth="1.5" aria-hidden="true">
              <path d={BODY_PATH} />
              <path d={GLASS_PATH} strokeOpacity=".35" />
              <line x1="372" y1="118" x2="372" y2="270" strokeOpacity=".25" />
              <line x1="476" y1="118" x2="476" y2="270" strokeOpacity=".25" />
              {WHEELS.map((cx) => (
                <g key={cx}>
                  <circle cx={cx} cy="272" r="46" /><circle cx={cx} cy="272" r="30" /><circle cx={cx} cy="272" r="8" />
                </g>
              ))}
              <g stroke="#FF5A1F" strokeOpacity=".5" strokeDasharray="4 6">
                <rect x="590" y="150" width="130" height="80" rx="6" />
                <rect x="300" y="248" width="90" height="26" rx="4" />
              </g>
              <text x="60" y="320" fill="#C4C8CF" fillOpacity=".45" stroke="none" fontSize="11" letterSpacing="3">SCHEMATIC / NOT TO SCALE</text>
            </svg>
            {HOTSPOTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setId(p.id)}
                aria-label={p.label}
                aria-pressed={id === p.id}
                className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span className={`pulse-ring absolute h-5 w-5 rounded-full ${id === p.id ? 'bg-racing' : 'bg-white/60'}`} />
                <span className={`relative h-4 w-4 rounded-full border-2 transition ${id === p.id ? 'scale-125 border-white bg-racing' : 'border-racing bg-obsidian'}`} />
              </button>
            ))}
          </div>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {HOTSPOTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setId(p.id)}
                aria-pressed={id === p.id}
                className={`min-h-[40px] border px-3 font-display text-xs uppercase tracking-[0.18em] transition ${id === p.id ? 'border-racing bg-racing/15 text-white' : 'border-white/15 text-white/60 hover:text-white'}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="glass relative min-h-[360px] overflow-hidden p-7" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={h.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <span className="grid h-14 w-14 place-items-center bg-racing"><h.Icon size={28} /></span>
              <h3 className="mt-5 font-display text-4xl font-bold uppercase">{h.label}</h3>
              <p className="mt-3 text-white/70">{h.text}</p>
              <ul className="mt-5 space-y-2">
                {h.checks.map((c, i) => (
                  <motion.li key={c} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-racing" /> {c}
                  </motion.li>
                ))}
              </ul>
              <button onClick={() => onBook({ service: h.service })} className="btn-primary mt-7 w-full">
                Book {h.service} <ArrowRight size={16} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
