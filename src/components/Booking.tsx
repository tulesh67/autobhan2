import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarCheck,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { SectionHead } from './Reveal'
import { BRANDS, CONTACT_INFO, SERVICES, VEHICLES } from '../data'

export type Prefill = { brand?: string; model?: string; service?: string; n: number }

type F = { name: string; mobile: string; email: string; brand: string; model: string; reg: string; service: string; date: string }
type Errors = Partial<Record<keyof F, string>>
type Saved = F & { ref: string; createdAt: string }

const EMPTY: F = { name: '', mobile: '', email: '', brand: '', model: '', reg: '', service: '', date: '' }
const KEY = 'garage_bookings'
const today = () => new Date().toLocaleDateString('en-CA')

function validate(f: F): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Enter your full name'
  if (!/^[6-9]\d{9}$/.test(f.mobile.replace(/[\s-]/g, ''))) e.mobile = 'Enter a valid 10-digit mobile number'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.email = 'Enter a valid email address'
  if (!f.brand) e.brand = 'Select a brand'
  if (!f.model.trim()) e.model = 'Enter your vehicle model'
  if (!/^[A-Z]{2}\s?-?\d{1,2}\s?-?[A-Z]{0,3}\s?-?\d{4}$/.test(f.reg.trim().toUpperCase())) e.reg = 'Format like TS09AB1234'
  if (!f.service) e.service = 'Select a service'
  if (!f.date) e.date = 'Choose a date'
  else if (f.date < today()) e.date = 'Date cannot be in the past'
  return e
}

function readAll(): Saved[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

function makeRef() {
  const d = new Date()
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `ABH-${ymd}-${rnd}`
}

function Field({ label, error, children, id }: { label: string; error?: string; children: React.ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-[#ff8a6b]">{error}</p>}
    </div>
  )
}

export default function Booking({ prefill }: { prefill: Prefill }) {
  const [f, setF] = useState<F>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState<Saved | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => setCount(readAll().length), [])

  useEffect(() => {
    if (!prefill.n) return
    setDone(null)
    setF((p) => ({
      ...p,
      brand: prefill.brand ?? p.brand,
      model: prefill.model ?? (prefill.brand && prefill.brand !== p.brand ? '' : p.model),
      service: prefill.service ?? p.service,
    }))
  }, [prefill])

  const set = (k: keyof F, v: string) => {
    setF((p) => ({ ...p, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(f)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const rec: Saved = { ...f, reg: f.reg.trim().toUpperCase(), ref: makeRef(), createdAt: new Date().toISOString() }
    try {
      const all = readAll()
      all.push(rec)
      localStorage.setItem(KEY, JSON.stringify(all))
      setCount(all.length)
    } catch { /* storage unavailable: confirmation still shown */ }
    setDone(rec)
    setF(EMPTY)
  }

  const models = VEHICLES.filter((v) => v.brand === f.brand).map((v) => v.name)
  const cls = (k: keyof F) => `field ${errors[k] ? '!border-[#ff8a6b]' : ''}`
  const aria = (k: keyof F) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `f-${k}-err` : undefined })

  return (
    <section id="book" className="relative overflow-hidden bg-white py-20 sm:py-28 border-t border-slate-200/80">
      <div id="contact" className="pointer-events-none absolute -top-24 h-0" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <SectionHead
          kicker="Contact & Booking"
          title={<>Reserve your <span className="text-racing">bay</span></>}
          sub="Fill in your vehicle details to book a service slot, or reach out directly to our Hyderabad team."
        />

        {/* Contact Quick Details Bar */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-racing shadow-sm">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">Location</p>
              <p className="text-xs font-semibold text-slate-900">{CONTACT_INFO.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-racing shadow-sm">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">Call Helpline</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-xs font-semibold text-slate-900 hover:text-racing transition">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-racing shadow-sm">
              <Clock size={20} />
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">Working Hours</p>
              <p className="text-xs font-semibold text-slate-900">Mon–Sat: 9AM – 8PM</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#25D366] text-white shadow-sm">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp 24/7</p>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#25D366] hover:underline"
              >
                Chat with Advisor &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="glass mx-auto max-w-4xl p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="py-6 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.15 }} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-racing text-white shadow-lg shadow-racing/30">
                  <Check size={40} />
                </motion.div>
                <h3 className="mt-6 font-display text-4xl font-bold uppercase">Booking Confirmed</h3>
                <p className="mt-2 text-slate-600">Your service reference number:</p>
                <p className="mx-auto mt-4 w-fit border border-racing/60 bg-racing/10 px-8 py-3 font-display text-3xl font-extrabold tracking-[0.2em] text-racing rounded-lg">{done.ref}</p>
                <dl className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-px bg-slate-200 text-left text-sm rounded-lg overflow-hidden border border-slate-200">
                  {[['Name', done.name], ['Mobile', done.mobile], ['Vehicle', `${done.brand} ${done.model}`], ['Registration', done.reg], ['Service', done.service], ['Date', done.date]].map(([k, v]) => (
                    <div key={k} className="bg-white p-3"><dt className="text-xs uppercase tracking-widest text-slate-500">{k}</dt><dd className="mt-0.5 break-words font-medium">{v}</dd></div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/919246155784?text=${encodeURIComponent(`Hi Autobhan Cars, I booked a service (Ref: ${done.ref}).\nName: ${done.name}\nVehicle: ${done.brand} ${done.model}\nRegistration: ${done.reg}\nService: ${done.service}\nDate: ${done.date}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Confirm via WhatsApp
                  </a>
                  <button onClick={() => setDone(null)} className="btn-ghost">Book Another Service</button>
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
                <Field id="f-name" label="Name" error={errors.name}>
                  <input id="f-name" className={cls('name')} value={f.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" placeholder="Your full name" {...aria('name')} />
                </Field>
                <Field id="f-mobile" label="Mobile Number" error={errors.mobile}>
                  <input id="f-mobile" className={cls('mobile')} value={f.mobile} onChange={(e) => set('mobile', e.target.value)} inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" {...aria('mobile')} />
                </Field>
                <Field id="f-email" label="Email Address" error={errors.email}>
                  <input id="f-email" type="email" className={cls('email')} value={f.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" placeholder="you@example.com" {...aria('email')} />
                </Field>
                <Field id="f-reg" label="Registration Number" error={errors.reg}>
                  <input id="f-reg" className={`${cls('reg')} uppercase`} value={f.reg} onChange={(e) => set('reg', e.target.value)} placeholder="TS09AB1234" {...aria('reg')} />
                </Field>
                <Field id="f-brand" label="Vehicle Brand" error={errors.brand}>
                  <select id="f-brand" className={cls('brand')} value={f.brand} onChange={(e) => { set('brand', e.target.value); set('model', '') }} {...aria('brand')}>
                    <option value="" className="bg-white">Select vehicle make</option>
                    {[...BRANDS, 'Other'].map((b) => <option key={b} value={b} className="bg-white">{b}</option>)}
                  </select>
                </Field>
                <Field id="f-model" label="Vehicle Model" error={errors.model}>
                  <input id="f-model" list="models" className={cls('model')} value={f.model} onChange={(e) => set('model', e.target.value)} placeholder="Select or type model" {...aria('model')} />
                  <datalist id="models">{models.map((m) => <option key={m} value={m} />)}</datalist>
                </Field>
                <Field id="f-service" label="Service" error={errors.service}>
                  <select id="f-service" className={cls('service')} value={f.service} onChange={(e) => set('service', e.target.value)} {...aria('service')}>
                    <option value="" className="bg-white">Select required service</option>
                    {SERVICES.map((s) => <option key={s.title} value={s.title} className="bg-white">{s.title}</option>)}
                  </select>
                </Field>
                <Field id="f-date" label="Preferred Date" error={errors.date}>
                  <input id="f-date" type="date" min={today()} className={`${cls('date')} [color-scheme:light]`} value={f.date} onChange={(e) => set('date', e.target.value)} {...aria('date')} />
                </Field>
                <div className="sm:col-span-2 mt-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto"><CalendarCheck size={18} /> Confirm Service Slot</button>
                  {count > 0 && <p className="mt-3 text-xs text-slate-500">{count} booking{count === 1 ? '' : 's'} recorded on this device.</p>}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
