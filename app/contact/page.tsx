import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  BadgeCheck,
} from 'lucide-react'
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Free Roof Inspection in North Georgia | Investment Roofing',
  description:
    'Contact Investment Roofing for a free roof inspection in North Georgia. Serving Cleveland, Gainesville, Dahlonega and surrounding areas. Call (706) 920-3418 or fill out our form — we respond within the hour.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const contactItems = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '(706) 920-3418',
    href: 'tel:7069203418',
    sub: 'Available 24/7',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'info@investmentroofing.com',
    href: 'mailto:info@investmentroofing.com',
    sub: 'We respond within the hour',
  },
  {
    Icon: MapPin,
    label: 'Service Area',
    value: 'Cleveland, GA & All of North Georgia',
    href: null,
    sub: 'White, Hall, Lumpkin, Habersham & surrounding counties',
  },
  {
    Icon: Clock,
    label: 'Hours',
    value: 'Open 24/7',
    href: null,
    sub: 'Emergency service available nights, weekends & holidays',
  },
]

const socialLinks = [
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaXTwitter,  label: 'X',         href: '#' },
  { Icon: FaFacebookF, label: 'Facebook',   href: '#' },
  { Icon: FaLinkedinIn,label: 'LinkedIn',   href: '#' },
]

const trustItems = [
  {
    Icon: ShieldCheck,
    title: 'GAF Certified™',
    body: 'Top 5% of roofers in North America',
  },
  {
    Icon: Star,
    title: '5-Star Rated',
    body: 'Trusted by hundreds of North Georgia homeowners',
  },
  {
    Icon: Clock,
    title: '24/7 Available',
    body: 'Emergency service nights, weekends & holidays',
  },
  {
    Icon: BadgeCheck,
    title: 'BBB Accredited',
    body: 'Accredited business since 2023',
  },
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
  'Blairsville, GA',
  'Jasper, GA',
  'And Surrounding Areas',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] min-h-[400px] overflow-hidden w-full">
        <Image
          src="/images/roofhero.png"
          alt="Investment Roofing contractors working on a North Georgia residential roof at sunset"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-4 md:pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / Contact Us'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            FREE · NO OBLIGATION · NORTH GEORGIA
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Get Your Free Roof<br />Inspection Today
          </h1>
          <p className="text-base text-white/70 max-w-lg">
            Fill out the form below or call us directly. We respond within the hour and will
            schedule your free, no-obligation inspection at your convenience.
          </p>
        </div>
      </section>
      <div className="h-3 bg-brand-dark border-b-[3px] border-brand-green" />

      {/* ══════════════════════════════════════════
          2. CONTACT SPLIT
      ══════════════════════════════════════════ */}
      <section className="bg-brand-lightgray py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">

          {/* Left — contact info */}
          <div className="bg-brand-dark p-10 h-full">
            <h2 className="font-heading text-2xl font-extrabold text-white mb-2">
              Reach Us Anytime
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              We&apos;re available 24/7 for emergencies and respond to all inquiries within the
              hour during business hours.
            </p>

            <div className="space-y-8">
              {contactItems.map(({ Icon, label, value, href, sub }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-green flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white font-semibold text-sm hover:text-brand-green transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{value}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2a2a2a] my-10" />

            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Follow Us</p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:border-brand-green hover:text-brand-green transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white p-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-dark mb-2">
              Request a Free Inspection
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form and we&apos;ll be in touch within the hour to confirm your
              appointment.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TRUST STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark border-t-[3px] border-brand-green py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {trustItems.map(({ Icon, title, body }) => (
            <div key={title}>
              <Icon size={32} className="text-brand-green mx-auto mb-3" />
              <h3 className="font-heading font-bold text-white text-base mb-1">{title}</h3>
              <p className="text-gray-400 text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. SERVICE AREA
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            SERVICE AREA
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark mb-4">
            Proudly Serving North Georgia
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mb-10">
            Investment Roofing provides residential and commercial roofing services throughout
            North Georgia. If you&apos;re not sure whether we serve your area, just call — we&apos;ll
            let you know.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Google Maps embed */}
            <div className="w-full aspect-[16/9] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26272.581318890127!2d-83.77269483032461!3d34.60232399999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a6e220a1e053931%3A0x963bbfec2fcba7df!2sInvestment%20Roofing!5e0!3m2!1sen!2srs!4v1739456730706!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Investment Roofing location in Cleveland, GA"
              />
            </div>

            {/* Location list */}
            <div>
              <h3 className="font-heading font-bold text-brand-dark text-lg mb-6">
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-3">
                {locations.map(loc => (
                  <span
                    key={loc}
                    className="bg-brand-lightgray border border-gray-200 px-4 py-2 text-sm font-semibold text-brand-dark flex items-center gap-2"
                  >
                    <MapPin size={14} className="text-brand-green flex-shrink-0" />
                    {loc}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-6">
                Don&apos;t see your city? Call us at{' '}
                <a
                  href="tel:7069203418"
                  className="text-brand-green hover:underline font-semibold"
                >
                  (706) 920-3418
                </a>{' '}
                — we serve all of North Georgia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
