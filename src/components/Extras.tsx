import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BadgeCheck, CalendarDays, ClipboardCheck, Clock, Gauge, KeyRound, Mail, MapPin, Phone, ScanSearch, Star, Zap } from 'lucide-react'
import Suv from './Suv'
import { Reveal, SectionHead } from './Reveal'
import { BRAND, BRANDS } from '../data'

const WHY = [
  { Icon: ScanSearch, t: 'Diagnostics First', d: 'We find the root cause before recommending any repair.' },
  { Icon: ClipboardCheck, t: 'Clear Estimates', d: 'You approve the work and the price before we begin.' },
  { Icon: BadgeCheck, t: 'Multi-Brand Care', d: `Set up for ${BRANDS.join(', ')} and more.` },
  { Icon: Zap, t: 'EV Ready', d: 'Battery and high-voltage diagnostics for electric models.' },
  { Icon: Gauge, t: 'Road-Tested', d: 'Every repair is verified on the road before handover.' },
  { Icon: KeyRound, t: 'Simple Handover', d: 'Updates through the job, and a clear summary at pickup.' },
]

export function Why() {
  return (
    <section id="why" className="section">
      <SectionHead kicker="Why Choose Us" title={<>Built on <span className="text-racing">precision</span></>} />
      <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={(i % 3) * 0.08} className="h-full">
            <div className="group h-full bg-obsidian p-8 transition hover:bg-charcoal">
              <Icon size={32} className="text-racing transition group-hover:scale-110" />
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{t}</h3>
              <p className="mt-2 text-white/60">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const TILES = [
  { c: '#e9eaed', cap: 'Workshop bay', span: 'md:col-span-2 md:row-span-2', bg: 'from-[#2b2e36] to-obsidian' },
  { c: '#c8553a', cap: 'Detailing', span: '', bg: 'from-[#3a2018] to-obsidian' },
  { c: '#7f8a99', cap: 'EV diagnostics', span: '', bg: 'from-[#1d2733] to-obsidian' },
  { c: '#2b2f36', cap: 'Paint finish', span: '', bg: 'from-[#2a2a2e] to-obsidian' },
  { c: '#d8d4cc', cap: 'Final inspection', span: 'md:col-span-2', bg: 'from-[#2c2a25] to-obsidian' },
]

function Tile({ c, cap, span, bg }: (typeof TILES)[number]) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24])
  return (
    <div ref={ref} className={`group relative min-h-[220px] overflow-hidden border border-white/10 bg-gradient-to-br ${bg} ${span}`}>
      <div className="grid-bg absolute inset-0 opacity-40" />
      <motion.div style={{ y }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 transition duration-700 group-hover:scale-105">
        <Suv body={c} lights className="mx-auto w-full max-w-md" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-obsidian to-transparent p-4">
        <span className="font-display text-lg uppercase tracking-widest">{cap}</span>
        <span className="text-[10px] uppercase tracking-widest text-white/40">Placeholder</span>
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="section">
      <SectionHead kicker="Garage Gallery" title={<>Inside the <span className="text-racing">workshop</span></>} sub="Placeholder visuals. Swap in photos of your own workshop and finished work." />
      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
        {TILES.map((t) => <Reveal key={t.cap} className={`${t.span} h-full`}><Tile {...t} /></Reveal>)}
      </div>
    </section>
  )
}

const STEPS = [
  { Icon: CalendarDays, t: 'Book', d: 'Choose your service and date online.' },
  { Icon: ScanSearch, t: 'Inspect', d: 'We diagnose and document what your vehicle needs.' },
  { Icon: ClipboardCheck, t: 'Approve', d: 'Review the estimate. Work starts only when you say so.' },
  { Icon: KeyRound, t: 'Drive Away', d: 'Collect a road-tested vehicle with a clear summary.' },
]

export function How() {
  return (
    <section id="how" className="relative bg-charcoal/60">
      <div className="section">
        <SectionHead kicker="How It Works" title={<>Four steps to <span className="text-racing">done</span></>} />
        <ol className="relative grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-racing via-white/20 to-transparent md:block" />
          {STEPS.map(({ Icon, t, d }, i) => (
            <li key={t}>
              <Reveal delay={i * 0.12}>
                <div className="relative grid h-16 w-16 place-items-center border border-racing bg-obsidian text-racing"><Icon size={28} />
                  <span className="absolute -right-3 -top-3 grid h-7 w-7 place-items-center bg-racing font-display text-sm text-white">{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{t}</h3>
                <p className="mt-2 text-white/60">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const REVIEWS = [
  { n: 'Demo Customer A', v: 'SUV owner', t: 'Sample review text showing how a customer testimonial will appear here.' },
  { n: 'Demo Customer B', v: 'EV owner', t: 'Sample review text. Replace with real feedback from your customers.' },
  { n: 'Demo Customer C', v: 'Pickup owner', t: 'Sample review text. This card is placeholder content only.' },
]

export function Reviews() {
  return (
    <section id="reviews" className="section">
      <SectionHead kicker="Customer Reviews" title={<>What drivers <span className="text-racing">say</span></>} />
      <p className="-mt-8 mb-10 inline-block border border-racing/50 bg-racing/10 px-4 py-2 text-sm text-racing">Demo content: these are not real customer reviews.</p>
      <div className="grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.n} delay={i * 0.1} className="h-full">
            <figure className="glass h-full p-7 transition hover:-translate-y-1 hover:border-racing/50">
              <div className="flex gap-1 text-racing" aria-label="5 out of 5 stars (demo)">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={16} fill="currentColor" />)}</div>
              <blockquote className="mt-4 text-white/80">“{r.t}”</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm"><span className="font-semibold">{r.n}</span><span className="text-white/50"> · {r.v}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const CONTACT = [
  { Icon: MapPin, k: 'Address', v: '[GARAGE ADDRESS]' },
  { Icon: Phone, k: 'Phone', v: '[PHONE NUMBER]' },
  { Icon: Mail, k: 'Email', v: '[EMAIL ADDRESS]' },
  { Icon: Clock, k: 'Hours', v: '[WORKING HOURS]' },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHead kicker="Contact" title={<>Visit the <span className="text-racing">garage</span></>} sub="Contact details below are placeholders. Replace them with your real business information." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT.map(({ Icon, k, v }) => (
            <Reveal key={k}>
              <div className="glass h-full p-6">
                <Icon size={24} className="text-racing" />
                <p className="mt-4 font-display text-xs uppercase tracking-[0.25em] text-white/50">{k}</p>
                <p className="mt-1 font-medium">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="grid-bg relative grid min-h-[280px] place-items-center border border-white/10 bg-charcoal text-center">
            <div><MapPin size={36} className="mx-auto text-racing" /><p className="mt-3 font-display text-xl uppercase tracking-widest">Map placeholder</p><p className="text-sm text-white/45">Embed your map here</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 text-sm text-white/50 sm:px-8 md:flex-row">
        <a href="#top" className="font-display text-xl font-bold tracking-[0.12em] text-white">{BRAND}</a>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          {[['Showroom', '#showroom'], ['Services', '#services'], ['Book', '#book'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="hover:text-racing">{l}</a>)}
        </nav>
        <p>© {new Date().getFullYear()} {BRAND}. Demo website.</p>
      </div>
    </footer>
  )
}
