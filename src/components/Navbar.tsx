import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BRAND, CONTACT_INFO } from '../data'
import { MapPin, MessageCircle, PhoneCall, Wrench } from 'lucide-react'

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
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()

    const targetId = href.slice(1)
    const performScroll = () => {
      const element = document.getElementById(targetId)
      if (!element) return

      const headerOffset = window.innerWidth < 640 ? 96 : window.innerWidth < 1024 ? 116 : 85
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }

    if (location.pathname !== '/') {
      navigate(`/${href}`)
      window.setTimeout(performScroll, 180)
    } else {
      performScroll()
    }
  }

  const navigationLinks = (compact = false) =>
    NAV_LINKS.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={(event) => handleNavClick(event, link.href)}
        className={
          compact
            ? 'flex min-h-9 items-center justify-center whitespace-nowrap rounded-md px-0.5 font-display text-[10px] font-extrabold uppercase tracking-tight text-slate-800 transition hover:bg-slate-100 hover:text-racing active:bg-slate-100 sm:min-h-9 sm:px-3 sm:text-xs'
            : 'relative whitespace-nowrap py-1 font-display text-sm font-extrabold uppercase tracking-wider text-slate-800 transition hover:text-racing xl:text-[15px]'
        }
      >
        {link.label}
      </a>
    ))

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between gap-2 px-3 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-3.5">
          <Link
            to="/"
            onClick={(event) => {
              if (location.pathname === '/') {
                event.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-3"
            aria-label="Autobhan Cars Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Autobhan Cars Official Logo"
              className="h-7 w-auto shrink-0 object-contain sm:h-12 lg:h-14"
            />
            <div className="flex min-w-0 flex-col">
              <span className="whitespace-nowrap font-display text-[9px] font-black uppercase tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                {BRAND}
              </span>
              <span className="hidden text-[9.5px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:block lg:text-[11px]">
                Multi-Brand Diagnostics &amp; Care
              </span>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navigationLinks()}
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
            <button
              type="button"
              onClick={onRequestTowing}
              aria-label="Request 24/7 towing"
              title="Request 24/7 Towing"
              className="flex h-7 items-center justify-center gap-0.5 rounded-lg border border-red-600 bg-red-600 px-1 font-display text-[8px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-red-700 active:scale-95 sm:h-10 sm:gap-2 sm:rounded-xl sm:border-2 sm:px-3.5 sm:text-xs sm:tracking-wider"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white sm:h-2 sm:w-2" />
              </span>
              <span className="hidden sm:inline">Towing</span>
              <span className="sm:hidden">Tow</span>
            </button>

            <a
              href={CONTACT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Autobhan Cars on Google Maps"
              aria-label="View map"
              className="flex h-7 items-center justify-center gap-0.5 whitespace-nowrap rounded-lg border border-slate-300 bg-slate-50 px-1 font-display text-[8px] font-extrabold uppercase text-slate-800 hover:border-racing hover:text-racing sm:h-10 sm:gap-2 sm:rounded-xl sm:border-2 sm:px-3 sm:text-xs sm:tracking-wider"
            >
              <MapPin size={12} className="shrink-0 stroke-[2.5] text-racing sm:h-[14px] sm:w-[14px]" />
              <span>Map</span>
            </a>

            <a
              href="#book"
              onClick={(event) => handleNavClick(event, '#book')}
              className="flex h-7 items-center justify-center gap-0.5 whitespace-nowrap rounded-lg border border-racing bg-racing px-1 font-display text-[8px] font-black uppercase tracking-wide text-white shadow-sm shadow-racing/30 transition hover:bg-orange-600 active:scale-95 sm:h-10 sm:gap-2 sm:rounded-xl sm:border-2 sm:px-4 sm:text-xs sm:tracking-wider"
            >
              <Wrench size={11} className="stroke-[2.5] sm:h-[13px] sm:w-[13px]" />
              <span>Book</span>
            </a>

            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
              className="flex h-7 items-center justify-center gap-0.5 rounded-lg border border-[#20ba59] bg-[#25D366] px-1 text-white shadow-sm transition hover:bg-[#20ba59] active:scale-95 sm:h-10 sm:w-auto sm:gap-2 sm:rounded-xl sm:border-2 sm:px-3.5"
            >
              <MessageCircle size={12} className="shrink-0 fill-white/20 stroke-[2.5] text-white sm:h-[15px] sm:w-[15px]" />
              <span className="font-display text-[8px] font-black uppercase tracking-wide sm:hidden">WA</span>
              <span className="hidden font-display text-xs font-black uppercase tracking-wider sm:inline">WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              aria-label={`Call ${CONTACT_INFO.phone}`}
              title={`Call: ${CONTACT_INFO.phone}`}
              className="flex h-7 items-center justify-center gap-0.5 whitespace-nowrap rounded-lg border border-slate-900 bg-slate-900 px-1 font-display text-[8px] font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-slate-800 active:scale-95 sm:h-10 sm:gap-2 sm:rounded-xl sm:border-2 sm:px-3 sm:text-xs sm:tracking-wider"
            >
              <PhoneCall size={12} className="shrink-0 stroke-[2.5] text-white sm:h-[14px] sm:w-[14px]" />
              <span className="sm:hidden">Call</span>
              <span className="hidden font-mono font-bold 2xl:inline">{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>

        <nav
          aria-label="Primary navigation"
          className="grid grid-cols-6 items-center gap-0 border-t border-slate-100 px-1 py-1 sm:flex sm:flex-nowrap sm:justify-center sm:gap-1 lg:hidden"
        >
          {navigationLinks(true)}
        </nav>

      </header>

      <div className="h-[96px] w-full shrink-0 sm:h-[112px] lg:h-[82px]" aria-hidden="true" />
    </>
  )
}
