import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle,
  RefreshCw,
  Building,
  Banknote,
  Droplets,
  MapPin,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Roofing in North Georgia | Investment Roofing',
  description:
    'Expert residential roofing services in North Georgia. Investment Roofing specializes in roof replacements, new construction, and leak repairs for homeowners in Cleveland, Gainesville, Dahlonega and surrounding areas. GAF Certified™. Call (706) 920-3418.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const overviewFeatures = [
  'Licensed & fully insured contractors',
  'GAF Certified™ installation',
  'Free roof inspections',
  'Competitive pricing & financing available',
  'Serving all of North Georgia',
]

const serviceCards = [
  {
    Icon: RefreshCw,
    title: 'Full Roof Replacement',
    body: "When repair isn't enough, our team handles complete roof replacements from tear-off to final inspection. We work with a wide range of shingle styles and materials to match your home's aesthetic and your budget.",
    features: [
      'Architectural & designer shingles',
      'Full tear-off & decking inspection',
      'GAF Weather Stopper® System Plus warranty',
      'Permit pulled & inspected',
    ],
  },
  {
    Icon: Building,
    title: 'New Construction Roofing',
    body: 'Building a new home in North Georgia? Investment Roofing partners with builders and homeowners to deliver precision roof installations that align with your architectural vision and project timeline.',
    features: [
      'Works with all major builders and architects',
      'Material selection consultation included',
      'On-time completion guaranteed',
      'All roofing types available',
    ],
  },
  {
    Icon: Banknote,
    title: 'Retail Roofing (Out of Pocket)',
    body: 'Not every roofing project goes through insurance. For homeowners paying out of pocket, we offer competitive pricing, flexible financing options, and full control over materials and scope of work.',
    features: [
      'Transparent upfront pricing',
      'Flexible financing available',
      'Material & style options to fit any budget',
      'No hidden fees or surprise charges',
    ],
  },
  {
    Icon: Droplets,
    title: 'Residential Leak Repairs',
    body: 'A leak left untreated becomes a much bigger problem. Our team diagnoses the source fast and repairs it right — addressing both the immediate issue and any underlying problems contributing to the leak.',
    features: [
      'Advanced leak detection',
      'Flashing, vent & chimney repairs',
      'Underlayment inspection',
      'Warranty on all repairs',
    ],
  },
]

const gafStats = [
  { number: 'Top 5%',  label: 'of Roofers in North America'        },
  { number: 'GAF',     label: 'Weather Stopper® Warranty Eligible'  },
  { number: '10+',     label: 'Years Installing GAF Systems'         },
  { number: '500+',    label: 'Residential Roofs Completed'          },
]

const locations = [
  'Cleveland, GA',
  'Gainesville, GA',
  'Dahlonega, GA',
  'Clarkesville, GA',
  'Cornelia, GA',
  'Toccoa, GA',
  'Hiawassee, GA',
  'Helen, GA',
  'Blue Ridge, GA',
  'And Surrounding Areas',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResidentialRoofingPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] min-h-[400px] overflow-hidden w-full">
        <Image
          src="/images/roofhouse.png"
          alt="Beautiful North Georgia home with newly installed dark charcoal shingles by Investment Roofing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-4 md:pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / '}
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            {' / Residential Roofing'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            GAF CERTIFIED™ INSTALLATION
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Residential Roofing Services<br />in North Georgia
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-8">
            From new construction to full roof replacements — Investment Roofing delivers expert
            residential roofing solutions built for North Georgia homeowners.
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
          2. INTRO & OVERVIEW
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              RESIDENTIAL ROOFING
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-6">
              Quality Craftsmanship for North Georgia Homeowners
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Investment Roofing is your trusted partner for residential roofing solutions
                across North Georgia. Our team of licensed and fully insured contractors brings
                years of experience to every project — from routine repairs to complete roof
                replacements.
              </p>
              <p>
                As a GAF Certified™ contractor, we install premium roofing systems backed by the
                industry&apos;s strongest warranties. We serve homeowners across Cleveland,
                Gainesville, Dahlonega, Clarkesville, and the surrounding White, Hall, and
                Lumpkin counties.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {overviewFeatures.map(item => (
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
              Get a Free Inspection
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofclose.png"
              alt="GAF certified roofer installing architectural shingles on a North Georgia home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SERVICE TYPES
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            Our Residential Roofing Services
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mb-12">
            Every home is different. We tailor every roofing solution to the specific needs of
            your property, budget, and timeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCards.map(({ Icon, title, body, features }) => (
              <div
                key={title}
                className="bg-white p-8 border border-gray-200 border-t-4 border-t-brand-green hover:shadow-lg transition-all"
              >
                <Icon size={32} className="text-brand-green mb-4" />
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                <ul className="mt-4 space-y-1">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. GAF CERTIFIED BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              GAF CERTIFIED™
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              The GAF Certification Difference
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                When you choose Investment Roofing, you&apos;re choosing a contractor that has
                earned GAF Certified™ status — a distinction held by only the top 5% of roofers
                across North America.
              </p>
              <p>
                This means every shingle we install qualifies for the GAF Weather Stopper® System
                Plus Ltd. Warranty — one of the strongest roofing warranties available anywhere.
              </p>
            </div>
            <Link
              href="/who-we-are"
              className="inline-block bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all mt-6"
            >
              Learn More About Our Certification
            </Link>
          </div>

          {/* Stats grid — 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {gafStats.map(({ number, label }) => (
              <div
                key={label}
                className="bg-[#1A1A1A] p-8 border border-[#2a2a2a] text-center"
              >
                <p className="font-heading text-3xl font-extrabold text-brand-green">{number}</p>
                <p className="text-sm text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. SERVICE AREA
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHERE WE WORK
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            Serving Homeowners Across North Georgia
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-12">
            Investment Roofing proudly serves residential customers throughout White, Hall,
            Lumpkin, Habersham, and surrounding North Georgia counties.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map(loc => (
              <span
                key={loc}
                className="bg-white border border-gray-200 px-5 py-2 text-sm font-semibold text-brand-dark flex items-center gap-2"
              >
                <MapPin size={14} className="text-brand-green flex-shrink-0" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. TESTIMONIAL
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-green text-8xl font-serif leading-none mb-4">&ldquo;</p>
          <blockquote className="font-heading text-xl font-medium text-white leading-relaxed italic">
            Thank you Kyle Kastner for hooking us up with William / Investment Roofing! What an
            awesome job you guys did on installing the new roof and cleaning up. We are genuinely
            satisfied with the work you did. We will definitely recommend your company to our
            friends and family.
          </blockquote>
          <p className="text-gray-500 text-sm font-semibold mt-6 uppercase tracking-wider">
            — Cas Futo, North Georgia Homeowner
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-brand-green" fill="currentColor" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-16 px-6 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-black">
          Ready for a New Roof?
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Get your free, no-obligation roof inspection from North Georgia&apos;s most trusted GAF
          Certified™ residential roofing contractor.
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
