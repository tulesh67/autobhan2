import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const links = (mobile = false) => LINKS.map(([label, href]) => (
    <li key={href}>
      <a
        href={href}
        className={mobile
          ? 'inline-flex min-h-8 items-center whitespace-nowrap py-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-slate-700 transition hover:text-racing sm:text-xs'
          : 'group relative whitespace-nowrap py-2 text-xs font-medium uppercase tracking-wider text-slate-700 transition hover:text-racing xl:text-sm xl:tracking-widest'}
      >
        {label}
        {!mobile && <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-racing transition-transform duration-300 group-hover:scale-x-100" />}
      </a>
    </li>
  ))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-slate-900/10' : 'shadow-sm shadow-slate-900/5'}`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-8" aria-label="Main">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-[72px]">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-display text-xl font-bold tracking-[0.12em] text-slate-900 sm:text-2xl">
            <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 27L16 4l13 23h-8l-5-9-5 9z" fill="#FF5A1F" /></svg>
            {BRAND}
          </a>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links()}
          </ul>

          <a href="#book" className="btn-primary hidden !min-h-[40px] !px-4 text-xs sm:inline-flex lg:!px-5 lg:text-sm">Book a Service</a>
        </div>

        <ul className="no-scrollbar flex flex-wrap items-center justify-center gap-x-3 gap-y-0 border-t border-slate-200 px-1 py-1.5 lg:hidden">
          {links(true)}
        </ul>
      </nav>
    </motion.header>
  )
}
