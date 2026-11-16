import { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BrowseByCategory from '../components/BrowseByCategory'
import WhyChoose from '../components/WhyChoose'
import OurServices from '../components/OurServices'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactEnquiry, { type PrefillData } from '../components/ContactEnquiry'
import Footer from '../components/Footer'
import TowingModal from '../components/TowingModal'

export default function HomePage() {
  const [towingModalOpen, setTowingModalOpen] = useState(false)
  const [prefill, setPrefill] = useState<PrefillData>({ n: 0 })

  const scrollToBook = useCallback(() => {
    const el = document.getElementById('book')
    if (el) {
      const headerOffset = 85
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  const handleBookService = useCallback((serviceTitle: string) => {
    setPrefill((s) => ({
      service: serviceTitle,
      n: s.n + 1,
    }))
    scrollToBook()
  }, [scrollToBook])

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-racing selection:text-white">
      {/* 1. Main Header with integrated Map, 24/7 Towing, WhatsApp, Call & Booking */}
      <Navbar onRequestTowing={() => setTowingModalOpen(true)} />

      <main>
        {/* 2. Hero Section with Gauge HUD & Towing (Only Dark Section) */}
        <Hero onRequestTowing={() => setTowingModalOpen(true)} />

        {/* 3. Scrolling Marquee Ticker */}
        <div
          className="relative z-[2] overflow-hidden"
          style={{
            background: 'var(--ac)',
            color: '#0a0d16',
            transform: 'skewY(-1.2deg)',
            marginTop: '-10px',
          }}
        >
          <div className="marq whitespace-nowrap py-2 sm:py-3.5 font-display text-base sm:text-2xl lg:text-[30px] font-extrabold uppercase tracking-[0.08em]">
            <span className="px-7">
              Genuine OEM Parts ● Diagnostics-First ● Hydraulic Lifts ● 24/7 Towing ● Certified Cars ● Multi-Brand Care ●
            </span>
            <span className="px-7">
              Genuine OEM Parts ● Diagnostics-First ● Hydraulic Lifts ● 24/7 Towing ● Certified Cars ● Multi-Brand Care ●
            </span>
          </div>
        </div>

        {/* 4. Services */}
        <OurServices
          onBookService={handleBookService}
          onRequestTowing={() => setTowingModalOpen(true)}
        />

        {/* 5. Browse by Category */}
        <BrowseByCategory />

        {/* 6. Why Choose AutoBhan Cars */}
        <WhyChoose />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. Customer Reviews */}
        <Testimonials />

        {/* 9. Contact & Service Booking */}
        <div id="book" className="scroll-mt-24 sm:scroll-mt-28">
          <ContactEnquiry prefill={prefill} />
        </div>
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Emergency Towing Modal */}
      <TowingModal
        isOpen={towingModalOpen}
        onClose={() => setTowingModalOpen(false)}
      />
    </div>
  )
}
