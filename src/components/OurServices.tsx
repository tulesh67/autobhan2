import { useState } from 'react'
import { ArrowRight, CheckCircle2, Sparkles, Truck, Wrench } from 'lucide-react'
import { SERVICES, type Service } from '../data'

type OurServicesProps = {
  onBookService: (serviceName: string) => void
  onRequestTowing?: () => void
}

export default function OurServices({ onBookService, onRequestTowing }: OurServicesProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate services list to create a seamless infinite horizontal scrolling loop
  const duplicatedServices = [...SERVICES, ...SERVICES]

  return (
    <section id="services" className="relative bg-slate-50 py-10 sm:py-20 border-t border-slate-200/80 overflow-hidden">
      
      {/* 1. Section Header Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-racing/10 px-3 py-0.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-racing">
              <Sparkles size={12} className="animate-spin" />
              <span>Certified Multi-Brand Workshop</span>
            </div>

            <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
              Precision <span className="text-racing">Services</span>
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm sm:mt-2">
              From periodic maintenance to advanced mechatronics and 24/7 roadside towing, executed to factory specifications.
            </p>
          </div>

          {/* Quick Header Actions */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onRequestTowing}
              className="inline-flex min-h-[38px] sm:min-h-[44px] items-center gap-1.5 rounded-xl border border-red-600 sm:border-2 bg-red-600 px-3 sm:px-4 font-display text-[11px] sm:text-xs font-black uppercase tracking-wider text-white shadow-xs sm:shadow-md transition hover:bg-red-700 active:scale-95"
            >
              <Truck size={14} className="sm:size-4" />
              <span>Request Towing</span>
            </button>
            <a
              href="#book"
              className="btn-primary !min-h-[38px] sm:!min-h-[44px] !px-4 sm:!px-5 text-[11px] sm:text-xs font-black tracking-wider border sm:border-2 border-racing"
            >
              Book Service
            </a>
          </div>
        </div>

        {/* Live Stream Ticker Subtext */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-200/60 pb-2.5">
          <span className="flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-racing opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-racing"></span>
            </span>
            <strong className="text-slate-800">13 Precision Service Modules</strong> • Infinite horizontal stream
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400">
            💡 Touch or hover to pause scrolling
          </span>
        </div>
      </div>

      {/* 2. Full-Width Horizontal Scrolling Stream (Spans page left to right like announcement bar) */}
      <div
        className="relative mt-6 sm:mt-8 w-full overflow-hidden py-2 sm:py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft Left & Right Edge Gradient Fades for Smooth Screen Transition */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent" />

        {/* Continuous Horizontal Marquee Track in ONE Single Line */}
        <div
          className="services-marquee-track flex items-stretch gap-4 sm:gap-6 px-4"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {duplicatedServices.map((s, index) => {
            const Icon = s.Icon
            const isTowing = s.title.toLowerCase().includes('towing')

            return (
              <div
                key={`${s.title}-${index}`}
                className={`group flex w-[265px] sm:w-[350px] h-[340px] sm:h-[395px] shrink-0 flex-col justify-between rounded-xl sm:rounded-2xl border bg-white p-4 sm:p-6 shadow-xs sm:shadow-sm transition-all duration-300 hover:shadow-lg ${
                  isTowing
                    ? 'border-red-500 ring-1 sm:ring-2 ring-red-500/20'
                    : 'border-slate-200/90 hover:border-racing/60'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Price Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl transition-colors ${
                        isTowing
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-slate-100 text-racing group-hover:bg-racing group-hover:text-white'
                      }`}
                    >
                      <Icon size={20} className="sm:size-6" />
                    </div>

                    <span
                      className={`font-display text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${
                        isTowing
                          ? 'bg-red-50 text-red-600 border-red-200'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {s.priceStart}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-xl font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-racing transition-colors line-clamp-1">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {s.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-1.5 border-t border-slate-100 pt-2.5 sm:pt-3 text-[11px] sm:text-xs text-slate-600">
                    {s.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="shrink-0 text-racing" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-3 border-t border-slate-100 pt-2.5">
                  {isTowing ? (
                    <button
                      type="button"
                      onClick={onRequestTowing}
                      className="flex w-full items-center justify-between rounded-lg sm:rounded-xl bg-red-50 px-3 py-2 sm:px-3.5 sm:py-2.5 font-display text-[11px] sm:text-xs font-black uppercase tracking-wider text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                      <span>Request Towing</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onBookService(s.title)}
                      className="flex w-full items-center justify-between rounded-lg sm:rounded-xl bg-slate-50 px-3 py-2 sm:px-3.5 sm:py-2.5 font-display text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800 transition hover:bg-racing hover:text-white group-hover:bg-slate-100"
                    >
                      <span>Book Service</span>
                      <ArrowRight size={14} className="text-racing transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
