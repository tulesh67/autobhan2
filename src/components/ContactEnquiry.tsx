import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarCheck,
  Check,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PhoneCall,
  Send,
  Truck,
  Wrench,
} from 'lucide-react'
import { BRANDS, CONTACT_INFO, SERVICES, VEHICLES } from '../data'

export type PrefillData = {
  brand?: string
  model?: string
  service?: string
  n: number
}

type FormState = {
  name: string
  mobile: string
  email: string
  brand: string
  model: string
  reg: string
  service: string
  date: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>
type SavedBooking = FormState & { ref: string; createdAt: string }

const EMPTY_FORM: FormState = {
  name: '',
  mobile: '',
  email: '',
  brand: '',
  model: '',
  reg: '',
  service: '',
  date: '',
  message: '',
}

const STORAGE_KEY = 'garage_bookings'
const todayStr = () => new Date().toLocaleDateString('en-CA')

function makeRef() {
  const d = new Date()
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `ABH-${ymd}-${rnd}`
}

function readAllBookings(): SavedBooking[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export default function ContactEnquiry({ prefill }: { prefill: PrefillData }) {
  const [activeTab, setActiveTab] = useState<'service' | 'enquiry'>('service')
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<Errors>({})
  const [confirmedBooking, setConfirmedBooking] = useState<SavedBooking | null>(null)
  const [bookingCount, setBookingCount] = useState(0)

  useEffect(() => {
    setBookingCount(readAllBookings().length)
  }, [])

  useEffect(() => {
    if (!prefill.n) return
    setConfirmedBooking(null)
    setForm((prev) => ({
      ...prev,
      brand: prefill.brand ?? prev.brand,
      model: prefill.model ?? (prefill.brand && prefill.brand !== prev.brand ? '' : prev.model),
      service: prefill.service ?? prev.service,
    }))
    if (prefill.service) setActiveTab('service')
    else if (prefill.model) setActiveTab('enquiry')
  }, [prefill])

  const setField = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): Errors => {
    const err: Errors = {}
    if (form.name.trim().length < 2) err.name = 'Please enter your full name'
    if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/[\s-]/g, ''))) {
      err.mobile = 'Enter a valid 10-digit mobile number'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      err.email = 'Enter a valid email address'
    }

    if (activeTab === 'service') {
      if (!form.brand) err.brand = 'Select vehicle brand'
      if (!form.service) err.service = 'Select required service'
      if (!form.date) err.date = 'Select preferred appointment date'
      else if (form.date < todayStr()) err.date = 'Date cannot be in the past'
    }
    return err
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      const first = Object.keys(errs)[0]
      document.getElementById(`field-${first}`)?.focus()
      return
    }

    const rec: SavedBooking = {
      ...form,
      reg: form.reg.trim().toUpperCase(),
      ref: makeRef(),
      createdAt: new Date().toISOString(),
    }

    try {
      const all = readAllBookings()
      all.push(rec)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
      setBookingCount(all.length)
    } catch {
      // storage fallback
    }

    setConfirmedBooking(rec)
    setForm(EMPTY_FORM)
  }

  const availableModels = VEHICLES.filter((v) => v.brand === form.brand).map((v) => v.name)

  const whatsappConfirmUrl = confirmedBooking
    ? `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
      `Hi AutoBhan Cars, I booked an appointment (Ref: ${confirmedBooking.ref}).\nName: ${confirmedBooking.name}\nMobile: ${confirmedBooking.mobile}\nVehicle: ${confirmedBooking.brand} ${confirmedBooking.model || ''}\nService: ${confirmedBooking.service || 'General Enquiry'}\nDate: ${confirmedBooking.date || 'Earliest Available'}`
    )}`
    : ''

  return (
    <section id="contact" className="relative bg-slate-50 py-20 text-slate-900 sm:py-28 border-t border-slate-200/80">
      <div id="enquiry" className="absolute -top-24" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-racing">
            Get in Touch
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
            Book Service / <span className="text-racing">Vehicle Enquiry</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Reserve your diagnostic bay or submit an enquiry for any car in our inventory. Our Hyderabad team confirms all requests within 30 minutes.
          </p>
        </div>

        {/* Content Grid: Form on Left, Direct Contact Cards on Right */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Left Column: Interactive Form & Confirmation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">

              {/* Form Tabs */}
              <div className="flex rounded-xl bg-slate-100 p-1 mb-8">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('service')
                    setConfirmedBooking(null)
                  }}
                  className={`flex-1 rounded-lg py-2.5 font-display text-xs font-bold uppercase tracking-wider transition ${activeTab === 'service'
                      ? 'bg-racing text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  Book Service Bay
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('enquiry')
                    setConfirmedBooking(null)
                  }}
                  className={`flex-1 rounded-lg py-2.5 font-display text-xs font-bold uppercase tracking-wider transition ${activeTab === 'enquiry'
                      ? 'bg-racing text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  Vehicle / General Enquiry
                </button>
              </div>

              <AnimatePresence mode="wait">
                {confirmedBooking ? (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-6 text-center"
                  >
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-racing text-white shadow-lg shadow-racing/30">
                      <Check size={38} />
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-extrabold uppercase text-slate-900">
                      Request Registered Successfully!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Your reference ID has been recorded. Click below to verify instantly on WhatsApp:
                    </p>

                    <div className="mx-auto mt-5 inline-block rounded-lg border border-racing/60 bg-racing/10 px-6 py-3 font-display text-2xl font-bold tracking-[0.2em] text-racing">
                      {confirmedBooking.ref}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2 text-left text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto">
                      <div><span className="text-slate-500">Name:</span> <p className="font-semibold text-slate-800">{confirmedBooking.name}</p></div>
                      <div><span className="text-slate-500">Mobile:</span> <p className="font-semibold text-slate-800">{confirmedBooking.mobile}</p></div>
                      <div><span className="text-slate-500">Vehicle:</span> <p className="font-semibold text-slate-800">{confirmedBooking.brand} {confirmedBooking.model || ''}</p></div>
                      <div><span className="text-slate-500">Request:</span> <p className="font-semibold text-slate-800">{confirmedBooking.service || 'Enquiry'}</p></div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        href={whatsappConfirmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !bg-[#25D366] hover:!bg-[#20ba59]"
                      >
                        <MessageSquare size={17} /> Confirm via WhatsApp Now
                      </a>
                      <button
                        type="button"
                        onClick={() => setConfirmedBooking(null)}
                        className="btn-ghost"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    {/* Full Name */}
                    <div>
                      <label htmlFor="field-name" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        placeholder="e.g. Ramesh Varma"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 outline-none transition focus:border-racing focus:bg-white ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="field-mobile" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Mobile Number *
                      </label>
                      <input
                        id="field-mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={(e) => setField('mobile', e.target.value)}
                        placeholder="10-digit number (e.g. 9246155784)"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 outline-none transition focus:border-racing focus:bg-white ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                      />
                      {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="field-email" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Email Address (Optional)
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        placeholder="name@example.com"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-racing focus:bg-white"
                      />
                    </div>

                    {/* Brand */}
                    <div>
                      <label htmlFor="field-brand" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Vehicle Brand {activeTab === 'service' ? '*' : ''}
                      </label>
                      <select
                        id="field-brand"
                        value={form.brand}
                        onChange={(e) => {
                          setField('brand', e.target.value)
                          setField('model', '')
                        }}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 bg-slate-50 outline-none transition focus:border-racing focus:bg-white ${errors.brand ? 'border-red-500' : 'border-slate-200'
                          }`}
                      >
                        <option value="">Select Brand</option>
                        {BRANDS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                        <option value="Other">Other Brand</option>
                      </select>
                      {errors.brand && <p className="mt-1 text-xs text-red-500">{errors.brand}</p>}
                    </div>

                    {/* Model */}
                    <div>
                      <label htmlFor="field-model" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Vehicle Model
                      </label>
                      <input
                        id="field-model"
                        list="model-list"
                        type="text"
                        value={form.model}
                        onChange={(e) => setField('model', e.target.value)}
                        placeholder="e.g. Fortuner, Thar, Creta"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-racing focus:bg-white"
                      />
                      <datalist id="model-list">
                        {availableModels.map((m) => (
                          <option key={m} value={m} />
                        ))}
                      </datalist>
                    </div>

                    {/* Service Selection or Registration */}
                    {activeTab === 'service' ? (
                      <>
                        <div>
                          <label htmlFor="field-service" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Service Required *
                          </label>
                          <select
                            id="field-service"
                            value={form.service}
                            onChange={(e) => setField('service', e.target.value)}
                            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 bg-slate-50 outline-none transition focus:border-racing focus:bg-white ${errors.service ? 'border-red-500' : 'border-slate-200'
                              }`}
                          >
                            <option value="">Select Service</option>
                            {SERVICES.map((s) => (
                              <option key={s.title} value={s.title}>
                                {s.title} ({s.priceStart})
                              </option>
                            ))}
                          </select>
                          {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                        </div>

                        <div>
                          <label htmlFor="field-date" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Preferred Date *
                          </label>
                          <input
                            id="field-date"
                            type="date"
                            min={todayStr()}
                            value={form.date}
                            onChange={(e) => setField('date', e.target.value)}
                            className={`w-full rounded-lg border px-4 py-2 text-sm text-slate-900 bg-slate-50 outline-none transition focus:border-racing focus:bg-white ${errors.date ? 'border-red-500' : 'border-slate-200'
                              }`}
                          />
                          {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                        </div>

                        <div>
                          <label htmlFor="field-reg" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Vehicle Registration No.
                          </label>
                          <input
                            id="field-reg"
                            type="text"
                            value={form.reg}
                            onChange={(e) => setField('reg', e.target.value)}
                            placeholder="e.g. TS09AB1234"
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm uppercase text-slate-900 placeholder-slate-400 outline-none transition focus:border-racing focus:bg-white"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="sm:col-span-2">
                        <label htmlFor="field-message" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Enquiry Message / Requirements
                        </label>
                        <textarea
                          id="field-message"
                          rows={3}
                          value={form.message}
                          onChange={(e) => setField('message', e.target.value)}
                          placeholder="Tell us what you are looking for (e.g. pricing, availability, test drive, custom diagnostics)..."
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-racing focus:bg-white"
                        />
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="btn-primary flex w-full sm:w-auto items-center justify-center gap-2 !min-h-[46px]"
                      >
                        {activeTab === 'service' ? (
                          <>
                            <CalendarCheck size={18} /> Confirm Service Booking
                          </>
                        ) : (
                          <>
                            <Send size={18} /> Submit Vehicle Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Direct Contact & Facility Card */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Contact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="group rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-racing hover:shadow-md"
              >
                <Phone size={22} className="text-racing" />
                <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-widest text-slate-400">Primary Phone</p>
                <p className="mt-1 text-sm font-bold text-slate-900 group-hover:text-racing transition">{CONTACT_INFO.phone}</p>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneAlt}`}
                className="group rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-racing hover:shadow-md"
              >
                <PhoneCall size={22} className="text-racing" />
                <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-widest text-slate-400">Secondary Helpline</p>
                <p className="mt-1 text-sm font-bold text-slate-900 group-hover:text-racing transition">{CONTACT_INFO.phoneAlt}</p>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-racing hover:shadow-md"
              >
                <Mail size={22} className="text-racing" />
                <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-widest text-slate-400">Official Direct Email</p>
                <p className="mt-1 text-xs font-bold text-slate-900 truncate group-hover:text-racing transition">{CONTACT_INFO.email}</p>
              </a>

              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm">
                <Clock size={22} className="text-racing" />
                <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-widest text-slate-400">Working Hours</p>
                <p className="mt-1 text-xs font-semibold text-slate-800">Mon – Sat: 9 AM – 8 PM</p>
              </div>
            </div>

            {/* Official Facility & Google Maps Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="AutoBhan Cars Official Logo"
                className="mx-auto h-16 w-auto object-contain"
              />
              <h4 className="mt-3 font-display text-2xl font-black uppercase tracking-wide text-slate-900">
                AutoBhan Cars Hyderabad
              </h4>
              <p className="mt-1 text-xs text-slate-600">
                Centrally located multi-brand workshop with certified diagnostic bays &amp; OEM parts store.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 !text-xs !min-h-[42px]"
                >
                  <MapPin size={15} className="text-racing" /> Open Google Maps
                </a>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 !bg-[#25D366] hover:!bg-[#20ba59] !text-xs !min-h-[42px]"
                >
                  <MessageSquare size={15} /> WhatsApp Advisor
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
