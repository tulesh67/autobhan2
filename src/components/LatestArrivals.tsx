import { Sparkles } from 'lucide-react'
import { VEHICLES, type Vehicle } from '../data'
import CarCard from './CarCard'

type LatestArrivalsProps = {
  onViewDetails: (v: Vehicle) => void
  onEnquire?: (v: Vehicle) => void
}

export default function LatestArrivals({ onViewDetails, onEnquire }: LatestArrivalsProps) {
  const arrivals = VEHICLES.filter((v) => v.isNewArrival)

  return (
    <section id="arrivals" className="relative bg-white py-20 sm:py-28 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
            <Sparkles size={14} /> Fresh in the Garage & Showroom
          </div>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Latest <span className="text-racing">Arrivals</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Discover our newest additions. From next-gen electric platforms to newly added off-road icons, fully certified and ready for inspection.
          </p>
        </div>

        {/* Grid of New Arrivals */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {arrivals.map((car) => (
            <CarCard
              key={car.id}
              vehicle={car}
              onViewDetails={onViewDetails}
              onEnquire={onEnquire}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

