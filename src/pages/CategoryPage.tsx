import { useState, useMemo, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Filter,
  MessageSquare,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CarCard from '../components/CarCard'
import CarModal from '../components/CarModal'
import TowingModal from '../components/TowingModal'
import {
  CATEGORY_MODULES,
  CONTACT_INFO,
  VEHICLES,
  type CarCategory,
  type Vehicle,
} from '../data'

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName?: string }>()
  const navigate = useNavigate()

  // Match category from URL parameter or default to 'SUV'
  const validCategory = useMemo(() => {
    if (!categoryName) return 'SUV'
    const found = CATEGORY_MODULES.find(
      (m) => m.id.toLowerCase() === categoryName.toLowerCase()
    )
    return found ? found.id : ('SUV' as CarCategory)
  }, [categoryName])

  const [selectedCategory, setSelectedCategory] = useState<CarCategory | 'ALL'>(validCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const [priceSort, setPriceSort] = useState<'default' | 'asc' | 'desc'>('default')
  const [yearSort, setYearSort] = useState<'default' | 'desc' | 'asc'>('default')
  const [modalVehicle, setModalVehicle] = useState<Vehicle | null>(null)
  const [towingModalOpen, setTowingModalOpen] = useState(false)

  // Sync state if URL changes
  useEffect(() => {
    setSelectedCategory(validCategory)
  }, [validCategory])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryName])

  // Price parser helper
  const parsePrice = (priceStr: string): number => {
    const match = priceStr.match(/(\d+(\.\d+)?)/)
    return match ? parseFloat(match[1]) : 0
  }

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    let list =
      selectedCategory === 'ALL'
        ? VEHICLES
        : VEHICLES.filter((v) => v.category === selectedCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.brand.toLowerCase().includes(q) ||
          v.fuelType.toLowerCase().includes(q) ||
          v.transmission.toLowerCase().includes(q)
      )
    }

    if (priceSort === 'asc') {
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    } else if (priceSort === 'desc') {
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
    }

    if (yearSort === 'desc') {
      list = [...list].sort((a, b) => b.year - a.year)
    } else if (yearSort === 'asc') {
      list = [...list].sort((a, b) => a.year - b.year)
    }

    return list
  }, [selectedCategory, searchQuery, priceSort, yearSort])

  const handleTabChange = (cat: CarCategory | 'ALL') => {
    setSelectedCategory(cat)
    if (cat === 'ALL') {
      navigate('/inventory')
    } else {
      navigate(`/category/${cat}`)
    }
  }

  const activeModule = CATEGORY_MODULES.find((m) => m.id === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-racing selection:text-white">
      {/* 1. Header / Navigation with integrated Map, Towing, WhatsApp, Call & Booking */}
      <Navbar onRequestTowing={() => setTowingModalOpen(true)} />

      <main>
        {/* Category Header Banner */}
        <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-racing/15 blur-[120px]" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
            {/* Breadcrumb & Back Link */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <ArrowLeft size={14} className="text-racing" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-slate-300">Inventory</span>
              <span>/</span>
              <span className="text-racing">{selectedCategory === 'ALL' ? 'All Vehicles' : selectedCategory}</span>
            </div>

            {/* Title & Description */}
            <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
                  Verified AutoBhan Collection
                </span>
                <h1 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {selectedCategory === 'ALL' ? (
                    <>Complete <span className="text-racing">Vehicle Showroom</span></>
                  ) : (
                    <>{selectedCategory} <span className="text-racing">Collection</span></>
                  )}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {activeModule
                    ? activeModule.description
                    : 'Explore all precision-certified luxury SUVs, high-efficiency hybrids, and performance platforms currently available at our Hyderabad showroom.'}
                </p>
              </div>

              {/* Verified Count Badge */}
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-racing text-white shadow-lg shadow-racing/25">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Dealership Stock
                  </span>
                  <p className="font-display text-xl font-extrabold text-white">
                    {filteredVehicles.length} {filteredVehicles.length === 1 ? 'Vehicle' : 'Vehicles'}
                  </p>
                </div>
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => handleTabChange('ALL')}
                className={`rounded-xl px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition ${
                  selectedCategory === 'ALL'
                    ? 'bg-racing text-white shadow-md shadow-racing/25'
                    : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                All Categories ({VEHICLES.length})
              </button>

              {CATEGORY_MODULES.map((m) => {
                const isActive = selectedCategory === m.id
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => handleTabChange(m.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition ${
                      isActive
                        ? 'bg-racing text-white shadow-md shadow-racing/25'
                        : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{m.name}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : m.available
                          ? 'bg-racing/20 text-racing'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {m.available ? `${m.count}` : 'Coming Soon'}
                    </span>
                  </button>
                )
              })}
            </div>

          </div>
        </section>

        {/* Inventory Listings & Filter Toolbar */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            
            {/* Filter Controls Bar */}
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
              
              {/* Search Box */}
              <div className="relative min-w-[260px] flex-1">
                <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by brand, model, transmission..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-racing focus:bg-white focus:outline-none"
                />
              </div>

              {/* Sort Dropdowns */}
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={priceSort}
                  onChange={(e) => setPriceSort(e.target.value as any)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-700 focus:border-racing focus:bg-white focus:outline-none"
                >
                  <option value="default">Sort by Price</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>

                <select
                  value={yearSort}
                  onChange={(e) => setYearSort(e.target.value as any)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-700 focus:border-racing focus:bg-white focus:outline-none"
                >
                  <option value="default">Sort by Year</option>
                  <option value="desc">Year: Newest First</option>
                  <option value="asc">Year: Oldest First</option>
                </select>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setPriceSort('default')
                    setYearSort('default')
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Reset
                </button>
              </div>

            </div>

            {/* Results Count & Assurance */}
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <p>
                Showing <strong className="text-slate-900">{filteredVehicles.length}</strong> verified vehicle{filteredVehicles.length === 1 ? '' : 's'}
              </p>
              <span className="hidden sm:flex items-center gap-1.5 text-slate-700 font-medium">
                <CheckCircle2 size={15} className="text-racing" /> 100% Genuine ODO &amp; Multi-Point Certification
              </span>
            </div>

            {/* Vehicle Cards Grid */}
            {filteredVehicles.length > 0 ? (
              <motion.div
                layout
                className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredVehicles.map((car) => (
                    <CarCard
                      key={car.id}
                      vehicle={car}
                      onViewDetails={(v) => setModalVehicle(v)}
                      onEnquire={(v) => {
                        const url = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                          `Hi AutoBhan Cars, I am interested in the ${v.brand} ${v.name} (${v.year}) listed at ${v.price}. Please provide more details.`
                        )}`
                        window.open(url, '_blank')
                      }}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* COMING SOON CARD FOR HATCHBACK, SEDAN, PREMIUM */
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm sm:p-16">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-racing shadow-md">
                  <Sparkles size={32} />
                </div>
                <h2 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-4xl">
                  {selectedCategory} Inventory Arriving Soon
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  We are currently handpicking and certifying pristine {selectedCategory} models for our Hyderabad showroom. Every car undergoes rigorous 150-point diagnostic inspections and genuine OEM verification.
                </p>

                {activeModule?.examples && (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Models In Sourcing Pipeline:
                    </span>
                    {activeModule.examples.map((ex) => (
                      <span
                        key={ex}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hi AutoBhan Cars, please notify me when certified ${selectedCategory} vehicles arrive in your showroom.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !min-h-[46px] !px-6 text-xs tracking-wider"
                  >
                    <Bell size={16} />
                    <span>Notify Me on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleTabChange('SUV')}
                    className="flex min-h-[46px] items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-6 font-display text-xs font-bold uppercase tracking-wider text-slate-800 transition hover:bg-slate-200"
                  >
                    <span>Browse 14 Available SUVs</span>
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Back Button */}
            <div className="mt-14 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:text-racing"
              >
                <ArrowLeft size={15} />
                <span>Return to AutoBhan Homepage</span>
              </Link>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Vehicle Details Modal */}
      <CarModal
        vehicle={modalVehicle}
        onClose={() => setModalVehicle(null)}
        onBook={(v) => {
          navigate('/#book')
        }}
      />

      {/* Emergency Towing Modal */}
      <TowingModal
        isOpen={towingModalOpen}
        onClose={() => setTowingModalOpen(false)}
      />
    </div>
  )
}
