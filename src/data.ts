import {
  Wrench, Activity, Cog, Settings2, Disc3, MoveVertical, PaintBucket, Sparkles,
  ShieldCheck, Snowflake, Zap, BatteryCharging, Battery, Thermometer, Plug,
  type LucideIcon,
} from 'lucide-react'

// Placeholder brand name: replace with the real garage name.
export const BRAND = 'AUTOBHAN'

export type Vehicle = {
  id: string
  brand: string
  name: string
  body: string
  power: string
  seats: string
  ev: boolean
  color: string
  blurb: string
  image?: string
}

const carPhoto = (file: string) => `${import.meta.env.BASE_URL}cars/${file}`

export const VEHICLES: Vehicle[] = [
  { id: 'fortuner', brand: 'Toyota', name: 'Fortuner', body: 'Full-size SUV', power: 'Diesel / Petrol', seats: '7', ev: false, color: '#e9eaed', image: carPhoto('fortuner.jpg'), blurb: 'A body-on-frame workhorse. Drivetrain and suspension care keeps it dependable on every road.' },
  { id: 'hilux', brand: 'Toyota', name: 'Hilux', body: 'Pickup', power: 'Diesel', seats: '5', ev: false, color: '#9aa3ad', image: carPhoto('hilux.jpg'), blurb: 'Built to haul. Regular injector, brake and underbody checks protect its working life.' },
  { id: 'hycross', brand: 'Toyota', name: 'Innova Hycross', body: 'MPV', power: 'Petrol / Hybrid', seats: '7-8', ev: false, color: '#d8d4cc', image: carPhoto('hycross.jpg'), blurb: 'Family hauler with a hybrid option. We handle hybrid system health checks alongside routine care.' },
  { id: 'scorpio-n', brand: 'Mahindra', name: 'Scorpio N', body: 'SUV', power: 'Diesel / Petrol', seats: '6-7', ev: false, color: '#2b2f36', image: carPhoto('scorpio-n.jpg'), blurb: 'Tough, torquey and tall. Suspension, clutch and cooling are the key service areas.' },
  { id: 'thar-roxx', brand: 'Mahindra', name: 'Thar Roxx', body: '4x4 SUV', power: 'Diesel / Petrol', seats: '5', ev: false, color: '#c8553a', image: carPhoto('thar-roxx.jpg'), blurb: 'Off-road capable. Post-trail underbody, axle and brake inspections matter most.' },
  { id: 'xev-9e', brand: 'Mahindra', name: 'XEV 9e', body: 'Electric SUV coupe', power: 'Electric', seats: '5', ev: true, color: '#aeb6c2', image: carPhoto('xev-9e.jpg'), blurb: 'Software-rich electric platform. Battery health and high-voltage diagnostics are our focus.' },
  { id: 'xev-9s', brand: 'Mahindra', name: 'XEV 9S', body: 'Electric SUV', power: 'Electric', seats: '7', ev: true, color: '#7f8a99', image: carPhoto('xev-9s.jpg'), blurb: 'Three-row electric SUV. We cover battery, charging system and thermal management checks.' },
  { id: 'meridian', brand: 'Jeep', name: 'Meridian', body: '3-row SUV', power: 'Diesel', seats: '7', ev: false, color: '#5b6b5a', image: carPhoto('meridian.jpg'), blurb: 'Comfortable 7-seater. Drivetrain, AC and electrical systems get focused attention.' },
  { id: 'harrier-ev', brand: 'Tata', name: 'Harrier EV', body: 'Electric SUV', power: 'Electric', seats: '5', ev: true, color: '#d6d9de', image: carPhoto('harrier-ev.jpg'), blurb: 'Electric SUV care covers battery diagnostics, brake regen behaviour and suspension.' },
  { id: 'sierra', brand: 'Tata', name: 'Sierra', body: 'SUV', power: 'See manufacturer', seats: '5', ev: false, color: '#b9a98c', image: carPhoto('sierra.jpg'), blurb: 'A returning nameplate. Bring it in for a complete inspection and software scan.' },
  { id: 'gloster', brand: 'MG', name: 'Gloster', body: 'Full-size SUV', power: 'Diesel', seats: '6-7', ev: false, color: '#3a3f47', image: carPhoto('gloster.jpg'), blurb: 'Large premium SUV. Electronics, ADAS sensors and suspension are common service points.' },
  { id: 'mu-x', brand: 'Isuzu', name: 'MU-X', body: 'Full-size SUV', power: 'Diesel', seats: '7', ev: false, color: '#e2e3e6', image: carPhoto('mu-x.jpg'), blurb: 'Rugged diesel SUV. Fuel system, clutch and suspension upkeep keep it going.' },
  { id: 'creta', brand: 'Hyundai', name: 'Creta', body: 'Compact SUV', power: 'Petrol / Diesel', seats: '5', ev: false, color: '#8d9aab', image: carPhoto('creta.jpg'), blurb: 'The everyday SUV. Regular servicing, AC care and brake checks cover most needs.' },
  { id: 'seltos', brand: 'Kia', name: 'Seltos', body: 'Compact SUV', power: 'Petrol / Diesel', seats: '5', ev: false, color: '#444a52', image: carPhoto('seltos.jpg'), blurb: 'Sharp and feature-rich. We cover service, electronics and suspension.' },
]

export const BRANDS = ['Toyota', 'Mahindra', 'Jeep', 'Tata', 'MG', 'Isuzu', 'Hyundai', 'Kia']

export type Service = { title: string; desc: string; Icon: LucideIcon; tone: string }

export const SERVICES: Service[] = [
  { title: 'Complete Car Service', desc: 'Fluids, filters, brakes and a full multi-point inspection.', Icon: Wrench, tone: '#ff5a1f' },
  { title: 'Engine Diagnostics', desc: 'Scanner-led fault tracing before a single part is replaced.', Icon: Activity, tone: '#ff8a3d' },
  { title: 'Engine Repair', desc: 'Repairs and rebuilds with careful measurement and testing.', Icon: Cog, tone: '#ff5a1f' },
  { title: 'Transmission Repair', desc: 'Manual, automatic and DCT servicing and repair.', Icon: Settings2, tone: '#c4c8cf' },
  { title: 'Brake Repair', desc: 'Pads, discs, calipers and hydraulic system checks.', Icon: Disc3, tone: '#ff5a1f' },
  { title: 'Suspension Repair', desc: 'Shocks, bushes, arms and alignment for a settled ride.', Icon: MoveVertical, tone: '#c4c8cf' },
  { title: 'Denting and Painting', desc: 'Panel repair and colour-matched refinishing.', Icon: PaintBucket, tone: '#ff8a3d' },
  { title: 'Car Detailing', desc: 'Deep interior and exterior cleaning and paint correction.', Icon: Sparkles, tone: '#c4c8cf' },
  { title: 'Ceramic Coating', desc: 'Long-lasting gloss and protection for your paint.', Icon: ShieldCheck, tone: '#ff5a1f' },
  { title: 'AC Repair', desc: 'Gas refill, leak checks, compressor and cooling repair.', Icon: Snowflake, tone: '#c4c8cf' },
  { title: 'Electrical Repair', desc: 'Wiring, lighting, sensors, alternator and starter faults.', Icon: Zap, tone: '#ff8a3d' },
  { title: 'EV Diagnostics', desc: 'Battery health, charging and high-voltage system checks.', Icon: BatteryCharging, tone: '#ff5a1f' },
]

export type Hotspot = {
  id: string; label: string; Icon: LucideIcon; x: number; y: number
  text: string; checks: string[]; service: string
}

// x / y are percentages of the blueprint illustration
export const HOTSPOTS: Hotspot[] = [
  { id: 'engine', label: 'Engine', Icon: Cog, x: 81, y: 57, service: 'Engine Diagnostics',
    text: 'The power unit. We read fault codes, then verify with physical tests before recommending repairs.',
    checks: ['Fault code scan', 'Oil and leak inspection', 'Belt and timing check'] },
  { id: 'cooling', label: 'Cooling', Icon: Thermometer, x: 92, y: 70, service: 'Complete Car Service',
    text: 'Radiator, coolant and fans keep temperatures stable in heavy traffic and on long climbs.',
    checks: ['Coolant condition', 'Pressure test', 'Fan and thermostat check'] },
  { id: 'transmission', label: 'Transmission', Icon: Settings2, x: 59, y: 71, service: 'Transmission Repair',
    text: 'Gearbox and driveline care for smooth shifts and reliable torque delivery.',
    checks: ['Fluid inspection', 'Clutch and mount check', 'Shift behaviour test'] },
  { id: 'brakes', label: 'Brakes', Icon: Disc3, x: 76, y: 82, service: 'Brake Repair',
    text: 'Your most important safety system. We measure, not guess, pad and disc wear.',
    checks: ['Pad and disc measurement', 'Brake fluid test', 'Caliper function'] },
  { id: 'suspension', label: 'Suspension', Icon: MoveVertical, x: 24, y: 64, service: 'Suspension Repair',
    text: 'Shocks, springs and bushes decide ride comfort, grip and tyre life.',
    checks: ['Shock and spring check', 'Bush and link inspection', 'Alignment review'] },
  { id: 'battery', label: 'Battery', Icon: Battery, x: 43, y: 79, service: 'EV Diagnostics',
    text: 'From a 12V starter battery to high-voltage EV packs, we test health before it leaves you stranded.',
    checks: ['Load and health test', 'Charging system check', 'High-voltage safety scan'] },
  { id: 'electrical', label: 'Electrical System', Icon: Plug, x: 50, y: 45, service: 'Electrical Repair',
    text: 'Modern cars are rolling networks. We trace wiring, sensor and module faults methodically.',
    checks: ['Module communication scan', 'Wiring and fuse check', 'Lighting and sensors'] },
]
