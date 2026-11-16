import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

type GalleryItem = {
  id: string
  title: string
  category: 'Facility' | 'Parts' | 'Vehicles' | 'Team'
  src: string
  caption: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-team',
    title: 'The AutoBhan Team',
    category: 'Team',
    src: 'gallery/our-team.jpg',
    caption: 'Meet the technicians and service advisors behind AutoBhan Cars at our Hyderabad workshop.',
  },
  {
    id: 'g1',
    title: 'Multi-Bay Precision Workshop',
    category: 'Facility',
    src: 'gallery/workshop-bays.jpg',
    caption: 'Equipped with heavy-duty hydraulic 2-post lifts, Shell Helix lubricants, and multi-bay servicing.',
  },
  {
    id: 'g2',
    title: 'Toyota Genuine Parts Verification',
    category: 'Parts',
    src: 'gallery/team-genuine-parts.jpg',
    caption: 'AutoBhan team inspecting factory-authorized Toyota Genuine Parts and certified spares.',
  },
  {
    id: 'g3',
    title: 'Parts Warehouse & Customer Lounge',
    category: 'Facility',
    src: 'gallery/inventory-lounge.jpg',
    caption: 'Organized OEM spare parts shelving, customer lounge, and digital inventory management.',
  },
  {
    id: 'g4',
    title: 'Toyota Fortuner Legender 4x4',
    category: 'Vehicles',
    src: 'cars/fortuner.jpg',
    caption: 'Full-size flagship SUV undergoing multi-point underbody and suspension care.',
  },
  {
    id: 'g5',
    title: 'Mahindra Thar Roxx 4x4',
    category: 'Vehicles',
    src: 'cars/thar-roxx.jpg',
    caption: '5-door lifestyle 4x4 platform with electronic differential and terrain mode calibration.',
  },
  {
    id: 'g6',
    title: 'Toyota Innova Hycross Hybrid',
    category: 'Vehicles',
    src: 'cars/hycross.jpg',
    caption: 'Self-charging hybrid executive MPV with high-voltage battery diagnostic testing.',
  },
  {
    id: 'g7',
    title: 'Mahindra Scorpio N Z8L',
    category: 'Vehicles',
    src: 'cars/scorpio-n.jpg',
    caption: 'mHawk 2.2L diesel powertrain tune and 4XPLOR terrain response inspection.',
  },
  {
    id: 'g8',
    title: 'Tata Harrier EV AWD',
    category: 'Vehicles',
    src: 'cars/harrier-ev.jpg',
    caption: 'Born-electric dual motor architecture with liquid cooling loop inspection.',
  },
  {
    id: 'g9',
    title: 'Hyundai Creta Turbo DCT',
    category: 'Vehicles',
    src: 'cars/creta.jpg',
    caption: 'Dual-clutch transmission calibration, ADAS alignment, and brake inspection.',
  },
]

export default function Gallery() {
  const [filter, setFilter] = useState<'ALL' | 'Facility' | 'Parts' | 'Vehicles' | 'Team'>('ALL')
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)

  const filtered = filter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter)

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === id)
    if (idx !== -1) setActivePhotoIndex(idx)
  }

  const closeLightbox = () => setActivePhotoIndex(null)

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_ITEMS.length)
    }
  }

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
    }
  }

  return (
    <section id="gallery" className="relative bg-slate-50 py-20 text-slate-900 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
              Visual Documentation
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
              Facility, Team &amp; Car <span className="text-racing">Gallery</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base leading-relaxed">
              Meet the AutoBhan team and explore our Hyderabad workshop, genuine parts, and featured vehicles.
            </p>

            {/* Mobile Swipe Hint */}
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 lg:hidden">
              <span>👉 Swipe side-by-side to explore gallery photos</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'Facility', 'Parts', 'Vehicles', 'Team'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-xl px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition ${
                  filter === cat
                    ? 'bg-racing text-white shadow-md shadow-racing/25'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat === 'ALL' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Side by Side in One Line on Mobile, 3-Columns on Desktop */}
        <motion.div
          layout
          className="mt-8 sm:mt-12 flex flex-nowrap overflow-x-auto pb-4 gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => openLightbox(item.id)}
                className="group relative w-[270px] sm:w-[320px] lg:w-auto shrink-0 snap-start cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                  <img
                    src={`${import.meta.env.BASE_URL}${item.src}`}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-black/60 px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Expand Icon */}
                  <div className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-lg bg-white/20 text-white backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 size={16} />
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white group-hover:text-racing transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-xs text-slate-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <div
              className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              onClick={closeLightbox}
            >
              <div
                className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-racing transition"
                >
                  <X size={20} />
                </button>

                {/* Main Lightbox Image */}
                <div className="relative flex max-h-[70vh] items-center justify-center overflow-hidden bg-black">
                  <img
                    src={`${import.meta.env.BASE_URL}${GALLERY_ITEMS[activePhotoIndex].src}`}
                    alt={GALLERY_ITEMS[activePhotoIndex].title}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                  
                  {/* Prev / Next controls */}
                  <button
                    type="button"
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-racing transition"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-racing transition"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                {/* Details Footer */}
                <div className="border-t border-white/10 bg-slate-900 p-5">
                  <span className="font-display text-[11px] font-bold uppercase tracking-widest text-racing">
                    {GALLERY_ITEMS[activePhotoIndex].category} • {activePhotoIndex + 1} of {GALLERY_ITEMS.length}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                    {GALLERY_ITEMS[activePhotoIndex].title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {GALLERY_ITEMS[activePhotoIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
