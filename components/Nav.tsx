'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services',  label: 'Services' },
  { href: '/cases',     label: 'Case Studies' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="nav" aria-label="Main navigation">
      <Link href="/" className="brand">
        <Image src="/images/kss-logo-filled.png" alt="KSS" width={32} height={32} className="brand-mark" />
        <span className="brand-name">Kuhn Sustainability Solutions</span>
      </Link>
      <div className="links">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            className={pathname === href || pathname.startsWith(href + '/') ? 'active' : ''}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" className="cta-small">Start a conversation</Link>
      </div>
    </nav>
  )
}
