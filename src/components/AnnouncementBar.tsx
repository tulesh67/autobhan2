import { MapPin, Phone } from 'lucide-react'
import { CONTACT_INFO } from '../data'

type AnnouncementBarProps = {
  onRequestTowing?: () => void
}

export default function AnnouncementBar({ onRequestTowing }: AnnouncementBarProps) {
  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 border-b border-[#141b2e] bg-[#04070e] text-[#c3cadb]"
    >
      <div className="mx-auto flex min-h-[36px] max-w-[1240px] flex-wrap items-center justify-between gap-x-5 gap-y-1.5 px-5 py-1 text-[12.5px] font-medium">
        {/* Left: Location & 24/7 Roadside Indicator */}
        <div className="flex flex-wrap items-center gap-[18px]">
          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-[#ff6a2b]"
            title="View AutoBhan Cars on Google Maps"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6a2b"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span className="underline decoration-[#ff6a2b]/40 underline-offset-2">Hyderabad, Telangana (Map)</span>
          </a>

          <button
            type="button"
            onClick={onRequestTowing}
            className="flex items-center gap-1.5 font-semibold text-[#ff7a45] transition hover:text-white"
          >
            <span className="dot" />
            <span>24/7 Roadside Assistance</span>
          </button>
        </div>

        {/* Center: Dealership & Diagnostic Highlight */}
        <span className="hidden text-[#a9b1c6] lg:inline-block">
          Multi-Brand Luxury Diagnostics &amp; Certified Automotive Care
        </span>

        {/* Right: Direct Contact & WhatsApp Quick Action */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="font-semibold text-white transition hover:text-[#ff6a2b]"
          >
            {CONTACT_INFO.phone}
          </a>
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#3be07a] transition hover:brightness-125"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </aside>
  )
}
