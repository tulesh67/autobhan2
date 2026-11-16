import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, CheckCircle2, MapPin, MessageSquare, Navigation, Phone, Shield, Truck, X } from 'lucide-react'
import { CONTACT_INFO } from '../data'

type TowingModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function TowingModal({ isOpen, onClose }: TowingModalProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [destination, setDestination] = useState('AutoBhan Cars Workshop, Hyderabad')
  const [problem, setProblem] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = prev
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `*EMERGENCY ROADSIDE / FLATBED TOWING REQUEST*
- *Name:* ${name || 'Customer'}
- *Phone:* ${mobile || 'Not specified'}
- *Vehicle:* ${vehicle || 'Car'}
- *Breakdown Location:* ${currentLocation || 'Hyderabad'}
- *Destination:* ${destination}
- *Issue Description:* ${problem || 'Vehicle breakdown / requires towing'}

Please dispatch our flatbed recovery carrier immediately.`

    const url = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-xl sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="24/7 Roadside Assistance & Towing"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="gcard chamfer relative my-auto w-full max-w-xl overflow-hidden border border-[#2a3452] bg-[#0c1220] text-[#f4f6fb] shadow-2xl"
        style={{ borderRadius: 0 }}
      >
        {/* Top Emergency Header Bar */}
        <div className="relative border-b border-[#141b2e] bg-[#080d1a] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="grid h-11 w-11 place-items-center border border-[#ff6a2b]/40 bg-[#ff6a2b]/10 text-[#ff6a2b]">
                <Truck size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff6a2b]">
                  <span className="dot" />
                  <span>24/7 Emergency Fleet</span>
                </div>
                <h2 className="mt-0.5 font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                  Hydraulic Flatbed Towing
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="grid h-9 w-9 place-items-center border border-[#141b2e] text-[#a9b1c6] transition hover:border-[#ff6a2b] hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[12px] text-[#c3cadb]">
            <Shield size={14} className="text-[#ff6a2b]" />
            <span>Company-owned zero-damage hydraulic flatbed on standby across Hyderabad.</span>
          </div>
        </div>

        {/* Modal Form Content */}
        <div className="p-6">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-widest text-[#a9b1c6]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Varma"
                  className="w-full border border-[#141b2e] bg-[#10172b] px-3.5 py-2.5 text-sm text-white placeholder-[#5a6685] outline-none transition focus:border-[#ff6a2b]"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-widest text-[#a9b1c6]">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="e.g. 9246155784"
                  className="w-full border border-[#141b2e] bg-[#10172b] px-3.5 py-2.5 text-sm text-white placeholder-[#5a6685] outline-none transition focus:border-[#ff6a2b]"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-widest text-[#a9b1c6]">
                Vehicle Make &amp; Model *
              </label>
              <input
                type="text"
                required
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="e.g. Toyota Fortuner / Mahindra Thar / Hyundai Creta"
                className="w-full border border-[#141b2e] bg-[#10172b] px-3.5 py-2.5 text-sm text-white placeholder-[#5a6685] outline-none transition focus:border-[#ff6a2b]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-widest text-[#a9b1c6]">
                  Breakdown Location in Hyderabad *
                </label>
                <div className="relative">
                  <MapPin size={15} className="absolute left-3 top-3 text-[#ff6a2b]" />
                  <input
                    type="text"
                    required
                    value={currentLocation}
                    onChange={(e) => setCurrentLocation(e.target.value)}
                    placeholder="e.g. Near Hitec City / Gachibowli"
                    className="w-full border border-[#141b2e] bg-[#10172b] py-2.5 pl-9 pr-3.5 text-sm text-white placeholder-[#5a6685] outline-none transition focus:border-[#ff6a2b]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-widest text-[#a9b1c6]">
                  Destination
                </label>
                <div className="relative">
                  <Navigation size={15} className="absolute left-3 top-3 text-[#ff6a2b]" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="AutoBhan Workshop or Your Address"
                    className="w-full border border-[#141b2e] bg-[#10172b] py-2.5 pl-9 pr-3.5 text-sm text-white placeholder-[#5a6685] outline-none transition focus:border-[#ff6a2b]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-widest text-[#a9b1c6]">
                Vehicle Issue / Condition
              </label>
              <textarea
                rows={2}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. Engine breakdown, punctured tyre, dead battery, collision recovery..."
                className="w-full border border-[#141b2e] bg-[#10172b] px-3.5 py-2.5 text-sm text-white placeholder-[#5a6685] outline-none transition focus:border-[#ff6a2b]"
              />
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="btn btn-p chamfer flex-1 justify-center !min-h-[46px] !text-[14px]"
              >
                <MessageSquare size={16} />
                <span>Instant Dispatch via WhatsApp</span>
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-g chamfer justify-center !min-h-[46px] !px-5 !text-[14px]"
              >
                <Phone size={16} className="text-[#ff6a2b]" />
                <span>Call Helpline</span>
              </a>
            </div>
          </form>

          {submitted && (
            <div className="mt-4 flex items-center gap-2 border border-[#3be07a]/40 bg-[#3be07a]/10 p-3 text-xs text-[#3be07a]">
              <CheckCircle2 size={16} className="shrink-0" />
              <span>Request sent to towing team. Stand by for immediate driver dispatch confirmation.</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
