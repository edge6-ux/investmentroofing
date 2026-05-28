import type { Metadata } from 'next'
import Image from 'next/image'
import {
  HardHat,
  DollarSign,
  TrendingUp,
  Users,
  CheckCircle,
  HeartHandshake,
  Handshake,
  FileText,
} from 'lucide-react'
import ApplyForm from '@/components/sections/ApplyForm'

export const metadata: Metadata = {
  title: 'Join Our Team | Roofing Jobs in North Georgia | Investment Roofing',
  description:
    'Investment Roofing is hiring roofing installers, crew leads, and sales estimators in North Georgia. Competitive pay, paid training, and a team that treats you like family. Apply today.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    Icon: DollarSign,
    title: 'Competitive Pay',
    body: 'We pay above-market rates and reward hard work with performance bonuses and regular raises.',
  },
  {
    Icon: TrendingUp,
    title: 'Room to Grow',
    body: 'Start as an installer and grow into a crew lead or estimator role. We promote from within.',
  },
  {
    Icon: HardHat,
    title: 'Paid Training',
    body: "No roofing experience? No problem. We'll train you from day one and cover the cost of certifications.",
  },
  {
    Icon: Users,
    title: 'Team Culture',
    body: "We're a tight-knit, family-owned crew that looks out for each other — on the roof and off.",
  },
  {
    Icon: HeartHandshake,
    title: 'Respect & Integrity',
    body: 'Every team member is treated with respect. We operate with honesty, transparency, and fairness.',
  },
  {
    Icon: Handshake,
    title: 'Year-Round Work',
    body: "North Georgia's roofing demand is strong year-round. Expect steady, reliable work — not seasonal layoffs.",
  },
]

const positions = [
  {
    Icon: HardHat,
    title: 'Roofing Installer',
    type: 'Full-Time',
    location: 'Cleveland, GA',
    description:
      "Join our installation crew and work on residential and commercial roofing projects across North Georgia. You'll work alongside experienced roofers and gain hands-on skills that build a long-term career.",
    requirements: [
      'Ability to work outdoors in varying weather conditions',
      'Comfortable working at heights',
      'Reliable transportation to job sites',
      'Strong work ethic and positive attitude',
      'Experience preferred but not required — we will train',
    ],
  },
  {
    Icon: FileText,
    title: 'Sales & Estimator',
    type: 'Full-Time',
    location: 'North Georgia',
    description:
      'Meet homeowners, assess storm damage, and help guide customers through the roofing and insurance process. This role is perfect for someone who is personable, organized, and motivated by results.',
    requirements: [
      'Strong communication and people skills',
      'Comfortable speaking with homeowners and insurance adjusters',
      'Reliable vehicle and valid driver\'s license',
      'Self-motivated — this is a commission-heavy role',
      'Roofing or construction sales experience a plus',
    ],
  },
  {
    Icon: Users,
    title: 'Crew Lead',
    type: 'Full-Time',
    location: 'Cleveland, GA',
    description:
      'Lead a team of installers on residential and commercial roofing projects. Crew leads are responsible for quality control, job-site safety, and keeping projects on schedule. This role is for experienced roofers ready to step up.',
    requirements: [
      '3+ years of hands-on roofing experience',
      'Ability to manage and motivate a small crew',
      'Strong knowledge of roofing materials and installation techniques',
      'Excellent attention to detail and quality standards',
      'Valid driver\'s license required',
    ],
  },
]

const culturePoints = [
  'GAF Certified™ — we invest in quality at every level',
  'Safety-first job sites with proper equipment provided',
  'Transparent communication from ownership',
  'Performance-based advancement opportunities',
  'A company that takes pride in its reputation',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function JoinOurTeamPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] min-h-[400px] overflow-hidden w-full">
        <Image
          src="/images/joinourteam.jpg"
          alt="Investment Roofing crew working on a North Georgia roof"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WE&apos;RE HIRING · NORTH GEORGIA
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Build a Career With<br />Investment Roofing
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-8">
            Join a GAF Certified™ team that values hard work, integrity, and career growth.
            We&apos;re always looking for dedicated people to help us serve North Georgia.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#apply-form"
              className="bg-brand-green text-black font-bold px-8 py-4 rounded-none uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Apply Now
            </a>
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
          2. WHY WORK WITH US
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            WHY INVESTMENT ROOFING
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            More Than a Job — It&apos;s a Career
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mb-12">
            We treat our team the same way we treat our customers — with honesty, respect, and a
            commitment to doing things right. When you join Investment Roofing, you&apos;re joining
            a company that invests in your success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="border border-gray-200 hover:border-brand-green hover:shadow-lg transition-all p-8"
              >
                <div className="w-10 h-10 bg-brand-green flex items-center justify-center mb-4">
                  <Icon size={20} className="text-black" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. OPEN POSITIONS
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            OPEN POSITIONS
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            Current Openings
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mb-12">
            We&apos;re actively hiring for the roles below. Don&apos;t see a perfect fit? Apply anyway
            — we&apos;re always interested in meeting talented, motivated people.
          </p>

          <div className="space-y-6">
            {positions.map(({ Icon, title, type, location, description, requirements }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 hover:border-brand-green transition-all p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-dark">{title}</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {type}
                        </span>
                        <span className="text-xs text-gray-300">|</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#apply-form"
                    className="bg-brand-green text-black font-bold px-6 py-3 rounded-none uppercase tracking-wider text-xs hover:brightness-110 transition-all whitespace-nowrap self-start"
                  >
                    Apply for This Role
                  </a>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

                <ul className="space-y-2">
                  {requirements.map(req => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CULTURE STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
              OUR CULTURE
            </p>
            <h2 className="font-heading text-4xl font-extrabold text-white mb-6">
              A Team You&apos;ll Be<br />Proud to Work For
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Investment Roofing was built on the values of hard work, honesty, and taking care
              of the people around you — customers and crew alike. When you join our team,
              you&apos;re joining a company that has earned a reputation across North Georgia for
              doing things the right way.
            </p>
            <ul className="space-y-3">
              {culturePoints.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/joinourteam.jpg"
              alt="Investment Roofing crew on a job site in North Georgia"
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
                  <p className="text-xs text-black/70 uppercase tracking-wide">Roofs Installed</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-black">GAF</p>
                  <p className="text-xs text-black/70 uppercase tracking-wide">Certified™</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. APPLICATION FORM
      ══════════════════════════════════════════ */}
      <section id="apply-form" className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3 text-center">
            APPLY TODAY
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-3 text-center">
            Ready to Join the Team?
          </h2>
          <p className="text-gray-500 text-base text-center mb-10">
            Fill out the form below and we&apos;ll be in touch within 2 business days. We review
            every application personally.
          </p>

          <div className="bg-white p-10">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  )
}
