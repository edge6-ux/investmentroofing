import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle,
  ShieldCheck,
  Award,
  Users,
  Clock,
  PhoneCall,
  Banknote,
  Shield,
  Handshake,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Investment Roofing — Cleveland, GA',
  description:
    'Investment Roofing is a family-owned GAF Certified™ roofing contractor based in Cleveland, GA. Learn about our story, our team, and our commitment to North Georgia homeowners. Call (706) 920-3418.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const certRequirements = [
  'Maintain proper licensing',
  'Carry adequate insurance',
  'Demonstrate installation expertise',
  'Maintain a good reputation',
  'Uphold ethical business practices',
  'Offer GAF enhanced warranties',
  'Complete ongoing training',
  'Pass annual review process',
]

const values = [
  {
    Icon: Handshake,
    title: 'Honest Assessments',
    body: 'We tell you exactly what your roof needs — nothing more, nothing less. No unnecessary upsells, no scare tactics.',
  },
  {
    Icon: Shield,
    title: 'Quality Guaranteed',
    body: "Every roof we install is backed by GAF's industry-leading warranty and our own workmanship guarantee.",
  },
  {
    Icon: Users,
    title: 'Community First',
    body: 'We live and work in North Georgia. Your neighbors are our neighbors — and we treat every job accordingly.',
  },
  {
    Icon: Clock,
    title: 'On Time, Every Time',
    body: 'We respect your time. Our crews show up when they say they will and complete jobs on schedule.',
  },
  {
    Icon: PhoneCall,
    title: 'Always Reachable',
    body: "Available 24/7 for emergencies. You'll always reach a real person when you call Investment Roofing.",
  },
  {
    Icon: Banknote,
    title: 'Fair & Transparent Pricing',
    body: "No hidden fees, no surprise charges. You'll know the full cost before we ever pick up a tool.",
  },
]

const testimonials = [
  {
    quote:
      'Thank you Kyle Kastner for hooking us up with William / Investment Roofing! What an awesome job you guys did on installing the new roof and cleaning up. We are genuinely satisfied with the work you did. We will definitely recommend your company to our friends and family.',
    name: '— Cas Futo',
  },
  {
    quote: "Good communication, superb work, and a responsible crew. I can't recommend them enough.",
    name: '— Matthew S',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhoWeArePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] min-h-[400px] overflow-hidden w-full">
        <Image
          src="/images/joinourteam.jpg"
          alt="The Investment Roofing team in North Georgia"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-4 md:pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / Who We Are'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            FAMILY-OWNED · CLEVELAND, GA
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            North Georgia&apos;s Trusted<br />Family Roofing Contractor
          </h1>
          <p className="text-base text-white/70 max-w-lg">
            Family-owned and operated out of Cleveland, GA — we built Investment Roofing on the
            belief that every homeowner deserves honest work, fair pricing, and a roof that lasts.
          </p>
        </div>
      </section>
      <div className="h-3 bg-brand-dark border-b-[3px] border-brand-green" />

      {/* ══════════════════════════════════════════
          2. OUR STORY
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image with stat bar */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/joinourteam.jpg"
                alt="Investment Roofing crew at work in North Georgia"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="bg-brand-green py-4 px-6">
              <div className="flex justify-around text-center">
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">10+</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Years Experience</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">500+</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Roofs Replaced</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">5★</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Google Rated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              OUR STORY
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-6">
              Built on Community,<br />Craftsmanship &amp; Trust
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Investment Roofing was founded on a simple idea — that North Georgia homeowners
                deserve a roofing contractor they can actually trust. As a locally owned and
                operated business based in Cleveland, GA, we have deep roots in this community
                and a personal stake in every roof we install.
              </p>
              <p>
                We started with a commitment to quality and grew through word of mouth — neighbor
                recommending us to neighbor across White, Hall, Lumpkin, and Habersham counties.
                That trust is something we earn on every single job.
              </p>
              <p>
                Today, Investment Roofing is one of North Georgia&apos;s most recognized roofing
                contractors — GAF Certified™, BBB Accredited, and proud to protect the investments
                of hundreds of families across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. GAF CERTIFIED
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Copy */}
          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              GAF CERTIFIED™
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              What It Means to Be<br />GAF Certified™
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              GAF Certified™ status is awarded to only the top 5% of roofing contractors across
              North America. It&apos;s not just a badge — it&apos;s a rigorous set of standards that
              Investment Roofing meets in every area of our business.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {certRequirements.map(req => (
                <div key={req} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certification card */}
          <div className="bg-[#1A1A1A] p-10 border border-[#2a2a2a] text-center">
            <ShieldCheck size={64} className="text-brand-green mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-extrabold text-white mb-2">
              GAF Certified™ Contractor
            </h3>
            <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-6">
              Top 5% in North America
            </p>

            <div className="border-t border-[#2a2a2a] my-6" />

            <p className="text-gray-400 text-sm leading-relaxed">
              Eligible for GAF Weather Stopper® System Plus Ltd. Warranty — one of the strongest
              warranties in the roofing industry.
            </p>

            <div className="mt-8 pt-6 border-t border-[#2a2a2a]">
              <Award size={40} className="text-brand-green mx-auto mb-3" />
              <p className="text-white font-semibold text-sm">BBB Accredited Business</p>
              <p className="text-gray-500 text-xs mt-1">Accredited since 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. OUR VALUES
      ══════════════════════════════════════════ */}
      <section className="bg-[#F8F8F8] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHAT WE STAND FOR
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-brand-dark max-w-2xl mx-auto mb-16">
            Our Commitment to North Georgia Homeowners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white p-8 border border-gray-200 text-center hover:border-brand-green transition-all"
              >
                <Icon size={36} className="text-brand-green mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHAT CLIENTS SAY
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-white mb-12">
            Trusted by Hundreds of<br />North Georgia Homeowners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ quote, name }) => (
              <div
                key={name}
                className="bg-[#1A1A1A] p-8 border-t-4 border-brand-green"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-brand-green" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
                <p className="font-heading font-bold text-white mt-6">{name}</p>
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
          Ready to Protect Your Investment?
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Get your free roof inspection from North Georgia&apos;s most trusted GAF Certified™ roofing
          contractor.
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
