import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CarFront, Compass, Layers, Zap } from 'lucide-react'
import { CAR_CATEGORIES, VEHICLES, type CarCategory, type Vehicle } from '../data'
import CarCard from './CarCard'

type ShowroomProps = {
  onViewDetails: (v: Vehicle) => void
  onEnquire: (v: Vehicle) => void
}

const CATEGORY_TABS: { label: string; value: CarCategory | 'ALL'; icon: React.ElementType }[] = [
  { label: 'All Vehicles', value: 'ALL', icon: Layers },
  { label: 'SUV', value: 'SUV', icon: CarFront },
  { label: 'Hatchback', value: 'Hatchback', icon: Layers },
  { label: 'Sedan', value: 'Sedan', icon: Compass },
  { label: 'Premium', value: 'Premium', icon: Zap },
]

export default function Showroom({ onViewDetails, onEnquire }: ShowroomProps) {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory | 'ALL'>('ALL')

  const filtered = selectedCategory === 'ALL'
    ? VEHICLES
    : VEHICLES.filter((v) => v.category === selectedCategory)

  return (
    <section id="showroom" className="relative bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
              Curated Automobile Collection
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
              Vehicle <span className="text-racing">Showroom</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Explore our handpicked selection of precision-maintained luxury SUVs, high-efficiency hybrid platforms, and capable 4x4 icons. Fully inspected to dealer standards.
            </p>
          </div>

          {/* Clean Segment Filter Tabs */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 md:pb-0" role="tablist">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon
              const active = selectedCategory === tab.value
              return (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider transition-all sm:text-sm ${
                    active
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  <Icon size={14} className={active ? 'text-racing' : 'text-slate-400'} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Unified Vehicle Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((car) => (
              <CarCard
                key={car.id}
                vehicle={car}
                onViewDetails={onViewDetails}
                onEnquire={onEnquire}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Count Note */}
        <div className="mt-10 flex items-center justify-between border-t border-slate-200/80 pt-6 text-xs text-slate-500">
          <p>
            Showing <span className="font-semibold text-slate-800">{filtered.length}</span> curated vehicles in {selectedCategory === 'ALL' ? 'all segments' : selectedCategory}.
          </p>
          <a
            href="#book"
            className="font-display text-xs font-semibold uppercase tracking-wider text-racing hover:underline"
          >
            Looking for a specific model? Contact us &rarr;
          </a>
        </div>

      </div>
    </section>
  )
}
