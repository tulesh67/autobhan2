import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Suv from './Suv'
import { BRANDS } from '../data'
import { EASE } from './Reveal'

const LINE1 = 'ENGINEERED FOR THE ROAD.'.split(' ')
const LINE2 = 'PERFECTED IN OUR GARAGE.'.split(' ')

function Words({ words, start, className = '' }: { words: string[]; start: number; className?: string }) {
  return (
    <span className={`block ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: start + i * 0.08, ease: EASE }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [lights, setLights] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 16 })
  const sy = useSpring(my, { stiffness: 60, damping: 16 })
  const rotY = useTransform(sx, [-1, 1], [-7, 7])
  const rotX = useTransform(sy, [-1, 1], [4, -4])
  const carX = useTransform(sx, [-1, 1], [-16, 16])
  const bgX = useTransform(sx, [-1, 1], [24, -24])
  const glowX = useTransform(sx, [-1, 1], [-40, 40])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])

  useEffect(() => {
    const t = setTimeout(() => setLights(true), reduce ? 0 : 1500)
    return () => clearTimeout(t)
  }, [reduce])

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }

  return (
    <section id="top" ref={ref} onMouseMove={onMove} className="relative min-h-screen overflow-hidden bg-obsidian">
      {/* Background layers */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_60%_70%,black,transparent_70%)]" />
      <motion.div style={{ x: glowX }} className="pointer-events-none absolute -right-40 top-1/4 h-[620px] w-[620px] rounded-full bg-racing/20 blur-[140px]" />
      <motion.div
        style={{ x: bgX }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38%] select-none text-center font-display text-[20vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]"
      >
        AUTOBHAN
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian to-transparent" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-24 pt-32 sm:px-8">
        <motion.div style={{ y: textY }} className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="kicker mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-racing" /> Precision Automotive Garage
          </motion.p>
          <h1 className="font-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-tight">
            <Words words={LINE1} start={0.35} />
            <Words words={LINE2} start={0.75} className="text-racing" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg text-white/70"
          >
            Precision automotive care. Advanced diagnostics. Professional vehicle restoration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#showroom" className="btn-primary">Explore Our Garage <ArrowRight size={18} /></a>
            <a href="#book" className="btn-ghost">Book a Service</a>
          </motion.div>
        </motion.div>

        {/* Vehicle */}
        <div className="relative mt-10 w-full md:mt-0" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ x: -420, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: EASE }}
          >
            <motion.div style={{ rotateY: rotY, rotateX: rotX, x: carX, y: scrollY, transformStyle: 'preserve-3d' }}>
              <Suv
                body="#d9dce1"
                lights={lights}
                spin
                className="mx-auto w-[130%] max-w-none -translate-x-[12%] sm:w-full sm:max-w-[920px] sm:translate-x-[8%] md:ml-auto md:mr-0 md:w-[78%] md:translate-x-0"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue + brand ticker */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <a href="#showroom" aria-label="Scroll to showroom" className="mx-auto mb-3 flex w-fit flex-col items-center text-white/50 hover:text-racing">
          <ChevronDown size={22} className="animate-bounce" />
        </a>
        <div className="overflow-hidden border-t border-white/10 bg-obsidian/70 py-3 backdrop-blur">
          <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-lg uppercase tracking-[0.35em] text-white/45">
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="flex items-center gap-12">{b}<span className="h-1.5 w-1.5 bg-racing" /></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
