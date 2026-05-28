import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Home,
  FileCheck,
  Wrench,
  Droplets,
  Building2,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Services in North Georgia | Investment Roofing',
  description:
    'Investment Roofing offers residential roofing, insurance restoration, roof repairs, gutter installation, and commercial roofing across North Georgia. GAF Certified™. Call (706) 920-3418.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const navItems = [
  { Icon: Home,      label: 'Residential', anchor: '#residential' },
  { Icon: FileCheck, label: 'Insurance',   anchor: '#insurance'   },
  { Icon: Wrench,    label: 'Repairs',     anchor: '#repairs'     },
  { Icon: Droplets,  label: 'Gutters',     anchor: '#gutters'     },
  { Icon: Building2, label: 'Commercial',  anchor: '#commercial'  },
]

const residentialFeatures = [
  'GAF Certified™ installation',
  'Full roof replacement & re-roofing',
  'New construction roofing',
  'Architectural & designer shingle options',
  'GAF Weather Stopper® System Plus Ltd. Warranty',
]

const insuranceFeatures = [
  'We attend insurance adjuster meetings with you',
  'Full damage documentation & photo evidence',
  'Direct communication with your insurance provider',
  'Zero out-of-pocket in most cases',
  'Fast turnaround from claim to installation',
]

const repairFeatures = [
  'Leak detection & repair',
  'Missing or damaged shingle replacement',
  'Flashing repair & re-sealing',
  'Soffit & fascia repair',
  'Emergency roof repairs',
  'Flat roof patching',
]

const gutterFeatures = [
  'Seamless aluminum gutters',
  'Custom-fit to your home',
  'Downspout installation & routing',
  'Gutter guard options',
  'Replacement of damaged sections',
]

const gutterStats = [
  { number: '20+ Years', label: 'Material Warranty' },
  { number: 'Seamless',  label: 'No Leaky Joints'   },
  { number: 'Custom',    label: 'Fit Every Home'     },
  { number: 'Same-Day',  label: 'Quotes Available'   },
]

const commercialFeatures = [
  'TPO & flat roof systems',
  'Metal roofing installation',
  'Commercial roof inspections',
  'Preventive maintenance plans',
  'Multi-unit & warehouse roofing',
  'Emergency commercial repairs',
]

// ─── Shared sub-components ────────────────────────────────────────────────────

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
      {children}
    </p>
  )
}

function FeatureList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-6 space-y-2">
      {items.map(item => (
        <li key={item} className="flex items-center gap-3">
          <CheckCircle size={18} className="text-brand-green flex-shrink-0" />
          <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-brand-dark'}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all mt-8"
    >
      {children}
    </Link>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. PAGE HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-[420px] overflow-hidden w-full">
        <Image
          src="/images/roofnail.png"
          alt="Roofing contractor nailing shingles on a residential roof in North Georgia"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Green tint */}
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            {' / Services'}
          </p>

          <h1 className="font-heading text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Roofing Services in<br />North Georgia
          </h1>
          <p className="text-base text-white/70 max-w-lg">
            From full roof replacements to storm damage claims — Investment Roofing handles
            every roofing need for homeowners and businesses across North Georgia.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. SERVICES NAV BAR
      ══════════════════════════════════════════ */}
      <nav className="bg-brand-dark border-b-2 border-brand-green">
        <div className="max-w-7xl mx-auto flex">
          {navItems.map(({ Icon, label, anchor }, idx) => (
            <a
              key={label}
              href={anchor}
              className={`flex flex-col items-center justify-center py-5 gap-2 flex-1 hover:bg-[#1A1A1A] transition-colors duration-150 ${
                idx < navItems.length - 1 ? 'border-r border-[#2a2a2a]' : ''
              }`}
            >
              <Icon size={20} className="text-brand-green" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                {label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          3. RESIDENTIAL ROOFING
      ══════════════════════════════════════════ */}
      <section id="residential" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image — left */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofhouse.png"
              alt="Residential roof replacement on a North Georgia home"
              fill
              className="object-cover"
            />
          </div>

          {/* Copy — right */}
          <div>
            <SectionTag>Residential Roofing</SectionTag>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
              North Georgia Residential Roof Replacement &amp; Installation
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Whether you&apos;re building a new home or replacing an aging roof, Investment
                Roofing delivers expert residential roofing solutions built for North Georgia&apos;s
                weather conditions. As a GAF Certified™ contractor, we install premium shingle
                systems backed by the industry&apos;s best warranties.
              </p>
              <p>
                We serve homeowners across Cleveland, Gainesville, Dahlonega, Clarkesville, and
                the surrounding White, Hall, and Lumpkin counties.
              </p>
            </div>
            <FeatureList items={residentialFeatures} />
            <CtaButton href="/contact">Get a Free Inspection</CtaButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. INSURANCE RESTORATION
      ══════════════════════════════════════════ */}
      <section id="insurance" className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy — left */}
          <div>
            <span className="bg-brand-green text-black text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block mb-4">
              Most Requested Service
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
              Storm Damage Insurance Restoration in North Georgia
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Storm damage to your roof doesn&apos;t have to be a nightmare. Investment Roofing
                works directly with your insurance company — attending adjuster meetings,
                documenting all damage, and fighting to maximize your claim so you get the full
                replacement your home deserves.
              </p>
              <p>
                From hail damage and wind damage to fallen trees and water intrusion, our team
                has the experience and documentation process to get your claim approved fast.
              </p>
            </div>
            <FeatureList items={insuranceFeatures} />
            <CtaButton href="/contact">Start Your Claim Today</CtaButton>
          </div>

          {/* Image — right */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofer1.jpg"
              alt="Storm-damaged roof in North Georgia awaiting insurance restoration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. ROOF REPAIRS
      ══════════════════════════════════════════ */}
      <section id="repairs" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image — left */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofclose.png"
              alt="Close-up of roof shingle repair work by Investment Roofing"
              fill
              className="object-cover"
            />
          </div>

          {/* Copy — right */}
          <div>
            <SectionTag>Roof Repairs</SectionTag>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
              Expert Roof Repair Services in North Georgia
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                A small leak today can become a costly structural problem tomorrow. Investment
                Roofing provides fast, reliable roof repair services for homeowners across North
                Georgia — diagnosing the root cause and fixing it right the first time.
              </p>
            </div>
            <FeatureList items={repairFeatures} />
            <CtaButton href="/contact">Request a Repair Quote</CtaButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. GUTTER INSTALLATION
      ══════════════════════════════════════════ */}
      <section id="gutters" className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Gutter Installation</SectionTag>
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            Seamless Gutter Installation for North Georgia Homes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-4">

            {/* Copy */}
            <div>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Gutters are your roof&apos;s first line of defense against water damage.
                  Investment Roofing installs seamless aluminum gutter systems designed to handle
                  North Georgia&apos;s heavy storm seasons — protecting your foundation, siding,
                  and landscaping for years to come.
                </p>
              </div>
              <FeatureList items={gutterFeatures} dark />
              <Link
                href="/contact"
                className="inline-block bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all mt-8"
              >
                Get a Gutter Quote
              </Link>
            </div>

            {/* Stats grid — 2×2 */}
            <div className="grid grid-cols-2 gap-4">
              {gutterStats.map(({ number, label }) => (
                <div
                  key={label}
                  className="bg-[#1A1A1A] p-8 border border-[#2a2a2a] text-center"
                >
                  <p className="font-heading text-3xl font-extrabold text-brand-green">
                    {number}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. COMMERCIAL ROOFING
      ══════════════════════════════════════════ */}
      <section id="commercial" className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy — left */}
          <div>
            <SectionTag>Commercial Roofing</SectionTag>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
              Commercial Roofing Contractors in North Georgia
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Investment Roofing provides dependable commercial roofing solutions for
                businesses, warehouses, and multi-unit properties across North Georgia. We
                minimize disruption to your operations while delivering roofing systems built
                to last.
              </p>
            </div>
            <FeatureList items={commercialFeatures} />
            <CtaButton href="/contact">Request a Commercial Quote</CtaButton>
          </div>

          {/* Image — right */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/roofteam.jpg"
              alt="Investment Roofing commercial roofing crew in North Georgia"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. BOTTOM CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-16 px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-black">
          Not Sure Which Service You Need?
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Call us or request a free inspection and we&apos;ll assess your roof and recommend the
          right solution.
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
