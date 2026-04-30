import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Six practice areas spanning regulatory navigation, capital management, business strategy, AI integration, product development, and carbon accounting.',
}

const process = [
  { num: '01', step: 'Listen', body: 'We start with a candid conversation. Where you are, what you have tried, what is stuck. No pitch deck, no template.' },
  { num: '02', step: 'Diagnose', body: 'A short scoping engagement maps the regulatory, capital, and technical terrain. You leave with a written read, even if we do not continue.' },
  { num: '03', step: 'Build', body: 'We work as an extension of your team, not adjacent to it. Grant writing, regulatory roadmaps, partnership coordination, MVP planning.' },
  { num: '04', step: 'Hand off', body: 'Every engagement ends with materials your team owns and operates: documents, decks, dashboards, and the relationships behind them.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Services</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: 920, marginBottom: '1.5rem' }}>
              Strategic and technical work, delivered without silos.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-l" style={{ maxWidth: 640 }}>
              Most consultancies pick a lane. KSS works across regulatory, capital, and technical strategy
              simultaneously, because the problems facing climate and agriculture innovators rarely fit one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strategic services */}
      <section className="bg-white">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow">Strategic</div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {services.filter(s => s.category === 'Strategic').map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div className="service-card">
                  <div className="num">{s.num}</div>
                  <h4>{s.title}</h4>
                  <p className="body-s">{s.description}</p>
                  <hr className="rule" />
                  <ul>
                    {s.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical services */}
      <section className="bg-beige">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow">Technical</div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {services.filter(s => s.category === 'Technical').map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div className="service-card">
                  <div className="num">{s.num}</div>
                  <h4>{s.title}</h4>
                  <p className="body-s">{s.description}</p>
                  <hr className="rule" />
                  <ul>
                    {s.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="container-grid">
          <Reveal style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>How we work</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', maxWidth: 720 }}>
              An engagement is a sequence, not a checklist.
            </h2>
          </Reveal>
          {process.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <div className="process-step">
                <div className="num">{p.num}</div>
                <div>
                  <h4>{p.step}</h4>
                  <p className="body-m" style={{ maxWidth: 640 }}>{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-beige">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              Have a brief in mind?
            </h2>
            <p className="body-l" style={{ marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
              Tell us where you are and where you want to be. We will respond with a candid read on fit
              and what an engagement could look like.
            </p>
            <Link href="/contact" className="cta">Start a conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
