import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BatteryCharging, CheckCircle2, Fuel, Gauge, MessageSquare, PhoneCall, Users, Wrench, X, Zap } from 'lucide-react'
import { type Vehicle, CONTACT_INFO } from '../data'

type CarModalProps = {
  vehicle: Vehicle | null
  onClose: () => void
  onBook: (vehicle: Vehicle) => void
}

export default function CarModal({ vehicle, onClose, onBook }: CarModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (vehicle) {
      window.addEventListener('keydown', handleKeyDown)
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = prev
      }
    }
  }, [vehicle, onClose])

  if (!vehicle) return null

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hi AutoBhan Cars, I am interested in the ${vehicle.brand} ${vehicle.name} (${vehicle.year}) listed at ${vehicle.price}. Please share availability and details.`
  )}`

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${vehicle.brand} ${vehicle.name} details`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur transition hover:bg-racing hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-100">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.name}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/20 px-2.5 py-0.5 font-display text-xs font-semibold uppercase tracking-widest backdrop-blur">
                  {vehicle.brand} • {vehicle.year}
                </span>
                {vehicle.ev && (
                  <span className="flex items-center gap-1 rounded bg-racing px-2.5 py-0.5 font-display text-xs font-semibold uppercase tracking-widest text-white">
                    <Zap size={13} /> Born Electric
                  </span>
                )}
              </div>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                {vehicle.name}
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">{vehicle.body}</p>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-slate-300">Price Guide / Est.</span>
              <p className="font-display text-2xl font-black text-racing sm:text-3xl">{vehicle.price}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 bg-white">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {vehicle.blurb}
          </p>

          {/* Quick Specifications Grid */}
          <div className="mt-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Technical Specifications
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Fuel size={15} className="text-racing" /> Fuel / Power
                </span>
                <p className="mt-1 font-display text-base font-bold text-slate-900">{vehicle.fuelType}</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Gauge size={15} className="text-racing" /> Transmission
                </span>
                <p className="mt-1 font-display text-base font-bold text-slate-900">{vehicle.transmission}</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <BatteryCharging size={15} className="text-racing" /> Mileage / Range
                </span>
                <p className="mt-1 font-display text-base font-bold text-slate-900">{vehicle.mileage}</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Users size={15} className="text-racing" /> Seating Capacity
                </span>
                <p className="mt-1 font-display text-base font-bold text-slate-900">{vehicle.seats} Seats</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          {vehicle.highlights && vehicle.highlights.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Key Vehicle Highlights
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {vehicle.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="shrink-0 text-racing" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => {
                onClose()
                onBook(vehicle)
              }}
              className="btn-ghost flex items-center justify-center gap-2 !border-slate-300 !text-slate-800 hover:!border-racing hover:!text-racing"
            >
              <Wrench size={17} /> Book Service / Inspection
            </button>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn-ghost flex items-center justify-center gap-2 !border-slate-300 !text-slate-800"
              >
                <PhoneCall size={17} /> Call Helpline
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 !bg-[#25D366] hover:!bg-[#20ba59]"
              >
                <MessageSquare size={17} /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
