import { motion } from 'framer-motion'
import { ArrowRight, Flame } from 'lucide-react'
import { VEHICLES, type Vehicle } from '../data'
import CarCard from './CarCard'

type FeaturedCarsProps = {
  onViewDetails: (v: Vehicle) => void
  onEnquire?: (v: Vehicle) => void
}

export default function FeaturedCars({ onViewDetails, onEnquire }: FeaturedCarsProps) {
  const featured = VEHICLES.filter((v) => v.featured)

  return (
    <section id="featured" className="relative bg-slate-50 py-20 sm:py-24 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
              <Flame size={15} /> Handpicked Dealership Selection
            </div>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
              Featured <span className="text-racing">Cars</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Explore our flagship selection of precision-engineered SUVs, hybrids, and certified lifestyle 4x4s. Multi-point inspected and backed by AutoBhan diagnostic standards.
            </p>
          </div>

          <a
            href="#inventory"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition hover:border-racing hover:text-racing"
          >
            <span>Explore All Categories</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Featured Cars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
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
