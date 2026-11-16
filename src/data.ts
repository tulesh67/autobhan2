import {
  Wrench, Activity, Cog, Settings2, Disc3, MoveVertical, PaintBucket, Sparkles,
  ShieldCheck, Snowflake, Zap, BatteryCharging, Battery, Thermometer, Plug, Truck, Car,
  type LucideIcon,
} from 'lucide-react'

export const BRAND = 'AUTOBHAN CARS'

export const CONTACT_INFO = {
  name: 'Autobhan Cars',
  tagline: 'Precision Multi-Brand Automotive Care & Dealership',
  phone: '+91 92461 55784',
  phoneAlt: '+91 60081 047939',
  phoneRaw: '919246155784',
  email: 'autobhancarshyd@gmail.com',
  ctoEmail: 'autobhancarshyd@gmail.com',
  location: 'Hyderabad, Telangana, India',
  mapsUrl: 'https://www.google.com/maps/place/Autobhan+cars/@17.4658274,78.4338336,17z/data=!4m14!1m7!3m6!1s0x3bcb91a93da934e7:0xe99ceed9be761368!2sAutobhan+cars!8m2!3d17.4658274!4d78.4364085!16s%2Fg%2F11cs4k0srz!3m5!1s0x3bcb91a93da934e7:0xe99ceed9be761368!8m2!3d17.4658274!4d78.4364085!16s%2Fg%2F11cs4k0srz?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D',
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM (Sunday Closed)',
  whatsapp: 'https://wa.me/919246155784',
}

export type CarCategory = 'Hatchback' | 'SUV' | 'Sedan' | 'Premium'

export type Vehicle = {
  id: string
  brand: string
  name: string
  year: number
  price: string
  fuelType: string
  transmission: string
  mileage: string
  kilometers: string
  body: string
  category: CarCategory
  power: string
  seats: string
  ev: boolean
  color: string
  blurb: string
  image: string
  featured: boolean
  isNewArrival: boolean
  highlights: string[]
}

const carPhoto = (file: string) => `${import.meta.env.BASE_URL}cars/${file}`

export const VEHICLES: Vehicle[] = [
  {
    id: 'fortuner',
    brand: 'Toyota',
    name: 'Fortuner Legender',
    year: 2024,
    price: '₹ 35.50 – 51.40 L',
    fuelType: 'Diesel (2.8L)',
    transmission: '6-Speed AT / 4x4',
    mileage: '14.2 km/l',
    kilometers: '14,200 km',
    body: 'Full-Size Luxury SUV',
    category: 'SUV',
    power: '204 PS / 500 Nm',
    seats: '7',
    ev: false,
    color: '#e9eaed',
    image: carPhoto('fortuner.jpg'),
    blurb: 'Legendary body-on-frame durability with unmatched road presence. Comprehensive drivetrain and suspension care.',
    featured: true,
    isNewArrival: false,
    highlights: ['4x4 High/Low Range', 'Ventilated Leather Seats', 'JBL 11-Speaker Audio', 'Toyota Safety Sense'],
  },
  {
    id: 'thar-roxx',
    brand: 'Mahindra',
    name: 'Thar Roxx 4x4',
    year: 2025,
    price: '₹ 12.99 – 22.49 L',
    fuelType: 'mStallion Turbo / mHawk',
    transmission: '6-Speed AT / 4x4',
    mileage: '15.2 km/l',
    kilometers: '8,500 km',
    body: '5-Door Lifestyle 4x4',
    category: 'SUV',
    power: '175 PS / 380 Nm',
    seats: '5',
    ev: false,
    color: '#c8553a',
    image: carPhoto('thar-roxx.jpg'),
    blurb: 'The ultimate 5-door off-road icon. Certified underbody, differential, axle, and electrical waterproof inspections.',
    featured: true,
    isNewArrival: true,
    highlights: ['4xPLOR Terrain Modes', 'Panoramic Sunroof', 'Level 2 ADAS', 'Harman Kardon Audio'],
  },
  {
    id: 'hycross',
    brand: 'Toyota',
    name: 'Innova Hycross ZX(O)',
    year: 2024,
    price: '₹ 19.77 – 30.98 L',
    fuelType: 'Self-Charging Hybrid',
    transmission: 'e-Drive CVT',
    mileage: '23.24 km/l',
    kilometers: '12,100 km',
    body: 'Premium Luxury MPV',
    category: 'SUV',
    power: '186 PS Combined',
    seats: '7–8',
    ev: false,
    color: '#d8d4cc',
    image: carPhoto('hycross.jpg'),
    blurb: 'First-class hybrid lounge on wheels. Complete hybrid battery diagnostic scans and multi-point care.',
    featured: true,
    isNewArrival: true,
    highlights: ['Ottoman Captain Chairs', 'Self-Charging Hybrid Tech', 'Dual-Zone Climate Control', 'ADAS Suite'],
  },
  {
    id: 'xev-9e',
    brand: 'Mahindra',
    name: 'XEV 9e Coupe',
    year: 2025,
    price: '₹ 21.90 – 30.50 L',
    fuelType: 'Pure Electric (79 kWh)',
    transmission: 'Direct-Drive Automatic',
    mileage: '656 km WLTP',
    kilometers: 'Brand New / 0 km',
    body: 'Electric Luxury Coupe SUV',
    category: 'SUV',
    power: '286 PS / 380 Nm',
    seats: '5',
    ev: true,
    color: '#aeb6c2',
    image: carPhoto('xev-9e.jpg'),
    blurb: 'Futuristic Born-Electric architecture. High-voltage battery pack diagnostics, thermal loop, and regenerative systems.',
    featured: true,
    isNewArrival: true,
    highlights: ['Triple Screen Cockpit', '175 kW DC Fast Charging', 'Active Suspension', 'Dolby Atmos Audio'],
  },
  {
    id: 'scorpio-n',
    brand: 'Mahindra',
    name: 'Scorpio N Z8L',
    year: 2024,
    price: '₹ 13.85 – 24.54 L',
    fuelType: 'mHawk 2.2L Diesel',
    transmission: '6-Speed AT / 4XPLOR',
    mileage: '15.0 km/l',
    kilometers: '18,400 km',
    body: 'Full-Size SUV',
    category: 'SUV',
    power: '175 PS / 400 Nm',
    seats: '6–7',
    ev: false,
    color: '#2b2f36',
    image: carPhoto('scorpio-n.jpg'),
    blurb: 'The Big Daddy of SUVs. High-torque drivetrain, suspension tuning, and high-performance cooling service.',
    featured: true,
    isNewArrival: false,
    highlights: ['4XPLOR Intelligent Terrain', 'Sony 12-Speaker 3D Audio', 'FSD Frequency Selective Dampers', 'Sunroof'],
  },
  {
    id: 'creta',
    brand: 'Hyundai',
    name: 'Creta Facelift SX(O)',
    year: 2024,
    price: '₹ 11.00 – 20.15 L',
    fuelType: '1.5L Turbo Petrol / Diesel',
    transmission: '7-Speed DCT / 6-AT',
    mileage: '18.4 km/l',
    kilometers: '15,800 km',
    body: 'Premium Compact SUV',
    category: 'SUV',
    power: '160 PS / 253 Nm',
    seats: '5',
    ev: false,
    color: '#8d9aab',
    image: carPhoto('creta.jpg'),
    blurb: 'India’s most celebrated compact SUV. Precision DCT transmission maintenance, ADAS calibration, and brake care.',
    featured: true,
    isNewArrival: false,
    highlights: ['Hyundai SmartSense ADAS Level 2', 'Dual 10.25-inch Screens', 'Bose Premium Audio', 'Ventilated Seats'],
  },
  {
    id: 'xev-9s',
    brand: 'Mahindra',
    name: 'XEV 9S 3-Row EV',
    year: 2025,
    price: '₹ 24.50 – 32.00 L',
    fuelType: 'Pure Electric (79 kWh)',
    transmission: 'Direct-Drive Automatic',
    mileage: '600 km Range',
    kilometers: 'Brand New / 0 km',
    body: '3-Row Electric SUV',
    category: 'SUV',
    power: '286 PS / 380 Nm',
    seats: '7',
    ev: true,
    color: '#7f8a99',
    image: carPhoto('xev-9s.jpg'),
    blurb: 'Executive 3-row electric platform. Certified high-voltage isolation checks, inverter testing, and software recalibration.',
    featured: false,
    isNewArrival: true,
    highlights: ['7-Seat Luxury Configuration', 'Flat Floor Architecture', 'Over-The-Air Updates', 'Level 2+ ADAS'],
  },
  {
    id: 'harrier-ev',
    brand: 'Tata',
    name: 'Harrier EV AWD',
    year: 2025,
    price: '₹ 24.00 – 30.00 L',
    fuelType: 'Dual Motor AWD Electric',
    transmission: 'All-Wheel Drive Electric',
    mileage: '500 km Range',
    kilometers: 'Brand New / 0 km',
    body: 'Electric Performance SUV',
    category: 'SUV',
    power: 'Dual Motor All-Wheel Drive',
    seats: '5',
    ev: true,
    color: '#d6d9de',
    image: carPhoto('harrier-ev.jpg'),
    blurb: 'Land Rover D8 platform electrified. Dual motor torque-vectoring and high-current regenerative brake servicing.',
    featured: false,
    isNewArrival: true,
    highlights: ['Dual-Motor AWD', 'Vehicle-to-Load (V2L)', 'JBL 10-Speaker Audio', 'Terrain Response System'],
  },
  {
    id: 'hilux',
    brand: 'Toyota',
    name: 'Hilux 4x4 AT',
    year: 2024,
    price: '₹ 30.40 – 37.90 L',
    fuelType: '2.8L Turbo Diesel',
    transmission: '6-Speed AT / 4x4',
    mileage: '12.8 km/l',
    kilometers: '16,200 km',
    body: 'Heavy-Duty 4x4 Pickup',
    category: 'SUV',
    power: '204 PS / 500 Nm',
    seats: '5',
    ev: false,
    color: '#9aa3ad',
    image: carPhoto('hilux.jpg'),
    blurb: 'Indestructible global expedition utility. High-pressure common-rail injector servicing, differential lock, and chassis care.',
    featured: false,
    isNewArrival: true,
    highlights: ['700 mm Water Wading', 'Electronic Differential Lock', 'Active Traction Control (A-TRC)', 'Heavy-Duty Payload'],
  },
  {
    id: 'meridian',
    brand: 'Jeep',
    name: 'Meridian Overland 4x4',
    year: 2024,
    price: '₹ 24.99 – 38.49 L',
    fuelType: '2.0L Multijet II Diesel',
    transmission: '9-Speed Automatic',
    mileage: '15.7 km/l',
    kilometers: '22,400 km',
    body: '3-Row European Luxury SUV',
    category: 'SUV',
    power: '170 PS / 350 Nm',
    seats: '7',
    ev: false,
    color: '#5b6b5a',
    image: carPhoto('meridian.jpg'),
    blurb: 'Refined American-European craftsmanship. Specialized 9-speed transmission care, multizone climate, and suspension upkeep.',
    featured: false,
    isNewArrival: false,
    highlights: ['Selec-Terrain 4x4', 'Alpine 9-Speaker Audio', 'Imperial Leather Upholstery', 'Dual-Pane Panoramic Sunroof'],
  },
  {
    id: 'gloster',
    brand: 'MG',
    name: 'Gloster Savvy 4x4',
    year: 2024,
    price: '₹ 38.80 – 43.80 L',
    fuelType: '2.0L Twin-Turbo Diesel',
    transmission: '8-Speed Automatic',
    mileage: '13.5 km/l',
    kilometers: '19,500 km',
    body: 'Flagship Full-Size SUV',
    category: 'SUV',
    power: '215 PS / 480 Nm',
    seats: '6–7',
    ev: false,
    color: '#3a3f47',
    image: carPhoto('gloster.jpg'),
    blurb: 'Full-size flagship with semi-autonomous technology. ADAS sensor alignment, twin-turbo care, and air suspension upkeep.',
    featured: false,
    isNewArrival: false,
    highlights: ['Level 1 ADAS with Blind Spot', 'BorgWarner 4WD System', 'Driver Seat Massage', 'Wireless Apple CarPlay'],
  },
  {
    id: 'mu-x',
    brand: 'Isuzu',
    name: 'MU-X 4x4 AT',
    year: 2024,
    price: '₹ 37.00 – 40.40 L',
    fuelType: '1.9L Ddi BluePower Diesel',
    transmission: '6-Speed AT / 4x4 Shift-on-Fly',
    mileage: '13.0 km/l',
    kilometers: '24,000 km',
    body: 'Commercial-Grade Heavy SUV',
    category: 'SUV',
    power: '163 PS / 360 Nm',
    seats: '7',
    ev: false,
    color: '#e2e3e6',
    image: carPhoto('mu-x.jpg'),
    blurb: 'Bulletproof Japanese commercial diesel reliability. Multi-point fuel system maintenance, gearbox health, and brake rebuilds.',
    featured: false,
    isNewArrival: false,
    highlights: ['Steel Underbody Protection', 'Terrain Command 4WD', 'Bi-LED Projectors', 'Hill Descent Control'],
  },
  {
    id: 'seltos',
    brand: 'Kia',
    name: 'Seltos X-Line 1.5 Turbo',
    year: 2024,
    price: '₹ 10.90 – 20.35 L',
    fuelType: 'Smartstream 1.5L Turbo Petrol',
    transmission: '7-Speed Dual Clutch (DCT)',
    mileage: '18.2 km/l',
    kilometers: '17,600 km',
    body: 'Sport Styling Mid-Size SUV',
    category: 'SUV',
    power: '160 PS / 253 Nm',
    seats: '5',
    ev: false,
    color: '#444a52',
    image: carPhoto('seltos.jpg'),
    blurb: 'Matte graphite road presence with punchy turbo power. DCT dual-clutch transmission fluid flush and electronics check.',
    featured: false,
    isNewArrival: false,
    highlights: ['Matte Graphite Finish', 'Dual Panoramic 10.25-inch Screens', 'Smart Cruise Control', 'Bose 8-Speaker Audio'],
  },
  {
    id: 'sierra',
    brand: 'Tata',
    name: 'Sierra Lifestyle SUV',
    year: 2025,
    price: '₹ 15.00 – 25.00 L',
    fuelType: '1.5L TGDi Petrol / Pure EV',
    transmission: '6-Speed AT / DCA',
    mileage: '16.5 km/l',
    kilometers: 'Brand New / 0 km',
    body: 'Iconic Design SUV',
    category: 'SUV',
    power: '170 PS / 280 Nm',
    seats: '5',
    ev: false,
    color: '#b9a98c',
    image: carPhoto('sierra.jpg'),
    blurb: 'The legendary silhouette re-imagined. Advanced digital diagnostic scan, full body calibration, and suspension tuning.',
    featured: false,
    isNewArrival: true,
    highlights: ['Signature Curved Alpine Glass', 'Connected Vehicle Tech', 'Next-Gen Infotainment', 'Modular Seating'],
  },
]


export type CategoryModule = {
  id: CarCategory
  name: string
  tagline: string
  description: string
  count: number
  image: string
  available: boolean
  examples: string[]
}

export const CATEGORY_MODULES: CategoryModule[] = [
  {
    id: 'Hatchback',
    name: 'Hatchback',
    tagline: 'Agile Urban Drivers',
    description: 'Fuel-efficient, compact cars engineered for daily city commutes, nimble handling, and tight parking.',
    count: 0,
    image: `${import.meta.env.BASE_URL}cars/creta.jpg`,
    available: false,
    examples: ['Maruti Suzuki Swift', 'Baleno', 'Tata Tiago', 'Hyundai i20', 'Tata Altroz'],
  },
  {
    id: 'SUV',
    name: 'SUV',
    tagline: 'Commanding All-Terrain',
    description: 'Robust luxury and lifestyle SUVs built with high ground clearance, commanding road stance, and versatile cabins.',
    count: 14,
    image: `${import.meta.env.BASE_URL}cars/fortuner.jpg`,
    available: true,
    examples: ['Toyota Fortuner', 'Mahindra Thar Roxx', 'Innova Hycross', 'Scorpio N', 'Hyundai Creta', 'Tata Harrier EV'],
  },
  {
    id: 'Sedan',
    name: 'Sedan',
    tagline: 'Refined Executive Comfort',
    description: 'Aerodynamic poise, plush passenger refinement, and effortless long-distance highway cruising.',
    count: 0,
    image: `${import.meta.env.BASE_URL}cars/meridian.jpg`,
    available: false,
    examples: ['Honda City', 'Hyundai Verna', 'Volkswagen Virtus', 'Skoda Slavia', 'Maruti Dzire'],
  },
  {
    id: 'Premium',
    name: 'Premium',
    tagline: 'Pinnacle Automotive Luxury',
    description: 'High-end European marques, meticulous German craftsmanship, and precision performance engineering.',
    count: 0,
    image: `${import.meta.env.BASE_URL}cars/gloster.jpg`,
    available: false,
    examples: ['Mercedes-Benz C-Class', 'BMW 3 Series', 'Audi A4', 'Volvo XC60', 'Land Rover Defender'],
  },
]

export const BRANDS = ['Toyota', 'Mahindra', 'Jeep', 'Tata', 'MG', 'Isuzu', 'Hyundai', 'Kia']

export const CAR_CATEGORIES: CarCategory[] = ['Hatchback', 'SUV', 'Sedan', 'Premium']

export type Service = {
  title: string
  desc: string
  Icon: LucideIcon
  tone: string
  priceStart: string
  features: string[]
}

export const SERVICES: Service[] = [
  {
    title: '24/7 Towing & Roadside Assistance',
    desc: 'Company-owned hydraulic flatbed towing, emergency roadside recovery, breakdown support, and safe transport across Hyderabad.',
    Icon: Truck,
    tone: '#ff5a1f',
    priceStart: 'Immediate Dispatch',
    features: ['Hydraulic Flatbed Towing', 'Safe Zero-Damage Loading', '24/7 Rapid Emergency Dispatch', 'Accident & Breakdown Recovery'],
  },
  {
    title: 'Complete Periodic Service',
    desc: 'Synthetic oil, genuine OEM filters, multi-point digital health audit and road test.',
    Icon: Wrench,
    tone: '#ff5a1f',
    priceStart: '₹ 3,499*',
    features: ['Engine Oil & Filter Flush', 'Brake Pad & Rotor Check', 'Coolant & Transmission Check', 'Computer Diagnostic Scan'],
  },
  {
    title: 'Engine & Computer Diagnostics',
    desc: 'OBD-II live ECU telemetry analysis, fuel trims, ignition timing and sensor diagnostics.',
    Icon: Activity,
    tone: '#ff8a3d',
    priceStart: '₹ 1,499*',
    features: ['ECU Live Data Logging', 'Sensor & Actuator Calibration', 'Fuel Injector Diagnostics', 'Full Diagnostic Report'],
  },
  {
    title: 'Engine & Mechanical Repair',
    desc: 'Head gasket, timing chain, turbocharger, valve clearance, and comprehensive rebuilds.',
    Icon: Cog,
    tone: '#ff5a1f',
    priceStart: 'Custom Estimate',
    features: ['Precision Torque Assembly', 'Turbo Inspection & Overhaul', 'OEM Parts Guarantee', 'Dyno & Road Verification'],
  },
  {
    title: 'Automatic & DCT Transmission',
    desc: 'Fluid exchange, mechatronics diagnostics, clutch pack evaluation and valve body repair.',
    Icon: Settings2,
    tone: '#c4c8cf',
    priceStart: '₹ 4,999*',
    features: ['ATF Pressure & Temperature Test', 'Mechatronic Scan', 'Dual-Clutch Calibration', 'Smooth Gearshift Guarantee'],
  },
  {
    title: 'Brake Overhaul & Fluid Bleed',
    desc: 'Laser disc runout measurement, caliper overhaul, Brembo/OEM pads, and dot 4/5.1 flush.',
    Icon: Disc3,
    tone: '#ff5a1f',
    priceStart: '₹ 1,899*',
    features: ['Pad & Disc Thickness Measurement', 'Hydraulic Pressure Bleed', 'ABS Module Testing', 'Emergency Stop Test'],
  },
  {
    title: 'Suspension & Steering Overhaul',
    desc: 'Gas struts, polyurethane bushes, steering rack calibration, and 3D computerized alignment.',
    Icon: MoveVertical,
    tone: '#c4c8cf',
    priceStart: '₹ 2,499*',
    features: ['Strut Leak & Rebound Test', 'Bush & Control Arm Inspection', '3D Laser Alignment', 'Zero Vibration Guarantee'],
  },
  {
    title: 'Denting & Oven-Baked Painting',
    desc: 'Computerized shade matching, spot dent pullers, and dust-free heated paint booth finish.',
    Icon: PaintBucket,
    tone: '#ff8a3d',
    priceStart: '₹ 2,999 / Panel',
    features: ['PPG / DuPont Color Matching', 'Anti-Corrosion Primer', 'Clear Coat UV Protection', 'Lifetime Paint Adhesion'],
  },
  {
    title: 'Car Detailing & Interior Spa',
    desc: '3-stage rotary paint correction, leather conditioning, steam sanitization, and engine dressing.',
    Icon: Sparkles,
    tone: '#c4c8cf',
    priceStart: '₹ 4,499*',
    features: ['Swirl & Scratch Removal', 'Deep Interior Steam Clean', 'Hydrophobic Glass Treatment', 'Underbody Wash & Coat'],
  },
  {
    title: 'Ceramic & Graphene Coating',
    desc: '9H diamond hardness ceramic or graphene matrix. 3 to 5 years guaranteed paint protection.',
    Icon: ShieldCheck,
    tone: '#ff5a1f',
    priceStart: '₹ 14,999*',
    features: ['Multi-Stage Paint Correction', 'Super-Hydrophobic Shield', 'UV & Chemical Resistance', 'Annual Gloss Warranty Card'],
  },
  {
    title: 'AC Service & Compressor Care',
    desc: 'R134a/R1234yf automated gas recycling, condenser flush, evaporator foam sanitization, and leak test.',
    Icon: Snowflake,
    tone: '#c4c8cf',
    priceStart: '₹ 1,999*',
    features: ['Automatic Gas Charging', 'Compressor Oil Top-Up', 'Anti-Bacterial AC Duct Clean', 'Cabin Filter Replacement'],
  },
  {
    title: 'Electrical & ADAS Calibration',
    desc: 'CAN-bus architecture tracing, starter, alternator, camera/radar ADAS calibration, battery health.',
    Icon: Zap,
    tone: '#ff8a3d',
    priceStart: '₹ 1,499*',
    features: ['Radar & Camera ADAS Alignment', 'Wiring Harness Short Tracing', 'Battery CCA Load Test', 'Alternator Ripple Check'],
  },
  {
    title: 'EV Diagnostics & High-Voltage Care',
    desc: 'Battery State-of-Health (SoH), cell balancing, thermal liquid cooling loop, insulation resistance.',
    Icon: BatteryCharging,
    tone: '#ff5a1f',
    priceStart: '₹ 2,999*',
    features: ['Battery SoH & Degradation Test', 'High-Voltage Insulation Scan', 'Coolant Loop Maintenance', 'Regen Braking Inspection'],
  },
]

export type Testimonial = {
  id: string
  name: string
  location: string
  vehicle: string
  service: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'K. Vikram Reddy',
    location: 'Jubilee Hills, Hyderabad',
    vehicle: 'Toyota Fortuner Legender',
    service: 'Complete Periodic & Suspension Care',
    rating: 5,
    date: 'October 2024',
    comment: 'Exceptional service standards. Took my Fortuner here after official dealer quoted unnecessary part replacements. AutoBhan accurately pinpointed the bush wear, used 100% genuine Toyota parts, and the ride feels factory-fresh.',
    verified: true,
  },
  {
    id: 't2',
    name: 'Siddharth Rao',
    location: 'Gachibowli, Hyderabad',
    vehicle: 'Mahindra Scorpio N',
    service: 'Engine Diagnostics & 4XPLOR Service',
    rating: 5,
    date: 'November 2024',
    comment: 'Living near IT corridor, finding an honest garage for multi-brand luxury and SUVs is rare. AutoBhan diagnosed an intermittent ABS error in 20 minutes that two other workshops missed. Transparent billing and direct WhatsApp updates throughout.',
    verified: true,
  },
  {
    id: 't3',
    name: 'Dr. Ananya Varma',
    location: 'Banjara Hills, Hyderabad',
    vehicle: 'Toyota Innova Hycross',
    service: 'Hybrid Diagnostics & Ceramic Coating',
    rating: 5,
    date: 'December 2024',
    comment: 'Got 9H ceramic coating and hybrid health check for our Hycross. The gloss is mirror-like and the paint finish is immaculate. Their customer lounge is clean, air-conditioned, and the team treated the car with immense care.',
    verified: true,
  },
  {
    id: 't4',
    name: 'M. Naveen Kumar',
    location: 'Madhapur, Hyderabad',
    vehicle: 'Hyundai Creta 1.5 Turbo',
    service: 'DCT Transmission & AC Overhaul',
    rating: 5,
    date: 'January 2025',
    comment: 'Smooth and effortless DCT shifts after AutoBhan serviced the transmission fluid and performed adaptive recalibration. Air conditioning cools in seconds now even in Hyderabad heat. Super professional setup!',
    verified: true,
  },
]

export type FaqItem = {
  question: string
  answer: string
  category: string
}

export const FAQS: FaqItem[] = [
  {
    question: 'Do you use 100% genuine OEM parts for services?',
    answer: 'Yes, absolutely. We source official, certified OEM parts directly from authorized distributors including Toyota Genuine Parts, Mahindra Genuine Spares, Hyundai/Kia Mobis, Bosch, and Shell Helix lubricants. We never use counterfeit or sub-standard spares, and all parts carry manufacturer warranties.',
    category: 'SUV',
  },
  {
    question: 'How do you diagnose vehicle issues before repair?',
    answer: 'We follow a strict "Diagnostics-First" protocol. Our master technicians connect multi-brand OEM-level diagnostic scanners to analyze live ECU telemetry, fault history, and fuel trims. We inspect the physical hardware before recommending any replacement, ensuring you only pay for what your car truly needs.',
    category: 'SUV',
  },
  {
    question: 'Can I book a service appointment or vehicle enquiry via WhatsApp?',
    answer: 'Yes! You can reserve your bay or enquire about any car directly through WhatsApp at +91 92461 55784. Our team responds promptly with appointment confirmations, live job progress photos, and transparent digital estimates.',
    category: 'SUV',
  },
  {
    question: 'Do you service and diagnose Electric Vehicles (EVs)?',
    answer: 'Yes. Our technicians are certified for EV high-voltage safety. We service electric models including Mahindra XEV 9e/9S, Tata Harrier EV, and hybrids like Innova Hycross, handling battery State-of-Health (SoH) diagnostics, thermal loop cooling, and regenerative braking systems.',
    category: 'SUV',
  },
  {
    question: 'Will you start work without my approval?',
    answer: 'Never. After our multi-point inspection, we share a detailed digital estimate itemizing parts and labor. Work only begins once you review and provide explicit approval. No surprise charges or hidden fees.',
    category: 'SUV',
  },
  {
    question: 'Where is AutoBhan Cars located and what are your working hours?',
    answer: 'Our main multi-bay facility is centrally located in Hyderabad, Telangana. We are open Monday through Saturday from 9:00 AM to 8:00 PM (Closed on Sundays). Helpline: +91 92461 55784 / +91 60081 047939.',
    category: 'SUV',
  },
]


export type Hotspot = {
  id: string; label: string; Icon: LucideIcon; x: number; y: number
  text: string; checks: string[]; service: string
}

export const HOTSPOTS: Hotspot[] = [
  { id: 'engine', label: 'Engine', Icon: Cog, x: 81, y: 57, service: 'Engine Diagnostics',
    text: 'The power unit. We read fault codes, then verify with physical tests before recommending repairs.',
    checks: ['Fault code scan', 'Oil and leak inspection', 'Belt and timing check'] },
  { id: 'cooling', label: 'Cooling', Icon: Thermometer, x: 92, y: 70, service: 'Complete Periodic Service',
    text: 'Radiator, coolant and fans keep temperatures stable in heavy traffic and on long climbs.',
    checks: ['Coolant condition', 'Pressure test', 'Fan and thermostat check'] },
  { id: 'transmission', label: 'Transmission', Icon: Settings2, x: 59, y: 71, service: 'Automatic & DCT Transmission',
    text: 'Gearbox and driveline care for smooth shifts and reliable torque delivery.',
    checks: ['Fluid inspection', 'Clutch and mount check', 'Shift behaviour test'] },
  { id: 'brakes', label: 'Brakes', Icon: Disc3, x: 76, y: 82, service: 'Brake Overhaul & Fluid Bleed',
    text: 'Your most important safety system. We measure, not guess, pad and disc wear.',
    checks: ['Pad and disc measurement', 'Brake fluid test', 'Caliper function'] },
  { id: 'suspension', label: 'Suspension', Icon: MoveVertical, x: 24, y: 64, service: 'Suspension & Steering Overhaul',
    text: 'Shocks, springs and bushes decide ride comfort, grip and tyre life.',
    checks: ['Shock and spring check', 'Bush and link inspection', 'Alignment review'] },
  { id: 'battery', label: 'Battery', Icon: Battery, x: 43, y: 79, service: 'EV Diagnostics & High-Voltage Care',
    text: 'From a 12V starter battery to high-voltage EV packs, we test health before it leaves you stranded.',
    checks: ['Load and health test', 'Charging system check', 'High-voltage safety scan'] },
  { id: 'electrical', label: 'Electrical System', Icon: Plug, x: 50, y: 45, service: 'Electrical & ADAS Calibration',
    text: 'Modern cars are rolling networks. We trace wiring, sensor and module faults methodically.',
    checks: ['Module communication scan', 'Wiring and fuse check', 'Lighting and sensors'] },
]