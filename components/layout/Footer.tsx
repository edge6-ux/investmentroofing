import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/join-our-team', label: 'Join Our Team' },
]

const serviceLinks = [
  { href: '/services/residential',        label: 'Residential Roofing' },
  { href: '/insurance-restoration',       label: 'Insurance Restoration' },
  { href: '/services/roof-repairs',       label: 'Roof Repairs' },
  { href: '/services/gutter-installation',label: 'Gutter Installation' },
  { href: '/services/commercial',         label: 'Commercial Roofing' },
]

const socialLinks = [
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaXTwitter,  href: '#', label: 'X' },
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaLinkedinIn,href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer>

      {/* ── Dark section — links / contact ── */}
      <div className="bg-brand-dark border-t-[3px] border-brand-green">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-brand-green text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-brand-green text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17069203418"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-green text-sm transition-colors"
                >
                  <Phone size={15} className="text-brand-green mt-0.5 flex-shrink-0" />
                  (706) 920-3418
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@investmentroofing.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-green text-sm transition-colors"
                >
                  <Mail size={15} className="text-brand-green mt-0.5 flex-shrink-0" />
                  info@investmentroofing.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={15} className="text-brand-green mt-0.5 flex-shrink-0" />
                  Cleveland, GA 30528
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <Clock size={15} className="text-brand-green mt-0.5 flex-shrink-0" />
                  Hours: 24/7
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── White section — logo + social + copyright ── */}
      <div className="bg-white border-t-4 border-brand-green">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-6">

          <Link href="/">
            <Image
              src="/images/investment_roofinglogo.png"
              alt="Investment Roofing"
              width={280}
              height={90}
              className="w-auto h-24 object-contain"
              priority
            />
          </Link>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 hover:text-brand-green transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-xs text-center">
            Copyright © 2026 Investment Roofing. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
