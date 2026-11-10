import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BadgeCheck, CalendarDays, ClipboardCheck, Clock, Gauge, KeyRound, Mail, MapPin, Phone, ScanSearch, Star, Zap } from 'lucide-react'
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
      <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={(i % 3) * 0.08} className="h-full">
            <div className="group h-full bg-white p-8 transition hover:bg-slate-50">
              <Icon size={32} className="text-racing transition group-hover:scale-110" />
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const TILES = [
  { image: 'fortuner.jpg', alt: 'Toyota Fortuner', cap: 'Toyota Fortuner', span: 'md:col-span-2 md:row-span-2' },
  { image: 'thar-roxx.jpg', alt: 'Mahindra Thar Roxx', cap: 'Mahindra Thar Roxx', span: '' },
  { image: 'xev-9e.jpg', alt: 'Mahindra XEV 9e electric SUV', cap: 'Electric SUV care', span: '' },
  { image: 'harrier-ev.jpg', alt: 'Tata Harrier EV', cap: 'Tata Harrier EV', span: '' },
  { image: 'scorpio-n.jpg', alt: 'Mahindra Scorpio N', cap: 'Mahindra Scorpio N', span: 'md:col-span-2' },
]

function Tile({ image, alt, cap, span }: (typeof TILES)[number]) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24])
  return (
    <div ref={ref} className={`group relative min-h-[220px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${span}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}cars/${image}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-105 object-cover transition duration-700 group-hover:scale-110"
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent p-5 pt-16 text-white">
        <span className="font-display text-lg uppercase tracking-widest">{cap}</span>
        <span className="text-[10px] uppercase tracking-widest text-white/75">Showroom</span>
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="section">
      <SectionHead kicker="Garage Gallery" title={<>Cars we <span className="text-racing">care for</span></>} sub="Browse a selection from the vehicles our multi-brand workshop is set up to service." />
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
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-racing via-slate-200 to-transparent md:block" />
          {STEPS.map(({ Icon, t, d }, i) => (
            <li key={t}>
              <Reveal delay={i * 0.12}>
                <div className="relative grid h-16 w-16 place-items-center border border-racing bg-obsidian text-racing"><Icon size={28} />
                  <span className="absolute -right-3 -top-3 grid h-7 w-7 place-items-center bg-racing font-display text-sm text-white">{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{t}</h3>
                <p className="mt-2 text-slate-600">{d}</p>
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
              <blockquote className="mt-4 text-slate-700">“{r.t}”</blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4 text-sm"><span className="font-semibold">{r.n}</span><span className="text-slate-500"> · {r.v}</span></figcaption>
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
                <p className="mt-4 font-display text-xs uppercase tracking-[0.25em] text-slate-500">{k}</p>
                <p className="mt-1 font-medium">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="grid-bg relative grid min-h-[280px] place-items-center rounded-xl border border-slate-200 bg-white text-center">
            <div><MapPin size={36} className="mx-auto text-racing" /><p className="mt-3 font-display text-xl uppercase tracking-widest">Map placeholder</p><p className="text-sm text-slate-500">Embed your map here</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 text-sm text-slate-500 sm:px-8 md:flex-row">
        <a href="#top" className="font-display text-xl font-bold tracking-[0.12em] text-slate-900">{BRAND}</a>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          {[['Showroom', '#showroom'], ['Services', '#services'], ['Book', '#book'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="hover:text-racing">{l}</a>)}
        </nav>
        <p>© {new Date().getFullYear()} {BRAND}. Demo website.</p>
      </div>
    </footer>
  )
}
