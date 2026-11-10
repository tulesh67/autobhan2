import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showroom from './components/Showroom'
import Services from './components/Services'
import Engineering from './components/Engineering'
import Booking, { type Prefill } from './components/Booking'
import { Contact, Footer, Gallery, How, Reviews, Why } from './components/Extras'

export default function App() {
  const [prefill, setPrefill] = useState<Prefill>({ n: 0 })

  const book = useCallback((p: { brand?: string; model?: string; service?: string }) => {
    setPrefill((s) => ({ ...p, n: s.n + 1 }))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTimeout(() => document.getElementById('book')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }), 50)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showroom onBook={book} />
        <Services onBook={book} />
        <Engineering onBook={book} />
        <Why />
        <Gallery />
        <How />
        <Reviews />
        <Booking prefill={prefill} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
