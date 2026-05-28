'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Menu, X as CloseIcon, ChevronDown } from 'lucide-react'
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import Logo from '@/components/ui/Logo'

const serviceLinks = [
  { href: '/services/residential',       label: 'Residential Roofing' },
  { href: '/insurance-restoration',      label: 'Insurance Restoration' },
  { href: '/services/roof-repairs',      label: 'Roof Repairs' },
  { href: '/services/gutter-installation', label: 'Gutter Installation' },
  { href: '/services/commercial',        label: 'Commercial Roofing' },
]

const mainNavLinks = [
  { href: '/',               label: 'Home' },
  { href: '/who-we-are',    label: 'Who We Are' },
  { href: '/gallery',       label: 'Gallery' },
  { href: '/blog',          label: 'Blog' },
  { href: '/contact',       label: 'Contact Us' },
  { href: '/join-our-team', label: 'Join Our Team' },
]

const socialLinks = [
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaXTwitter,  href: '#', label: 'X' },
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaLinkedinIn,href: '#', label: 'LinkedIn' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen]   = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">

      {/* ── ROW 1 — Logo / Nav (centered) / CTA ── */}
      <div className="relative flex bg-brand-dark min-h-[72px]">

        {/* Left — text logo */}
        <div className="flex items-center px-6">
          <Logo variant="nav" />
        </div>

        {/*
          Nav links — absolutely positioned so they're centered in the
          full row width, independent of the logo and CTA widths.
          pointer-events-none on the container lets clicks through to
          the logo / CTA; pointer-events-auto restores them on the links.
        */}
        <nav
          className="hidden lg:flex absolute inset-0 items-center justify-center
                     pointer-events-none"
        >
          <div className="flex items-center gap-6 xl:gap-8 pointer-events-auto">
            {/* Home */}
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-brand-green transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-brand-green transition-colors whitespace-nowrap"
              >
                Services
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-b-lg min-w-[230px] z-50 overflow-hidden">
                  {serviceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-6 py-3 text-sm text-brand-dark hover:text-brand-green hover:bg-gray-50 transition-colors first:pt-4 last:pb-4"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining links */}
            {mainNavLinks.slice(1).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-white hover:text-brand-green transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Spacer — pushes hamburger + CTA to the right */}
        <div className="flex-1" />

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center px-6 text-white"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>

        {/* CTA — flush top/bottom, no border radius */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center px-8 bg-brand-green hover:brightness-110 transition-all flex-shrink-0 self-stretch"
        >
          <span className="font-bold text-black uppercase tracking-widest text-sm whitespace-nowrap">
            FREE INSPECTION
          </span>
        </Link>
      </div>

      {/* ── ROW 2 — Contact bar ── */}
      <div className="hidden md:block bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div />

            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-green flex-shrink-0">
                  <Phone size={11} className="text-black" strokeWidth={2.5} />
                </span>
                <span className="text-[13px] text-white/60 font-medium">Call Us:</span>
                <a
                  href="tel:+17069203418"
                  className="text-[13px] text-white hover:text-brand-green transition-colors font-medium"
                >
                  (706) 920-3418
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-green flex-shrink-0">
                  <Mail size={11} className="text-black" strokeWidth={2.5} />
                </span>
                <span className="text-[13px] text-white/60 font-medium">Email Us:</span>
                <a
                  href="mailto:info@investmentroofing.com"
                  className="text-[13px] text-white hover:text-brand-green transition-colors font-medium"
                >
                  info@investmentroofing.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/60 hover:text-brand-green transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-brand-dark z-50 lg:hidden
          flex flex-col shadow-2xl transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Logo variant="drawer" onClick={() => setDrawerOpen(false)} />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="text-white/70 hover:text-white transition-colors p-1 ml-4 flex-shrink-0"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {/* Phone strip */}
        <div className="flex items-center gap-2.5 px-5 py-3 bg-brand-gray border-b border-white/10">
          <Phone size={14} className="text-brand-green flex-shrink-0" />
          <a
            href="tel:+17069203418"
            className="text-sm text-white hover:text-brand-green transition-colors"
          >
            (706) 920-3418
          </a>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center px-5 py-4 text-sm font-medium text-white hover:text-brand-green border-b border-white/5 transition-colors"
          >
            Home
          </Link>

          <div className="border-b border-white/5">
            <Link
              href="/services"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center px-5 py-4 text-sm font-medium text-white hover:text-brand-green transition-colors"
            >
              Services
            </Link>
            <div className="pb-3 bg-white/[0.03]">
              {serviceLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-3 px-8 py-2 text-sm text-white/55 hover:text-brand-green transition-colors"
                >
                  <span className="w-3 h-px bg-white/20 flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {mainNavLinks.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setDrawerOpen(false)}
              className="flex items-center px-5 py-4 text-sm font-medium text-white hover:text-brand-green border-b border-white/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA at drawer bottom */}
        <div className="p-5 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center w-full bg-brand-green py-4 rounded font-bold text-black uppercase tracking-widest text-sm hover:brightness-110 transition-all"
          >
            FREE INSPECTION
          </Link>
        </div>
      </div>

    </header>
  )
}
