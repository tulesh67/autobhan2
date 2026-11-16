import { CONTACT_INFO } from '../data'

type HeroProps = {
  onRequestTowing?: () => void
}

export default function Hero({ onRequestTowing }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-0 lg:min-h-[820px] overflow-hidden text-[#f4f6fb]"
      style={{
        background: 'radial-gradient(1200px 700px at 78% 40%, #101a3a 0%, #060912 62%)',
        color: '#f4f6fb',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        className="glow"
        style={{
          width: '520px',
          height: '520px',
          right: '-80px',
          top: '80px',
          background: 'rgba(255, 90, 31, 0.38)',
        }}
      />
      <div
        className="glow"
        style={{
          width: '420px',
          height: '420px',
          left: '-140px',
          bottom: '40px',
          background: 'rgba(40, 80, 200, 0.28)',
          animationDelay: '-3s',
        }}
      />

      {/* Moving 3D Perspective Grid Floor */}
      <div className="floor" />

      {/* Speed Light Streaks */}
      <span className="sk" style={{ '--t': '22%', '--s': '3.4s', '--d': '.2s', '--w': '320px' } as React.CSSProperties} />
      <span className="sk" style={{ '--t': '38%', '--s': '2.6s', '--d': '1.1s', '--w': '200px' } as React.CSSProperties} />
      <span className="sk" style={{ '--t': '56%', '--s': '4.1s', '--d': '.6s', '--w': '420px' } as React.CSSProperties} />
      <span className="sk" style={{ '--t': '71%', '--s': '3s', '--d': '2s', '--w': '240px' } as React.CSSProperties} />
      <span className="sk" style={{ '--t': '86%', '--s': '2.3s', '--d': '1.6s', '--w': '180px' } as React.CSSProperties} />

      {/* Subtle Grain Texture Overlay */}
      <div className="grain" />

      <div className="hero-in relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 px-4 pt-8 pb-12 sm:px-6 sm:pt-16 sm:pb-20 lg:grid-cols-2 lg:gap-8 lg:pt-[78px] lg:pb-[96px]">
        {/* LEFT COLUMN: Headline, Text & CTAs */}
        <div>
          <div className="fu d1 inline-flex items-center gap-2 rounded-full border border-[#2a3452] bg-[rgba(14,20,36,.7)] px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#e3e8f5]">
            <span className="dot" />
            <span>Automotive Care &amp; Certified Dealership · Hyderabad</span>
          </div>

          <h1 className="mt-4 sm:mt-7 font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase leading-[0.98] tracking-tight">
            <span className="ln l1 block">
              <span>Engineered for</span>
            </span>
            <span className="ln l2 block">
              <span>the road.</span>
            </span>
            <span className="ln l3 block">
              <span style={{ color: 'var(--ac)' }}>Perfected in our garage.</span>
            </span>
          </h1>

          <p className="fu d2 mt-4 sm:mt-6 max-w-[540px] text-sm leading-relaxed text-[#c3cadb] sm:text-base lg:text-lg">
            Hyderabad’s multi-brand precision garage, diagnostic centre and certified vehicle inventory.
            Built around manufacturer-grade scanners, hydraulic lifts and 100% genuine OEM parts.
          </p>

          <div className="fu d3 mt-5 sm:mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[14px] font-medium text-[#e3e8f5]">
            <span className="flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff6a2b" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12.5 2.8 2.8L16 9.5" />
              </svg>
              <span>100% Genuine OEM Spares</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff6a2b" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12.5 2.8 2.8L16 9.5" />
              </svg>
              <span>Diagnostics-First Protocol</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff6a2b" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12.5 2.8 2.8L16 9.5" />
              </svg>
              <span>24/7 Roadside Assistance</span>
            </span>
          </div>

          <div className="fu d4 mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3.5">
            {/* 1. Tow Your Vehicle (First place, opens 24/7 Roadside Assistance & Towing modal) */}
            <button
              type="button"
              onClick={onRequestTowing}
              className="btn btn-p chamfer !min-h-[42px] !px-4 !text-xs sm:!min-h-[48px] sm:!px-6 sm:!text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Tow Your Vehicle</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>

            {/* 2. Explore Cars */}
            <a href="#categories" className="btn btn-g chamfer !min-h-[42px] !px-4 !text-xs sm:!min-h-[48px] sm:!px-6 sm:!text-sm">
              <span>Explore Cars</span>
            </a>

            {/* 3. Book Service */}
            <a href="#book" className="btn btn-g !min-h-[42px] !px-4 !text-xs sm:!min-h-[48px] sm:!px-6 sm:!text-sm">
              Book Service
            </a>

            {/* 4. WhatsApp Us */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !min-h-[42px] !px-4 !text-xs sm:!min-h-[48px] sm:!px-6 sm:!text-sm"
              style={{
                background: '#0b1f17',
                border: '1px solid #176a3f',
                color: '#3be07a',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Diagnostic Gauge HUD & 24/7 Towing Card */}
        <div className="relative flex flex-col items-center justify-self-center w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[560px]">
          
          {/* Gauge Container */}
          <div className="pop relative aspect-square w-full">
            {/* Radar Sonar Ping Rings */}
            <div className="pingr" />
            <div className="pingr" style={{ animationDelay: '1.5s' }} />
            <div className="pingr" style={{ animationDelay: '3s' }} />

            {/* SVG Multi-Layer Gauge HUD */}
            <svg
              viewBox="0 0 520 520"
              width="100%"
              height="100%"
              role="img"
              aria-label="Animated diagnostic gauge"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient id="hg" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#ff3d00" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
                <radialGradient id="face" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#141c36" />
                  <stop offset="1" stopColor="#080d1b" />
                </radialGradient>
              </defs>
              <circle cx="260" cy="260" r="236" fill="url(#face)" stroke="#232c44" strokeWidth="2" />
              <g className="g-ring1">
                <circle
                  cx="260"
                  cy="260"
                  r="250"
                  fill="none"
                  stroke="#ff6a2b"
                  strokeOpacity=".7"
                  strokeWidth="2"
                  strokeDasharray="3 13"
                />
              </g>
              <g className="g-ring2">
                <circle
                  cx="260"
                  cy="260"
                  r="124"
                  fill="none"
                  stroke="#3a4670"
                  strokeWidth="1.5"
                  strokeDasharray="40 10 4 10"
                />
              </g>
              <path
                d="M103.02 416.98A222 222 0 1 1 416.98 416.98"
                pathLength="270"
                fill="none"
                stroke="#5a6690"
                strokeWidth="10"
                strokeDasharray="1.2 6.8"
              />
              <path
                d="M118.58 401.42A200 200 0 1 1 401.42 401.42"
                pathLength="270"
                fill="none"
                stroke="#161e36"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <path
                className="g-prog"
                d="M118.58 401.42A200 200 0 1 1 401.42 401.42"
                pathLength="270"
                fill="none"
                stroke="url(#hg)"
                strokeWidth="22"
                strokeLinecap="round"
                strokeDasharray="0 400"
              />
              <g className="g-needle">
                <path d="M222 257.500 260 254v12l-38-3.500z" fill="#f4f6fb" />
                <path d="M260 253 424 259.500v1L260 267z" fill="#ff6a2b" />
              </g>
              <circle cx="260" cy="260" r="20" fill="#0a1022" stroke="#ff6a2b" strokeWidth="3" />
              <circle cx="260" cy="260" r="6" fill="#ff6a2b" />
            </svg>

            {/* Sweeping Laser Scanline */}
            <div className="scanline" style={{ top: 0 }} />

            {/* Central Live Scan Telemetry Readout */}
            <div className="absolute top-[63%] right-0 left-0 text-center">
              <div className="flex items-baseline justify-center gap-1 font-display text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-none tracking-[0.02em]">
                <span className="readout" />
                <span className="text-xl sm:text-[26px]" style={{ color: 'var(--ac)' }}>
                  %
                </span>
              </div>
              <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.24em] text-[#a9b1c6] uppercase">
                Live system scan
              </div>
            </div>

            {/* Floating Diagnostic Chips (Hidden on small mobile so they don't block the gauge) */}
            <div className="chip hidden sm:flex" style={{ left: '-3%', top: '16%', animationDelay: '-1s' }}>
              <span className="dot" />
              <span>OEM Parts</span>
            </div>
            <div className="chip hidden sm:flex" style={{ right: '-2%', top: '30%', animationDelay: '-2.4s' }}>
              <span className="dot" style={{ animationDelay: '.4s' }} />
              <span>Hydraulic Lift</span>
            </div>
            <div className="chip hidden sm:flex" style={{ left: '2%', top: '72%', animationDelay: '-3.6s' }}>
              <span className="dot" style={{ animationDelay: '.8s' }} />
              <span>OBD Diagnostics</span>
            </div>
          </div>

          {/* 24/7 Roadside Assistance & Towing Card - Sits cleanly below gauge on mobile, floats on desktop */}
          <div
            className="gcard chamfer relative sm:absolute sm:-right-[2%] sm:-bottom-[2%] mt-4 sm:mt-0 w-full sm:w-[min(290px,85%)] p-3.5 sm:p-4 shadow-2xl backdrop-blur-xl border border-[#2a3452]/80 bg-[#0c1220]/95"
            style={{ animation: 'bob 6s ease-in-out -2s infinite' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-display text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#ff6a2b]">
                <span className="dot" />
                <span>24/7 Roadside Fleet</span>
              </div>
              <span className="rounded bg-[#ff6a2b]/15 px-2 py-0.5 text-[10px] font-semibold text-[#ff6a2b] border border-[#ff6a2b]/30">
                Hydraulic
              </span>
            </div>
            <div className="mt-1.5 font-display text-base sm:text-[19px] font-bold tracking-wide uppercase text-white">
              Flatbed Towing Service
            </div>
            <div className="mt-0.5 text-[11px] sm:text-[12px] leading-relaxed text-[#c3cadb]">
              Zero-scrape loading • Rapid Hyderabad dispatch
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={onRequestTowing}
                className="btn btn-p chamfer flex-1 justify-center !min-h-[36px] !text-[12px] !tracking-wider"
              >
                Dispatch Towing
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-g chamfer !min-h-[36px] !px-3 !text-[12px]"
                title="Call Helpline"
              >
                Call
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator - Desktop only */}
      <div className="hidden lg:flex absolute bottom-[20px] left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] text-[#a9b1c6] uppercase">
        <span>Scroll</span>
        <span
          className="h-[30px] w-[1px]"
          style={{
            background: 'linear-gradient(to bottom, var(--ac), transparent)',
            animation: 'blink 1.6s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
