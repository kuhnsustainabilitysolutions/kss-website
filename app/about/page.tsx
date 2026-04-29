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
    label: 'Expo 2025 Osaka',
    body: 'Invited to represent U.S. regenerative food systems and blue economy innovation at one of the world\'s largest international exhibitions, speaking alongside heads of state, researchers, and industry leaders.',
  },
  {
    label: '$510K+ secured',
    body: 'Non-dilutive federal grant capital secured for KSS clients across aquaculture, marine technology, and regenerative agriculture, enabling product development and regulatory work that would otherwise stall.',
  },
  {
    label: 'Three continents',
    body: 'Active partnerships and engagements across North America, Central America, and Asia, reflecting a practice built for problems that do not stop at borders.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>About KSS</div>
            <h1 style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', maxWidth: 840, marginBottom: '2rem' }}>
              Business that drives progress, not posture.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-l" style={{ maxWidth: 600 }}>
              Kuhn Sustainability Solutions is a boutique consultancy helping startups, nonprofits,
              and farmers grow through tailored strategy, capital alignment, and technical support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bio section */}
      <section className="bg-white">
        <div className="container-wide">
          <div className="grid-2" style={{ gridTemplateColumns: '0.9fr 1.1fr', gap: '5rem', alignItems: 'center' }}>
            <ImageReveal style={{ borderRadius: 16 }}>
              <Image
                src="/images/bryce-portrait.jpg"
                alt="Bryce D. Kuhn"
                width={600}
                height={630}
                style={{ width: '100%', height: 'auto', borderRadius: 16, display: 'block', objectFit: 'cover', aspectRatio: '1/1.05' }}
              />
            </ImageReveal>
            <Reveal delay={120}>
              <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Bryce D. Kuhn, Founder</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '2rem' }}>
                A decade at the intersection of food, climate, and capital.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="body-m">
                  Bryce D. Kuhn founded KSS on the belief that the companies driving environmental and
                  economic progress deserve the same quality of strategic support as any Fortune 500.
                  He has spent over a decade working at the intersection of agriculture, aquaculture,
                  and climate-focused industry, building expertise across regulatory navigation, capital
                  strategy, and technical product development.
                </p>
                <p className="body-m">
                  His work spans continents and sectors: securing federal grants for marine technology
                  companies in Maine, shaping regenerative agriculture hubs in Belize, and representing
                  U.S. food system innovation on the global stage at Expo 2025 Osaka.
                </p>
                <p className="body-m">
                  Bryce holds deep institutional relationships across university research programs,
                  federal agencies, and industry coalitions, and brings that network to every
                  engagement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-beige">
        <div className="container-wide">
          <div className="grid-2-3" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Our philosophy</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.5rem' }}>
                Sustainability is a competitive advantage, not a compliance exercise.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-l">
                  At KSS, we believe that business should drive economic, social, and environmental
                  progress. We work with industry pioneers to navigate regulatory landscapes,
                  manufacture sustainable products, and develop long-term business strategies that
                  create lasting value.
                </p>
                <p className="body-m">
                  That means we do not sell sustainability as branding. We build the operational
                  systems, coalitions, and capital strategies that make sustainability a durable
                  advantage. The companies we work with are not trying to look good. They are trying
                  to build something that lasts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-white">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Recognition and reach</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              A practice with a track record.
            </h2>
          </Reveal>
          <div className="grid-3">
            {recognition.map((r, i) => (
              <Reveal key={r.label} delay={i * 120}>
                <div style={{ padding: '2rem', borderTop: '2px solid var(--rule-light)' }}>
                  <div className="eyebrow" style={{ marginBottom: '0.875rem' }}>{r.label}</div>
                  <p className="body-m">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-beige">
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
