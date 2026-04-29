import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with KSS about regulatory navigation, capital strategy, or technical consulting.',
}

const info = [
  { label: 'Email', value: 'bryce@kuhnsustainabilitysolutions.com', href: 'mailto:bryce@kuhnsustainabilitysolutions.com' },
  { label: 'Based in', value: 'United States' },
  { label: 'Practice areas', value: 'Aquaculture, Regenerative Agriculture, Climate Tech, Marine Technology' },
  { label: 'Engagements', value: 'We take on a small number of clients at a time. Outreach is always welcome.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Contact</div>
            <h1 style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', maxWidth: 800, marginBottom: '2rem' }}>
              Build a sustainable future, on real terms.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-l" style={{ maxWidth: 580 }}>
              Sustainability is a moving target, but meaningful progress starts with the right strategy.
              KSS is here to help turn ambition into action.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white">
        <div className="container-wide">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'start' }}>

            {/* Info */}
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Get in touch</div>
              <div className="meta-list" style={{ marginBottom: '2.5rem' }}>
                {info.map(item => (
                  <div key={item.label} className="item">
                    <div className="label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="value" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--rule)' }}>{item.value}</a>
                      : <div className="value">{item.value}</div>
                    }
                  </div>
                ))}
              </div>
              <p className="body-s">
                We typically respond within 48 hours. For urgent matters,
                email is the most reliable way to reach us.
              </p>
            </Reveal>

            {/* Form */}
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
