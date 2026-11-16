import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { CONTACT_INFO, FAQS } from '../data'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
            <HelpCircle size={15} /> Transparent Answers
          </div>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Frequently Asked <span className="text-racing">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Everything you need to know about our genuine parts warranty, diagnostics process, pricing estimates, and EV capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-slate-300 bg-white shadow-md'
                    : 'border-slate-200 bg-white/70 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                    {faq.question}
                  </span>
                  <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-racing text-white' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-slate-100 px-5 pb-6 pt-2 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-slate-900">
              Have a specific question about your car?
            </h4>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Our service advisors are available on WhatsApp for instant guidance.
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:brightness-105 sm:mt-0"
          >
            <MessageCircle size={16} />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  )
}

