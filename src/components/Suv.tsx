import { useId } from 'react'

// Shared outlines (viewBox 0 0 800 330) so the blueprint matches the render.
export const BODY_PATH =
  'M52 266 L58 214 Q62 196 84 192 L168 184 L238 112 Q248 102 264 102 L520 102 Q538 102 550 114 L616 184 L712 196 Q742 202 748 232 L752 266 Q752 278 740 278 L64 278 Q50 278 52 266 Z'
export const GLASS_PATH = 'M252 118 L510 118 L556 180 L206 180 Z'
export const WHEELS = [190, 610]

type Props = { body?: string; lights?: boolean; spin?: boolean; className?: string }

export default function Suv({ body = '#cfd2d8', lights = false, spin = false, className = '' }: Props) {
  const id = useId().replace(/:/g, '')
  const n = (s: string) => `${s}${id}`
  return (
    <svg viewBox="0 0 800 330" overflow="visible" className={className} role="img" aria-label="Stylised SUV illustration">
      <defs>
        <linearGradient id={n('shade')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".5" />
          <stop offset=".45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id={n('glass')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a3342" />
          <stop offset=".5" stopColor="#0d1015" />
          <stop offset="1" stopColor="#1b2230" />
        </linearGradient>
        <radialGradient id={n('glow')}>
          <stop offset="0" stopColor="#fff6e0" stopOpacity=".95" />
          <stop offset=".35" stopColor="#ffb066" stopOpacity=".5" />
          <stop offset="1" stopColor="#ff5a1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={n('beam')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe9c4" stopOpacity=".55" />
          <stop offset="1" stopColor="#ffe9c4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={n('shadow')}>
          <stop offset="0" stopColor="#000" stopOpacity=".75" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="400" cy="318" rx="390" ry="16" fill={`url(#${n('shadow')})`} />

      {/* Headlight beam and glow */}
      <g style={{ opacity: lights ? 1 : 0, transition: 'opacity 0.9s ease' }}>
        <polygon points="732,206 1160,120 1160,330 732,226" fill={`url(#${n('beam')})`} />
        <circle className="flicker" cx="726" cy="212" r="90" fill={`url(#${n('glow')})`} />
      </g>

      {/* Body */}
      <path d={BODY_PATH} fill={body} />
      <path d={BODY_PATH} fill={`url(#${n('shade')})`} />
      <path d={GLASS_PATH} fill={`url(#${n('glass')})`} />
      <path d="M270 126 L330 126 L300 170 L240 170 Z" fill="#fff" opacity=".07" />
      <g stroke="#000" strokeOpacity=".35" strokeWidth="2" fill="none">
        <line x1="372" y1="118" x2="372" y2="270" />
        <line x1="476" y1="118" x2="476" y2="270" />
        <line x1="62" y1="226" x2="742" y2="226" strokeOpacity=".18" />
      </g>
      <line x1="266" y1="97" x2="516" y2="97" stroke="#9aa0a8" strokeWidth="4" strokeLinecap="round" />
      <rect x="346" y="234" width="18" height="4" rx="2" fill="#000" opacity=".4" />
      <rect x="450" y="234" width="18" height="4" rx="2" fill="#000" opacity=".4" />

      {/* Lights */}
      <path d="M700 204 L740 211 Q746 216 744 224 L706 222 Z" fill={lights ? '#fff6e0' : '#6b7280'} style={{ transition: 'fill .6s' }} />
      <rect x="722" y="238" width="26" height="8" rx="2" fill="#0c0d10" opacity=".8" />
      <rect x="52" y="206" width="9" height="20" rx="2" fill="#ff5a1f" />

      {/* Wheels */}
      {WHEELS.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="272" r="58" fill="#07080a" />
          <circle cx={cx} cy="272" r="46" fill="#14151a" />
          <g className={spin ? 'spin-slow' : ''}>
            <circle cx={cx} cy="272" r="30" fill="#a4aab3" />
            <circle cx={cx} cy="272" r="24" fill="#23262c" />
            {[0, 1, 2, 3, 4].map((i) => {
              const a = (i * 72 * Math.PI) / 180
              return <line key={i} x1={cx} y1="272" x2={cx + 26 * Math.cos(a)} y2={272 + 26 * Math.sin(a)} stroke="#a4aab3" strokeWidth="6" strokeLinecap="round" />
            })}
            <circle cx={cx} cy="272" r="6" fill="#d7dbe0" />
          </g>
        </g>
      ))}
    </svg>
  )
}
