import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CATEGORY_MODULES } from '../data'

export default function BrowseByCategory() {
  // Sort so the active showroom with available cars (SUV - 14 in stock) comes first
  const sortedCategories = [...CATEGORY_MODULES].sort(
    (a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0)
  )

  return (
    <section id="categories" className="relative bg-white py-12 sm:py-20 lg:py-24 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
            Curated Dealership Collection
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Browse Cars by <span className="text-racing">Category</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-600 leading-relaxed">
            All vehicles are meticulously inspected and maintained to factory specifications. Select a category below to explore our verified inventory on dedicated showroom pages.
          </p>

          {/* Mobile Swipe Hint */}
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 lg:hidden">
            <span>👉 Swipe side-by-side to explore all categories</span>
          </div>
        </div>

        {/* 4 CATEGORY MODULES - ONE HORIZONTAL STRAIGHT LINE SIDE BY SIDE */}
        <div className="mt-8 sm:mt-12 flex flex-nowrap overflow-x-auto pb-4 gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
          {sortedCategories.map((module) => (
            <Link
              key={module.id}
              to={`/category/${module.id}`}
              className="group flex w-[260px] sm:w-[290px] lg:w-auto shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-racing hover:shadow-xl hover:shadow-racing/10"
            >
              {/* Module Preview Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={module.image}
                  alt={`${module.name} Category`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`rounded-md px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-wider backdrop-blur-md ${
                      module.available
                        ? 'bg-racing text-white shadow-md'
                        : 'bg-slate-900/80 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {module.available ? `${module.count} In Stock` : 'Coming Soon'}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                    {module.tagline}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white group-hover:text-racing transition-colors">
                    {module.name}
                  </h3>
                </div>
              </div>

              {/* Module Details */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 bg-white">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {module.description}
                  </p>

                  {/* Example Models */}
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Popular Models:
                    </span>
                    <p className="mt-0.5 text-xs font-medium text-slate-700 truncate">
                      {module.examples.slice(0, 3).join(', ')}...
                    </p>
                  </div>
                </div>

                {/* Module Action Button */}
                <div className="mt-4 sm:mt-5">
                  <div
                    className={`flex w-full min-h-[40px] items-center justify-center gap-2 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition ${
                      module.available
                        ? 'bg-slate-50 border border-slate-200 text-slate-900 group-hover:bg-racing group-hover:border-racing group-hover:text-white'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 group-hover:bg-slate-900 group-hover:text-white'
                    }`}
                  >
                    <span>{module.available ? `Explore ${module.name}s` : `View ${module.name}`}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Link to Complete Showroom */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/inventory"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-5 py-2.5 sm:px-6 sm:py-3 font-display text-xs font-bold uppercase tracking-wider text-slate-800 transition hover:bg-slate-900 hover:text-white shadow-xs"
          >
            <span>View All Dealership Inventory (14 Vehicles)</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  )
}
