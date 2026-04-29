import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="row">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Image src="/images/kss-logo-outline.png" alt="KSS" width={36} height={36}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <span style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>
              Kuhn Sustainability Solutions
            </span>
          </div>
          <p style={{ fontSize: '0.9375rem', maxWidth: 360, lineHeight: 1.6 }}>
            A boutique consultancy at the nexus of policy, innovation, and industry.
            Serving startups, nonprofits, and farmers.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {['Regulatory Navigation','Capital Management','Business Strategy','AI Integration','Product Development','Carbon Accounting'].map(s => (
              <li key={s}><Link href="/services">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/cases">Case Studies</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:bryce@kuhnsustainabilitysolutions.com">bryce@kuhnsustainabilitysolutions.com</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <span>© {new Date().getFullYear()} Kuhn Sustainability Solutions, LLC</span>
        <span>Founded by Bryce D. Kuhn</span>
      </div>
    </footer>
  )
}
