import Image from 'next/image'
import { ImageOff } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery/4f427673-1515-4ec1-9118-f865a21fa1b5.jpg',
    alt: 'Aerial drone shot of completed residential roof in North Georgia',
    category: 'residential',
    label: 'Residential Roofing',
  },
  {
    src: '/images/gallery/7a7ed954-37c4-4850-af61-23235c115d6b-1.jpg',
    alt: 'Completed brown shingle roof replacement on North Georgia home',
    category: 'residential',
    label: 'Shingle Replacement',
  },
  {
    src: '/images/gallery/9ae4642d-b727-42f4-a6f1-bc8c29961c09-1.jpg',
    alt: 'Standing seam metal roof installation on large North Georgia home',
    category: 'metal',
    label: 'Metal Roofing',
  },
  {
    src: '/images/gallery/541354f6-ad33-4e95-ad36-e0b8886074a6-1.jpg',
    alt: 'Aerial view of large gray shingle roof replacement in North Georgia',
    category: 'residential',
    label: 'Residential Roofing',
  },
  {
    src: '/images/gallery/48399492-1dbe-4e28-a090-5c0bde328d32-1.jpg',
    alt: 'Commercial multi-unit roofing project completed by Investment Roofing',
    category: 'commercial',
    label: 'Commercial Roofing',
  },
  {
    src: '/images/gallery/b390f49a-bfc3-4f64-ae4c-0d11e84c7d43-1.jpg',
    alt: 'Active residential roof replacement in progress in North Georgia',
    category: 'residential',
    label: 'Roof Replacement',
  },
  {
    src: '/images/gallery/bd7ec08d-c020-4eee-982c-408b64c21d65-1.jpg',
    alt: 'Aerial view of large estate home with completed shingle roof',
    category: 'residential',
    label: 'Residential Roofing',
  },
  {
    src: '/images/gallery/cee874e8-ffb2-40f7-9170-b94ed81a9571-1.jpg',
    alt: 'Standing seam metal roof on North Georgia mountain home',
    category: 'metal',
    label: 'Metal Roofing',
  },
  {
    src: '/images/gallery/f75001a4-3cc3-43cb-9509-de9d2cab4a61-1.jpg',
    alt: 'Completed charcoal shingle roof on brick home in North Georgia',
    category: 'residential',
    label: 'Residential Roofing',
  },
  {
    src: '/images/gallery/fb3841b1-964c-4df5-8eeb-a3aaed2fefc6-1.jpg',
    alt: 'New construction metal roof installation in North Georgia',
    category: 'metal',
    label: 'Metal Roofing',
  },
  {
    src: '/images/gallery/IMG_3555.jpg',
    alt: 'Completed residential shingle roof replacement in North Georgia',
    category: 'residential',
    label: 'Residential Roofing',
  },
  {
    src: '/images/gallery/IMG-3168-scaled.jpg',
    alt: 'New construction home with black metal roof in North Georgia',
    category: 'new-construction',
    label: 'New Construction',
  },
]

const filters = [
  'All Projects',
  'Residential',
  'Metal Roofing',
  'New Construction',
  'Commercial',
]

export default function GalleryGrid() {
  return (
    <>
      {/* ── Filter bar ── */}
      <div className="bg-brand-dark border-b-2 border-brand-green py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          {filters.map((label) => (
            <span
              key={label}
              className="px-6 py-2 text-sm font-semibold uppercase tracking-wider border border-[#2a2a2a] text-gray-400 select-none"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Masonry grid ── */}
      <div className="bg-[#F8F8F8] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {galleryImages.length === 0 ? (
            <div className="text-center py-20">
              <ImageOff size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400">No projects in this category yet.</p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
              {galleryImages.map(img => (
                <div
                  key={img.src}
                  className="break-inside-avoid mb-4 relative overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-brand-green text-black font-bold px-4 py-2 text-xs uppercase tracking-wider">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
