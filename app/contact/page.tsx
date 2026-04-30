import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with KSS about regulatory navigation, capital strategy, or technical consulting.',
}

const info = [
  { label: 'Email', value: 'bryce@kuhnsustainabilitysolutions.com', href: 'mailto:bryce@kuhnsustainabilitysolutions.com' },
  { label: 'Based in', value: 'United States, working globally' },
  { label: 'Engagements', value: 'Strategic, technical, or both' },
]

export default function ContactPage() {
  return (
    <>
      {/* Header + form */}
      <section className="bg-beige" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-wide">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'start' }}>

            {/* Info */}
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Contact</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginBottom: '1.5rem' }}>
                Let&apos;s build a sustainable future.
              </h1>
              <p className="body-l" style={{ maxWidth: 520, marginBottom: '2rem' }}>
                Sustainability is a moving target, but meaningful progress starts with the right strategy.
                Whether you are building something new or strengthening an existing initiative, KSS is here to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
                {info.map(item => (
                  <div key={item.label} style={{ paddingBottom: '1.25rem', borderBottom: '1px solid var(--rule)' }}>
                    <div className="eyebrow" style={{ marginBottom: '0.375rem' }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: '1rem', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--rule)' }}>{item.value}</a>
                      : <div style={{ fontSize: '1rem', color: 'var(--ink)' }}>{item.value}</div>
                    }
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={150}>
              <div className="card" style={{ padding: '2.5rem' }}>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
