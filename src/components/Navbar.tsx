import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Menu, MessageCircle, PhoneCall, Wrench, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BRAND, CONTACT_INFO } from '../data'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Cars', href: '#categories' },
  { label: 'Why Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export type NavbarProps = {
  onRequestTowing?: () => void
}

export default function Navbar({ onRequestTowing }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const closeMenu = () => setMobileMenuOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu()
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const performScroll = () => {
        const el = document.getElementById(targetId)
        if (el) {
          const headerOffset = 85 // accounts for sticky header
          const elementPosition = el.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }

      if (location.pathname !== '/') {
        navigate(`/${href}`)
        setTimeout(performScroll, 180)
      } else {
        performScroll()
      }
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm transition-all">
        {/* 100% Responsive Header Container */}
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-2 py-1.5 sm:px-6 sm:py-3 lg:px-10 lg:py-3.5">
        
        {/* Brand Block - Logo emblem increased in size with proper AUTOBHAN CARS branding */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="flex flex-col sm:flex-row items-center sm:gap-3 group shrink-0"
          aria-label="Autobhan Cars Home"
        >
          {/* Official Logo Image - Increased Size */}
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Autobhan Cars Official Logo"
            className="h-9 w-auto object-contain sm:h-12 lg:h-14 transition-transform duration-300 group-hover:scale-105"
          />

          {/* Mobile Name (centered directly under logo on phones) */}
          <span className="sm:hidden font-display text-[9.5px] font-black uppercase tracking-wider text-slate-950 transition-colors group-hover:text-racing leading-none mt-1 whitespace-nowrap">
            AUTOBHAN CARS
          </span>

          {/* Desktop Name & Subtitle (side-by-side bold automotive branding on tablet & desktop) */}
          <div className="hidden sm:flex flex-col">
            <span className="font-display sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-slate-950 transition-colors group-hover:text-racing leading-none whitespace-nowrap">
              {BRAND}
            </span>
            <span className="text-[9.5px] lg:text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 leading-tight mt-0.5">
              Multi-Brand Diagnostics &amp; Care
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative whitespace-nowrap py-1 font-display text-sm font-extrabold uppercase tracking-wider text-slate-800 transition hover:text-racing xl:text-[15px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Complete Action Buttons in Header: Towing, Maps, Book, WhatsApp, Call + Menu */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          
          {/* 1. 24/7 TOWING BUTTON */}
          <button
            type="button"
            onClick={onRequestTowing}
            title="Request 24/7 Towing"
            className="flex h-8 sm:h-[40px] items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl border border-red-600 sm:border-2 bg-red-600 px-2 sm:px-3.5 font-display text-[10px] sm:text-xs font-black uppercase tracking-wider text-white shadow-xs sm:shadow-md transition hover:bg-red-700 active:scale-95"
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white"></span>
            </span>
            <span>Towing</span>
          </button>

          {/* 2. GOOGLE MAPS LOCATION BUTTON */}
          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Autobhan Cars on Google Maps"
            className="flex h-8 w-8 sm:h-[40px] sm:w-auto items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl border border-slate-300 sm:border-2 bg-slate-50 sm:px-3 font-display text-xs font-extrabold uppercase tracking-wider text-slate-800 shadow-xs hover:border-racing hover:text-racing"
          >
            <MapPin size={14} className="text-racing stroke-[2.5] shrink-0" />
            <span className="hidden sm:inline">Map</span>
          </a>

          {/* 3. BOOK SERVICE BUTTON */}
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, '#book')}
            className="flex h-8 sm:h-[40px] items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl border border-racing sm:border-2 bg-racing px-2 sm:px-4 font-display text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-white shadow-xs sm:shadow-md shadow-racing/30 transition hover:bg-orange-600 active:scale-95"
          >
            <Wrench size={13} className="stroke-[2.5]" />
            <span>Book</span>
          </a>

          {/* 4. WHATSAPP BUTTON */}
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="flex h-8 w-8 sm:h-[40px] sm:w-auto items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl border border-[#20ba59] sm:border-2 bg-[#25D366] sm:px-3.5 font-display text-xs font-black uppercase tracking-wider text-white shadow-xs sm:shadow-md shadow-emerald-500/25 transition hover:bg-[#20ba59] active:scale-95"
          >
            <MessageCircle size={15} className="text-white stroke-[2.5] fill-white/20 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* 5. CALL BUTTON */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            aria-label="Call Helpline"
            title={`Call: ${CONTACT_INFO.phone}`}
            className="flex h-8 w-8 sm:h-[40px] sm:w-auto items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl border border-slate-900 sm:border-2 bg-slate-900 sm:px-3 font-display text-xs font-extrabold tracking-wider text-white shadow-xs transition hover:bg-slate-800 active:scale-95"
          >
            <PhoneCall size={14} className="text-racing stroke-[2.5] shrink-0 sm:text-white" />
            <span className="hidden 2xl:inline font-mono font-bold">{CONTACT_INFO.phone}</span>
          </a>

          {/* 6. MOBILE MENU TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 sm:h-[40px] sm:w-[40px] items-center justify-center rounded-lg sm:rounded-xl border border-slate-300 sm:border-2 bg-white text-slate-800 lg:hidden shadow-xs hover:border-slate-400 active:bg-slate-100 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} className="stroke-[2.5]" /> : <Menu size={18} className="stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-3">
              {/* Navigation Links */}
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-base font-extrabold uppercase tracking-wider text-slate-800 transition hover:text-racing py-1"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Quick Action Buttons inside drawer */}
              <div className="mt-3 border-t border-slate-100 pt-3 flex flex-col gap-2.5">
                {/* 24/7 Roadside Assistance & Towing Modal Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    closeMenu()
                    onRequestTowing?.()
                  }}
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-xl border-2 border-red-600 bg-red-600 font-display text-xs font-black uppercase tracking-wider text-white shadow-md shadow-red-600/30 active:bg-red-700"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>Request 24/7 Towing / Roadside</span>
                </button>

                {/* Book Service CTA inside mobile menu */}
                <a
                  href="#book"
                  onClick={(e) => handleNavClick(e, '#book')}
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-xl border-2 border-racing bg-racing font-display text-xs font-black uppercase tracking-wider text-white shadow-md shadow-racing/30 active:bg-orange-600"
                >
                  <Wrench size={15} className="stroke-[2.5]" />
                  <span>Book Service</span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex h-[42px] items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-900 font-display text-xs font-black uppercase tracking-wider text-white"
                >
                  <PhoneCall size={15} className="text-racing stroke-[2.5]" />
                  <span>Call {CONTACT_INFO.phone}</span>
                </a>

                {/* Google Maps Location */}
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[42px] items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-slate-50 font-display text-xs font-extrabold uppercase tracking-wider text-slate-800 hover:border-racing"
                >
                  <MapPin size={15} className="text-racing stroke-[2.5]" />
                  <span>Hyderabad, Telangana (Open Map)</span>
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[42px] items-center justify-center gap-2 rounded-xl border-2 border-[#20ba59] bg-[#25D366] font-display text-xs font-black uppercase tracking-wider text-white shadow-md shadow-emerald-500/25"
                >
                  <MessageCircle size={15} className="text-white stroke-[2.5] fill-white/20" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    {/* Matching Spacer so following page elements do not slide behind the fixed header */}
    <div className="h-[60px] sm:h-[70px] lg:h-[82px] w-full shrink-0" aria-hidden="true" />
  </>
  )
}
