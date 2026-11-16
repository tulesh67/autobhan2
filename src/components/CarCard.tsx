import { motion } from 'framer-motion'
import { ArrowUpRight, Fuel, Gauge, MessageSquare, Milestone, Users, Zap } from 'lucide-react'
import { type Vehicle, CONTACT_INFO } from '../data'

type CarCardProps = {
  vehicle: Vehicle
  onViewDetails: (v: Vehicle) => void
  onEnquire?: (v: Vehicle) => void
}

export default function CarCard({ vehicle, onViewDetails, onEnquire }: CarCardProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hi AutoBhan Cars, I am enquiring about the ${vehicle.brand} ${vehicle.name} (${vehicle.year}), priced at ${vehicle.price}. Please provide more details and availability.`
  )}`

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10"
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
          <span className="rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {vehicle.brand}
          </span>
          <span className="rounded-md bg-white/95 px-2.5 py-1 font-display text-xs font-bold tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
            {vehicle.year}
          </span>
        </div>

        {vehicle.ev ? (
          <div className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-md bg-racing px-2.5 py-1 font-display text-xs font-bold uppercase tracking-widest text-white shadow-md">
            <Zap size={12} className="fill-white" /> EV
          </div>
        ) : (
          <div className="absolute right-3.5 top-3.5 rounded-md bg-slate-950/80 px-2.5 py-1 font-display text-[11px] font-bold tracking-wider text-slate-200 backdrop-blur-md">
            {vehicle.category}
          </div>
        )}

        {/* Price Tag Overlay at Bottom */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between text-white">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-300">Price Guide</span>
            <p className="font-display text-xl font-extrabold tracking-tight text-white drop-shadow">
              {vehicle.price}
            </p>
          </div>
          <span className="rounded bg-racing px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            Certified
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 bg-white">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-racing transition-colors">
              {vehicle.name}
            </h3>
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
            {vehicle.blurb}
          </p>

          {/* Quick Specs Grid - includes Kilometres, Fuel, Transmission, Mileage */}
          <div className="mt-4 grid grid-cols-2 gap-2 border-y border-slate-100 py-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 truncate">
              <Fuel size={14} className="shrink-0 text-racing" />
              <span className="truncate">{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Gauge size={14} className="shrink-0 text-racing" />
              <span className="truncate">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Milestone size={14} className="shrink-0 text-racing" />
              <span className="truncate">{vehicle.kilometers || 'Low KM Certified'}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Users size={14} className="shrink-0 text-racing" />
              <span>{vehicle.seats} Seater ({vehicle.mileage})</span>
            </div>
          </div>
        </div>

        {/* Card CTA Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => onViewDetails(vehicle)}
            className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 font-display text-xs font-semibold uppercase tracking-wider text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            <span>View Details</span>
            <ArrowUpRight size={15} />
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onEnquire?.(vehicle)}
            className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg bg-racing px-3 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff723b] hover:shadow-md hover:shadow-racing/25"
          >
            <MessageSquare size={14} />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}
