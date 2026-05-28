import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle,
  Star,
  Ruler,
  Wrench,
  Banknote,
  Shield,
  Settings,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gutter Installation in North Georgia | Investment Roofing',
  description:
    "Professional gutter installation and repair services in North Georgia. Investment Roofing installs seamless aluminum, copper, and steel gutters for homeowners in Cleveland, Gainesville, Dahlonega and surrounding areas. Call (706) 920-3418 for a free estimate.",
}

// ─── Data ────────────────────────────────────────────────────────────────────

const introFeatures = [
  'Seamless aluminum, copper & steel options',
  'Custom fabricated on-site',
  'Gutter guard installation',
  'Competitive pricing & free estimates',
  'Repair & maintenance services available',
]

const reasonCards = [
  {
    Icon: Star,
    title: 'High-Quality Materials',
    body: "We use only the best aluminum, copper, and steel gutter materials from trusted suppliers — built to withstand years of North Georgia weather without sagging, leaking, or corroding.",
  },
  {
    Icon: Ruler,
    title: 'Custom Solutions',
    body: "Every home is different. We assess your roofline, drainage needs, and aesthetic preferences to recommend a gutter system that fits perfectly — both functionally and visually.",
  },
  {
    Icon: Wrench,
    title: 'Expert Installation',
    body: "Our experienced crew installs gutters with precision — properly pitched for drainage, securely fastened to fascia, and sealed at all joints to prevent leaks.",
  },
  {
    Icon: Banknote,
    title: 'Affordable Pricing',
    body: "Quality gutter installation shouldn't break the bank. We offer competitive pricing and free estimates so you know exactly what to expect before we start.",
  },
  {
    Icon: Shield,
    title: 'Industry-Leading Warranty',
    body: "We stand behind our work. All gutter installations are backed by our workmanship warranty and manufacturer material warranties for long-term peace of mind.",
  },
  {
    Icon: Settings,
    title: 'Ongoing Maintenance',
    body: "We offer gutter cleaning, repairs, and maintenance services to keep your system functioning optimally season after season.",
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Free Consultation',
    body: "We assess your home's drainage needs and recommend the best gutter system.",
  },
  {
    number: '2',
    title: 'Custom Fabrication',
    body: 'Seamless gutters are fabricated on-site for a perfect fit with no weak joints.',
  },
  {
    number: '3',
    title: 'Professional Installation',
    body: 'Our crew installs with precision — properly pitched, secured, and sealed.',
  },
  {
    number: '4',
    title: 'Quality Assurance',
    body: 'We test every section to ensure proper drainage and zero leaks before we leave.',
  },
  {
    number: '5',
    title: 'Maintenance & Support',
    body: 'We provide tips and offer ongoing services to keep your gutters performing year-round.',
  },
]

const benefits = [
  {
    title: 'Foundation Protection',
    body: "Channels water safely away from your foundation, preventing costly structural damage and basement flooding.",
  },
  {
    title: 'Siding & Exterior Protection',
    body: "Prevents water from running down your siding, reducing staining, rot, and long-term deterioration.",
  },
  {
    title: 'Landscape Preservation',
    body: "Directs runoff away from flower beds and lawn areas, preventing erosion and keeping your yard intact.",
  },
  {
    title: 'Roof Longevity',
    body: "Prevents water pooling at the roofline, reducing the risk of leaks, rot, and premature shingle failure.",
  },
  {
    title: 'Ice Dam Prevention',
    body: "Properly installed gutters help direct water away from your roofline before it can freeze in winter.",
  },
  {
    title: 'Curb Appeal',
    body: "Seamless gutters add a clean, finished look to your home's exterior — available in multiple colors to match your trim.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GutterInstallationPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] overflow-hidden w-full">
        <Image
          src="/images/roofgutter.png"
          alt="Professional gutter installer mounting seamless gutters on a North Georgia home"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / '}
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            {' / Gutter Installation'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            SEAMLESS · DURABLE · CUSTOM FIT
          </p>
          <h1 className="font-heading text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Gutter Installation Services<br />in North Georgia
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-8">
            Protect your home&apos;s foundation, siding, and landscaping with a professionally
            installed gutter system built to handle North Georgia&apos;s storm seasons.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:7069203418"
              className="border border-white text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-white/10 transition-all"
            >
              Call (706) 920-3418
            </a>
          </div>
        </div>
      </section>
      <div className="h-3 bg-brand-dark border-b-[3px] border-brand-green" />

      {/* ══════════════════════════════════════════
          2. INTRO
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              GUTTER INSTALLATION
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-6">
              Keep Water Where It Belongs —<br />Away From Your Home
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Properly functioning gutters are one of the most important — and most overlooked
                — parts of your home&apos;s roofing system. When gutters fail, water pools against
                your foundation, erodes your landscaping, and damages your siding. Investment
                Roofing installs high-quality seamless gutter systems designed to handle North
                Georgia&apos;s heavy rainfall and storm seasons.
              </p>
              <p>
                We offer aluminum, copper, and steel gutter options — including seamless and
                sectional systems — custom fabricated on-site for a perfect fit on your home.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {introFeatures.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-brand-green flex-shrink-0" />
                  <span className="text-brand-dark text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all mt-8"
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofhouse.png"
              alt="North Georgia home with professionally installed seamless gutters"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHY INVESTMENT ROOFING
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            Why Choose Us for Gutter Installation
          </h2>
          <p className="text-gray-500 text-base mb-12">
            We don&apos;t just install gutters — we install the right system for your home, your
            budget, and North Georgia&apos;s weather.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasonCards.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white p-8 border border-gray-200 hover:border-brand-green transition-all"
              >
                <Icon size={32} className="text-brand-green mb-4" />
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. INSTALLATION PROCESS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            OUR PROCESS
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-white mb-4">
            Our Gutter Installation Process
          </h2>
          <p className="text-gray-400 text-base mb-16">
            From consultation to cleanup — a seamless experience from start to finish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map(({ number, title, body }) => (
              <div key={number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-green mx-auto mb-6 flex items-center justify-center">
                  <span className="font-heading font-extrabold text-black text-lg">{number}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. BENEFITS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            BENEFITS
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            What a Proper Gutter System Does for Your Home
          </h2>
          <p className="text-gray-500 text-base mb-12">
            A high-quality gutter system is one of the smartest investments you can make in your
            home&apos;s long-term health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map(({ title, body }) => (
              <div key={title} className="flex gap-4 items-start p-6 border border-gray-100">
                <CheckCircle size={22} className="text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-base mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-16 px-6 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-black">
          Protect Your Home With Better Gutters
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Get your free gutter estimate from North Georgia&apos;s trusted roofing and gutter
          professionals.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-black text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-brand-dark transition-colors"
          >
            Get a Free Estimate
          </Link>
          <a
            href="tel:7069203418"
            className="border-2 border-black text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-black/10 transition-colors"
          >
            (706) 920-3418
          </a>
        </div>
      </section>
    </>
  )
}
