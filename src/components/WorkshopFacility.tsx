import { motion } from 'framer-motion'
import { BadgeCheck, ClipboardCheck, ScanSearch, ShieldCheck } from 'lucide-react'

const PILLARS = [
  {
    Icon: ShieldCheck,
    title: '100% Genuine OEM Spares',
    desc: 'We strictly source authorized parts from Toyota Genuine Parts, Mahindra Genuine, Hyundai Mobis, and Shell Helix lubricants.',
  },
  {
    Icon: ScanSearch,
    title: 'Diagnostics-First Protocol',
    desc: 'Live telemetry diagnostics pinpoint the true root cause before a single bolt is replaced. We measure wear—we never guess.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Pre-Approved Pricing',
    desc: 'You receive an itemized digital estimate before work starts. Zero surprise charges without your explicit pre-approval.',
  },
  {
    Icon: BadgeCheck,
    title: 'Certified Multi-Brand Mastery',
    desc: 'Specialized master technicians for Toyota, Mahindra, Hyundai, Tata, Jeep, German marques, and Electric / Hybrid platforms.',
  },
]

const GALLERY = [
  {
    src: 'gallery/workshop-bays.jpg',
    alt: 'AutoBhan Multi-Bay Precision Workshop',
    title: 'Multi-Bay Workshop Facility',
    subtitle: 'Equipped with hydraulic vehicle lifts & Shell Helix lubricants',
  },
  {
    src: 'gallery/team-genuine-parts.jpg',
    alt: 'Team with Toyota Genuine Parts',
    title: '100% Genuine OEM Spares',
    subtitle: 'Authorized parts sourcing for ultimate durability & safety',
  },
  {
    src: 'gallery/inventory-lounge.jpg',
    alt: 'AutoBhan Customer Lounge & Parts Warehouse',
    title: 'Dedicated Spares Warehouse & Lounge',
    subtitle: 'Organized parts inventory and air-conditioned customer waiting',
  },
]

export default function WorkshopFacility() {
  return (
    <section id="workshop" className="relative bg-slate-900 py-20 text-white sm:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-racing/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
            The AutoBhan Benchmark
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Why Choose <span className="text-racing">AutoBhan Cars</span>
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            We combine dealership-standard diagnostic precision with transparent independent agility. Inspect our Hyderabad facility and quality guarantees below.
          </p>
        </div>

        {/* Real Facility Photo Showcase */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {GALLERY.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                <img
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Core Trust Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, idx) => {
            const Icon = p.Icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-racing/50"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-racing/20 text-racing">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {p.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

