import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Truck } from 'lucide-react'
import { BRAND, CONTACT_INFO } from '../data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative border-t border-[#162138] text-[#c3cadb] overflow-hidden"
      style={{
        background: 'radial-gradient(1200px 600px at 50% 0%, #0e1733 0%, #060912 75%)',
        color: '#c3cadb',
      }}
    >
      {/* Subtle Ambient Glow matching Hero styling */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-20"
        style={{ background: 'var(--ac)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="rounded-xl bg-white p-1 border border-white/20 shadow-sm">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="AutoBhan Cars Official Logo"
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white transition-colors group-hover:text-racing">
                {BRAND}
              </span>
            </a>
            <p className="mt-4 text-xs leading-relaxed text-[#9ba6c2] sm:text-sm">
              Hyderabad’s premier multi-brand automotive destination, diagnostic workshop, and certified vehicle inventory. Combining factory-grade computerized diagnostic tools with 100% genuine OEM spare parts and certified workmanship.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-[#1a5e38] bg-[#0c2417] px-3 py-1.5 text-xs font-semibold text-[#3be07a] transition hover:bg-[#123824] hover:border-[#3be07a]"
              >
                <MessageCircle size={15} /> 24/7 WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-1.5 rounded-lg border border-[#1e2a4a] bg-[#0c1428] px-3 py-1.5 text-xs font-semibold text-white transition hover:border-racing hover:text-racing"
              >
                <Phone size={14} /> Quick Call
              </a>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-[#1e2a4a] bg-[#0c1428] px-3 py-1.5 text-xs font-semibold text-racing transition hover:border-racing hover:bg-white/5"
              >
                <MapPin size={14} /> Google Maps
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium text-[#9ba6c2]">
              <li><a href="#services" className="transition hover:text-racing">Services</a></li>
              <li><a href="#categories" className="transition hover:text-racing">Cars by Category</a></li>
              <li><a href="#why" className="transition hover:text-racing">Why Us</a></li>
              <li><a href="#gallery" className="transition hover:text-racing">Gallery</a></li>
              <li><a href="#reviews" className="transition hover:text-racing">Reviews</a></li>
              <li><a href="#contact" className="transition hover:text-racing">Contact</a></li>
              <li><a href="#book" className="transition hover:text-racing font-bold text-racing">Book Service</a></li>
            </ul>
          </div>

          {/* Column 3: Vehicle Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Vehicle Inventory
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium text-[#9ba6c2]">
              <li>
                <a href="#/category/SUV" className="flex items-center justify-between transition hover:text-racing">
                  <span>SUVs &amp; 4x4s</span>
                  <span className="rounded bg-racing/20 border border-racing/30 px-1.5 py-0.2 text-[10px] text-racing font-bold">14 Available</span>
                </a>
              </li>
              <li>
                <a href="#/category/Hatchback" className="flex items-center justify-between transition hover:text-racing">
                  <span>Hatchbacks</span>
                  <span className="text-[10px] text-[#6b7696]">Coming Soon</span>
                </a>
              </li>
              <li>
                <a href="#/category/Sedan" className="flex items-center justify-between transition hover:text-racing">
                  <span>Executive Sedans</span>
                  <span className="text-[10px] text-[#6b7696]">Coming Soon</span>
                </a>
              </li>
              <li>
                <a href="#/category/Premium" className="flex items-center justify-between transition hover:text-racing">
                  <span>Premium Marques</span>
                  <span className="text-[10px] text-[#6b7696]">Coming Soon</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Hyderabad Facility
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-[#9ba6c2]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 text-racing mt-0.5" />
                <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-racing transition">
                  Hyderabad, Telangana, India (View Map)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-racing" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="transition hover:text-racing font-semibold text-white">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-racing" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="transition hover:text-racing">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-racing font-semibold">
                <Truck size={15} className="shrink-0" />
                <span>24/7 Roadside Assistance Available</span>
              </li>
              <li className="pt-1 text-[11px] text-[#717d9e]">
                Operating Hours: Mon – Sat, 9:00 AM – 8:00 PM (Sun Closed)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#141c36] pt-8 sm:flex-row text-xs text-[#717d9e]">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved. Precision Multi-Brand Automotive Care &amp; Dealership.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#9ba6c2] transition hover:text-racing"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
