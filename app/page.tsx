'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useParallax } from '@/hooks/useParallax'
import Reveal from '@/components/Reveal'
import ImageReveal from '@/components/ImageReveal'
import CountUp from '@/components/CountUp'
import CaseRail from '@/components/CaseRail'
import { cases } from '@/content/cases'
import { services } from '@/content/services'

const partners = [
  { name: 'Cornell University',         logo: '/images/partners/cornell.png' },
  { name: 'U.S. EPA',                   logo: '/images/partners/epa.png' },
  { name: 'Exotica Fruit Farms',        logo: '/images/partners/exotica.png' },
  { name: 'Alaska Mariculture Cluster', logo: '/images/partners/mariculture.png' },
  { name: 'New England Ocean Cluster',  logo: '/images/partners/neoc.png' },
  { name: 'Pacific Kelp Co.',           logo: '/images/partners/pkc.png' },
  { name: 'Southeast Conference',       logo: '/images/partners/sec.png' },
  { name: 'Washington State University',logo: '/images/partners/wsu.gif' },
]

const stats = [
  { value: 510, prefix: '$', suffix: 'K+', label: 'Non-dilutive funding secured' },
  { value: 10,  prefix: '',  suffix: '+',  label: 'Years across aquaculture, agriculture, and climate' },
  { value: 3,   prefix: '',  suffix: '',   label: 'Continents of active partnerships' },
]

function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  useParallax(ref, 0.25)
  return (
    <div ref={ref} className="hero-bg">
      <Image src="/images/hero-boat.jpg" alt="" fill className="hero-img" priority sizes="100vw" />
      <div className="hero-overlay" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ padding: 0 }}>
        <HeroParallax />
        <div className="hero-content">
          <Reveal>
            <Image src="/images/kss-logo-outline.png" alt="KSS" width={96} height={96} className="hero-logo" />
          </Reveal>
          <Reveal delay={120} as="h1">
            Strategy for the<br />next economy.
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-sub">
              A boutique consultancy helping startups, nonprofits, and farmers grow through tailored
              strategy, capital alignment, and technical support.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-ctas">
              <Link href="/contact" className="cta">Start a conversation</Link>
              <Link href="/services" className="cta-ghost-white">See how we work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-white" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="container-wide">
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div className="stat-num">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-beige">
        <div className="container-wide">
          <div className="grid-2-3" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>About</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.5rem' }}>
                Business that drives progress, not posture.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="body-l">
                At KSS, we believe that business should drive economic, social, and environmental
                progress. We work with industry pioneers to navigate regulatory landscapes,
                manufacture sustainable products, and develop long-term business strategies that
                create lasting value, drive meaningful change, and build a more resilient future.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/about" className="cta-ghost">More about KSS</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>What we do</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'end' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', maxWidth: 720 }}>
                Strategic and technical support, working in concert.
              </h2>
              <Link href="/services" className="cta-ghost">All services</Link>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {(['Strategic', 'Technical'] as const).map((cat, ci) => {
              const catServices = services.filter(s => s.category === cat)
              return (
                <Reveal key={cat} delay={ci * 150}>
                  <Link href="/services" className="card" style={{ padding: '2.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="eyebrow" style={{ marginBottom: '1rem' }}>{cat}</div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 300, letterSpacing: '-0.015em', marginBottom: '1rem' }}>
                      {cat === 'Strategic'
                        ? 'Translating ambition into roadmaps. Funding, regulatory, and go-to-market work for mission-driven brands.'
                        : 'Validating, building, and quantifying. Bringing sustainable products from concept to defensible impact.'}
                    </h3>
                    <hr className="rule" style={{ margin: '1.5rem 0' }} />
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {catServices.map(s => (
                        <li key={s.num} style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid var(--rule-light)' }}>
                          <span>{s.title}</span>
                          <span style={{ color: 'var(--muted)', fontFamily: 'ui-monospace, monospace', fontSize: 11 }}>→</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-beige">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Selected work</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'end' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', maxWidth: 720 }}>Recent engagements.</h2>
              <Link href="/cases" className="cta-ghost">View all</Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <CaseRail cases={cases} />
          </Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white">
        <div className="container-wide">
          <div className="grid-2" style={{ gridTemplateColumns: '0.9fr 1.1fr', gap: '5rem', alignItems: 'center' }}>
            <ImageReveal style={{ borderRadius: 16 }}>
              <Image src="/images/who-we-are.jpg" alt="Bryce D. Kuhn" width={600} height={630}
                style={{ width: '100%', height: 'auto', borderRadius: 16, display: 'block', objectFit: 'cover', aspectRatio: '1/1.05' }} />
            </ImageReveal>
            <Reveal delay={120}>
              <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Who we are</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '2rem' }}>
                Founded by a strategist with a decade across food and climate.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {[
                  { label: 'Our Foundation', body: 'KSS was founded by Bryce D. Kuhn, a sustainability strategist with deep expertise in agriculture, aquaculture, and climate-focused industries.' },
                  { label: 'Our Philosophy', body: 'Sustainability is not just a responsibility, it is a competitive advantage. Strategic consulting is about empowering companies to lead, innovate, and thrive.' },
                  { label: 'Our Impact', body: 'We help clients discover new revenue, broaden market reach, and drive economic and social development, from securing funding to pioneering sustainable products.' },
                ].map(({ label, body }) => (
                  <div key={label}>
                    <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>{label}</div>
                    <p className="body-m" style={{ maxWidth: 560 }}>{body}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/about" className="cta-ghost">About Bryce</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-beige" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-wide">
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Partners and collaborators</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', maxWidth: 720, margin: '0 auto' }}>
              Working alongside research, agency, and industry partners.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="partner-logos">
              {partners.map(p => (
                <div key={p.name} className="partner-logo" title={p.name}>
                  <Image src={p.logo} alt={p.name} width={130} height={64} style={{ objectFit: 'contain' }} unoptimized={p.logo.endsWith('.gif')} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Let&apos;s talk</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Build a sustainable future, on real terms.
            </h2>
            <p className="body-l" style={{ marginBottom: '2.5rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
              Sustainability is a moving target, but meaningful progress starts with the right strategy.
              KSS is here to help turn ambition into action.
            </p>
            <Link href="/contact" className="cta">Start a conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
