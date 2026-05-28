import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GalleryGrid from '@/components/sections/GalleryGrid'

export const metadata: Metadata = {
  title: 'Project Gallery | Investment Roofing — North Georgia',
  description:
    "Browse Investment Roofing's project gallery. Real roofing work completed across North Georgia — residential, metal, new construction, and commercial roofing projects by our GAF Certified™ team.",
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative aspect-[16/6] overflow-hidden w-full">
        <Image
          src="/gallery/9ae4642d-b727-42f4-a6f1-bc8c29961c09-1.jpg"
          alt="Completed metal roofing installation on a North Georgia home by Investment Roofing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D2E00] opacity-50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-6 sm:pl-16 pb-16">
          <p className="text-white/50 text-xs mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            {' / Gallery'}
          </p>
          <p className="text-brand-green font-bold text-xs tracking-widest uppercase mb-3">
            REAL PROJECTS · REAL RESULTS
          </p>
          <h1 className="font-heading text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Our Work Across<br />North Georgia
          </h1>
          <p className="text-base text-white/70 max-w-lg">
            From residential shingle replacements to custom metal roofing and new construction —
            every project completed to the highest standard.
          </p>
        </div>
      </section>
      <div className="h-3 bg-brand-dark border-b-[3px] border-brand-green" />

      {/* ══════════════════════════════════════════
          2 & 3. FILTER BAR + GALLERY GRID
      ══════════════════════════════════════════ */}
      <GalleryGrid />

      {/* ══════════════════════════════════════════
          4. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-brand-green py-16 px-6 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-black">
          Like What You See?
        </h2>
        <p className="text-black/70 text-base mt-3 mb-8">
          Get your free roof inspection and find out what Investment Roofing can do for your home.
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
