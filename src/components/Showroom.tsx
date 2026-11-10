import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BatteryCharging, CarFront, Fuel, Users, X } from 'lucide-react'
import Suv from './Suv'
import { SectionHead } from './Reveal'
import { BRANDS, VEHICLES, type Vehicle } from '../data'

type Props = { onBook: (p: { brand?: string; model?: string; service?: string }) => void }

function Card({ v, onOpen }: { v: Vehicle; onOpen: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45 }}
      whileHover="hover"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-b from-[#262930] to-charcoal">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="absolute left-4 top-4 z-10 border border-slate-200 bg-white/90 px-3 py-1 font-display text-xs uppercase tracking-[0.25em] text-slate-600 backdrop-blur">
          {v.brand}
        </div>
        {v.ev && (
          <div className="absolute right-4 top-4 z-10 flex items-center gap-1 bg-racing px-2 py-1 font-display text-xs uppercase tracking-widest">
            <BatteryCharging size={12} /> EV
          </div>
        )}
        <motion.div
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center p-2"
        >
          {v.image ? (
            <img
              src={v.image}
              alt={`${v.brand} ${v.name}`}
              loading="lazy"
              decoding="async"
            className="h-full w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full px-6">
              <Suv body={v.color} className="w-full" lights />
            </div>
          )}
        </motion.div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-3xl font-bold uppercase tracking-wide">{v.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{v.body}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5"><Fuel size={14} className="text-racing" />{v.power}</span>
          <span className="flex items-center gap-1.5"><Users size={14} className="text-racing" />{v.seats} seats</span>
        </div>
        <button onClick={onOpen} className="mt-5 flex min-h-[44px] items-center justify-between border-t border-slate-200 pt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition group-hover:text-racing">
          Explore <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
        </button>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-racing transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  )
}

function Modal({ v, onClose, onBook }: { v: Vehicle; onClose: () => void; onBook: Props['onBook'] }) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', key)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', key)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const care = v.ev
    ? ['EV Diagnostics', 'Brake Repair', 'Suspension Repair', 'Electrical Repair']
    : ['Complete Car Service', 'Engine Diagnostics', 'Brake Repair', 'AC Repair']

  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${v.brand} ${v.name} details`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl"
      >
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center border border-slate-200 bg-white/90 hover:border-racing">
          <X size={20} />
        </button>
        <div className="relative bg-gradient-to-b from-[#2a2d34] to-charcoal px-6 pb-4 pt-14 md:px-16">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <p className="kicker relative">{v.brand}</p>
          <h3 className="relative font-display text-5xl font-bold uppercase md:text-7xl">{v.name}</h3>
          {v.image ? (
          <div className="relative mx-auto mt-6 max-w-2xl overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl">
              <img
                src={v.image}
                alt={`${v.brand} ${v.name}`}
                className="w-full h-auto max-h-[380px] object-cover"
              />
            </div>
          ) : (
            <Suv body={v.color} lights spin className="relative mx-auto mt-4 w-full max-w-xl" />
          )}
        </div>
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-slate-600">{v.blurb}</p>
            <dl className="mt-6 grid grid-cols-3 gap-px bg-slate-200 text-center">
              {[['Body', v.body], ['Power', v.power], ['Seats', v.seats]].map(([k, val]) => (
                <div key={k} className="bg-charcoal p-4">
                  <dt className="font-display text-xs uppercase tracking-[0.25em] text-slate-500">{k}</dt>
                  <dd className="mt-1 text-sm font-medium">{val}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-slate-500">Indicative details only. Confirm exact specifications with the manufacturer.</p>
          </div>
          <div>
            <h4 className="font-display text-xl font-semibold uppercase tracking-widest">Recommended garage care</h4>
            <ul className="mt-4 space-y-2">
              {care.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => { onClose(); onBook({ brand: v.brand, model: v.name, service: c }) }}
                    className="flex min-h-[44px] w-full items-center justify-between border border-slate-200 px-4 text-sm transition hover:border-racing hover:bg-racing/10"
                  >
                    {c} <ArrowRight size={16} className="text-racing" />
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => { onClose(); onBook({ brand: v.brand, model: v.name }) }} className="btn-primary mt-5 w-full">
              Book service for {v.name}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Showroom({ onBook }: Props) {
  const [brand, setBrand] = useState('All')
  const [active, setActive] = useState<Vehicle | null>(null)
  const list = brand === 'All' ? VEHICLES : VEHICLES.filter((v) => v.brand === brand)

  return (
    <section id="showroom" className="section">
      <SectionHead
        kicker="Vehicle Showroom"
        title={<>Brands we <span className="text-racing">service</span></>}
        sub="Pick your make to see the models our workshop is set up to look after."
      />
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter by brand">
        {['All', ...BRANDS].map((b) => (
          <button
            key={b}
            onClick={() => setBrand(b)}
            aria-pressed={brand === b}
            className={`min-h-[44px] rounded-full border px-5 font-display text-sm font-semibold uppercase tracking-[0.2em] transition ${brand === b ? 'border-racing bg-racing text-white' : 'border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-900'}`}
          >
            {b}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((v) => <Card key={v.id} v={v} onOpen={() => setActive(v)} />)}
        </AnimatePresence>
      </motion.div>
      <p className="mt-8 flex items-center gap-2 text-sm text-slate-500"><CarFront size={16} /> {list.length} model{list.length === 1 ? '' : 's'} shown with photos.</p>
      <AnimatePresence>{active && <Modal v={active} onClose={() => setActive(null)} onBook={onBook} />}</AnimatePresence>
    </section>
  )
}
