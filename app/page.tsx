import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Star,
  Clock,
  MapPin,
  Banknote,
  Home,
  FileCheck,
  Wrench,
  Droplets,
  Building2,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Roofing Contractors in North Georgia | Investment Roofing',
  description:
    "Investment Roofing is North Georgia's top-rated GAF Certified™ roofing contractor. Serving Cleveland, GA and surrounding areas with residential roofing, roof repairs, insurance restoration, and commercial roofing. Call (706) 920-3418 for a free inspection.",
}

// ─── Data ────────────────────────────────────────────────────────────────────

const trustItems: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: 'GAF Certified™' },
  { Icon: Star,        label: '5-Star Rated' },
  { Icon: Clock,       label: '24/7 Available' },
  { Icon: MapPin,      label: 'Cleveland, GA' },
  { Icon: Banknote,    label: 'Free Inspections' },
]

type ServiceCard = {
  Icon: LucideIcon
  title: string
  body: string
  href: string
  badge?: string
}

const serviceCards: ServiceCard[] = [
  {
    Icon: Home,
    title: 'Residential Roofing',
    body: 'New roofs, full replacements, and re-roofing for homeowners across North Georgia. GAF certified installation with industry-leading warranties.',
    href: '/services/residential',
  },
  {
    Icon: FileCheck,
    title: 'Insurance Restoration',
    body: 'Storm damage? We work directly with your insurance company to maximize your claim and get your roof replaced with zero hassle.',
    href: '/insurance-restoration',
    badge: 'Most Requested',
  },
  {
    Icon: Wrench,
    title: 'Roof Repairs',
    body: 'Leaks, missing shingles, flashing failures — we diagnose and repair roofing problems fast before they become expensive disasters.',
    href: '/services/roof-repairs',
  },
  {
    Icon: Droplets,
    title: 'Gutter Installation',
    body: "Protect your foundation and landscaping with seamless gutter systems, professionally installed and built to last through Georgia's storm seasons.",
    href: '/services/gutter-installation',
  },
  {
    Icon: Building2,
    title: 'Commercial Roofing',
    body: 'Flat roofs, TPO, metal roofing systems for commercial properties. Minimal disruption, maximum durability.',
    href: '/services/commercial',
  },
]

const checklistItems = [
  'GAF Certified™ — Top 5% of roofers in North America',
  'BBB Accredited Business',
  'Licensed & fully insured contractors',
  'Free roof inspections — no pressure, no obligation',
  'We handle your insurance claim from start to finish',
  'Serving Cleveland, Gainesville, Dahlonega & all of North Georgia',
]

const testimonials = [
  {
    quote:
      'Thank you Kyle Kastner for hooking us up with William / Investment Roofing! What an awesome job you guys did on installing the new roof and cleaning up. We are genuinely satisfied with the work you did. We will definitely recommend your company to our friends and family.',
    name: '— Cas Futo',
  },
  {
    quote:
      "Will came out when my insurance adjusters were there to make sure that they saw all the damage that the storm caused. I didn't have to deal with it at all. They replaced the whole roof. Will was there from the beginning to the end. I would refer them to anyone.",
    name: '— Trudy Bailey',
  },
  {
    quote: "Good communication, superb work, and a responsible crew. I can't recommend them enough.",
    name: '— Matthew S',
  },
  {
    quote: 'What a great experience! Travis and his crew did a great job replacing my roof. I highly recommend them.',
    name: '— Kim Smith',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO + TRUST BAR — fills viewport below navbar
             Mobile navbar: 72px  Desktop navbar: 108px
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden w-full h-[calc(100svh-72px)] md:h-[calc(100svh-108px)]">
        <Image
          src="/images/roofhero.png"
          alt="Investment Roofing contractors working on a North Georgia home"
          fill
          className="object-cover object-center scale-[1.04]"
          priority
        />

        {/* Green tint */}
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Hero content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            GAF CERTIFIED™ · CLEVELAND, GA
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            North Georgia&apos;s Most Trusted<br />Roofing Contractor
          </h1>
          <p className="text-base text-white/70 max-w-md mb-8">
            Family-owned and GAF Certified™. We protect your investment with expert
            residential and commercial roofing across North Georgia.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Get a Free Inspection
            </Link>
            <Link
              href="/services"
              className="border border-white text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-white/10 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-brand-dark border-t border-[rgba(57,226,19,0.3)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10">
          {trustItems.map(({ Icon, label }, i) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-2 py-4 bg-brand-dark${i === 4 ? ' col-span-2 md:col-span-1' : ''}`}
            >
              <Icon size={18} className="text-brand-green flex-shrink-0" />
              <span className="text-white text-xs font-semibold uppercase tracking-wide whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          2. SERVICES OVERVIEW
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHAT WE DO
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-brand-dark max-w-2xl mb-4">
            Expert Roofing Solutions for North Georgia Homes &amp; Businesses
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mb-12">
            From residential roof replacements to storm damage insurance claims, Investment
            Roofing delivers quality craftsmanship and honest service across Cleveland,
            Gainesville, Dahlonega, and the surrounding North Georgia region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map(({ Icon, title, body, href, badge }) => (
              <div
                key={title}
                className="border border-gray-200 hover:border-brand-green hover:shadow-lg transition-all p-8"
              >
                {badge && (
                  <span className="bg-brand-green text-black text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">
                    {badge}
                  </span>
                )}
                <Icon size={32} className="text-brand-green mb-4" />
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{body}</p>
                <Link
                  href={href}
                  className="text-brand-green font-semibold text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — image with stat overlay */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofhouse.png"
              alt="Investment Roofing team replacing a roof in Cleveland, GA"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-brand-green py-4 px-6">
              <div className="flex justify-around text-center">
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">10+</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Years in Business</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">500+</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Roofs Replaced</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">GAF</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Certified™</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              WHY INVESTMENT ROOFING
            </p>
            <h2 className="font-heading text-4xl font-extrabold text-white mb-6">
              Family-Owned. GAF Certified.<br />Built on Trust.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              As a family-owned business based in Cleveland, GA, we treat every roof like
              it&apos;s our own home. We hold the prestigious GAF Certified™ status — achieved
              by only 5% of roofers in North America — and we back every job with the GAF
              Weather Stopper® System Plus Ltd. Warranty.
            </p>
            <ul className="space-y-3">
              {checklistItems.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-brand-green flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all mt-8"
            >
              Get Your Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. GAF CERTIFIED BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-6">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-black">
              GAF Certified™ Contractor
            </h2>
            <p className="text-black/70 text-base mt-2 max-w-lg">
              Only 5% of roofing contractors in North America earn this distinction. It
              means you&apos;re getting the best.
            </p>
          </div>
          <Link
            href="/who-we-are"
            className="bg-black text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-brand-dark transition-colors whitespace-nowrap"
          >
            See What It Means →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHAT OUR CLIENTS SAY
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-brand-dark">
            Real Reviews From North Georgia Homeowners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.map(({ quote, name }) => (
              <div
                key={name}
                className="bg-white p-8 border-t-4 border-brand-green shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-brand-green"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
                <p className="font-heading font-bold text-brand-dark mt-6">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CONTACT FORM
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-white mb-4">
            Request a Free Roof Inspection in North Georgia
          </h2>
          <p className="text-gray-400 mb-12">
            Our team will contact you within the hour to schedule your free,
            no-obligation roof inspection.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
