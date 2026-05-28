import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Storm Damage Insurance Restoration in North Georgia | Investment Roofing',
  description:
    'Investment Roofing handles your entire insurance claim from inspection to installation. Storm damage, hail, wind — we fight for your full replacement. Serving Cleveland, GA and North Georgia. Call (706) 920-3418.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: '1',
    title: 'Free Roof Inspection',
    body: 'We come to your property and conduct a thorough inspection — documenting all storm damage with photos and detailed notes.',
  },
  {
    number: '2',
    title: 'We Meet Your Adjuster',
    body: 'We attend the insurance adjuster meeting with you, pointing out every area of damage to make sure nothing is missed or undervalued.',
  },
  {
    number: '3',
    title: 'Claim Approved',
    body: 'We communicate directly with your insurance provider and work to maximize your settlement — most homeowners pay only their deductible.',
  },
  {
    number: '4',
    title: 'New Roof Installed',
    body: 'Once approved, our GAF Certified™ crew installs your new roof quickly and cleanly — usually completed in one day.',
  },
]

const whyFeatures = [
  'Hail damage claims',
  'Wind & storm damage claims',
  'Fallen tree damage',
  'Water intrusion & interior damage',
  'Full roof replacement at no cost in most cases',
  'Supplement claims if initial offer is too low',
]

const faqs = [
  {
    q: 'Will my insurance cover a full roof replacement?',
    a: "In most cases, yes — if your roof has sustained storm, hail, or wind damage, your homeowner's insurance policy should cover a full replacement minus your deductible. We'll inspect your roof for free and tell you exactly what we find.",
  },
  {
    q: 'Do I have to deal with the insurance company myself?',
    a: "No. That's exactly what we're here for. Investment Roofing handles all communication with your insurance provider — including attending the adjuster meeting, submitting documentation, and negotiating your settlement.",
  },
  {
    q: 'How long does the claims process take?',
    a: 'Most claims are approved within 1–2 weeks of the adjuster visit. Once approved, we typically complete the installation within a few days. The entire process from inspection to new roof is usually 3–4 weeks.',
  },
  {
    q: 'What if my claim gets denied?',
    a: "We don't give up easily. If your initial claim is denied or underpaid, we can file a supplement claim with additional documentation. We've successfully overturned many initial denials for our North Georgia clients.",
  },
  {
    q: 'Is there any cost to get started?',
    a: "Zero. Our inspection is completely free and there's no obligation. If we don't think you have a valid claim, we'll tell you honestly.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InsuranceRestorationPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] overflow-hidden w-full">
        <Image
          src="/images/roofer1.jpg"
          alt="Roofing inspector assessing storm damage on a North Georgia residential roof"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / Insurance Restoration'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            STORM DAMAGE · HAIL · WIND
          </p>
          <h1 className="font-heading text-5xl font-extrabold text-white leading-tight max-w-2xl mb-4">
            We Handle Your Insurance Claim<br />So You Don&apos;t Have To
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-8">
            From the first inspection to the final shingle — Investment Roofing manages your
            entire storm damage claim and fights to get you the full replacement your home
            deserves.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Start My Claim Today
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
          2. URGENCY STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-brand-green py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle size={22} className="text-black flex-shrink-0" />
            <p className="font-heading font-bold text-black text-base">
              Recent storm in North Georgia? Your roof may have hidden damage.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white font-bold px-6 py-3 text-sm uppercase tracking-wider rounded-none hover:bg-brand-dark transition-colors whitespace-nowrap"
          >
            Get a Free Damage Inspection →
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          3. HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            OUR PROCESS
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-brand-dark max-w-2xl mx-auto mb-4">
            From Storm Damage to New Roof — We Handle Everything
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-16">
            Most homeowners don&apos;t know what they&apos;re entitled to after a storm. We do —
            and we make sure you get every dollar your claim is worth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, title, body }) => (
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
          4. SPLIT DETAIL
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              We&apos;ve Handled Hundreds of Insurance Claims Across North Georgia
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                Insurance companies are in the business of paying out as little as possible.
                Investment Roofing is in the business of making sure you get what you&apos;re owed.
                We know exactly what adjusters look for — and what they try to overlook.
              </p>
              <p>
                Our team has successfully managed insurance restoration projects across Cleveland,
                Gainesville, Dahlonega, Clarkesville, and surrounding North Georgia counties.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {whyFeatures.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all mt-8"
            >
              Get a Free Inspection
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofer1.jpg"
              alt="Storm-damaged shingles on a North Georgia home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. TESTIMONIAL SPOTLIGHT
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-green text-8xl font-serif leading-none mb-4">&ldquo;</p>
          <blockquote className="font-heading text-2xl font-medium text-brand-dark leading-relaxed italic">
            Will came out when my insurance adjusters were there to make sure that they saw all
            the damage that the storm caused. I didn&apos;t have to deal with it at all. They
            replaced the whole roof. Will was there from the beginning to the end. I would refer
            them to anyone.
          </blockquote>
          <p className="text-gray-500 text-sm font-semibold mt-6 uppercase tracking-wider">
            — Trudy Bailey, North Georgia Homeowner
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-brand-green" fill="currentColor" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            COMMON QUESTIONS
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-brand-dark mb-12">
            Insurance Restoration FAQ
          </h2>

          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-200 pb-6">
                <h3 className="font-heading font-bold text-brand-dark text-base mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-16 px-6 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-black">
          Had a Recent Storm? Don&apos;t Wait.
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Roof damage gets worse with every rain. Get your free inspection today and let us
          handle the rest.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-black text-white font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:bg-brand-dark transition-colors"
          >
            Get My Free Inspection
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
