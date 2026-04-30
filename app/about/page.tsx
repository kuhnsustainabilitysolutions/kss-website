import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ImageReveal from '@/components/ImageReveal'

export const metadata: Metadata = {
  title: 'About',
  description: 'Bryce D. Kuhn is a sustainability strategist with deep expertise in agriculture, aquaculture, and climate-focused industries.',
}

const recognition = [
  {
    eyebrow: 'Speaking',
    label: 'Expo 2025 Osaka',
    body: 'One of the largest international exhibitions in the world, where Bryce represented KSS on climate and food systems alongside heads of state, researchers, and industry leaders.',
  },
  {
    eyebrow: 'Funding',
    label: '$510K+ secured',
    body: 'Non-dilutive capital secured for clients across aquaculture, agriculture, and marine technology, enabling product development and regulatory work that would otherwise stall.',
  },
  {
    eyebrow: 'Reach',
    label: 'Three continents',
    body: 'Active engagements across the United States, Central America, and international partners, reflecting a practice built for problems that do not stop at borders.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>About KSS</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: 920, marginBottom: '1.5rem' }}>
              Sustainability is a competitive advantage. We work like it.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Bio section */}
      <section className="bg-white">
        <div className="container-wide">
          <div className="grid-2" style={{ gridTemplateColumns: '0.8fr 1.2fr', gap: '5rem', alignItems: 'start' }}>
            <Reveal>
              <ImageReveal style={{ borderRadius: 16 }}>
                <Image
                  src="/images/bryce-portrait.jpg"
                  alt="Bryce D. Kuhn"
                  width={560}
                  height={700}
                  style={{ width: '100%', height: 'auto', borderRadius: 16, display: 'block', objectFit: 'cover', aspectRatio: '4/5' }}
                />
              </ImageReveal>
              <div style={{ marginTop: '1.5rem' }}>
                <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>Founder &amp; CEO</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 400 }}>Bryce D. Kuhn</div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Our Foundation</div>
                  <p className="body-l">
                    Kuhn Sustainability Solutions was founded by Bryce D. Kuhn, a sustainability strategist
                    with deep expertise in agriculture, aquaculture, and climate-focused industries. With a
                    background in business strategy, regulatory consulting, and research and development,
                    Bryce has worked across sectors to help companies navigate complex challenges, seize new
                    market opportunities, and build sustainable growth models that last.
                  </p>
                </div>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Our Philosophy</div>
                  <p className="body-l">
                    At KSS, we believe that sustainability is not just a responsibility, it is a competitive
                    advantage. Strategic consulting is not just about solving problems; it is about empowering
                    companies to lead, innovate, and thrive in a rapidly evolving market.
                  </p>
                </div>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Our Impact</div>
                  <p className="body-l">
                    Operating at the nexus of policy, innovation, and industry advancement, we enable our
                    clients to discover new revenue opportunities, broaden their market reach, and drive
                    significant economic and social development. From securing funding and navigating complex
                    regulations to pioneering sustainable product development, KSS offers the expertise and
                    foresight to transform ambition into tangible impact.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-beige">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Recognition</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: 720 }}>
              Selected speaking and credibility.
            </h2>
          </Reveal>
          <div className="grid-3">
            {recognition.map((r, i) => (
              <Reveal key={r.label} delay={i * 100}>
                <div className="card" style={{ padding: '2rem', height: '100%' }}>
                  <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>{r.eyebrow}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.75rem', letterSpacing: '-0.015em' }}>
                    {r.label}
                  </h3>
                  <p className="body-m">{r.body}</p>
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
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Let&apos;s talk</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Work with a team that takes the long view.
            </h2>
            <p className="body-l" style={{ marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
              KSS takes on a small number of engagements at a time so every client gets our full attention.
            </p>
            <Link href="/contact" className="cta">Start a conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
