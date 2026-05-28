import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle,
  Building2,
  Building,
  Wrench,
  RefreshCw,
  AlertTriangle,
  Sparkles,
  Shield,
  Layers,
  Paintbrush,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Roofing in North Georgia | Investment Roofing',
  description:
    'Expert commercial roofing services in North Georgia. Investment Roofing installs and repairs flat roofs, TPO, metal roofing, and more for businesses in Cleveland, Gainesville, Dahlonega and surrounding areas. Call (706) 920-3418.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const introFeatures = [
  'Flat, TPO & metal roofing systems',
  'New installation & full replacement',
  'Proactive maintenance plans',
  'Emergency commercial repairs available',
  'Minimal disruption to business operations',
  'Licensed, insured & experienced crew',
]

const serviceCards = [
  {
    Icon: Building2,
    title: 'New Roof Installation',
    body: "Whether you're constructing a new commercial building or adding a new structure to an existing property, we install durable roofing systems using high-quality materials and industry best practices.",
    features: [
      'Material selection consultation',
      'On-time project completion',
      'Full permitting handled',
    ],
    tag: null,
  },
  {
    Icon: Wrench,
    title: 'Repair & Maintenance',
    body: "Regular inspections and proactive maintenance are the most cost-effective way to extend the life of your commercial roof. We identify and fix issues early before they become expensive problems.",
    features: [
      'Scheduled inspection plans',
      'Leak detection & repair',
      'Flashing & seam repairs',
    ],
    tag: null,
  },
  {
    Icon: RefreshCw,
    title: 'Roof Replacement',
    body: "When your commercial roof has reached the end of its life, we guide you through the replacement process — recommending the right system, minimizing downtime, and completing the job efficiently.",
    features: [
      'Full assessment before recommending replacement',
      'Phased installation to minimize disruption',
      'All major systems available',
    ],
    tag: null,
  },
  {
    Icon: AlertTriangle,
    title: 'Emergency Roofing Services',
    body: "A commercial roof failure can halt your operations and put your inventory and equipment at risk. We respond fast to commercial roofing emergencies — 24 hours a day, 7 days a week.",
    features: [],
    tag: '24/7 Response',
  },
  {
    Icon: Sparkles,
    title: 'Roof Restoration & Coating',
    body: "Not every aging commercial roof needs full replacement. Our restoration and coating services can add years to your existing roof at a fraction of replacement cost — improving energy efficiency in the process.",
    features: [
      'Reflective roof coatings',
      'Seam reinforcement',
      'Extended roof lifespan',
    ],
    tag: null,
  },
  {
    Icon: Shield,
    title: 'Premium Materials & Craftsmanship',
    body: "We source materials from trusted manufacturers and install every commercial roofing system with the same attention to detail we bring to every residential project — no shortcuts, no compromises.",
    features: [],
    tag: null,
  },
]

const roofingSystems = [
  {
    Icon: Layers,
    title: 'TPO & Flat Roofing',
    body: 'Thermoplastic polyolefin (TPO) roofing is the most popular flat roof system for commercial buildings — lightweight, energy efficient, and highly resistant to UV, chemicals, and punctures. Ideal for warehouses, retail spaces, and flat-roof structures.',
    benefits: ['Highly energy efficient', 'Lightweight & durable', '20–30 year lifespan'],
  },
  {
    Icon: Building,
    title: 'Metal Roofing',
    body: 'Metal roofing systems offer unmatched longevity and weather resistance for commercial properties. Standing seam and corrugated metal panels provide superior protection with minimal maintenance requirements — an ideal long-term investment for North Georgia businesses.',
    benefits: ['40–70 year lifespan', 'Superior storm resistance', 'Low maintenance required'],
  },
  {
    Icon: Paintbrush,
    title: 'Roof Coating & Restoration',
    body: 'Reflective roof coatings extend the life of existing commercial roofs while significantly reducing cooling costs. A cost-effective alternative to full replacement when the underlying structure is still sound.',
    benefits: ['Reduces energy costs by up to 30%', 'Extends roof life 10–15 years', 'Applied over existing roof'],
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Consultation & Assessment',
    body: 'We assess your building, understand your needs and budget, and recommend the right roofing system.',
  },
  {
    number: '2',
    title: 'Custom Roofing Plan',
    body: 'We develop a tailored plan covering materials, timeline, and phasing to minimize disruption to your business.',
  },
  {
    number: '3',
    title: 'Expert Installation',
    body: 'Our experienced crew executes the installation to the highest standards — on schedule and on budget.',
  },
  {
    number: '4',
    title: 'Ongoing Maintenance',
    body: 'We offer maintenance plans to keep your commercial roof performing at its best for decades.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommercialRoofingPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] min-h-[400px] overflow-hidden w-full">
        <Image
          src="/images/roofcommercial.png"
          alt="Investment Roofing crew installing TPO membrane on a commercial roof in North Georgia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-4 md:pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / '}
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            {' / Commercial Roofing'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            TPO · METAL · FLAT ROOFING · RESTORATION
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Commercial Roofing Services<br />in North Georgia
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-8">
            Premium commercial roofing solutions for businesses, warehouses, and multi-unit
            properties across North Georgia — delivered on time, on budget, and built to last.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Get a Commercial Quote
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
              COMMERCIAL ROOFING
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-6">
              Protecting North Georgia Businesses From the Top Down
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Investment Roofing provides premium commercial roofing solutions for businesses,
                warehouses, retail properties, and multi-unit buildings across North Georgia. We
                understand that roofing work on a commercial property requires minimal disruption,
                precise scheduling, and a team you can trust to get it done right.
              </p>
              <p>
                From new installations to emergency repairs, our experienced commercial crew
                delivers roofing systems built for durability, energy efficiency, and long-term
                performance.
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
              Request a Commercial Quote
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofteam.jpg"
              alt="Investment Roofing commercial crew on a North Georgia business property"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SERVICES
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            Comprehensive Commercial Roofing Solutions
          </h2>
          <p className="text-gray-500 text-base mb-12">
            From a single storefront to a large warehouse — we handle every type of commercial
            roofing project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map(({ Icon, title, body, features, tag }) => (
              <div
                key={title}
                className="bg-white p-8 border border-gray-200 hover:border-brand-green hover:shadow-lg transition-all"
              >
                <Icon size={32} className="text-brand-green mb-4" />
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                {features.length > 0 && (
                  <ul className="mt-4 space-y-1">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {tag && (
                  <span className="inline-block bg-brand-green text-black text-xs font-bold px-3 py-1 mt-4 uppercase tracking-wider">
                    {tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. ROOFING SYSTEMS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            ROOFING SYSTEMS
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-white mb-4">
            Commercial Roofing Systems We Install
          </h2>
          <p className="text-gray-400 text-base mb-16">
            We work with all major commercial roofing systems — recommending the best fit for
            your building type, budget, and climate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roofingSystems.map(({ Icon, title, body, benefits }) => (
              <div
                key={title}
                className="bg-[#1A1A1A] p-8 border border-[#2a2a2a] hover:border-brand-green transition-all"
              >
                <Icon size={36} className="text-brand-green mb-4" />
                <h3 className="font-heading font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                <ul className="mt-4 space-y-1">
                  {benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. OUR PROCESS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            OUR PROCESS
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-brand-dark mb-4">
            How We Handle Commercial Roofing Projects
          </h2>
          <p className="text-gray-500 text-base mb-16">
            A structured approach that keeps your project on time, on budget, and on point.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ number, title, body }) => (
              <div key={number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-green mx-auto mb-6 flex items-center justify-center">
                  <span className="font-heading font-extrabold text-black text-lg">{number}</span>
                </div>
                <h3 className="font-heading font-bold text-brand-dark text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
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
          Let&apos;s Talk About Your Commercial Roof
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Get a free consultation and quote from North Georgia&apos;s trusted commercial roofing
          contractor.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-black text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-brand-dark transition-colors"
          >
            Request a Quote
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
