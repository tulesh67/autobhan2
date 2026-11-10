import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHead } from './Reveal'
import { SERVICES } from '../data'

export default function Services({ onBook }: { onBook: (p: { service: string }) => void }) {
  return (
    <section id="services" className="relative bg-charcoal/60">
      <div className="section">
        <SectionHead kicker="Garage Services" title={<>Every system. <span className="text-racing">One workshop.</span></>} sub="From routine care to complex repairs, handled with diagnostic precision." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map(({ title, desc, Icon, tone }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.07}>
              <motion.button
                onClick={() => onBook({ service: title })}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                aria-label={`Book ${title}`}
                className="group relative flex h-full min-h-[260px] w-full flex-col justify-between overflow-hidden border border-white/10 bg-obsidian p-6 text-left"
              >
                <motion.div
                  aria-hidden="true"
                  variants={{ hover: { scale: 1.4, rotate: 12 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -right-6 -top-6 opacity-[0.07]"
                  style={{ color: tone }}
                >
                  <Icon size={190} strokeWidth={1} />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-racing/0 to-racing/0 transition-all duration-500 group-hover:from-racing/15" />
                <span className="relative grid h-14 w-14 place-items-center border border-white/15 bg-white/[0.04] transition group-hover:border-racing group-hover:bg-racing" style={{ color: tone }}>
                  <Icon size={26} className="transition group-hover:text-white" />
                </span>
                <div className="relative mt-10">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide">{title}</h3>
                  <p className="mt-2 text-sm text-white/60">{desc}</p>
                  <span className="mt-4 flex items-center gap-1 font-display text-xs uppercase tracking-[0.25em] text-white/40 transition group-hover:text-racing">
                    Book <ArrowUpRight size={14} />
                  </span>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-racing transition-transform duration-500 group-hover:scale-x-100" />
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
