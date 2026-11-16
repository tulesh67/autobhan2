import { motion } from 'framer-motion'
import { BadgeCheck, Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-white py-12 text-slate-900 sm:py-20 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-racing">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} className="fill-racing text-racing" />
            ))}
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Customer <span className="text-racing">Testimonials</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-600">
            Verified experiences from luxury SUV owners and regular commuters across Hyderabad who trust AutoBhan Cars for precision engineering.
          </p>

          {/* Mobile Swipe Hint */}
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 md:hidden">
            <span>👉 Swipe side-by-side to read customer reviews</span>
          </div>
        </div>

        {/* Testimonials Grid - Side by Side in One Line */}
        <div className="mt-8 sm:mt-12 flex flex-nowrap overflow-x-auto pb-4 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-start flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition hover:border-racing/50 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-racing text-racing" />
                    ))}
                  </div>
                  <Quote size={28} className="text-slate-200" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div>
                  <h4 className="flex items-center gap-1.5 font-display text-lg font-bold uppercase tracking-wide text-slate-900">
                    <span>{t.name}</span>
                    {t.verified && (
                      <span title="Verified Owner" className="inline-flex items-center">
                        <BadgeCheck size={16} className="text-racing" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {t.vehicle}
                  </span>
                  <p className="mt-1 text-[10px] text-slate-400">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
