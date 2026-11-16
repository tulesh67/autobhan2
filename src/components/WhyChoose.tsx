import { motion } from 'framer-motion'
import { BadgeCheck, CheckCircle2, ClipboardCheck, Clock, ScanSearch, ShieldCheck, Truck, Users, Wrench } from 'lucide-react'
import { CONTACT_INFO } from '../data'

const PILLARS = [
  {
    Icon: ShieldCheck,
    title: '100% Genuine OEM Spares',
    desc: 'Authorized spare parts directly sourced from Toyota Genuine Parts, Mahindra Genuine, Hyundai/Kia Mobis, Bosch, and Shell Helix lubricants. Never counterfeit.',
  },
  {
    Icon: ScanSearch,
    title: 'Diagnostics-First Protocol',
    desc: 'Advanced multi-brand OBD-II scanners read live ECU telemetry, sensor streams, and fuel trims. We measure wear and pinpoint true faults before replacing components.',
  },
  {
    Icon: Users,
    title: 'Experienced Master Technicians',
    desc: '15+ years of specialized engineering mastery across Japanese SUVs, Indian platforms, European luxury marques, and modern Electric / Hybrid systems.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Transparent Pre-Approved Estimates',
    desc: 'You receive a comprehensive digital breakdown before work begins. Work starts only after your explicit approval—no surprise charges or hidden markups.',
  },
  {
    Icon: Wrench,
    title: 'Multi-Bay Advanced Facility',
    desc: 'Equipped with heavy-duty hydraulic vehicle lifts, computerized wheel alignment, dedicated dust-free paint booth, and automated AC recovery stations.',
  },
  {
    Icon: Truck,
    title: '24/7 Roadside Assistance & Towing',
    desc: 'Company-owned hydraulic flatbed towing carrier on call 24 hours a day across Hyderabad for emergency breakdown and accident recovery.',
  },
]

const WORKSHOP_PHOTOS = [
  {
    src: 'gallery/workshop-bays.jpg',
    title: 'Multi-Bay Workshop Facility',
    desc: 'Equipped with heavy-duty hydraulic lifts & Shell Helix lubricants',
  },
  {
    src: 'gallery/team-genuine-parts.jpg',
    title: '100% Genuine OEM Spares Commitment',
    desc: 'Authorized parts sourcing ensuring manufacturer warranty & safety',
  },
  {
    src: 'gallery/inventory-lounge.jpg',
    title: 'Organized Spares Store & Customer Lounge',
    desc: 'Spacious parts warehouse and clean air-conditioned customer waiting area',
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="relative bg-white py-12 text-slate-900 sm:py-20 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
              The AutoBhan Standard
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
              Why Choose <span className="text-racing">AutoBhan Cars</span>
            </h2>
            <p className="mt-2 text-xs sm:text-base text-slate-600 leading-relaxed">
              We deliver dealership-standard diagnostic precision, genuine manufacturer parts, and transparent customer care. Inspect our real Hyderabad facility and core engineering strengths below.
            </p>
          </div>

          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-racing hover:underline"
          >
            Locate Workshop on Map →
          </a>
        </div>

        {/* Real Facility Photos Showcase - Side by Side in One Line */}
        <div className="mt-8 sm:mt-12 flex flex-nowrap overflow-x-auto pb-4 gap-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {WORKSHOP_PHOTOS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative w-[270px] sm:w-[320px] md:w-auto shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                <img
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 right-3">
                  <span className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    Actual Facility
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 Key Strength Pillars Grid - Side by Side in One Line */}
        <div className="mt-8 sm:mt-14 flex flex-nowrap overflow-x-auto pb-4 gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
          {PILLARS.map((p, idx) => {
            const Icon = p.Icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group w-[260px] sm:w-[300px] lg:w-auto shrink-0 snap-start rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 transition-all duration-300 hover:border-racing/50 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-racing/10 text-racing border border-racing/20 transition-colors group-hover:bg-racing group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-racing transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {p.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-racing text-white shadow-lg shadow-racing/25">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold uppercase tracking-wide text-slate-900">
                Our Triple-Lock Quality Guarantee
              </h4>
              <p className="text-xs text-slate-600 sm:text-sm">
                100% Genuine Parts • Pre-Approved Estimates • Complete Workmanship Warranty
              </p>
            </div>
          </div>

          <a
            href="#book"
            className="btn-primary !min-h-[44px] !px-6 text-xs tracking-wider shrink-0"
          >
            Experience AutoBhan Standards
          </a>
        </div>

      </div>
    </section>
  )
}
