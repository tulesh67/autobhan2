import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { BRAND } from '../data'

const LINKS = [
  ['Showroom', '#showroom'],
  ['Services', '#services'],
  ['Engineering', '#engineering'],
  ['Why Us', '#why'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'glass bg-obsidian/80 border-x-0 border-t-0' : ''}`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl font-bold tracking-[0.12em]" onClick={() => setOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 27L16 4l13 23h-8l-5-9-5 9z" fill="#FF5A1F" /></svg>
          {BRAND}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="group relative py-2 text-sm font-medium uppercase tracking-widest text-slate-700 transition hover:text-slate-950">
                {l}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-racing transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#book" className="btn-primary hidden !min-h-[42px] !px-5 text-sm sm:inline-flex">Book a Service</a>
          <button
            className="grid h-11 w-11 place-items-center border border-slate-300 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col px-5 pb-6">
              {LINKS.map(([l, h], i) => (
                <motion.li key={h} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <a href={h} onClick={() => setOpen(false)} className="block border-b border-slate-200 py-4 font-display text-2xl uppercase tracking-widest text-slate-900">
                    {l}
                  </a>
                </motion.li>
              ))}
              <li className="pt-5">
                <a href="#book" onClick={() => setOpen(false)} className="btn-primary w-full">Book a Service</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
