import Link from 'next/link'

interface LogoProps {
  variant?: 'nav' | 'drawer' | 'footer'
  onClick?: () => void
}

export default function Logo({ variant = 'nav', onClick }: LogoProps) {
  const sizes = {
    nav:    { name: 'text-[17px]', tagline: 'text-[9px]'  },
    drawer: { name: 'text-[15px]', tagline: 'text-[8px]'  },
    footer: { name: 'text-[15px]', tagline: 'text-[9px]'  },
  }
  const s = sizes[variant]

  return (
    <Link
      href="/"
      onClick={onClick}
      className="relative inline-flex flex-shrink-0"
    >
      {/* Neon green bloom behind the text */}
      <span className="absolute inset-0 scale-[1.5] rounded-full bg-brand-green opacity-[0.15] blur-2xl pointer-events-none" />

      <div className="relative leading-none">
        <p className={`font-heading font-bold tracking-wide ${s.name}`}>
          <span className="text-brand-green">INVESTMENT</span>
          <span
            className="ml-1 text-white"
            style={{
              textShadow:
                '0 0 8px rgba(57,226,19,0.9), 0 0 18px rgba(57,226,19,0.5), 0 0 32px rgba(57,226,19,0.25)',
            }}
          >
            ROOFING
          </span>
        </p>
        <p className={`text-white/40 tracking-widest uppercase mt-1 ${s.tagline}`}>
          Let us protect your investment
        </p>
      </div>
    </Link>
  )
}
