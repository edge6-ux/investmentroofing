import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle,
  Layers,
  CloudLightning,
  Building2,
  Droplets,
  Wrench,
  AlertTriangle,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Repair Company in North Georgia | Investment Roofing',
  description:
    'Expert roof repair services in North Georgia. Investment Roofing fixes leaks, storm damage, missing shingles, and structural issues for homeowners in Cleveland, Gainesville, Dahlonega and surrounding areas. Free inspections. Call (706) 920-3418.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const introFeatures = [
  'Free inspection & honest assessment',
  'Repairs backed by workmanship warranty',
  'Same-day response available',
  'All repair types handled',
  'Licensed & fully insured',
]

const repairCards = [
  {
    Icon: Layers,
    title: 'Shingle Replacement',
    body: "Damaged, curling, or missing shingles compromise your roof's ability to protect your home. We source high-quality replacement shingles and install them to match your existing roof seamlessly.",
    tag: { label: 'Most Common Repair', dark: false },
  },
  {
    Icon: CloudLightning,
    title: 'Storm Damage Restoration',
    body: "Hail, high winds, and fallen debris can cause significant damage that isn't always visible from the ground. We assess the full extent of storm damage and restore your roof to pre-storm condition.",
    tag: null,
  },
  {
    Icon: Building2,
    title: 'Structural Repairs',
    body: 'Sagging, cracking, or soft spots in your roof deck are signs of structural problems that need immediate attention. Our team assesses and reinforces the structure to restore stability and prevent further damage.',
    tag: null,
  },
  {
    Icon: Droplets,
    title: 'Leak Detection & Repair',
    body: 'Finding the true source of a roof leak requires experience and the right tools. We trace leaks back to their origin — whether it\'s flashing, vents, valleys, or shingles — and seal them permanently.',
    tag: null,
  },
  {
    Icon: Wrench,
    title: 'Flashing Repair & Re-Sealing',
    body: 'Failed flashing around chimneys, skylights, and vents is one of the most common causes of roof leaks. We repair and re-seal all flashing points to prevent water intrusion.',
    tag: null,
  },
  {
    Icon: AlertTriangle,
    title: 'Emergency Roof Repairs',
    body: 'When storm damage or sudden failure leaves your home exposed, we respond fast. Our team is available for emergency repairs to protect your home until a permanent solution is in place.',
    tag: { label: '24/7 Available', dark: true },
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Full Roof Inspection',
    body: 'We assess every component of your roof — not just the visible damage — to identify all issues before we begin.',
  },
  {
    number: '2',
    title: 'Detailed Repair Plan',
    body: 'You receive a clear repair plan with transparent pricing before any work begins. No surprises.',
  },
  {
    number: '3',
    title: 'Expert Repair Execution',
    body: 'Our skilled crew completes the repair using high-quality materials and proven techniques for lasting results.',
  },
  {
    number: '4',
    title: 'Final Inspection & Cleanup',
    body: 'We inspect every repair and leave your property clean — no debris, no mess, no loose nails.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoofRepairsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] overflow-hidden w-full">
        <Image
          src="/images/roofnail.png"
          alt="Investment Roofing contractor repairing shingles on a residential roof in North Georgia"
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
            {' / Roof Repairs'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            FAST · RELIABLE · GUARANTEED
          </p>
          <h1 className="font-heading text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Roof Repair Services in<br />North Georgia
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-8">
            Leaks, missing shingles, storm damage, or structural issues — our expert team
            diagnoses the problem fast and fixes it right the first time.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Get a Free Inspection
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
              ROOF REPAIRS
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-6">
              Don&apos;t Let a Small Problem Become a Big One
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                A minor roof issue left unaddressed can quickly spiral into water damage, mold,
                and costly structural repairs. Investment Roofing provides fast, reliable roof
                repair services for homeowners across North Georgia — getting to the root of the
                problem before it gets worse.
              </p>
              <p>
                Our skilled repair team conducts a thorough inspection before any work begins,
                identifying both the visible damage and any underlying issues contributing to the
                problem. You&apos;ll know exactly what needs to be done and what it will cost
                before we start.
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
              Schedule a Repair Inspection
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofer1.jpg"
              alt="Roofing inspector assessing storm damage on a North Georgia residential roof"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. REPAIR TYPES
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            TYPES OF REPAIRS
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            We Fix Every Type of Roof Problem
          </h2>
          <p className="text-gray-500 text-base mb-12">
            Whether it&apos;s a minor leak or major storm damage, our team has the expertise and
            equipment to handle it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repairCards.map(({ Icon, title, body, tag }) => (
              <div
                key={title}
                className="bg-white p-8 border border-gray-200 hover:border-brand-green hover:shadow-lg transition-all"
              >
                <Icon size={32} className="text-brand-green mb-4" />
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                {tag && (
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 mt-4 uppercase tracking-wider ${
                      tag.dark
                        ? 'bg-brand-dark text-white'
                        : 'bg-brand-green text-black'
                    }`}
                  >
                    {tag.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. REPAIR PROCESS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            HOW IT WORKS
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-white mb-4">
            Our Roof Repair Process
          </h2>
          <p className="text-gray-400 text-base mb-16">
            A structured process that delivers reliable results — every time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ number, title, body }) => (
              <div key={number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-green mx-auto mb-6 flex items-center justify-center">
                  <span className="font-heading font-extrabold text-black text-lg">{number}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. TESTIMONIAL
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-green text-8xl font-serif leading-none mb-4">&ldquo;</p>
          <blockquote className="font-heading text-2xl font-medium text-brand-dark leading-relaxed italic">
            Good communication, superb work, and a responsible crew. I can&apos;t recommend them
            enough.
          </blockquote>
          <p className="text-gray-500 text-sm font-semibold mt-6 uppercase tracking-wider">
            — Matthew S, North Georgia Homeowner
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-brand-green" fill="currentColor" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-16 px-6 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-black">
          Roof Problem? We&apos;ll Fix It Right.
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Don&apos;t wait for a small repair to become a major replacement. Get your free
          inspection today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-black text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-brand-dark transition-colors"
          >
            Get a Free Inspection
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
