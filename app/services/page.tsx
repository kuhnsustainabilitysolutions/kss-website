import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Six practice areas spanning regulatory navigation, capital management, business strategy, AI integration, product development, and carbon accounting.',
}

const process = [
  { num: '01', step: 'Listen', body: 'Every engagement starts with deep listening. We immerse ourselves in your regulatory environment, market position, and operational constraints before making a single recommendation.' },
  { num: '02', step: 'Diagnose', body: 'We map the gap between where you are and where you need to go, identifying the highest-leverage points across capital, regulatory, and technical dimensions.' },
  { num: '03', step: 'Build', body: 'Strategy without execution is noise. We build plans, materials, and coalitions that move from document to action, whether that is a grant submission, a compliance roadmap, or an investor deck.' },
  { num: '04', step: 'Hand off', body: 'We work to make ourselves unnecessary. Every engagement ends with internal capability, clear documentation, and a team that can carry the work forward independently.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>What we do</div>
            <h1 style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', maxWidth: 800, marginBottom: '2rem' }}>
              Strategic and technical work, delivered without silos.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-l" style={{ maxWidth: 640 }}>
              KSS operates across six practice areas, two for strategic work and three for technical work, but in practice they rarely operate in isolation. The most effective engagements draw from both.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white">
        <div className="container-wide">
          {(['Strategic', 'Technical'] as const).map((cat, ci) => {
            const catServices = services.filter(s => s.category === cat)
            return (
              <div key={cat} style={{ marginBottom: ci === 0 ? '4rem' : 0 }}>
                <Reveal style={{ marginBottom: '2rem' }}>
                  <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>{cat}</div>
                  <p className="body-m">
                    {cat === 'Strategic'
                      ? 'Translating ambition into roadmaps. Funding, regulatory, and go-to-market work.'
                      : 'Validating, building, and quantifying. Bringing sustainable products from concept to impact.'}
                  </p>
                </Reveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
                  {catServices.map((s, i) => (
                    <Reveal key={s.num} delay={i * 100}>
                      <div className="service-card">
                        <div className="num">{s.num}</div>
                        <h4>{s.title}</h4>
                        <p className="body-s">{s.description}</p>
                        <hr className="rule-light" />
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
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-beige">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>How we work</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', maxWidth: 680 }}>
              A process built for complex, high-stakes problems.
            </h2>
          </Reveal>
          <div style={{ maxWidth: 800 }}>
            {process.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className="process-step">
                  <div className="num">{p.num}</div>
                  <div>
                    <h4>{p.step}</h4>
                    <p className="body-m">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Get started</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Not sure which service fits?
            </h2>
            <p className="body-l" style={{ marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
              Most engagements begin with a single conversation. We will listen first and
              recommend only what is actually warranted.
            </p>
            <Link href="/contact" className="cta">Start a conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
